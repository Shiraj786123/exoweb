import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import TechnologyStackSection from '../components/TechnologyStackSection';
import { SERVICE_CONTACT } from '../content/serviceContactContent';
import { SERVICE_TECH_STACK } from '../content/serviceTechStackContent';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const FullStackWebDev = () => {
  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      title: "Custom Website & Web Application Development",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      title: "Frontend UI/UX Development",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 11 2 15C2 18 5 22 12 22Z" />
          <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Backend & API Development",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      title: "Database Design & Optimization",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      title: "Third-Party & System Integrations",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    {
      title: "E-commerce Functionality",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      title: "Authentication & User Management",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Performance Optimization & Security",
      icon: (
        <svg className="fswd__svc_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  const whoNeeds = [
    "Startups building MVPs or SaaS platforms",
    "Businesses needing custom web applications",
    "Companies replacing outdated or slow websites",
    "E-commerce brands requiring advanced functionality",
    "Organizations needing scalable backend systems"
  ];

  const problems = [
    "Slow or unstable websites",
    "Poor frontend user experience",
    "Inefficient backend systems",
    "Data and integration issues",
    "Applications that can't scale"
  ];

  const techStack = [
    "Frontend frameworks (React, Next.js, etc.)",
    "Backend systems and APIs",
    "Databases and cloud infrastructure",
    "Secure authentication & authorization",
    "DevOps & deployment pipelines"
  ];

  const aiFeatures = [
    "AI-powered features",
    "GPT integrations",
    "Automation workflows",
    "Intelligent dashboards"
  ];

  const processSteps = [
    {
      number: "1",
      title: "Requirements & Planning",
      description: "We define features, architecture, and timelines clearly."
    },
    {
      number: "2",
      title: "Design & Architecture",
      description: "We design UI, backend structure, and data flow."
    },
    {
      number: "3",
      title: "Development",
      description: "Frontend and backend are built together for efficiency."
    },
    {
      number: "4",
      title: "Testing & Quality Assurance",
      description: "We test performance, security, and real-world usage."
    },
    {
      number: "5",
      title: "Deployment & Support",
      description: "We launch, monitor, and support your application long-term."
    }
  ];

  const whyChoose = [
    "Strong engineering foundations",
    "Experience across frontend & backend",
    "Clean, maintainable codebases",
    "Security-first development",
    "Long-term scalability mindset"
  ];

  const faqs = [
    {
      question: "What types of projects do you handle?",
      answer: "We build websites, web applications, internal tools, SaaS platforms, and e-commerce systems."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Yes. We can improve, refactor, or extend existing full-stack applications."
    },
    {
      question: "Is full-stack development scalable?",
      answer: "Yes. Our systems are designed to scale as traffic, data, and features grow."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We offer maintenance, optimization, and feature enhancements."
    }
  ];

  return (
    <div className="fswd__page_wrapper">
      <Navbar />

      {/* HERO SECTION */}
<section className="fswd__hero_section">
  <div className="fswd__hero_overlay"></div>
  <div className="fswd__hero_content">
    <div className="fswd__hero_badge">
      <span className="badge-dot">●</span>
      <span className="hero-badge-text">
        <span className="hero-badge-accent">Website Development</span>
        <span className="hero-badge-light"> — Batticaloa, Sri Lanka</span>
      </span>
    </div>
    <h1 className="fswd__hero_title">
      Professional Website Design &amp; Development in{" "}
      <span className="highlight-text">Batticaloa</span>
    </h1>
    <p className="fswd__hero_description">
      We build fast, mobile-friendly websites for shops, clinics, schools, and businesses 
      across Batticaloa, Kattankudy, and the Eastern Province — at prices that make 
      sense locally.
    </p>
    <a href="#contact" className="fswd__cta_primary">
      Get a Free Website Consultation
    </a>
    <HeroTrustText text={HERO_TRUST_TEXT.fullStack} />
  </div>
</section>

      {/* 2️⃣ What Is Section (Editorial Split Column Layout [1]) */}
      <section className="fswd__what_section">
        <div className="fswd__container fswd__what_wrapper">
          <div className="fswd__what_content_left">
            <span className="fswd__sec_badge yellow">DEFINED</span>
            <h2 className="fswd__section_heading">What Is Full-Stack Web Development?</h2>
            <p className="fswd__section_description">
              Full-stack web development involves building both the frontend and backend of a website 
              or web application. It ensures seamless communication between user interfaces, servers, 
              databases, and third-party systems — resulting in faster, more secure, and easier-to-maintain 
              products.
            </p>
          </div>
          <div className="fswd__what_box_right">
            <div className="fswd__callout_box">
              <span className="fswd__callout_icon">💡</span>
              <p>Instead of managing multiple disjointed vendors, you get one integrated development solution under a single engineering codebase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Who Needs & Problems Split Section (Diagnostic Color Card Split [1]) */}
      {/* 3️⃣ Who Needs & Problems Split Section (Split Background Color Redesign [1]) */}
        <section className="fswd__split_section_split">
          <div className="fswd__container">
            
            <span className="fswd__sec_badge yellow">DIAGNOSTIC</span>
            <h2 className="fswd__section_heading_white">Target Alignment & Problem Solving</h2>
            <p className="fswd__section_description_white">
              We identify system bottlenecks and align frontend capabilities with high-performance backend pipelines.
            </p>

            <div className="fswd__split_grid_split">
              {/* Left Card: Who Needs It (Overlapping split line [1]) */}
              <div className="fswd__split_card_split split_blue">
                <span className="fswd__split_tag">TARGET AUDIENCE</span>
                <h3 className="fswd__split_title">Who Needs Full-Stack Web Development?</h3>
                <p className="fswd__split_intro">This service is ideal for:</p>
                <ul className="fswd__check_list">
                  {whoNeeds.map((item, index) => (
                    <li key={index}>
                      <span className="check_marker">✓</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="fswd__split_footer">
                  If your project requires more than a basic website, full-stack development is essential.
                </p>
              </div>

              {/* Right Card: Problems We Solve (Overlapping split line [1]) */}
              <div className="fswd__split_card_split split_red">
                <span className="fswd__split_tag">WARNING SIGNALS</span>
                <h3 className="fswd__split_title">Problems We Solve</h3>
                <ul className="fswd__problem_list">
                  {problems.map((item, index) => (
                    <li key={index}>
                      <span className="warn_marker">⚠️</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <p className="fswd__split_footer">
                  We build systems that are fast, reliable, and future-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* 4️⃣ Services Section (Asymmetric Bento Grid with Custom SVGs [1]) */}
      <section className="fswd__services_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge purple">CAPABILITIES</span>
          <h2 className="fswd__section_heading">Our Full-Stack Web Development Services</h2>
          <p className="fswd__section_description">
            We deliver complete end-to-end full-stack web development, including:
          </p>
          <div className="fswd__services_bento_grid">
            {services.map((service, index) => {
              // Alternating asymmetrical sizes and themes (Blue, Cyan, Purple, Green, Orange) [1]
              const bentoSizes = ["bento_wide", "bento_normal", "bento_normal", "bento_wide", "bento_normal", "bento_normal", "bento_wide", "bento_normal"];
              const bentoThemes = ["svc_blue", "svc_cyan", "svc_purple", "svc_green", "svc_orange", "svc_blue", "svc_purple", "svc_cyan"];
              
              const currentSize = bentoSizes[index % bentoSizes.length];
              const currentTheme = bentoThemes[index % bentoThemes.length];

              return (
                <div key={index} className={`fswd__service_bento_card ${currentSize} ${currentTheme}`}>
                  <div className="fswd__service_node_accent"></div>
                  <div className="fswd__service_bento_header">
                    <div className="fswd__service_bento_icon_circle">
                      {service.icon}
                    </div>
                    <span className="fswd__service_bento_index">SERVICE 0{index + 1}</span>
                  </div>
                  <h4 className="fswd__service_name">{service.title}</h4>
                </div>
              );
            })}
          </div>
          <p className="fswd__services_note">
            Every project is engineered for performance, scalability, and maintainability.
          </p>
        </div>
      </section>

      {/* 5️⃣ Technology Stack (Floating Ecosystem Constellation [1]) */}
      <section className="fswd__tech_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge cyan">Ecosystem</span>
          <h2 className="fswd__section_heading">Our Technology Stack</h2>
          <p className="fswd__section_description">
            We work with modern, proven technologies including:
          </p>

          <div className="fswd__tech_ecosystem">
            <div className="fswd__tech_circle main_center">
              <span>CORE STACK</span>
            </div>
            {techStack.map((tech, index) => {
              // Satellite coordinates [1]
              const satClasses = ['sat_front', 'sat_back', 'sat_db', 'sat_auth', 'sat_devops'];
              const satClass = satClasses[index % satClasses.length];
              return (
                <div key={index} className={`fswd__tech_circle tech_sat ${satClass}`}>
                  <strong>{tech}</strong>
                </div>
              );
            })}
          </div>
          <p className="fswd__tech_note">
            We select the stack based on your goals, scale, and budget.
          </p>
        </div>
      </section>

      {/* 6️⃣ AI Enhancement Section (Cybernetic Glass Highlight Card [1]) */}
      <section className="fswd__ai_section">
        {/* Soft floating background blurs [1] */}
        <div className="fswd__ai_blur ai_blur1"></div>
        <div className="fswd__ai_blur ai_blur2"></div>

        <div className="fswd__container">
          <div className="fswd__ai_content_card">
            <span className="fswd__sec_badge orange">INTELLIGENCE</span>
            <h2 className="fswd__ai_heading">Full-Stack Development + AI</h2>
            <p className="fswd__ai_subtitle">(Optional but Powerful)</p>
            <p className="fswd__ai_description">
              When required, we enhance full-stack applications with:
            </p>
            <div className="fswd__ai_features">
              {aiFeatures.map((feature, index) => {
                // Different subtle colored pills [1]
                const pillThemes = ['pill_cyan', 'pill_purple', 'pill_green', 'pill_orange'];
                const currentTheme = pillThemes[index % pillThemes.length];
                return (
                  <div key={index} className={`fswd__ai_feature ${currentTheme}`}>{feature}</div>
                );
              })}
            </div>
            <p className="fswd__ai_footer">
              This allows you to upgrade to AI gradually, without rebuilding from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* 7️⃣ Process Section (Infographic Wave Style - Same as previous turning requirement [1]) */}
      <section className="fswd__process_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge purple">PROCESS</span>
          <h2 className="fswd__section_heading">Our Full-Stack Development Process</h2>
          <p className="fswd__section_description">A transparent, data-backed step methodology from audit diagnostics to live launch.</p>
          
          <div className="fswd__process_workflow">
            {processSteps.map((step, idx) => {
              // Exact infographic matching colors [1]
              const stepThemes = ['fswd_step_blue', 'fswd_step_orange', 'fswd_step_green', 'fswd_step_purple', 'fswd_step_pink'];
              const currentTheme = stepThemes[idx % stepThemes.length];

              // Custom SVG Icons matched to process steps [1]
              const stepIcons = [
                // Step 1: Requirements & Planning
                <svg className="fswd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v6M8 11h6" />
                </svg>,
                // Step 2: Design & Architecture
                <svg className="fswd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 11 2 15C2 18 5 22 12 22Z" />
                  <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" /><circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" /><circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
                </svg>,
                // Step 3: Development
                <svg className="fswd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
                </svg>,
                // Step 4: Testing & QA
                <svg className="fswd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><polyline points="16 13 12 17 9 14" />
                </svg>,
                // Step 5: Deployment & Support
                <svg className="fswd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" /><path d="M12 12l9-9-3 12-6 3-3-6z" /><path d="M9 15l-3-3" />
                </svg>
              ];

              return (
                <div key={idx} className={`fswd__process_step ${currentTheme}`}>
                  {/* Semicircle arch connector [1] */}
                  <div className="fswd__process_arch"></div>
                  
                  {/* Saturated Icon Node Circle [1] */}
                  <div className="fswd__process_node_circle">
                    {stepIcons[idx]}
                  </div>

                  <span className="fswd__process_label">STEP {step.number}</span>
                  <h4 className="fswd__process_step_title">{step.title}</h4>
                  <p className="fswd__process_step_desc">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8️⃣ Why Choose Us (Symmetrical Strip Stack - Stripe style [1]) */}
      <section className="fswd__why_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge cyan">DIFFERENTIATORS</span>
          <h2 className="fswd__section_heading">
            Why Choose ZonzocTech for Full-Stack Web Development?
          </h2>
          <p className="fswd__section_description">We focus strictly on clear outcomes, clean code bases, and performance scalability.</p>
          
          <div className="fswd__why_strip_list">
            {whyChoose.map((reason, index) => {
              // Custom color themes mapped to each row [1]
              const themes = ['fswd_item_blue', 'fswd_item_purple', 'fswd_item_green', 'fswd_item_orange', 'fswd_item_cyan'];
              const currentTheme = themes[index % themes.length];

              return (
                <div key={index} className={`fswd__why_strip_item ${currentTheme}`}>
                  <div className="fswd__why_strip_left">
                    {/* Circle index badge [1] */}
                    <div className="fswd__why_strip_circle">0{index + 1}</div>
                    <span className="fswd__why_strip_text">{reason}</span>
                  </div>
                  <span className="fswd__why_strip_arrow_icon">→</span>
                </div>
              );
            })}
          </div>

          <div className="fswd__why_callout">
            We don't just build websites — we build reliable digital systems.
          </div>
        </div>
      </section>

      {/* 9️⃣ FAQ Accordion (Interactive Glass Accordion Drawers [1]) */}
      <section className="fswd__faq_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge blue">FAQ</span>
          <h2 className="fswd__section_heading">Frequently Asked Questions</h2>
          <p className="fswd__section_description">Everything you need to know about our custom full-stack web development services.</p>

          <div className="fswd__faq_accordion_container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`fswd__faq_item_card ${activeFaq === index ? 'faq_active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="fswd__faq_trigger">
                  <h4>{faq.question}</h4>
                  <span className="fswd__faq_status_icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="fswd__faq_panel">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyStackSection {...SERVICE_TECH_STACK.fullStack} />

      <ContactSection {...SERVICE_CONTACT.fullStack} variant="service" />

      <Footer />
    </div>
  );
};

export default FullStackWebDev;