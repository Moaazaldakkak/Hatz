export default function ContactPopup({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="contact-popup-header">مستعد لربط علامتك التجارية بالأسواق الناشئة؟ دعنا نناقش كيف يمكن لهاتز مساعدتك في التوسع إلى أسواق جديدة واعدة من خلال شراكات محلية استراتيجية.</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>الاسم</label>
          <input type="text" placeholder="اسمك الكريم" />
        </div>
        <div className="form-group">
          <label>البريد الإلكتروني</label>
          <input type="email" placeholder="example@domain.com" />
        </div>
        <div className="form-group">
          <label>الموضوع</label>
          <input type="text" placeholder="استفسار عن شراكة" />
        </div>
        <div className="form-group">
          <label>الرسالة</label>
          <textarea placeholder="أخبرنا عن مشروعك..." />
        </div>
        <button type="submit" className="btn-primary">
          إرسال
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </>
  );
}
