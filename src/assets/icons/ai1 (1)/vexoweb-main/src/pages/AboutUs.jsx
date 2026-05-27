import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const whoWeWorkWith = [
    "Startups launching new products",
    "E-commerce brands scaling sales",
    "Service businesses generating leads",
    "Agencies needing technical execution",
    "Companies modernizing legacy systems"
  ];

  const whatWeWant = [
    { icon: "🎯", text: "Better online visibility" },
    { icon: "🤖", text: "Smarter automation" },
    { icon: "⚡", text: "High-performing websites" },
    { icon: "📈", text: "Measurable ROI from digital investments" }
  ];

  const advantages = [
    "AI + Engineering + SEO under one roof",
    "Strong technical foundation",
    "Strategy-first execution",
    "Built for both Google and AI-driven search engines"
  ];

  const solutions = [
    { icon: "⚡", text: "Fast" },
    { icon: "🔒", text: "Secure" },
    { icon: "📈", text: "Scalable" },
    { icon: "🔍", text: "Search-optimized" },
    { icon: "💰", text: "Conversion-focused" }
  ];

  const services = [
    "AI Web Application Development",
    "AI Software Development",
    "Full-Stack Web Development",
    "AI Website Design & Development",
    "SEO Services",
    "AI Search Optimization (GEO)",
    "E-commerce Development & Optimization",
    "AI Automation & Integrations",
    "Website Performance, Security & Maintenance"
  ];

  const approach = [
    {
      number: "1",
      title: "Understand the Business",
      description: "We start by understanding your goals, challenges, and market."
    },
    {
      number: "2",
      title: "Design the Right Solution",
      description: "We choose the right technologies, AI models, and strategies — not overengineering."
    },
    {
      number: "3",
      title: "Build & Optimize",
      description: "We develop, test, and optimize for performance, SEO, and scalability."
    },
    {
      number: "4",
      title: "Measure & Improve",
      description: "We track results and continuously improve based on data."
    }
  ];

  const futurePrep = [
    "Google Search evolution",
    "AI Overviews",
    "Generative Engine Optimization (GEO)",
    "AI-powered customer journeys"
  ];

  const values = [
    {
      title: "Transparency",
      description: "Clear communication, no hidden tactics",
      icon: "👁️"
    },
    {
      title: "Quality",
      description: "Clean code, ethical SEO, scalable systems",
      icon: "⭐"
    },
    {
      title: "Results",
      description: "Traffic, leads, conversions, and ROI",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "AI where it adds value, not buzzwords",
      icon: "💡"
    }
  ];

  const whyChoose = [
    "Technical expertise + marketing strategy",
    "AI-ready development approach",
    "SEO built into everything",
    "Business-focused solutions",
    "Long-term partnerships, not one-off projects"
  ];

  return (
    <div className="abt__wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="abt__hero">
        <div className="abt__hero_bg"></div>
        <div className="abt__hero_container">
          <h1 className="abt__hero_title">About ZonzocTech</h1>
          <p className="abt__hero_subtitle">
            Building Intelligent Digital Solutions That Drive Real Growth
          </p>
          <p className="abt__hero_description">
            ZonzocTech is a technology-driven digital solutions company specializing in AI-powered 
            web applications, software development, full-stack development, SEO, and AI search optimization.
          </p>
          <p className="abt__hero_mission">
            We help businesses move beyond outdated websites and disconnected tools by building 
            scalable, intelligent, and performance-focused digital systems that generate traffic, 
            leads, and revenue.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="abt__who_section">
        <div className="abt__container">
          <h2 className="abt__heading">Who We Are</h2>
          <div className="abt__who_content">
            <p className="abt__who_text">
              ZonzocTech was founded with a clear mission: <strong>to help businesses grow using 
              modern technology, AI, and data-driven strategies — not hype or shortcuts.</strong>
            </p>
            <div className="abt__who_box">
              <h3>We work with startups, growing companies, and established brands that want:</h3>
              <div className="abt__wants_grid">
                {whatWeWant.map((item, index) => (
                  <div key={index} className="abt__want_item">
                    <span className="abt__want_icon">{item.icon}</span>
                    <span className="abt__want_text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="abt__who_footer">
              We don't just "build websites" or "do SEO" — we solve business problems with technology.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="abt__different_section">
        <div className="abt__container">
          <h2 className="abt__heading">What Makes Us Different</h2>
          <p className="abt__different_intro">
            Most agencies focus on either marketing or development. <strong>We bridge both.</strong>
          </p>
          <div className="abt__advantage_box">
            <h3>Our advantage:</h3>
            <div className="abt__advantages_list">
              {advantages.map((advantage, index) => (
                <div key={index} className="abt__advantage_item">
                  <span className="abt__advantage_dot"></span>
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="abt__solutions_banner">
            <h3>Every solution we deliver is designed to be:</h3>
            <div className="abt__solutions_grid">
              {solutions.map((solution, index) => (
                <div key={index} className="abt__solution_badge">
                  <span className="abt__solution_icon">{solution.icon}</span>
                  <span className="abt__solution_text">{solution.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="abt__services_section">
        <div className="abt__container">
          <h2 className="abt__heading">What We Do</h2>
          <h3 className="abt__subheading">Our Core Services</h3>
          <div className="abt__services_grid">
            {services.map((service, index) => (
              <div key={index} className="abt__service_card">
                <div className="abt__service_number">{String(index + 1).padStart(2, '0')}</div>
                <p>{service}</p>
              </div>
            ))}
          </div>
          <p className="abt__services_note">
            Each service is built around real-world business outcomes, not just technical delivery.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="abt__approach_section">
        <div className="abt__container">
          <h2 className="abt__heading">Our Approach</h2>
          <div className="abt__approach_timeline">
            {approach.map((step, index) => (
              <div key={index} className="abt__approach_step">
                <div className="abt__step_number">{step.number}</div>
                <div className="abt__step_content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ready */}
      <section className="abt__future_section">
        <div className="abt__container">
          <h2 className="abt__heading">Built for the Future of Search & AI</h2>
          <p className="abt__future_intro">
            Search is changing. AI-generated answers, voice search, and generative engines are 
            redefining visibility.
          </p>
          <div className="abt__future_box">
            <h3>ZonzocTech helps businesses prepare for:</h3>
            <div className="abt__future_list">
              {futurePrep.map((item, index) => (
                <div key={index} className="abt__future_item">{item}</div>
              ))}
            </div>
          </div>
          <p className="abt__future_footer">
            We don't chase trends — we build future-ready digital foundations.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="abt__clients_section">
        <div className="abt__container">
          <h2 className="abt__heading">Who We Work With</h2>
          <div className="abt__clients_grid">
            {whoWeWorkWith.map((client, index) => (
              <div key={index} className="abt__client_card">
                <div className="abt__client_icon">✓</div>
                <p>{client}</p>
              </div>
            ))}
          </div>
          <p className="abt__clients_footer">
            If your growth depends on your digital presence, we can help.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="abt__values_section">
        <div className="abt__container">
          <h2 className="abt__heading">Our Values</h2>
          <div className="abt__values_grid">
            {values.map((value, index) => (
              <div key={index} className="abt__value_card">
                <div className="abt__value_icon">{value.icon}</div>
                <h3 className="abt__value_title">{value.title}</h3>
                <p className="abt__value_desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="abt__why_section">
        <div className="abt__container">
          <h2 className="abt__heading">Why ZonzocTech?</h2>
          <div className="abt__why_list">
            {whyChoose.map((reason, index) => (
              <div key={index} className="abt__why_item">
                <span className="abt__why_check">✔</span>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="abt__cta_section">
        <div className="abt__container">
          <h2 className="abt__cta_title">Let's Build Something That Works</h2>
          <p className="abt__cta_text">
            Whether you need an AI-powered application, a high-performing website, or sustainable 
            growth through search, ZonzocTech is ready to help.
          </p>
          <div className="abt__cta_buttons">
            <a href="/contact-us" className="abt__cta_btn abt__cta_primary">
               Get in Touch
            </a>
            <a href="#contact" className="abt__cta_btn abt__cta_secondary">
               Request a Free Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
