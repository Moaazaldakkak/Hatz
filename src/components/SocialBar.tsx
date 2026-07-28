interface SocialBarProps {
  open: boolean;
  onContact: () => void;
}

export default function SocialBar({ open, onContact }: SocialBarProps) {
  return (
    <div className={`social-bar${open ? ' show' : ''}`}>
      <div className="social-bar-label">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H7.5L9 6L13 18L15 9L16.5 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>آخر أخبار هاتز</span>
      </div>
      <div className="marquee-container">
        <div className="marquee-text">
           <p>هاتز تعيد تعريف التجزئة في الأسواق الناشئة — من خلال شراكات استراتيجية تربط الابتكار العالمي بالفرص المحلية. اكتشف كيف نبني جسور الاتصال عبر الحدود والتوسع الإقليمي.</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://linkedin.com" className="social-icon-link" title="Linkedin">
          <img src="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/12/in.png" alt="Linkedin" />
        </a>
        <a href="https://hatz.com" className="social-icon-link" title="Website">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12H22" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C14.5 4.9 16 8.3 16 12C16 15.7 14.5 19.1 12 22" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C9.5 4.9 8 8.3 8 12C8 15.7 9.5 19.1 12 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="mailto:info@hatz.com" className="social-icon-link" title="Email">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6L12 13L2 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#" className="social-icon-link" title="Contact" onClick={(e) => { e.preventDefault(); onContact(); }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
