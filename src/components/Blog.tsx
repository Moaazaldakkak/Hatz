import { blogPosts } from '../data';

export default function Blog() {
  return (
    <div className="pagescroll pt-page pt-page-3">
      <div className="relative">
        <div className="background-lines-container">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`backline${i === 0 || i === 6 ? ' edge' : ''}`} />
          ))}
        </div>

        <div className="page-title-container">
          <span className="chevron">&rsaquo;</span>
          <h1>رؤى</h1>
        </div>

        <section style={{ padding: '40px 30px' }}>
          <div className="section-inner">
            <div className="why-title" style={{ marginBottom: '32px' }}>
              <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
                <span className="titletext">أحدث</span>
              </span>
              <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
                <span className="titletext">الرؤى</span>
              </span>
            </div>

            <div className="blog-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                  <div className="meta">{post.date} — {post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.05)', height: '45px', padding: '0 12px' }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>اقرأ المزيد</span>
                    <div style={{ width: 45, height: 45, background: 'var(--pulse-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
