import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_LOGO_ALT } from '../lib/imageAlt';
import siteLogo from '../assets/logonew.png';

const CONTACT_EMAIL = 'info@vexoweb.lk';
const CONTACT_PHONE = '+94 74 030 9534';
const WHATSAPP_HREF =
  'https://wa.me/94740309534?text=Hi%20Vexoweb%20Team,%20I%20would%20like%20to%20discuss%20a%20project.';

const Footer = () => {
  const servicesLinks = [
    { label: 'AI Web Application Development', path: '/ai-software-development' },
    { label: 'Website Development', path: '/website-development' },
    { label: 'SEO & AI Search Optimization', path: '/seo-services' },
    { label: 'E-Commerce Development', path: '/ecommerce-development' },
    { label: 'Mobile App Development', path: '/mobile-app-development' },
  ];

  const knowledgebaseLinks = [
    { label: 'Websites That Generate Leads', path: '/website-development' },
    { label: 'Business Process Automation', path: '/ai-software-development' },
    { label: 'E-Commerce Growth Optimization', path: '/ecommerce-development' },
    { label: 'Search Visibility & Traffic Growth', path: '/seo-services' },
    { label: 'Website Speed & Performance Fixes', path: '/seo-services' }
  ];

  const exploreLinks = [
    { label: 'About Vexoweb', path: '/about' },
    { label: 'How We Work', path: '/about' },
    { label: 'Careers', path: '/contact' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-conditions' }
  ];

  const areasServed = [
    { label: 'Batticaloa', path: '/website-development-batticaloa' },
    { label: 'Kattankudy', path: '/website-development-kattankudy' },
    { label: 'Kalmunai', path: '/website-development-kalmunai' },
    { label: 'Ampara', path: '/website-development-ampara' },
    { label: 'Trincomalee', path: '/website-development-trincomalee' },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-1" aria-hidden="true" />
      <div className="footer-glow footer-glow-2" aria-hidden="true" />

      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main">
        <div className="footer-container">

          {/* Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src={siteLogo}
                alt={SITE_LOGO_ALT}
                className="footer-logo-img"
                width={200}
                height={100}
                sizes="(max-width: 768px) 200px, 280px"
                priority
              />
            </div>

            <div className="footer-contact-box">
              <h4 className="contact-heading">
                Ready to speak with a marketing expert? Give us a ring
              </h4>
              <p className="footer-cta-sub">
                Batticaloa, Sri Lanka · We reply within 24 hours
              </p>

              <div className="footer-contact-list">
                <a
                  href={WHATSAPP_HREF}
                  className="footer-contact-row"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                >
                  <span className="contact-icon-btn whatsapp-color" aria-hidden="true">
                    <i className="fa-brands fa-whatsapp"></i>
                  </span>
                  <span className="footer-contact-text">{CONTACT_PHONE}</span>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="footer-contact-row"
                  title="Email Us"
                >
                  <span className="contact-icon-btn email-color" aria-hidden="true">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className="footer-contact-text">{CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-columns">
            <div className="footer-column">
              <h4 className="footer-column-title">Core Services</h4>
              <ul className="footer-links">
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Solutions by Need</h4>
              <ul className="footer-links">
                {knowledgebaseLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-column--company">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links">
                {exploreLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-column--areas">
              <h4 className="footer-column-title">Areas Served</h4>
              <ul className="footer-links">
                {areasServed.map((area) => (
                  <li key={area.label}>
                    <Link href={area.path}>{area.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © 2026 Vexoweb. All rights reserved.
          </p>
          <div className="social-icons">
            <a href="https://x.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;