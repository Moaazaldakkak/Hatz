import { useState } from 'react';
import PageLoader from './components/PageLoader';
import Navigation from './components/Navigation';
import SocialBar from './components/SocialBar';
import Home from './components/Home';
import Popup from './components/Popup';
import ContactPopup from './components/ContactPopup';
import { BlogPost } from './data';
import { useLanguage } from './i18n';

export default function App() {
  const { dict } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [popupType, setPopupType] = useState<'contact' | null>(null);
  const [blogPopup, setBlogPopup] = useState<BlogPost | null>(null);

  const openContact = () => setPopupType('contact');
  const closePopup = () => {
    setPopupType(null);
    setBlogPopup(null);
  };

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
            <div className="background-lines-container hidden" style={{ position: 'fixed', top: 0, right: '64px', width: 'calc(100% - 64px)' }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className={`backline${i === 0 || i === 6 ? ' edge' : ''}`} />
              ))}
            </div>

            <Home onContact={openContact} onOpenBlog={setBlogPopup} />
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <Popup
        open={popupType === 'contact'}
        onClose={closePopup}
        title={dict.contact.title}
        imageUrl="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2023/09/markus-winkler-q3QPw37J6Xs-unsplash-1-scaled.jpg"
      >
        <ContactPopup onClose={closePopup} />
      </Popup>

      {/* Blog Post Popup */}
      <Popup
        open={!!blogPopup}
        onClose={closePopup}
        title={blogPopup?.title}
        imageUrl={blogPopup?.imageUrl}
      >
        {blogPopup && (
          <>
            <div style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--pulse-primary)', fontWeight: 600, marginBottom: 8 }}>
              {blogPopup.date} — {blogPopup.category}
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 16, color: 'var(--pulse-secondary)' }}>
              {blogPopup.title}
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: '#555', marginBottom: 24 }}>
              {blogPopup.excerpt}
            </p>
          </>
        )}
      </Popup>

    </div>
  );
}
