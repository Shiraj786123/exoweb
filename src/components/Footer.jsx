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
    { label: 'About ZonzocTech', path: '/about' },
    { label: 'How We Work', path: '/about' },
    { label: 'Careers', path: '/contact-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-conditions' }
  ];

  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-top-container">
          {/* LEFT SIDE — STATS + BUTTON */}
          {/* BUTTON UNDER BOTH */}
          {/* RIGHT SIDE — CTA BOX */}
        </div>
        
        {/* Full-width line */}
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main">
        <div className="footer-container">

          {/* Branding */}
          <div 
            className="footer-brand" 
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {/* 
              This box acts as the matching frame container for the logo, 
              aligning its top boundary with the rest of the column headers.
            */}
            <div 
              className="footer-logo" 
              style={{ 
                display: 'flex', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                width: '100%', 
                height: '110px', 
                marginBottom: '0px'
              }}
            >
             <Image
  src={siteLogo}
  alt="Zonzoctech Logo"
  className="logo-text-img"
  width={320}
  height={140}
  priority
/>
            </div>

            <div className="footer-contact-box" style={{ marginTop: '4px' }}>
              <h4 className="contact-heading" style={{ marginTop: '0px', marginBottom: '16px' }}>
                Ready to speak with a marketing expert? Give us a ring
              </h4>

              {/* FIX: Dual, side-by-side circular contact icons */}
              <div className="footer-contact-icons">
                <a
                  href="https://wa.me/94740309534?text=Hi%20ZonzocTech%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
                  className="contact-icon-btn whatsapp-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="mailto:info@zonzoctech.com"
                  className="contact-icon-btn email-color"
                  title="Email Us"
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

      {/* Full-width line before footer bottom */}
      <div className="line">
        <hr style={{
          border: 'none',
          borderTop: '1px solid rgba(255, 255, 255, 1)',
          margin: '20px 0',
          width: '100%'
        }} />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            Zonzoctech© 2026
          </p>
          <div className="social-icons">
            <a href="https://x.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;