import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const titleRef = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div ref={titleRef}>
          <div className="section-label">
            <span className="label-line"></span>
            Contact
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team. Let's connect!
            </p>

            <a href={`mailto:${personalInfo.email}`} className="contact-item" id="contact-email">
              <div className="contact-item-icon">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">{personalInfo.email}</div>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-item" id="contact-phone">
              <div className="contact-item-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">{personalInfo.phone}</div>
              </div>
            </a>

            <div className="contact-item" id="contact-location">
              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">{personalInfo.location}</div>
              </div>
            </div>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item" id="contact-linkedin">
              <div className="contact-item-icon">
                <Linkedin size={20} />
              </div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">Ria Kusmara</div>
              </div>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email-field">Email</label>
                <input
                  type="email"
                  id="contact-email-field"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                className="form-input"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" id="contact-submit" style={{ alignSelf: 'flex-start' }}>
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
