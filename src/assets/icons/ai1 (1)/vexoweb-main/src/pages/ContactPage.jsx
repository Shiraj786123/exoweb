import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const services = [
    "AI Web Application Development",
    "AI Software Development",
    "Full-Stack Website Development",
    "AI Website Design & UX",
    "SEO Services",
    "AI Search Optimization (GEO)",
    "E-commerce Development & Optimization",
    "AI Automation & Integrations",
    "Website Performance, Security & Maintenance",
  ];

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

      {/* Hero Section */}
      <section className="cp__hero">
        <div className="cp__hero_container">
          <h1 className="cp__hero_title">
            Contact ZonzocTech
          </h1>
          <p className="cp__hero_text">
            Let’s Build Something That Grows Your Business. Have a project in mind? Looking to improve your website, SEO, or AI systems? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="cp__help_section">
        <div className="cp__container">
          <h2 className="cp__heading">How Can We Help You?</h2>
          <p className="cp__subtitle">You can contact us for:</p>
          <div className="cp__services_grid">
            {services.map((service, index) => (
              <div key={index} className="cp__service_card">
                <span className="cp__service_icon">✔</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Consultation */}
      <section className="cp__consult_section">
        <div className="cp__container">
          <h2 className="cp__heading">Request a Free Consultation</h2>
          <p className="cp__text">
            Tell us about your project and goals, and we’ll review your requirements and suggest the best next steps.
          </p>
          <div className="cp__steps_grid">
            {steps.map((step, index) => (
              <div key={index} className="cp__step_card">
                <div className="cp__step_number">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <p className="cp__note">👉 No obligation. No pressure.</p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="cp__details_section">
        <div className="cp__container">
          <h2 className="cp__heading">Contact Details</h2>
          <p className="cp__contact">📧 Email: hello@zonzoctech.com</p>
          <p className="cp__contact">📞 Phone: +94 XX XXX XXXX</p>
          <p className="cp__contact">🌍 Serving clients worldwide (Remote-first team — global delivery)</p>
        </div>
      </section>

      {/* Why Contact */}
      <section className="cp__why_section">
        <div className="cp__container">
          <h2 className="cp__heading">Why Contact ZonzocTech?</h2>
          <div className="cp__why_list">
            {whyContact.map((item, index) => (
              <div key={index} className="cp__why_item">
                <span className="cp__why_icon">★</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="cp__why_text">
            We don’t just deliver projects — we build systems that work.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cp__faq_section">
        <div className="cp__container">
          <h2 className="cp__heading">Frequently Asked Questions</h2>
          <div className="cp__faq_grid">
            {faqs.map((faq, index) => (
              <div key={index} className="cp__faq_card">
                <h4 className="cp__faq_q">{faq.q}</h4>
                <p className="cp__faq_a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cp__cta_section">
        <div className="cp__container">
          <h2 className="cp__cta_title">Ready to Get Started?</h2>
          <p className="cp__cta_text">
            If you’re serious about improving your digital presence with AI and smart development, let’s talk.
          </p>
          <a href="#contact" className="cp__cta_btn">Contact Us Today</a>
          <a href="#audit" className="cp__cta_btn_alt">Request a Free Audit</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
