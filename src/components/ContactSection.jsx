import React, { useState } from 'react';
import { HOME_CONTACT } from '../content/serviceContactContent';

const FORM_PERKS = [
  {
    label: '24hr response',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: 'Free proposal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Batticaloa team',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const CONTACT_LINKS = [
  {
    label: 'Email us',
    value: 'info@zonzoctech.com',
    href: 'mailto:info@zonzoctech.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Call / WhatsApp',
    value: '+94 74 030 9534',
    href: 'https://wa.me/94740309534',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Based in',
    value: 'Batticaloa, Sri Lanka',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const ContactSection = ({
  id = 'contact',
  variant = 'default',
  eyebrowAccent = HOME_CONTACT.eyebrowAccent,
  eyebrowLight = HOME_CONTACT.eyebrowLight,
  title = HOME_CONTACT.title,
  titleAccent = HOME_CONTACT.titleAccent,
  titleAfter = HOME_CONTACT.titleAfter,
  subtitle = HOME_CONTACT.subtitle,
  formTitle = HOME_CONTACT.formTitle,
  messagePlaceholder = HOME_CONTACT.messagePlaceholder,
  submitLabel = HOME_CONTACT.submitLabel,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const sectionClass =
    variant === 'service'
      ? 'contact-section contact-section--service'
      : 'contact-section';

  return (
    <section className={sectionClass} id={id}>
      <div className="contact-section-pattern" aria-hidden="true" />
      <div className="contact-section-glow contact-glow-1" />
      <div className="contact-section-glow contact-glow-2" />

      <div className="contact-grid">
        {/* LEFT CARD — top */}
        <div className="contact-shell contact-shell--left">
          <div className="contact-pane contact-pane--main">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-accent">{eyebrowAccent}</span>
              <span className="contact-eyebrow-light">{eyebrowLight}</span>
            </span>

            <h2 className="contact-title">
              {title}
              {titleAccent ? (
                <span className="contact-title-accent">{titleAccent}</span>
              ) : null}
              {titleAfter}
            </h2>

            <p className="contact-subtitle">{subtitle}</p>

            <div className="contact-channels">
              {CONTACT_LINKS.map((item) => (
                <div key={item.label} className="contact-channel-card">
                  <div className="contact-channel-icon">{item.icon}</div>
                  <div className="contact-channel-text">
                    <span className="contact-channel-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-channel-value"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-channel-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CARD — form */}
        <div className="contact-shell contact-shell--right">
          <div className="contact-pane contact-pane--main">
            <h3 className="form-card-title">{formTitle}</h3>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                Thank you! We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                Something went wrong. Please try again or email info@zonzoctech.com
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
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
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <svg className="input-icon textarea-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <textarea
                  name="message"
                  placeholder={messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : submitLabel}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="submit-arrow">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              <div className="form-perks">
                {FORM_PERKS.map((perk) => (
                  <div key={perk.label} className="form-perk">
                    <span className="form-perk-icon">{perk.icon}</span>
                    <span className="form-perk-label">{perk.label}</span>
                  </div>
                ))}
              </div>

              <p className="form-trust">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                No commitment. No spam. Just results.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
