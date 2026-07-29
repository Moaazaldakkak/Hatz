import { useState } from 'react';
import PageLoader from './components/PageLoader';
import Navigation from './components/Navigation';
import SocialBar from './components/SocialBar';
import Home from './components/Home';
import Academic from './components/Academic';
import Blog from './components/Blog';
import Popup from './components/Popup';
import ContactPopup from './components/ContactPopup';
import { Publication } from './data';

export default function App() {
  const [active, setActive] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [popupType, setPopupType] = useState<'contact' | 'publication' | null>(null);
  const [popupItem, setPopupItem] = useState<Publication | null>(null);

  const openContact = () => setPopupType('contact');
  const openPub = (pub: Publication) => {
    setPopupItem(pub);
    setPopupType('publication');
  };
  const closePopup = () => {
    setPopupType(null);
    setPopupItem(null);
  };

  const handleNavChange = (id: string) => {
    setActive(id);
    setSidebarOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closePopup();
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1} style={{ outline: 'none' }}>
      <PageLoader />

      <div id="page" className="pt-wrapper">
        <div className="main-layout">
          <Navigation activePage={active} onChange={handleNavChange} onContact={openContact} />
          <div className="main-content">
            <SocialBar open={sidebarOpen} onContact={openContact} />

            {/* Background lines for the main view */}
            <div className="background-lines-container" style={{ position: 'fixed', top: 0, right: '64px', width: 'calc(100% - 64px)' }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className={`backline${i === 0 || i === 6 ? ' edge' : ''}`} />
              ))}
            </div>

            {active === 'home' && <Home onContact={openContact} />}
            {active === 'about' && <Academic onOpenPub={openPub} />}
            {active === 'blog' && <Blog />}
          </div>
        </div>
      </div>

      {/* Popups */}
      <Popup
        open={popupType === 'contact'}
        onClose={closePopup}
        title="اتصل بنا"
        imageUrl="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2023/09/markus-winkler-q3QPw37J6Xs-unsplash-1-scaled.jpg"
      >
        <ContactPopup onClose={closePopup} />
      </Popup>

      <Popup
        open={popupType === 'publication'}
        onClose={closePopup}
        title={popupItem?.title}
        imageUrl={popupItem?.imageUrl}
      >
        {popupItem && (
          <>
            <div style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--pulse-primary)', fontWeight: 600, marginBottom: 8 }}>
              {popupItem.type}
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 16, color: 'var(--pulse-secondary)' }}>
              {popupItem.title}
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: '#555', marginBottom: 24 }}>
              {popupItem.excerpt}
            </p>
            <div>
              {popupItem.tags.map((t) => (
                <span key={t} className="pub-tag" style={{ marginRight: 8 }}>{t}</span>
              ))}
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}
