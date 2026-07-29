import { useState } from 'react';
import PageLoader from './components/PageLoader';
import Navigation from './components/Navigation';
import SocialBar from './components/SocialBar';
import Home from './components/Home';
import Popup from './components/Popup';
import ContactPopup from './components/ContactPopup';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [popupType, setPopupType] = useState<'contact' | null>(null);

  const openContact = () => setPopupType('contact');
  const closePopup = () => setPopupType(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closePopup();
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1} style={{ outline: 'none' }}>
      <PageLoader />

      <div id="page" className="pt-wrapper">
        <div className="main-layout">
          <Navigation onContact={openContact} />
          <div className="main-content">
            <SocialBar open={sidebarOpen} onContact={openContact} />

            {/* Background lines for the main view */}
            <div className="background-lines-container" style={{ position: 'fixed', top: 0, right: '64px', width: 'calc(100% - 64px)' }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className={`backline${i === 0 || i === 6 ? ' edge' : ''}`} />
              ))}
            </div>

            <Home onContact={openContact} />
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

    </div>
  );
}
