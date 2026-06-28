import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import TechnologyStackSection from '../components/TechnologyStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { SERVICE_CONTACT } from '../content/serviceContactContent';
import { SERVICE_TECH_STACK } from '../content/serviceTechStackContent';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';
import aiRobotImage from '../assets/icons/ecd-ai-robot.png';

// Global CSS import removed from here since it is loaded in pages/_app.js [1]

const EcommerceDev = () => {
  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const targetAudience = [
    "New e-commerce brands launching online",
    "Existing stores with low conversion rates",
    "Businesses facing slow site speed or checkout issues",
    "Brands needing custom features or integrations",
    "E-commerce owners scaling operations"
  ];
const colors = ["#0F172A", "#1E293B", "#334155", "#475569", "#64748B"];
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

      {/* 1️⃣ Hero Section */}
      <section className="ecd__hero">
        <div className="ecd__hero_pattern"></div>
        <div className="ecd__hero_container">
          <Breadcrumb items={PAGE_BREADCRUMBS.ecommerceDevelopment} className="breadcrumb--centered breadcrumb--on-dark" />
          <div className="ecd__hero_badge">
            <span className="ecd__badge_dot"></span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">E-Commerce Development</span>
              <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
            </span>
          </div>
          <h1 className="ecd__h1">
            {MAIN_SERVICE_SEO.ecommerceDevelopment.h1}
          </h1>
          <p className="ecd__hero_text">
            We provide e-commerce development and optimization services designed to help online stores 
            grow revenue, improve user experience, and scale confidently. From custom store development 
            to performance, conversion, and automation enhancements, we build e-commerce platforms that 
            are fast, secure, and optimized for sales.
          </p>
          <div className="ecd__hero_actions">
            <a href="#contact" className="ecd__hero_cta_primary">
              Get Free Consultation
            </a>
            <a href="#case-studies" className="ecd__hero_cta_secondary">
              View Portfolio <span className="arrow">→</span>
            </a>
          </div>
          <HeroTrustText text={HERO_TRUST_TEXT.ecommerce} />
        </div>
      </section>

      {/* What Section */}
      <section className="ecd__what_section">
        <div className="ecd__bg_blur ecd__blur1"></div>
        <div className="ecd__bg_blur ecd__blur2"></div>
        <div className="ecd__container ecd__what_wrapper">
          <div className="ecd__content">
            <span className="ecd__label">Modern E-commerce Solutions</span>
            <h2 className="ecd__h2">
              Build Faster.<br />Convert Better.<br />Scale Smarter.
            </h2>
            <p className="ecd__description">
              We create optimized e-commerce experiences focused on speed,
              conversions, automation, SEO, and long-term scalability.
            </p>
            <div className="ecd__impact">
              Revenue-focused development for modern online brands.
            </div>
          </div>
          <div className="ecd__floating_cards">
            <div className="ecd__glass_card card1">
              <h3 className="ecd__h3">⚡ Lightning Speed</h3>
              <p>Fast-loading storefronts that improve retention.</p>
            </div>
            <div className="ecd__glass_card card2">
              <h3 className="ecd__h3">🛒 Conversion UX</h3>
              <p>Optimized checkout experiences that increase sales.</p>
            </div>
            <div className="ecd__glass_card card3">
              <h3 className="ecd__h3">📈 SEO Growth</h3>
              <p>Scalable architecture designed for organic growth.</p>
            </div>
          </div>
        </div>
      </section>


      {/* =================================================================
         REARRANGED SYSTEM SECTIONS (STARTING FROM TARGET AUDIENCE)
         ================================================================= */}

      {/* 2️⃣ TARGET AUDIENCE: Bento Audience Grid */}
      <section className="ecd__bento_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge yellow">TARGET AUDIENCE</span>
            <h2 className="ecd__h2">Who Is This Service For?</h2>
            <p className="ecd__sec_subtitle">Designed for ecommerce brands that want more conversions, more customers, and more revenue.</p>
          </div>
          
          <div className="ecd__bento_grid">
            {targetAudience.map((item, idx) => {
              // Alternating Big vs Small layout types and colors (Yellow, Cyan, Green)
              const bentoTypes = ['big', 'small', 'small', 'big', 'big'];
              const bentoColors = ['yellow', 'cyan', 'green', 'cyan', 'green'];
              const type = bentoTypes[idx % bentoTypes.length];
              const color = bentoColors[idx % bentoColors.length];
              
              return (
                <div key={idx} className={`ecd__bento_card bento_${type} bento_${color}`}>
                  <div className="ecd__bento_accent_line"></div>
                  <span className="ecd__bento_label">AUDIENCE INDEX 0{idx + 1}</span>
                  <h3 className="ecd__h3">{item}</h3>
                  <p className="ecd__bento_desc">We structure dedicated design funnels to support this exact audience segment natively, boosting organic conversions.</p>
                </div>
              );
            })}
          </div>

          <div className="ecd__bento_bottom_note">
            <p>If your store gets traffic but not sales, <span className="highlight">optimization is the missing link.</span></p>
          </div>
        </div>
      </section>


      {/* 3️⃣ PROBLEMS SECTION: Pain Point Warning Stack */}
      <section className="ecd__pain_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge orange">WARNING SIGNALS</span>
            <h2 className="ecd__h2">Problems We Solve for E-commerce Businesses</h2>
            <p className="ecd__sec_subtitle">If your metrics show these symptoms, code adjustments and conversion funnels are required.</p>
          </div>

          <div className="ecd__pain_stack">
            {problems.map((problem, idx) => (
              <div key={idx} className="ecd__pain_item">
                <div className="ecd__pain_meta">
                  <span className="ecd__pain_icon">{problem.icon}</span>
                  <span className="ecd__pain_label">ALERT ISSUE 0{idx + 1}</span>
                </div>
                <h3 className="ecd__h3">{problem.text}</h3>
                <p className="ecd__pain_desc">Unoptimized architectures and default platform structures contribute directly to drop-offs. We resolve this natively.</p>
              </div>
            ))}
          </div>
          <p className="ecd__problems_footer">
            We turn underperforming stores into revenue-generating platforms.
          </p>
        </div>
      </section>


      {/* 4️⃣ SERVICES SECTION: Zig-Zag Service Timeline */}
      <section className="ecd__timeline_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge purple">SERVICES</span>
            <h2 className="ecd__h2">Our E-commerce Development & Optimization Services</h2>
            <p className="ecd__sec_subtitle">We deliver end-to-end e-commerce development and optimization solutions, including:</p>
          </div>

          <div className="ecd__timeline_container">
            <div className="ecd__timeline_line"></div>
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`ecd__timeline_row ${isEven ? 'row_left' : 'row_right'}`}>
                  {isEven ? (
                    <>
                      <div className="ecd__timeline_content">
                        <span className="ecd__timeline_num">{String(idx + 1).padStart(2, '0')}</span>
                        <h3 className="ecd__h3">{service}</h3>
                        <p>Our engineering team designs custom structural layouts to optimize performance, increase stability, and maximize e-commerce checkout flow natively.</p>
                      </div>
                      <div className="ecd__timeline_node">◉</div>
                      <div className="ecd__timeline_spacer"></div>
                    </>
                  ) : (
                    <>
                      <div className="ecd__timeline_spacer"></div>
                      <div className="ecd__timeline_node">◉</div>
                      <div className="ecd__timeline_content">
                        <span className="ecd__timeline_num">{String(idx + 1).padStart(2, '0')}</span>
                        <h3 className="ecd__h3">{service}</h3>
                        <p>We implement automated workflows, custom asset rendering systems, and schema tags configured strictly for performance and conversion scaling.</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <p className="ecd__services_note">
            Each store is built for growth, security, and long-term scalability.
          </p>
        </div>
      </section>


      
     {/* 5️⃣ PLATFORMS SECTION: Connected Architecture Diagram */}
      <section className="ecd__platform_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge cyan">ARCHITECTURE</span>
            <h2 className="ecd__h2">E-commerce System Architecture</h2>
            <p className="ecd__sec_subtitle">We deploy custom-tailored environments configured for high-performance scale.</p>
          </div>

          <div className="ecd__arch_diagram">
            {/* Top Bar Label */}
            <div className="ecd__arch_top_bar">
              <span>E-COMMERCE PLATFORMS & SYSTEM ENVIRONMENT</span>
            </div>

            <div className="ecd__arch_grid">
              
              {/* COLUMN 1: CUSTOM DEVELOPMENT & HIGH-PERFORMANCE (GREEN THEME) */}
              <div className="ecd__arch_col col_left">
                {/* Community/Customers Muted Node */}
                <div className="ecd__arch_node node_muted">
                  <div className="node_icon_wrapper">👥</div>
                  <div className="node_text_content">
                    <h5 className="ecd__h5">Community</h5>
                    <p>Results, curation & feedback loop</p>
                  </div>
                </div>

                {/* Management Muted Node */}
                <div className="ecd__arch_node node_muted">
                  <div className="node_icon_wrapper">👤</div>
                  <div className="node_text_content">
                    <h5 className="ecd__h5">Management</h5>
                    <p>Performance insights & metrics</p>
                  </div>
                </div>

                {/* High-Performance Custom Solutions Node */}
                <div className="ecd__arch_node node_system theme_green">
                  <div className="node_system_badge">
                    <span className="badge_icon">⚙️</span>
                    <span>HPC / SPEED ENGINE</span>
                  </div>
                  <h5 className="ecd__h5">{platforms[0]}</h5>
                </div>

                {/* Computational Scientists (Left-Bottom Actor) */}
                <div className="ecd__arch_actor actor_green">
                  <span className="actor_avatar">🟢</span>
                  <div className="actor_text">
                    <h5 className="ecd__h5">Computational Scientists</h5>
                  </div>
                </div>
              </div>

              {/* COLUMN 2: CENTRAL APPLICATIONS CORE (ORANGE & PURPLE THEME) */}
              <div className="ecd__arch_col col_center">
                {/* Database Node */}
                <div className="ecd__arch_node node_db theme_purple">
                  <span className="db_cylinder">🛢️</span>
                  <h5 className="ecd__h5">E-commerce Database</h5>
                </div>

                {/* Applications Laptop Node */}
                <div className="ecd__arch_node node_laptop theme_orange">
                  <span className="laptop_screen">💻</span>
                  <h5 className="ecd__h5">Applications Core</h5>
                </div>

                {/* Central Software Developers Actor */}
                <div className="ecd__arch_actor actor_orange">
                  <span className="actor_avatar">🟠</span>
                  <div className="actor_text">
                    <h5 className="ecd__h5">Software Developers</h5>
                    <p>Experimental validation & modeling</p>
                  </div>
                </div>
              </div>

              {/* COLUMN 3: HEADLESS CMS & API LABS (PURPLE & BLUE THEMES) */}
              <div className="ecd__arch_col col_right">
                {/* Data Platform / Headless Architecture Node */}
                <div className="ecd__arch_node node_system theme_purple">
                  <div className="node_system_badge">
                    <span className="badge_icon">⚙️</span>
                    <span>DATA PLATFORM</span>
                  </div>
                  <h5 className="ecd__h5">{platforms[2]}</h5>
                </div>

                {/* Laboratory / Flexible CMS-Based Node */}
                <div className="ecd__arch_node node_system theme_blue">
                  <div className="node_system_badge">
                    <span className="badge_icon">⚙️</span>
                    <span>LABORATORY</span>
                  </div>
                  <h5 className="ecd__h5">{platforms[1]}</h5>
                  <p className="node_mini_desc">{platforms[3]}</p>
                </div>

                {/* Experimental Scientists (Right-Bottom Actor) */}
                <div className="ecd__arch_actor actor_blue">
                  <span className="actor_avatar">🔵</span>
                  <div className="actor_text">
                    <h5 className="ecd__h5">Experimental Scientists</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <p className="ecd__platforms_note">
            (We select platforms based on your business goals — not limitations.)
          </p>
        </div>
      </section>


      {/* 6️⃣ COMPARISON SECTION: Before vs After Transformation UI */}
      <section id="case-studies" className="ecd__compare_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge green">TRANSFORMATION</span>
            <h2 className="ecd__h2">E-commerce Optimization vs Basic Setup</h2>
            <p className="ecd__sec_subtitle">See how custom code adjustments and semantic layouts directly translate into checkout revenue.</p>
          </div>

          <div className="ecd__compare_grid">
            {/* Before Card */}
            <div className="ecd__compare_card card_before">
              <div className="ecd__compare_tag tag_red">❌ BASIC UNOPTIMIZED SETUP</div>
              <ul className="ecd__compare_list">
                {comparison.map((item, idx) => (
                  <li key={idx}>
                    <span className="label">Structure metric:</span>
                    <span className="val bad">{item.basic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transition Indicator */}
            <div className="ecd__compare_arrow">➜</div>

            {/* After Card */}
            <div className="ecd__compare_card card_after">
              <div className="ecd__compare_tag tag_green">✅ OPTIMIZED ACTIVE SETUP</div>
              <ul className="ecd__compare_list">
                {comparison.map((item, idx) => (
                  <li key={idx}>
                    <span className="label">Optimized metric:</span>
                    <span className="val good">{item.optimized}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="ecd__comparison_tagline">
            Optimization is what turns traffic into revenue.
          </p>
        </div>
      </section>


      {/* 7️⃣ PROCESS SECTION: Connected Circular Workflow */}
   {/* 7️⃣ PROCESS SECTION: Connected Circular Workflow (Infographic Wave Style) */}
      <section className="ecd__process_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge purple">PROCESS SYSTEM</span>
            <h2 className="ecd__h2">Our E-commerce Development Process</h2>
            <p className="ecd__sec_subtitle">A transparent, data-backed step methodology from audit diagnostics to live launch.</p>
          </div>

          <div className="ecd__process_workflow">
            {processSteps.map((step, idx) => {
              // Map each step to its exact color theme class from the infographic
              const stepThemes = ['ecd__step_blue', 'ecd__step_orange', 'ecd__step_green', 'ecd__step_purple', 'ecd__step_pink'];
              const currentTheme = stepThemes[idx % stepThemes.length];

              // Set matching SVG icons for each process step
              const stepIcons = [
                // Step 1: Research & Planning (Blue)
                <svg className="ecd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <path d="M11 8v6M8 11h6" />
                </svg>,
                // Step 2: Design & Architecture (Orange)
                <svg className="ecd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 11 2 15C2 18 5 22 12 22Z" />
                  <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
                  <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
                  <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
                </svg>,
                // Step 3: Development & Optimization (Green)
                <svg className="ecd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>,
                // Step 4: Testing & Quality Assurance (Purple)
                <svg className="ecd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <polyline points="16 13 12 17 9 14" />
                </svg>,
                // Step 5: Launch & Growth Support (Pink)
                <svg className="ecd__node_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" />
                  <path d="M12 12l9-9-3 12-6 3-3-6z" />
                  <path d="M9 15l-3-3" />
                </svg>
              ];

              return (
                <div key={idx} className={`ecd__process_step ${currentTheme}`}>
                  {/* Outer Wave Arch */}
                  <div className="ecd__process_arch"></div>

                  {/* Inner Node Circle with Icon */}
                  <div className="ecd__process_node_circle">
                    {stepIcons[idx]}
                  </div>

                  {/* Text Labels */}
                  <span className="ecd__process_label">STEP 0{idx + 1}</span>
                  <h4 className="ecd__h4">{step.title}</h4>
                  <p className="ecd__process_step_desc">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 8️⃣ WHY CHOOSE SECTION: Trust Authority Cards */}

      <section className="ecd__split_section">
  <div className="ecd__page_container ecd__split_layout">
    
    {/* Left Column: Sticky Header */}
    <div className="ecd__split_left">
      <div className="ecd__header_content">
        <span className="ecd__sec_badge cyan">WHY WORK WITH US</span>
        <h2 className="ecd__h2">Why Choose Vexoweb for E-commerce Development?</h2>
        <p className="ecd__sec_subtitle">We reject basic templates. We focus entirely on checkout conversion, custom code stability, and system speed.</p>
        <div className="ecd__why_statement_big">
          We don't just build online stores — we build e-commerce engines.
        </div>
        <div className="ecd__why_robot_wrap">
          <img
            src={aiRobotImage}
            alt="AI-powered e-commerce automation"
            className="ecd__why_robot_img"
          />
        </div>
      </div>
    </div>

    {/* Right Column: Seamless Color-Coded Blocks */}
    <div className="ecd__split_right_seamless">
      {whyChoose.map((reason, idx) => (
        <div 
          key={idx} 
          className="ecd__feature_block_seamless"
          style={{ backgroundColor: colors[idx % colors.length] }}
        >
          <span className="ecd__feature_index">0{idx + 1}</span>
          <p className="ecd__feature_text">{reason}</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* 9️⃣ FAQ SECTION: Glass Accordion Knowledge Base */}
      <section className="ecd__faq_section">
        <div className="ecd__page_container">
          <div className="ecd__sec_header">
            <span className="ecd__sec_badge blue">FAQ</span>
            <h2 className="ecd__h2">Frequently Asked Questions</h2>
            <p className="ecd__sec_subtitle">Everything you need to know about our e-commerce audit, design, and performance optimizations.</p>
          </div>

          <div className="ecd__faq_accordion_container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`ecd__faq_item ${activeFaq === idx ? 'faq_active' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="ecd__faq_trigger">
                  <h4 className="ecd__h4">{faq.question}</h4>
                  <span className="ecd__faq_icon_status">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                <div className="ecd__faq_panel">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <TechnologyStackSection {...SERVICE_TECH_STACK.ecommerce} />

      <ContactSection {...SERVICE_CONTACT.ecommerce} variant="service" />

      <Footer />
    </div>
  );
};

export default EcommerceDev;