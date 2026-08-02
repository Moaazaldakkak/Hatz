import { useLanguage } from '../i18n';

export default function ContactPopup({ onClose }: { onClose: () => void }) {
  const { dict } = useLanguage();
  return (
    <>
      <div className="contact-popup-header">{dict.contact.header}</div>
      <div style={{ marginBottom: '24px', padding: '16px', background: 'var(--pulse-b3)', borderRadius: 0 }}>
        <div style={{ fontSize: '15px', fontWeight: 300, color: 'var(--pulse-primary)', marginBottom: '8px' }}>
          <strong>{dict.contact.email}</strong> info@hatz.com
        </div>
        <div style={{ fontSize: '15px', fontWeight: 300, color: 'var(--pulse-primary)' }}>
          <strong>{dict.contact.phone}</strong> +963 11 234 5678
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input type="text" placeholder={dict.contact.name} />
        </div>
        <div className="form-group">
          <input type="email" placeholder={dict.contact.emailPlaceholder} />
        </div>
        <div className="form-group">
          <input type="text" placeholder={dict.contact.subject} />
        </div>
        <div className="form-group">
          <textarea placeholder={dict.contact.message} />
        </div>
        <button type="submit" className="btn-primary">
          {dict.contact.submit}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
      </form>
    </>
  );
}
