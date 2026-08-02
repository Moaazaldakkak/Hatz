/* HATZ admin dashboard */
const API = 'api.php';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let editingPost = null;

async function api(action, body) {
  const res = await fetch(`${API}?action=${action}`, {
    method: body !== undefined ? 'POST' : 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

function show(el, text, ok) {
  el.textContent = text;
  el.classList.remove('hidden', 'ok', 'err');
  if (ok === true) el.classList.add('ok');
  if (ok === false) el.classList.add('err');
}

/* ---------- Auth ---------- */
async function checkSession() {
  try {
    await api('session');
    enterApp();
  } catch {
    showLogin();
  }
}

function showLogin() {
  $('#login-view').classList.remove('hidden');
  $('#app-view').classList.add('hidden');
}

function enterApp() {
  $('#login-view').classList.add('hidden');
  $('#app-view').classList.remove('hidden');
  loadPosts();
  loadSettings();
  loadMessages();
}

$('#login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = $('#login-form button');
  btn.disabled = true;
  $('#login-error').classList.add('hidden');
  try {
    await api('login', { password: $('#login-password').value });
    $('#login-password').value = '';
    enterApp();
  } catch (err) {
    show($('#login-error'), err.message, false);
  } finally {
    btn.disabled = false;
  }
});

$('#logout-btn').addEventListener('click', async () => {
  try { await api('logout'); } catch {}
  showLogin();
});

/* ---------- Tabs ---------- */
const tabTitles = { posts: 'Posts', settings: 'Settings', messages: 'Messages' };
$$('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    $$('.tab').forEach((t) => t.classList.remove('active'));
    $$('.tab-panel').forEach((p) => p.classList.add('hidden'));
    tab.classList.add('active');
    $(`#tab-${tab.dataset.tab}`).classList.remove('hidden');
    $('#tab-title').textContent = tabTitles[tab.dataset.tab];
    if (tab.dataset.tab === 'posts') loadPosts();
    if (tab.dataset.tab === 'messages') loadMessages();
  });
});

/* ---------- Posts ---------- */
async function loadPosts() {
  const list = $('#posts-list');
  list.innerHTML = '<p class="empty">Loading…</p>';
  try {
    const { posts } = await api('posts');
    list.innerHTML = '';
    if (!posts.length) {
      list.innerHTML = '<p class="empty">No posts yet — create your first one.</p>';
      return;
    }
    posts.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'card post-card';
      card.innerHTML = `
        <img class="post-thumb" src="${escapeAttr(p.imageUrl || '')}" alt="" onerror="this.style.visibility='hidden'" />
        <div class="post-info">
          <h3>${escapeHtml(p.ar.title)}</h3>
          <p class="meta">${escapeHtml(p.ar.date || '')} · ${escapeHtml(p.ar.category || '')} — ${escapeHtml(p.en.title)}</p>
        </div>
        <div class="post-actions">
          <button class="btn btn-ghost" data-edit="${p.id}">Edit</button>
          <button class="btn btn-danger" data-del="${p.id}">Delete</button>
        </div>`;
      list.appendChild(card);
    });
    list.querySelectorAll('[data-edit]').forEach((b) => b.addEventListener('click', () => openEditor(posts.find((x) => x.id == b.dataset.edit))));
    list.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', async () => {
      if (!confirm('Delete this post?')) return;
      try {
        await api('delete_post', { id: Number(b.dataset.del) });
        loadPosts();
      } catch (err) { alert(err.message); }
    }));
  } catch (err) {
    list.innerHTML = `<p class="empty">${escapeHtml(err.message)}</p>`;
  }
}

/* ---------- Post editor ---------- */
function openEditor(post) {
  editingPost = post || null;
  $('#editor-title').textContent = post ? 'Edit post' : 'New post';
  const f = $('#post-form');
  f.reset();
  f.elements['ar-date'].value = post?.ar?.date || '';
  f.elements['ar-category'].value = post?.ar?.category || '';
  f.elements['ar-title'].value = post?.ar?.title || '';
  f.elements['ar-excerpt'].value = post?.ar?.excerpt || '';
  f.elements['en-date'].value = post?.en?.date || '';
  f.elements['en-category'].value = post?.en?.category || '';
  f.elements['en-title'].value = post?.en?.title || '';
  f.elements['en-excerpt'].value = post?.en?.excerpt || '';
  f.elements['imageUrl'].value = post?.imageUrl || '';
  $('#editor-delete').classList.toggle('hidden', !post);
  $('#editor-status').classList.add('hidden');
  $('#editor-overlay').classList.remove('hidden');
  f.elements['ar-title'].focus();
}

function closeEditor() {
  $('#editor-overlay').classList.add('hidden');
  editingPost = null;
}

