import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroTrustText from '../components/HeroTrustText';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const ContactPage = () => {
  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const steps = [
    "We review your message",
    "We analyze your website or idea",
    "We schedule a call or send a proposal"
  ];

  const faqs = [
    { q: "Do you work with international clients?", a: "Yes. We work with clients globally and collaborate remotely." },
    { q: "Do you offer free audits or consultations?", a: "Yes. We offer free website, SEO, and AI feasibility reviews." },
    { q: "How soon can you start?", a: "Depending on scope, projects usually start within 3–7 days." },
    { q: "Do you work with startups and small businesses?", a: "Absolutely. We tailor solutions based on stage and budget." },
  ];

  const whyContact = [
    "AI + development + SEO expertise",
    "Clear communication",
    "Business-focused solutions",
    "No generic packages",
    "Built for long-term growth"
  ];

  return (
    <div className="cp__wrapper">
      <Navbar />

      {/* Hero Section (Preserved brand radial gradient colors) */}
     {/* 1️⃣ Hero Section (Styled exactly as requested [1]) */}
      <section className="cp__hero">
        <div className="cp__hero_pattern"></div>
        <div className="cp__hero_container">
          
          {/* Glowing Pill Badge */}
          <div className="cp__hero_badge">
            <span className="cp__badge_dot"></span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">Contact Vexoweb</span>
              <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
            </span>
          </div>

          <h1 className="cp__hero_title">
            Let&apos;s Build Something That Grows Your Business in{" "}
            <span className="highlight-text">Eastern Province</span>
          </h1>

          {/* Muted Description Text [1] */}
          <p className="cp__hero_text">
            Let’s Build Something That Grows Your Business. Have a project in mind? Looking to improve your website, SEO, or AI systems? We’d love to hear from you.
          </p>

          {/* Action Buttons [1] */}
          <div className="cp__hero_actions">
            <a href="#contact" className="cp__hero_cta_primary">
              Get Free Consultation
            </a>
            <a href="#audit" className="cp__hero_cta_secondary">
              Request Free Audit <span className="arrow">→</span>
            </a>
          </div>

          {/* Thin Divider Line [1] */}
          <div className="cp__hero_divider"></div>

          <HeroTrustText text={HERO_TRUST_TEXT.contact} variant="contact" />

        </div>
      </section>

      {/* How Can We Help */}
     {/* How Can We Help (Restructured to 3 Pillared Columns with Connecting Line [1]) */}
      <section className="cp__help_section">
        <div className="cp__container">
          <span className="cp__section_badge cyan">CAPABILITIES</span>
          <h2 className="cp__heading">How Can We Help You?</h2>
          <p className="cp__subtitle">You can contact us for:</p>
          
          <div className="cp__services_grid_wrapper">
            {/* Horizontal Connecting Flow Line [1] */}
            <div className="cp__services_connection_line"></div>

            <div className="cp__services_grid">
              
              {/* Pillar 1: Development & Engineering (Royal Blue Theme) */}
              <div className="cp__pillar_card theme_blue">
                <div className="cp__pillar_header">
                  <div className="cp__pillar_icon_circle">
                    <svg className="cp__pillar_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </div>
                  <h3>Development & Apps</h3>
                </div>
                <ul className="cp__pillar_list">
                  <li>AI Web Application Development</li>
                  <li>AI Software Development</li>
                  <li>Full-Stack Website Development</li>
                </ul>
              </div>

              {/* Pillar 2: Design & Marketing (Sky Cyan Theme) */}
              <div className="cp__pillar_card theme_cyan">
                <div className="cp__pillar_header">
                  <div className="cp__pillar_icon_circle">
                    <svg className="cp__pillar_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 11 2 15C2 18 5 22 12 22Z" />
                      <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
                      <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
                      <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <h3>Design & SEO</h3>
                </div>
                <ul className="cp__pillar_list">
                  <li>AI Website Design & UX</li>
                  <li>SEO Services</li>
                  <li>AI Search Optimization (GEO)</li>
                </ul>
              </div>

              {/* Pillar 3: Automation & Security (Amethyst Purple Theme) */}
              <div className="cp__pillar_card theme_purple">
                <div className="cp__pillar_header">
                  <div className="cp__pillar_icon_circle">
                    <svg className="cp__pillar_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3>Systems & Automations</h3>
                </div>
                <ul className="cp__pillar_list">
                  <li>E-commerce Development & Optimization</li>
                  <li>AI Automation & Integrations</li>
                  <li>Website Performance, Security & Maintenance</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Request Consultation */}
     {/* 3️⃣ REQUEST CONSULTATION (Split-Background Card Redesign [1]) */}
      <section className="cp__consult_section">
        <div className="cp__container">
          
          <span className="cp__section_badge yellow">WORKFLOW</span>
          <h2 className="cp__heading_white">Request a Free Consultation</h2>
          <p className="cp__text_white">
            Tell us about your project and goals, and we’ll review your requirements and suggest the best next steps.
          </p>

          <div className="cp__steps_grid_split">
            {/* Step 1: Review */}
            <div className="cp__step_card_split">
              <div className="cp__step_icon_circle">
                <svg className="cp__step_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>REVIEW PROCESS</h3>
              <p className="cp__step_card_text">{steps[0]}</p>
              <span className="cp__step_more_link">STEP 01</span>
            </div>

            {/* Step 2: Analyze */}
            <div className="cp__step_card_split">
              <div className="cp__step_icon_circle">
                <svg className="cp__step_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>ANALYSIS & AUDIT</h3>
              <p className="cp__step_card_text">{steps[1]}</p>
              <span className="cp__step_more_link">STEP 02</span>
            </div>

            {/* Step 3: Proposal */}
            <div className="cp__step_card_split">
              <div className="cp__step_icon_circle">
                <svg className="cp__step_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>PROPOSAL & CALL</h3>
              <p className="cp__step_card_text">{steps[2]}</p>
              <span className="cp__step_more_link">STEP 03</span>
            </div>
          </div>

          <p className="cp__note_white">👉 No obligation. No pressure.</p>
        </div>
      </section>

      {/* Contact Details */}
   {/* Contact Details (3 Colorful, Compact Containers [1]) */}
      <section className="cp__details_section">
        <div className="cp__container">
          <span className="cp__section_badge blue">DIRECT ACCESS</span>
          <h2 className="cp__heading">Contact Details</h2>
          
          <div className="cp__details_grid">
            
            {/* Card 1: Email Us (Royal Blue Theme) */}
            <a href="mailto:info@vexoweb.lk" className="cp__details_card card_email">
              <span className="details_icon_circle">
                <svg className="cp__details_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <h5>Email Us</h5>
              <span className="cp__details_link">Send an email <span className="arrow">→</span></span>
            </a>

            {/* Card 2: Whatsapp Us (Ecosystem Green Theme) */}
            <a href="https://wa.me/94770000000" target="_blank" rel="noopener noreferrer" className="cp__details_card card_whatsapp">
              <span className="details_icon_circle">
                <svg className="cp__details_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <h5>Whatsapp Us</h5>
              <span className="cp__details_link">Start chat <span className="arrow">→</span></span>
            </a>

            {/* Card 3: Global Delivery (Sky Cyan Theme) */}
            <div className="cp__details_card card_delivery">
              <span className="details_icon_circle">
                <svg className="cp__details_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              <h5>Global Delivery</h5>
              <p className="cp__details_desc">Remote-first team — serving clients worldwide</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Contact */}
    {/* 5️⃣ WHY CONTACT (Redesigned into 5 Colorful Connected Circles [1]) */}
      <section className="cp__why_section">
        <div className="cp__container">
          <span className="cp__section_badge purple">TRUST SYSTEM</span>
          <h2 className="cp__heading">Why Contact Vexoweb?</h2>
          
          <div className="cp__why_row_wrapper">
            {/* Subtle horizontal connecting line [1] */}
            <div className="cp__why_connection_line"></div>
            
            <div className="cp__why_row">
              {whyContact.map((item, index) => {
                // Custom theme colors for each circle node [1]
                const themes = ['why_blue', 'why_orange', 'why_green', 'why_purple', 'why_pink'];
                const currentTheme = themes[index % themes.length];

                // Custom SVG Icons matched specifically to each core value [1]
                const icons = [
                  // Node 1: AI + development + SEO expertise (Blue)
                  <svg className="cp__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M12 18V6M6 12h12M9 9h6v6H9z" />
                  </svg>,
                  // Node 2: Clear communication (Orange)
                  <svg className="cp__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>,
                  // Node 3: Business-focused solutions (Green)
                  <svg className="cp__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>,
                  // Node 4: No generic packages (Purple)
                  <svg className="cp__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  </svg>,
                  // Node 5: Built for long-term growth (Pink)
                  <svg className="cp__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ];

                return (
                  <div key={index} className={`cp__why_node ${currentTheme}`}>
                    {/* Glowing Circular Node [1] */}
                    <div className="cp__why_circle">
                      {icons[index]}
                    </div>
                    {/* Aligned Text Details */}
                    <div className="cp__why_text_group">
                      <span className="cp__why_meta_label">Value 0{index + 1}</span>
                      <h4 className="cp__why_node_title">{item}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="cp__why_text">
            We don’t just deliver projects — we build systems that work.
          </p>
        </div>
      </section>

      {/* FAQ Section (Interactive Glass Accordion) */}
      <section className="cp__faq_section">
        <div className="cp__container">
          <span className="cp__section_badge blue">KNOWLEDGE BASE</span>
          <h2 className="cp__heading">Frequently Asked Questions</h2>
          <div className="cp__faq_accordion_container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`cp__faq_item ${activeFaq === index ? 'faq_active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="cp__faq_trigger">
                  <h4>{faq.q}</h4>
                  <span className="cp__faq_icon_status">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="cp__faq_panel">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA (Vibrant Gradient Banner) */}
      <section className="cp__cta_section">
        <div className="cp__container">
          <div className="cp__cta_banner">
            <div className="cp__cta_banner_glow"></div>
            <h2 className="cp__cta_title_white">Ready to Get Started?</h2>
            <p className="cp__cta_text">
              If you’re serious about improving your digital presence with AI and smart development, let’s talk.
            </p>
            <div className="cp__cta_actions">
              <a href="#contact" className="cp__final_cta_btn">Contact Us Today <span className="arrow">→</span></a>
              <a href="#audit" className="cp__final_cta_btn_alt">Request a Free Audit <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;