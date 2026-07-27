export default function ContactPopup({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="contact-popup-header">We'd love to hear from you! Whether you have a question, a comment, or a suggestion, please don't hesitate to reach out. We're here to help, and we value your feedback.</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Your name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>Your email</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="Collaboration inquiry" />
        </div>
        <div className="form-group">
          <label>Your message</label>
          <textarea placeholder="Tell me about your project..." />
        </div>
        <button type="submit" className="btn-primary">
          Submit
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </>
  );
}
