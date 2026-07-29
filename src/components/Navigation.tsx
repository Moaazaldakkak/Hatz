export default function Navigation({ activePage, onChange, onContact }: {
  activePage: string;
  onChange: (id: string) => void;
  onContact: () => void;
}) {
  const pages = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'whatwedo', label: 'ماذا نفعل' },
    { id: 'story', label: 'قصتنا' },
    { id: 'blog', label: 'الأخبار' },
    { id: 'jobs', label: 'الوظائف' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-toggle social-bar-toggle" onClick={() => {}}>
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
                className="nav-link"
                onClick={() => {
                  if (p.id === 'whatwedo' || p.id === 'story') {
                    onChange('home');
                    setTimeout(() => {
                      const el = document.querySelector('.timeline-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  } else {
                    onChange(p.id);
                  }
                }}
              >
                <span className="nav-label"
                  style={activePage === p.id ? { color: 'white' } : {}}
                >{p.label}</span>
              </div>
            ))}
          </nav>
          <div className="nav-link" onClick={onContact}>
            <span className="nav-label">تواصل معنا</span>
          </div>
        </div>
        <div className="dividerstyle" />
      </div>
    </aside>
  );
}
