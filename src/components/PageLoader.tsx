import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';

export default function PageLoader() {
  const { dict } = useLanguage();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="pulse-spinner" className={visible ? '' : 'hidden'}>
      <div style={{ textAlign: 'center' }}>
        <div className="loading-pulse">
          <svg width="30" height="30" viewBox="0 0 500 499.1" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="16.55" height="215.24"/>
            <rect x="161.15" y="0" width="16.55" height="215.24"/>
            <polygon points="500,215.24 483.45,215.24 483.45,16.55 338.83,16.55 338.83,215.24 322.29,215.24 322.29,0 500,0 500,215.24"/>
            <rect x="8.27" y="103.48" width="481.07" height="16.55"/>
            <rect x="403.18" y="215.24" width="16.55" height="100.2"/>
            <rect x="93.45" y="291.95" width="16.55" height="206.98"/>
            <polygon points="500,499.1 288.21,499.1 463.39,300.22 0.93,300.22 0.93,283.68 500,283.68 324.83,482.55 500,482.55 500,499.1"/>
          </svg>
        </div>
        <img src="/logo-hatz.svg" alt="HATZ" style={{ width: '600px', height: 'auto', display: 'block', margin: '0 auto 2rem' }} />
        <h1 style={{ marginTop: '2rem' }}>
          <span id="sub-title">{dict.loader.subtitle}</span>
        </h1>
      </div>
    </div>
  );
}
