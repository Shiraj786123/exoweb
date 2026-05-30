import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const steps = [
    { number: '01', text: 'Share your requirements' },
    { number: '02', text: 'Discuss them with our experts' },
    { number: '03', text: 'Receive a customized proposal' },
    { number: '04', text: 'Launch your project successfully' }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left Side Info Panel */}
        <div className="contact-left">
          <div className="you-are-here">
            <span className="here-text">YOU ARE HERE</span>
            <div className="here-line"></div>
          </div>

          <h2 className="contact-title">Let's Start</h2>
          <p className="contact-subtitle">
            Initiating Your Journey to Success and Growth.
          </p>

          <div className="contact-email">
            <div className="email-icon">
              {/* Native Envelope SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span className="email-text">info@zonzoctech.com</span>
          </div>

          <div className="contact-steps">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Form Panel */}
        <div className="contact-right">
          <div className="form-header">
            {/* Native Handshake SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="form-header-icon">
              <path d="M10 14 5 9.5a2.5 2.5 0 0 1 0-3.5h0a2.5 2.5 0 0 1 3.5 0L12 9l3.5-3a2.5 2.5 0 0 1 3.5 0h0a2.5 2.5 0 0 1 0 3.5L14 14" />
              <path d="m14 14-2.5 2.5a2.5 2.5 0 0 1-3.5 0h0a2.5 2.5 0 0 1 0-3.5L10 11" />
              <path d="M12 13h.01" />
            </svg>
            <span className="form-header-text">LET'S CONNECT!</span>
          </div>

          <h3 className="form-title">
            Send us a message, and we'll promptly discuss your project with you.
          </h3>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert alert-error">
              ✗ Something went wrong. Please try again or email us directly at info@zonzoctech.com
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                {/* User Icon SVG */}
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                {/* Mail Icon SVG */}
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                {/* Phone Icon SVG */}
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                {/* Building Icon SVG */}
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M8 10h.01" />
                  <path d="M16 10h.01" />
                </svg>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group full-width">
              {/* Message Icon SVG */}
              <svg className="input-icon textarea-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'SENDING...' : 'SEND REQUEST'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="submit-arrow">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;