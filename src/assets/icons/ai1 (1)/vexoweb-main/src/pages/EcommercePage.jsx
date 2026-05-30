import React from 'react';
import Navbar from '../components//Navbar';
import Footer from '../components/Footer';

const EcommerceDev = () => {
  const targetAudience = [
    "New e-commerce brands launching online",
    "Existing stores with low conversion rates",
    "Businesses facing slow site speed or checkout issues",
    "Brands needing custom features or integrations",
    "E-commerce owners scaling operations"
  ];

  const problems = [
    { icon: "📉", text: "Low conversion rates" },
    { icon: "🛒", text: "Cart abandonment" },
    { icon: "🐢", text: "Slow page load times" },
    { icon: "📱", text: "Poor mobile experience" },
    { icon: "⚙️", text: "Limited automation" },
    { icon: "🔍", text: "SEO and visibility issues" }
  ];

  const services = [
    "Custom E-commerce Website Development",
    "Platform Setup & Customization",
    "Checkout & Conversion Optimization",
    "Speed & Performance Improvements",
    "Mobile-First UX Design",
    "Product Page Optimization",
    "AI-Powered Recommendations & Automation",
    "Payment, Shipping & Third-Party Integrations",
    "SEO for E-commerce Stores",
    "Ongoing Maintenance & Support"
  ];

  const platforms = [
    "Custom e-commerce solutions",
    "Flexible CMS-based stores",
    "Headless e-commerce architectures",
    "API-driven integrations"
  ];

  const comparison = [
    { basic: "Just online", optimized: "Built to sell" },
    { basic: "Slow pages", optimized: "Fast & responsive" },
    { basic: "Generic UX", optimized: "Conversion-focused UX" },
    { basic: "Manual processes", optimized: "Automated workflows" }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Store & Funnel Analysis",
      description: "We evaluate your store, users, and purchase journey."
    },
    {
      number: "2",
      title: "Design & Architecture",
      description: "We design conversion-focused layouts and technical structure."
    },
    {
      number: "3",
      title: "Development & Optimization",
      description: "We build features, improve performance, and implement automation."
    },
    {
      number: "4",
      title: "Testing & Quality Assurance",
      description: "We test checkout flow, speed, and real-world usability."
    },
    {
      number: "5",
      title: "Launch & Growth Support",
      description: "We monitor, optimize, and scale your store post-launch."
    }
  ];

  const whyChoose = [
    "Revenue-driven development approach",
    "Strong UX & performance expertise",
    "AI-powered optimization capabilities",
    "Secure & scalable solutions",
    "Long-term growth mindset"
  ];

  const faqs = [
    {
      question: "Can you improve my existing e-commerce store?",
      answer: "Yes. We specialize in optimizing existing stores for performance, UX, and conversions."
    },
    {
      question: "Do you support AI features in e-commerce?",
      answer: "Yes. We implement AI recommendations, automation, and personalization where it adds value."
    },
    {
      question: "Is SEO included?",
      answer: "Yes. We follow e-commerce SEO best practices and optimization strategies."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We offer continuous optimization and maintenance services."
    }
  ];

  return (
    <div className="ecd__wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="ecd__hero">
        <div className="ecd__hero_pattern"></div>
        <div className="ecd__hero_container">
          <div className="ecd__hero_badge">
            <span className="ecd__badge_icon">🛍️</span>
            E-commerce Development & Optimization
          </div>
          <h1 className="ecd__hero_title">
            High-Performance E-commerce Development & Optimization That Increases Sales
          </h1>
          <p className="ecd__hero_text">
            We provide e-commerce development and optimization services designed to help online stores 
            grow revenue, improve user experience, and scale confidently. From custom store development 
            to performance, conversion, and automation enhancements, we build e-commerce platforms that 
            are fast, secure, and optimized for sales.
          </p>
          <a href="#contact" className="ecd__hero_cta">
            Get a Free E-commerce Growth Audit
          </a>
        </div>
      </section>

      {/* What Is Section */}
      <section className="ecd__what_section">
        <div className="ecd__container">
          <h2 className="ecd__heading">What Is E-commerce Development & Optimization?</h2>
          <p className="ecd__description">
            E-commerce development and optimization involves building and improving online stores so 
            they load faster, convert better, and scale efficiently. It goes beyond design — focusing 
            on performance, checkout flow, automation, SEO, and customer experience.
          </p>
          <div className="ecd__impact_box">
            A well-optimized store directly impacts revenue.
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="ecd__audience_section">
        <div className="ecd__container">
          <h2 className="ecd__heading2">Who Is This Service For?</h2>
          <p className="ecd__subtitle">This service is ideal for:</p>
          <div className="ecd__audience_list">
            {targetAudience.map((item, index) => (
              <div key={index} className="ecd__audience_item">
                <span className="ecd__audience_bullet">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="ecd__audience_note">
            If your store gets traffic but not sales, optimization is the missing link.
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="ecd__problems_section">
        <div className="ecd__container">
          <h2 className="ecd__heading">Problems We Solve for E-commerce Businesses</h2>
          <div className="ecd__problems_grid">
            {problems.map((problem, index) => (
              <div key={index} className="ecd__problem_card">
                <div className="ecd__problem_icon">{problem.icon}</div>
                <p className="ecd__problem_text">{problem.text}</p>
              </div>
            ))}
          </div>
          <p className="ecd__problems_footer">
            We turn underperforming stores into revenue-generating platforms.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="ecd__services_section">
        <div className="ecd__container">
          <h2 className="ecd__heading2">Our E-commerce Development & Optimization Services</h2>
          <p className="ecd__subtitle">
            We deliver end-to-end e-commerce development and optimization solutions, including:
          </p>
          <div className="ecd__services_grid">
            {services.map((service, index) => (
              <div key={index} className="ecd__service_card">
                <div className="ecd__service_number">{String(index + 1).padStart(2, '0')}</div>
                <p className="ecd__service_text">{service}</p>
              </div>
            ))}
          </div>
          <p className="ecd__services_note">
            Each store is built for growth, security, and long-term scalability.
          </p>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="ecd__platforms_section">
        <div className="ecd__container">
          <h2 className="ecd__heading">Platforms We Work With</h2>
          <div className="ecd__platforms_grid">
            {platforms.map((platform, index) => (
              <div key={index} className="ecd__platform_box">
                <div className="ecd__platform_icon">✓</div>
                <p>{platform}</p>
              </div>
            ))}
          </div>
          <p className="ecd__platforms_note">
            (We select platforms based on your business goals — not limitations.)
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="ecd__comparison_section">
        <div className="ecd__container">
          <h2 className="ecd__heading">E-commerce Optimization vs Basic Store Setup</h2>
          <div className="ecd__comparison_wrapper">
            <div className="ecd__comparison_col ecd__col_basic">
              <h3>Basic Store Setup</h3>
              {comparison.map((item, index) => (
                <div key={index} className="ecd__comparison_item">{item.basic}</div>
              ))}
            </div>
            <div className="ecd__comparison_divider">→</div>
            <div className="ecd__comparison_col ecd__col_optimized">
              <h3>Optimized E-commerce Store</h3>
              {comparison.map((item, index) => (
                <div key={index} className="ecd__comparison_item">{item.optimized}</div>
              ))}
            </div>
          </div>
          <p className="ecd__comparison_tagline">
            Optimization is what turns traffic into revenue.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="ecd__process_section">
        <div className="ecd__container">
          <h2 className="ecd__heading">Our E-commerce Development Process</h2>
          <div className="ecd__process_timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="ecd__process_step">
                <div className="ecd__step_marker">
                  <span className="ecd__step_number">{step.number}</span>
                </div>
                <div className="ecd__step_content">
                  <h3 className="ecd__step_title">{step.title}</h3>
                  <p className="ecd__step_desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="ecd__why_section">
        <div className="ecd__container">
          <h2 className="ecd__heading">Why Choose ZonzocTech for E-commerce Development?</h2>
          <div className="ecd__why_list">
            {whyChoose.map((reason, index) => (
              <div key={index} className="ecd__why_item">
                <div className="ecd__why_icon">★</div>
                <p>{reason}</p>
              </div>
            ))}
          </div>
          <div className="ecd__why_statement">
            We don't just build online stores — we build e-commerce engines.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ecd__faq_section">
        <div className="ecd__container">
          <h2 className="ecd__heading2">Frequently Asked Questions</h2>
          <div className="ecd__faq_container">
            {faqs.map((faq, index) => (
              <div key={index} className="ecd__faq_card">
                <h4 className="ecd__faq_q">{faq.question}</h4>
                <p className="ecd__faq_a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ecd__cta_section">
        <div className="ecd__container">
          <div className="ecd__cta_box">
            <h2 className="ecd__cta_title">Ready to Grow Your E-commerce Revenue?</h2>
            <p className="ecd__cta_text">
              If your online store needs better performance, higher conversions, or scalable 
              development, let's talk.
            </p>
            <a href="#contact" className="ecd__cta_btn">
              Get a Free E-commerce Growth Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceDev;
