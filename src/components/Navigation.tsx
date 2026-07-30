import { useState, useEffect } from 'react';

export default function Navigation({ onContact }: {
  onContact: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('section-home');

  useEffect(() => {
    const sections = document.querySelectorAll('[id^="section-"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContact = () => {
    setMobileOpen(false);
    onContact();
  };

  const pages = [
    { id: 'section-home', label: 'الرئيسية' },
    { id: 'section-about', label: 'من نحن' },
    { id: 'section-whatwedo', label: 'ماذا نفعل' },
    { id: 'section-story', label: 'قصتنا' },
    { id: 'section-blog', label: 'الأخبار' },
    { id: 'section-jobs', label: 'الوظائف' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-toggle social-bar-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
        <svg width="50" height="50" viewBox="0 0 500 499.1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#fff">
            <rect x="0" y="0" width="16.55" height="215.24"/>
            <rect x="161.15" y="0" width="16.55" height="215.24"/>
            <polygon points="500,215.24 483.45,215.24 483.45,16.55 338.83,16.55 338.83,215.24 322.29,215.24 322.29,0 500,0 500,215.24"/>
            <rect x="8.27" y="103.48" width="481.07" height="16.55"/>
            <rect x="403.18" y="215.24" width="16.55" height="100.2"/>
            <rect x="93.45" y="291.95" width="16.55" height="206.98"/>
            <polygon points="500,499.1 288.21,499.1 463.39,300.22 0.93,300.22 0.93,283.68 500,283.68 324.83,482.55 500,482.55 500,499.1"/>
          </g>
        </svg>
      </div>

      {/* Desktop nav */}
      <div className="nav-container nav-desktop">
        <div>
          <nav>
            {pages.map((p) => (
                <div
                  key={p.id}
                  className={`nav-link${activeSection === p.id ? ' active' : ''}`}
                  onClick={() => scrollToSection(p.id)}
                >
                  <span className="nav-label">{p.label}</span>
              </div>
            ))}
          </nav>
          <div className="nav-link" onClick={handleContact}>
            <span className="nav-label">تواصل معنا</span>
          </div>
        </div>
        <div className="dividerstyle" />
      </div>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-nav-drawer${mobileOpen ? ' active' : ''}`}>
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">القائمة</span>
          <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav-items">
          {pages.map((p) => (
            <div key={p.id} className={`mobile-nav-link${activeSection === p.id ? ' active' : ''}`} onClick={() => scrollToSection(p.id)}>
              <span>{p.label}</span>
            </div>
          ))}
          <div className="mobile-nav-link mobile-nav-contact" onClick={handleContact}>
            <span>تواصل معنا</span>
          </div>
        </nav>
      </div>
    </aside>
  );
}
