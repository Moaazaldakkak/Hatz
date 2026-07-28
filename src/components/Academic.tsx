import { useState } from 'react';
import { publications } from '../data';

interface AcademicProps {
  onOpenPub: (pub: any) => void;
}

export default function Academic({ onOpenPub }: AcademicProps) {
  const categories = Array.from(new Set(publications.map((p) => p.type)));
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="pagescroll pt-page pt-page-2">
      <div className="relative">
        <div className="background-lines-container">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`backline${i === 0 || i === 6 ? ' edge' : ''}`} />
          ))}
        </div>

        <div className="page-title-container">
          <span className="chevron">&rsaquo;</span>
          <h1>عن هاتز</h1>
        </div>

        <section style={{ padding: '40px 30px' }}>
          <div className="section-inner">
            <div className="why-title" style={{ marginBottom: '32px' }}>
              <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
                <span className="titletext">أبحاث</span>
              </span>
              <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
                <span className="titletext">ومنشورات</span>
              </span>
            </div>

            {categories.map((cat, i) => (
              <div key={cat}>
                <input type="checkbox" id={`pub-${i}`} className="publications-toggle"
                  checked={open === i} onChange={() => setOpen(open === i ? -1 : i)} />
                <label htmlFor={`pub-${i}`} className="publications-title">{cat}</label>
                <div className="publications-content">
                  {publications.filter((p) => p.type === cat).map((pub) => (
                    <div key={pub.id} className="pub-card" style={{ cursor: 'pointer' }} onClick={() => onOpenPub(pub)}>
                      <div className="meta">{pub.type}</div>
                      <h4>{pub.title}</h4>
                      <p className="excerpt">{pub.excerpt}</p>
                      <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
                        {pub.tags.map((t) => (
                          <span key={t} className="pub-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