$('#new-post-btn').addEventListener('click', () => openEditor(null));
$('#editor-close').addEventListener('click', closeEditor);
$('#editor-cancel').addEventListener('click', closeEditor);
$('#editor-overlay').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeEditor(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeEditor(); });

$('#post-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.currentTarget;
  const btn = f.querySelector('button[type="submit"]');
  btn.disabled = true;
  try {
    await api('save_post', {
      post: {
        id: editingPost?.id,
        imageUrl: f.elements['imageUrl'].value.trim(),
        ar: {
          date: f.elements['ar-date'].value.trim(),
          category: f.elements['ar-category'].value.trim(),
          title: f.elements['ar-title'].value.trim(),
          excerpt: f.elements['ar-excerpt'].value.trim(),
        },
        en: {
          date: f.elements['en-date'].value.trim(),
          category: f.elements['en-category'].value.trim(),
          title: f.elements['en-title'].value.trim(),
          excerpt: f.elements['en-excerpt'].value.trim(),
        },
      },
    });
    show($('#editor-status'), 'Saved ✓', true);
    setTimeout(closeEditor, 500);
    loadPosts();
  } catch (err) {
    show($('#editor-status'), err.message, false);
  } finally {
    btn.disabled = false;
  }
});

$('#editor-delete').addEventListener('click', async () => {
  if (!editingPost || !confirm('Delete this post?')) return;
  try {
    await api('delete_post', { id: editingPost.id });
    closeEditor();
    loadPosts();
  } catch (err) { show($('#editor-status'), err.message, false); }
});

/* ---------- Settings ---------- */
async function loadSettings() {
  try {
    const { settings } = await api('settings');
    $('#set-contactEmail').value = settings.contactEmail || '';
    $('#set-jobsEmail').value = settings.jobsEmail || '';
    $('#set-displayEmail').value = settings.displayEmail || '';
    $('#set-displayPhone').value = settings.displayPhone || '';
  } catch {}
}

$('#save-settings-btn').addEventListener('click', async () => {
  const btn = $('#save-settings-btn');
  btn.disabled = true;
  try {
    await api('save_settings', {
      contactEmail: $('#set-contactEmail').value.trim(),
      jobsEmail: $('#set-jobsEmail').value.trim(),
      displayEmail: $('#set-displayEmail').value.trim(),
      displayPhone: $('#set-displayPhone').value.trim(),
    });
    show($('#settings-status'), 'Settings saved ✓', true);
  } catch (err) {
    show($('#settings-status'), err.message, false);
  } finally {
    btn.disabled = false;
  }
});

$('#change-pw-btn').addEventListener('click', async () => {
  const btn = $('#change-pw-btn');
  btn.disabled = true;
  try {
    await api('change_password', {
      current: $('#pw-current').value,
      new: $('#pw-new').value,
    });
    $('#pw-current').value = '';
    $('#pw-new').value = '';
    show($('#pw-status'), 'Password changed ✓', true);
  } catch (err) {
    show($('#pw-status'), err.message, false);
  } finally {
    btn.disabled = false;
  }
});

/* ---------- Messages ---------- */
async function loadMessages() {
  const list = $('#messages-list');
  list.innerHTML = '<p class="empty">Loading…</p>';
  try {
    const { messages } = await api('messages');
    list.innerHTML = '';
    if (!messages.length) {
      list.innerHTML = '<p class="empty">No messages yet.</p>';
      $('#msg-count').classList.add('hidden');
      return;
    }
    $('#msg-count').textContent = messages.length;
    $('#msg-count').classList.remove('hidden');
    messages.forEach((m) => {
      const card = document.createElement('div');
      card.className = 'card message-card';
      card.innerHTML = `
        <div class="msg-head">
          <div>
            <strong>${escapeHtml(m.name)}</strong>
            <span class="msg-type">${m.type === 'jobs' ? 'careers' : 'contact'}</span>
          </div>
          <button class="btn btn-ghost" data-delmsg="${escapeAttr(m.id)}">Delete</button>
        </div>
        <p class="msg-meta">${escapeHtml(m.email)} · ${escapeHtml(m.subject || '')} · ${escapeHtml(new Date(m.time).toLocaleString())}</p>
        <p class="msg-body">${escapeHtml(m.message)}${m.extra ? '\n\n' + escapeHtml(m.extra) : ''}</p>`;
      list.appendChild(card);
    });
    list.querySelectorAll('[data-delmsg]').forEach((b) => b.addEventListener('click', async () => {
      if (!confirm('Delete this message?')) return;
      try {
        await api('delete_message', { id: b.dataset.delmsg });
        loadMessages();
      } catch (err) { alert(err.message); }
    }));
  } catch (err) {
    list.innerHTML = `<p class="empty">${escapeHtml(err.message)}</p>`;
  }
}

/* ---------- Helpers ---------- */
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str);
}

checkSession();
