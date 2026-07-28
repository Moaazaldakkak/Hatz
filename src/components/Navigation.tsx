export default function Navigation({ activePage, onChange, onContact }: {
  activePage: string;
  onChange: (id: string) => void;
  onContact: () => void;
}) {
  const pages = [
    { id: 'home', label: 'HOME' },
    { id: 'academic', label: 'ACADEMIC' },
    { id: 'blog', label: 'BLOG & NEWS' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-toggle social-bar-toggle" onClick={() => {}}>
        <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#fff">
            <rect x="60.65" y="60.99" width="12.53" height="163.03"/>
            <rect x="182.7" y="60.99" width="12.53" height="163.03"/>
            <polygon points="439.35 224.02 426.82 224.02 426.82 73.52 317.28 73.52 317.28 224.02 304.76 224.02 304.76 60.99 439.35 60.99 439.35 224.02"/>
            <rect x="66.91" y="139.37" width="364.37" height="12.53"/>
            <rect x="366.02" y="224.02" width="12.53" height="75.89"/>
            <rect x="131.43" y="282.12" width="12.53" height="156.77"/>
            <polygon points="439.35 439.01 278.94 439.01 411.62 288.38 61.35 288.38 61.35 275.85 439.35 275.85 306.68 426.48 439.35 426.48 439.35 439.01"/>
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
                onClick={() => onChange(p.id)}
              >
                <span className="nav-label"
                  style={activePage === p.id ? { color: 'white' } : {}}
                >{p.label}</span>
              </div>
            ))}
          </nav>
          <div className="nav-link" onClick={onContact}>
            <span className="nav-label">CONTACT</span>
          </div>
        </div>
        <div className="dividerstyle" />
      </div>
    </aside>
  );
}
