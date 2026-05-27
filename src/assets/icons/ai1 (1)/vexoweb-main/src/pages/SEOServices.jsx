import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SEOServices = () => {
  const builtFor = [
    { icon: "🔍", text: "Search engines" },
    { icon: "👥", text: "Real users" },
    { icon: "📊", text: "Measurable business outcomes" }
  ];

  const whoNeeds = [
    "Businesses not ranking on Google",
    "Websites experiencing traffic drops",
    "Companies relying on organic leads",
    "E-commerce stores competing in search",
    "Service businesses targeting local or global customers"
  ];

  const problems = [
    { icon: "📉", text: "Poor keyword rankings" },
    { icon: "🚫", text: "Low organic traffic" },
    { icon: "⚠️", text: "Technical website issues" },
    { icon: "📝", text: "Weak content performance" },
    { icon: "💔", text: "Low conversion from search traffic" },
    { icon: "🚨", text: "SEO penalties or visibility loss" }
  ];

  const services = [
    "SEO Audits & Strategy",
    "Technical SEO Optimization",
    "On-Page SEO & Content Optimization",
    "Keyword Research & Search Intent Mapping",
    "Local SEO (Google Business Profile Optimization)",
    "E-commerce SEO",
    "Site Structure & Internal Linking",
    "Page Speed & Core Web Vitals Optimization",
    "SEO Reporting & Performance Tracking"
  ];

  const comparison = [
    { traditional: "Google rankings", ai: "AI answers & visibility" },
    { traditional: "Keywords & pages", ai: "Entities & understanding" },
    { traditional: "Click-based traffic", ai: "Brand presence" },
    { traditional: "Long-term growth", ai: "Future-proofing" }
  ];

  const processSteps = [
    {
      number: "1",
      title: "SEO Audit & Benchmarking",
      description: "We analyze technical health, competitors, and opportunities."
    },
    {
      number: "2",
      title: "Strategy & Keyword Planning",
      description: "We map keywords to search intent and business goals."
    },
    {
      number: "3",
      title: "Technical & On-Page Optimization",
      description: "We fix issues and optimize content and structure."
    },
    {
      number: "4",
      title: "Content & Authority Growth",
      description: "We strengthen topical authority and relevance."
    },
    {
      number: "5",
      title: "Tracking & Optimization",
      description: "We monitor rankings, traffic, and conversions."
    }
  ];

  const tools = [
    "Google Search Console",
    "Google Analytics",
    "Keyword & rank tracking tools",
    "Technical SEO audit tools",
    "Performance monitoring systems"
  ];

  const whyChoose = [
    "Strong technical SEO foundation",
    "Business-focused keyword strategy",
    "Transparent reporting",
    "No black-hat tactics",
    "SEO aligned with AI search evolution"
  ];

  const faqs = [
    {
      question: "How long does SEO take?",
      answer: "SEO is a long-term strategy. Initial improvements may appear in weeks, but strong results typically take 3–6 months."
    },
    {
      question: "Do you guarantee rankings?",
      answer: "No ethical SEO provider can guarantee rankings. We guarantee best-practice execution and transparency."
    },
    {
      question: "Is SEO still worth it with AI search?",
      answer: "Yes. SEO remains critical and works alongside AI search optimization."
    },
    {
      question: "Do you offer local and e-commerce SEO?",
      answer: "Yes. We provide both local SEO and e-commerce SEO services."
    }
  ];

  return (
    <div className="seos__wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="seos__hero">
        <div className="seos__hero_elements">
          <div className="seos__hero_circle seos__circle_1"></div>
          <div className="seos__hero_circle seos__circle_2"></div>
          <div className="seos__hero_circle seos__circle_3"></div>
        </div>
        <div className="seos__hero_container">
          <div className="seos__hero_tag">
            <span className="seos__tag_icon">🔍</span>
            SEO Services
          </div>
          <h1 className="seos__hero_title">
            SEO Services That Increase Visibility, Traffic & Qualified Leads
          </h1>
          <p className="seos__hero_text">
            We provide professional SEO services designed to help businesses rank higher on Google, 
            attract qualified traffic, and generate consistent leads. Our approach combines technical 
            SEO, content optimization, and data-driven strategy to deliver long-term, sustainable results.
          </p>
          <a href="#contact" className="seos__hero_btn">
             Get a Free SEO Audit
          </a>
        </div>
      </section>

      {/* What Are SEO Services */}
      <section className="seos__what_section">
        <div className="seos__container">
          <h2 className="seos__heading">What Are SEO Services?</h2>
          <p className="seos__description">
            SEO services focus on optimizing your website so it ranks higher in search engines for 
            relevant keywords your customers are actively searching for. Unlike short-term ads, SEO 
            builds long-term visibility and trust that compounds over time.
          </p>
          <div className="seos__built_for">
            <h3>Our SEO strategies are built for:</h3>
            <div className="seos__built_grid">
              {builtFor.map((item, index) => (
                <div key={index} className="seos__built_item">
                  <span className="seos__built_icon">{item.icon}</span>
                  <span className="seos__built_text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs */}
      <section className="seos__audience_section">
        <div className="seos__container">
          <h2 className="seos__heading">Who Needs SEO Services?</h2>
          <p className="seos__subtitle">This service is ideal for:</p>
          <div className="seos__audience_list">
            {whoNeeds.map((item, index) => (
              <div key={index} className="seos__audience_item">
                <span className="seos__audience_dot"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="seos__audience_footer">
            If your customers search online before buying, SEO is essential.
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="seos__problems_section">
        <div className="seos__container">
          <h2 className="seos__heading">Problems We Solve with SEO</h2>
          <div className="seos__problems_grid">
            {problems.map((problem, index) => (
              <div key={index} className="seos__problem_card">
                <div className="seos__problem_icon">{problem.icon}</div>
                <p className="seos__problem_text">{problem.text}</p>
              </div>
            ))}
          </div>
          <p className="seos__problems_note">
            We fix what's holding your site back — technically and strategically.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="seos__services_section">
        <div className="seos__container">
          <h2 className="seos__heading">Our SEO Services</h2>
          <p className="seos__subtitle">
            We offer complete end-to-end SEO services, including:
          </p>
          <div className="seos__services_grid">
            {services.map((service, index) => (
              <div key={index} className="seos__service_item">
                <div className="seos__service_check">✓</div>
                <span>{service}</span>
              </div>
            ))}
          </div>
          <p className="seos__services_footer">
            Every SEO campaign is custom-built, not templated.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="seos__comparison_section">
        <div className="seos__container">
          <h2 className="seos__heading">SEO vs AI Search Optimization (Important Difference)</h2>
          <div className="seos__comparison_wrapper">
            <div className="seos__comparison_col seos__col_traditional">
              <h3>Traditional SEO</h3>
              {comparison.map((item, index) => (
                <div key={index} className="seos__comparison_row">{item.traditional}</div>
              ))}
            </div>
            <div className="seos__comparison_vs">VS</div>
            <div className="seos__comparison_col seos__col_ai">
              <h3>AI Search Optimization</h3>
              {comparison.map((item, index) => (
                <div key={index} className="seos__comparison_row">{item.ai}</div>
              ))}
            </div>
          </div>
          <div className="seos__comparison_cta">
             For AI-driven visibility, see our <a href="/ai-search-optimization">AI Search Optimization service</a>.
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="seos__process_section">
        <div className="seos__container">
          <h2 className="seos__heading">Our SEO Process</h2>
          <div className="seos__process_grid">
            {processSteps.map((step, index) => (
              <div key={index} className="seos__process_card">
                <div className="seos__process_badge">{step.number}</div>
                <h3 className="seos__process_title">{step.title}</h3>
                <p className="seos__process_desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="seos__tools_section">
        <div className="seos__container">
          <h2 className="seos__heading">Tools & Platforms We Use</h2>
          <div className="seos__tools_grid">
            {tools.map((tool, index) => (
              <div key={index} className="seos__tool_badge">{tool}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="seos__why_section">
        <div className="seos__container">
          <h2 className="seos__heading">Why Choose ZonzocTech for SEO Services?</h2>
          <div className="seos__why_list">
            {whyChoose.map((reason, index) => (
              <div key={index} className="seos__why_item">
                <span className="seos__why_icon">★</span>
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <p className="seos__why_footer">
            We focus on rankings that convert, not vanity metrics.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="seos__faq_section">
        <div className="seos__container">
          <h2 className="seos__heading">Frequently Asked Questions</h2>
          <div className="seos__faq_list">
            {faqs.map((faq, index) => (
              <div key={index} className="seos__faq_item">
                <h4 className="seos__faq_question">{faq.question}</h4>
                <p className="seos__faq_answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="seos__cta_section">
        <div className="seos__container">
          <h2 className="seos__cta_title">Ready to Grow with SEO?</h2>
          <p className="seos__cta_text">
            If you want consistent traffic and leads from search engines, let's start with a clear 
            SEO strategy.
          </p>
          <a href="#contact" className="seos__cta_btn">
             Get a Free SEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;
