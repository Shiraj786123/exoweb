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
        {/* Left Side */}
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
              <i className="fa-solid fa-envelope"></i>
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

        {/* Right Side - Form */}
        <div className="contact-right">
          <div className="form-header">
            <i className="fa-solid fa-handshake"></i>
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
              ✗ Oops! Something went wrong. Please try again or email us directly at info@zonzoctech.com
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <i className="fa-solid fa-user"></i>
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
                <i className="fa-solid fa-envelope"></i>
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
                <i className="fa-solid fa-phone"></i>
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
                <i className="fa-solid fa-building"></i>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <i className="fa-solid fa-comment"></i>
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
              {isSubmitting ? 'SENDING...' : 'SEND REQUEST'} 
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
