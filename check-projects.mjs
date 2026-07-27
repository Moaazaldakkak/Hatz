import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });

async function getProjectInfo(page, label) {
  const info = await page.evaluate(() => {
    // Find the project section
    const el = document.querySelector('.project-section, .elementor-element-5f80a28, [class*="project"]');
    if (!el) return { error: 'no project section found' };

    const section = el.closest('section') || el;
    const style = getComputedStyle(section);
    
    // Get all project-related elements
    const cards = document.querySelectorAll('.project-card, [class*="project-card"], [class*="project-slider"]');
    const thumbs = document.querySelectorAll('.project-thumb, [class*="project-thumb"], [class*="thumbnail"]');
    const navs = document.querySelectorAll('.project-btn, .project-nav-row button, [class*="slide-m"], .slide-m-prev, .slide-m-next');
    
    // Get title elements
    const titles = document.querySelectorAll('.titletext');
    const titleTexts = Array.from(titles).map(t => t.textContent);
    
    return {
      sectionTag: section.tagName,
      sectionClasses: section.className,
      sectionComputed: {
        width: style.width,
        maxWidth: style.maxWidth,
        padding: style.padding,
        margin: style.margin,
        background: style.background,
      },
      cards: Array.from(cards).map(c => ({
        tag: c.tagName,
        classes: c.className,
        rect: c.getBoundingClientRect(),
        style: {
          width: getComputedStyle(c).width,
          height: getComputedStyle(c).height,
          backgroundImage: getComputedStyle(c).backgroundImage?.substring(0, 100),
        },
        text: c.textContent?.substring(0, 100),
      })),
      thumbs: Array.from(thumbs).map(t => ({
        classes: t.className,
        rect: t.getBoundingClientRect(),
        border: getComputedStyle(t).border,
      })),
      navs: Array.from(navs).map(n => ({
        classes: n.className,
        rect: n.getBoundingClientRect(),
        style: {
          width: getComputedStyle(n).width,
          height: getComputedStyle(n).height,
          background: getComputedStyle(n).background,
        },
      })),
      titleTexts,
    };
  });
  
  console.log(`\n=== ${label} ===`);
  console.log(JSON.stringify(info, null, 2));
}

try {
  // Reference
  const ref = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await ref.goto('https://seashell-seal-546316.hostingersite.com/', { timeout: 30000, waitUntil: 'networkidle' });
  await ref.waitForTimeout(2000);
  await ref.evaluate(() => {
    const s = document.getElementById('pulse-spinner');
    if (s) s.remove();
  });
  await ref.waitForTimeout(1000);

  // Scroll to make sure projects section is rendered
  await ref.evaluate(() => {
    const p = document.querySelector('.elementor-element-5f80a28');
    if (p) p.scrollIntoView();
  });
  await ref.waitForTimeout(500);
  
  await getProjectInfo(ref, 'REFERENCE');

  // Local
  const local = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await local.goto('http://localhost:5173', { timeout: 10000, waitUntil: 'networkidle' });
  } catch {
    await local.goto('file:///C:/xampp/htdocs/NewHatz/pulse-clone/dist/index.html', { timeout: 10000, waitUntil: 'networkidle' });
  }
  await local.waitForTimeout(2000);
  await local.evaluate(() => {
    const s = document.getElementById('pulse-spinner');
    if (s) s.remove();
  });
  await local.waitForTimeout(1000);
  
  // Scroll to projects
  await local.evaluate(() => {
    // Try to find a project section or just scroll down
    const sections = document.querySelectorAll('section');
    for (const s of sections) {
      if (s.textContent?.includes('LATEST') && s.textContent?.includes('PROJECTS')) {
        s.scrollIntoView();
        break;
      }
    }
  });
  await local.waitForTimeout(500);
  
  await getProjectInfo(local, 'LOCAL');

} catch (err) {
  console.error('Error:', err.message, err.stack);
} finally {
  await browser.close();
  console.log('\nDone');
}
