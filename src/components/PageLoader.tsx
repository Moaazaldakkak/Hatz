import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const name = 'Christopher doe';

  return (
    <div id="pulse-spinner" className={visible ? '' : 'hidden'}>
      <div style={{ textAlign: 'center' }}>
        <div className="loading-pulse" style={{ margin: '0 auto 1.5rem' }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.5 7.5C27.5 5.74984 27.5 4.87475 27.1594 4.20628C26.8598 3.61828 26.3818 3.14021 25.7938 2.8406C25.1253 2.5 24.2501 2.5 22.5 2.5C20.7499 2.5 19.8747 2.5 19.2062 2.8406C18.6182 3.14021 18.1403 3.61828 17.8406 4.20628C17.5 4.87475 17.5 5.74984 17.5 7.5V22.5C17.5 24.2501 17.5 25.1253 17.8406 25.7938C18.1403 26.3818 18.6182 26.8598 19.2062 27.1594C19.8747 27.5 20.7499 27.5 22.5 27.5C24.2501 27.5 25.1253 27.5 25.7938 27.1594C26.3818 26.8598 26.8598 26.3818 27.1594 25.7938C27.5 25.1253 27.5 24.2501 27.5 22.5V7.5Z" stroke="white" strokeWidth="1.5"/>
            <path d="M7.5 15H17.5M7.5 15C7.5 14.1247 9.99288 12.4894 10.625 11.875M7.5 15C7.5 15.8753 9.99288 17.5106 10.625 18.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 27.5C7.07639 27.5 5.61459 27.5 4.54736 26.8294C3.99084 26.4797 3.52026 26.0091 3.17059 25.4526C2.5 24.3854 2.5 22.9236 2.5 20V10C2.5 7.07639 2.5 5.61459 3.17059 4.54736C3.52026 3.99084 3.99084 3.52026 4.54736 3.17059C5.61459 2.5 7.07639 2.5 10 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h1>
          <span id="title-spinner">
            {name.split('').map((ch, i) => (
              <span key={i} className="title-letter" style={{ animationDelay: `${i * 0.08}s` }}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </span>
          <br />
          <span id="sub-title">PHD STUDENT / DEVELOPER</span>
        </h1>
      </div>
    </div>
  );
}
