import { useState } from 'react'
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-panel">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Get in touch for collaborations or inquiries</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm always open to discussing new research collaborations, speaking engagements,
            or academic partnerships. Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FiMapPin />
              <div>
                <h4>Location</h4>
                <p>Stanford University, CA 94305</p>
              </div>
            </div>
            <div className="contact-detail">
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>james.wilson@stanford.edu</p>
              </div>
            </div>
            <div className="contact-detail">
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+1 (650) 555-0123</p>
              </div>
            </div>
            <div className="contact-detail">
              <FiClock />
              <div>
                <h4>Office Hours</h4>
                <p>Mon — Fri, 9:00 AM — 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            <FiSend /> Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
