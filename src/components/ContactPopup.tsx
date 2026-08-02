import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';

export default function ContactPopup({ onClose }: { onClose: () => void }) {
  const { dict } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contact, setContact] = useState({ email: 'info@hatz.com', phone: '+963 11 234 5678' });

  useEffect(() => {
    let alive = true;
    fetch('data/settings.json', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (alive && data) {
          setContact({
            email: data.displayEmail || 'info@hatz.com',
            phone: data.displayPhone || '+963 11 234 5678',
          });
        }
      })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    fd.append('type', 'contact');
    try {
      const res = await fetch('api/contact.php', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      const data = await res.json().catch(() => null);
      setStatus(res.ok && data?.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="contact-popup-header">{dict.contact.header}</div>
      <div style={{ marginBottom: '24px', padding: '16px', background: 'var(--pulse-b3)', borderRadius: 0 }}>
        <div style={{ fontSize: '15px', fontWeight: 300, color: 'var(--pulse-primary)', marginBottom: '8px' }}>
          <strong>{dict.contact.email}</strong> {contact.email}
        </div>
        <div style={{ fontSize: '15px', fontWeight: 300, color: 'var(--pulse-primary)' }}>
          <strong>{dict.contact.phone}</strong> {contact.phone}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder={dict.contact.name} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder={dict.contact.emailPlaceholder} required />
        </div>
        <div className="form-group">
          <input type="text" name="subject" placeholder={dict.contact.subject} />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder={dict.contact.message} required />
        </div>
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? '...' : dict.contact.submit}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        {status === 'success' && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#16a34a' }}>{dict.contact.success}</p>
        )}
        {status === 'error' && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#dc2626' }}>{dict.contact.error}</p>
        )}
      </form>
    </>
  );
}
