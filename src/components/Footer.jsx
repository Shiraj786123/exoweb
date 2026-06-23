import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '../assets/logonew.png';

const Footer = () => {
  const servicesLinks = [
    { label: 'AI Web Application Development', path: '/ai-software-development' },
    { label: 'AI Software Development', path: '/ai-software-development' },
    { label: 'Full-Stack Web Development', path: '/full-stack-web-development' },
    { label: 'AI-Powered Website Design', path: '/full-stack-web-development' },
    { label: 'AI Automation & GPT Integration', path: '/ai-software-development' },
    { label: 'SEO & AI Search Optimization', path: '/seo-services' },
    { label: 'E-commerce Development', path: '/ecommerce-development-optimization' }
  ];

  const knowledgebaseLinks = [
    { label: 'Websites That Generate Leads', path: '/full-stack-web-development' },
    { label: 'AI Chatbots & Virtual Assistants', path: '/ai-software-development' },
    { label: 'Business Process Automation', path: '/ai-software-development' },
    { label: 'E-commerce Growth Optimization', path: '/ecommerce-development-optimization' },
    { label: 'Search Visibility & Traffic Growth', path: '/seo-services' },
    { label: 'Website Speed & Performance Fixes', path: '/seo-services' }
  ];

  const companyLinks = [
    { label: 'Website Growth Guides', path: '/seo-services' },
    { label: 'AI for Business', path: '/ai-software-development' },
    { label: 'Technical SEO Knowledgebase', path: '/seo-services' },
    { label: 'Case Studies & Results', path: '/about' },
    { label: 'AI SEO & Answer Engine Optimization', path: '/seo-services' }
  ];

  const exploreLinks = [
    { label: 'About Vexoweb', path: '/about' },
    { label: 'How We Work', path: '/about' },
    { label: 'Careers', path: '/contact-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-conditions' }
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
                alt="Vexoweb Logo"
                className="footer-logo-img"
                width={280}
                height={145}
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

              <div className="footer-contact-icons">
                <a
                  href="https://wa.me/94740309534?text=Hi%20Vexoweb%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
                  className="contact-icon-btn whatsapp-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  aria-label="Chat on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="mailto:info@zonzoctech.com"
                  className="contact-icon-btn email-color"
                  title="Email Us"
                  aria-label="Email Vexoweb"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Columns */}
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

          <div className="footer-column">
            <h4 className="footer-column-title">Insights & Resources</h4>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
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