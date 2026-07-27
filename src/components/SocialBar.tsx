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
        <span>RECENT ACTIVITY</span>
      </div>
      <div className="marquee-container">
        <div className="marquee-text">
          <p>Exciting News! We are thrilled to announce the launch of our latest product, Designed with you in mind, Pulse offers innovative features to enhance your experience. Check it out now and be among the first to enjoy cutting-edge technology and design!</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon-link" title="Linkedin">
          <img src="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/12/in.png" alt="Linkedin" />
        </a>
        <a href="#" className="social-icon-link" title="ResearchGate">
          <img src="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/12/rg-2.png" alt="ResearchGate" />
        </a>
        <a href="#" className="social-icon-link" title="Academia.edu">
          <img src="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/12/Academiapng.png" alt="Academia.edu" />
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
