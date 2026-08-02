import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';

export default function Navigation({ onContact }: {
  onContact: () => void;
}) {
  const { lang, setLang, dict } = useLanguage();
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pages = [
    { id: 'section-home', label: dict.nav.home },
    { id: 'section-about', label: dict.nav.about },
    { id: 'section-whatwedo', label: dict.nav.whatWeDo },
    { id: 'section-story', label: dict.nav.ourStory },
    { id: 'section-blog', label: dict.nav.news },
    { id: 'section-jobs', label: dict.nav.careers },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-toggle">
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
      <div className="nav-container">
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
          <div className="nav-link" onClick={onContact}>
            <span className="nav-label">{dict.nav.contact}</span>
          </div>
        </div>
        <div className="dividerstyle" />
        <div className="nav-link lang-toggle" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} title={lang === 'ar' ? 'English' : 'العربية'}>
          <span className="nav-label lang-label">{lang === 'ar' ? 'EN' : 'عربي'}</span>
        </div>
      </div>
    </aside>
  );
}
