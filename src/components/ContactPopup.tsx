export default function ContactPopup({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="contact-popup-header">مستعد لربط علامتك التجارية بالأسواق الناشئة؟ دعنا نناقش كيف يمكن لهاتز مساعدتك في التوسع إلى أسواق جديدة واعدة من خلال شراكات محلية استراتيجية.</div>
      <div style={{ marginBottom: '24px', padding: '16px', background: 'var(--pulse-b3)', borderRadius: 0 }}>
        <div style={{ fontSize: '15px', fontWeight: 300, color: 'var(--pulse-primary)', marginBottom: '8px' }}>
          <strong>البريد الإلكتروني:</strong> info@hatz.com
        </div>
        <div style={{ fontSize: '15px', fontWeight: 300, color: 'var(--pulse-primary)' }}>
          <strong>الهاتف:</strong> +963 11 234 5678
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input type="text" placeholder="اسمك الكريم" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="example@domain.com" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="استفسار عن شراكة" />
        </div>
        <div className="form-group">
          <textarea placeholder="أخبرنا عن مشروعك..." />
        </div>
        <button type="submit" className="btn-primary">
          إرسال
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
      </form>
    </>
  );
}
