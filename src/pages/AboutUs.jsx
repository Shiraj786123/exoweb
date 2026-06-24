import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroTrustText from '../components/HeroTrustText';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

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
    { icon: "💰", text: "Conversion" }
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

      {/* 1️⃣ Hero Section */}
      <section className="abt__hero">
        <div className="abt__hero_pattern"></div>
        <div className="abt__hero_container">
          <div className="abt__hero_badge">
            <span className="abt__badge_dot"></span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">About Vexoweb</span>
              <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
            </span>
          </div>
          <h1 className="abt__hero_title">
            Intelligent Digital Solutions for Businesses in{" "}
            <span className="highlight-text">Eastern Province</span>
          </h1>
          <p className="abt__hero_description">
            Vexoweb is a technology-driven digital solutions company specializing in AI-powered 
            web applications, software development, full-stack development, SEO, and AI search optimization. 
            We help businesses build intelligent, performance-focused digital systems that convert.
          </p>
          <HeroTrustText text={HERO_TRUST_TEXT.about} />
        </div>
      </section>

   {/* 2️⃣ Who We Are (Symmetrical Split-Column Layout [1]) */}
     {/* 2️⃣ Who We Are (Overlapping Symmetrical Alignment Redesign [1]) */}
      <section className="abt__who_section">
        {/* Ambient Classic Animated Blurs */}
        <div className="abt__bg_blur blur_animate1"></div>
        <div className="abt__bg_blur blur_animate2"></div>

        <div className="abt__container abt__who_align_container">
          
          {/* Top Symmetrical Circle Hub (The Red Circle [1]) */}
          <div className="abt__who_circle_hub">
            <div className="abt__who_circle_inner">
              <span className="abt__sec_badge yellow">WHO WE ARE</span>
              {/* Symmetrical sliced circle vector matching the diagram [1] */}
              <svg className="abt__circle_svg" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" />
                <path d="M50 50 L82 18 A45 45 0 0 1 82 82 Z" fill="currentColor" opacity="0.15" />
                <path d="M50 50 L18 82 A45 45 0 0 1 18 18 Z" fill="currentColor" opacity="0.08" />
              </svg>
            </div>
          </div>

          {/* Overlapping Symmetrical Pill Container (The Lime Green Pill [1]) */}
          <div className="abt__who_pill_container">
            
            {/* Main Editorial Text Content */}
            <div className="abt__who_pill_content">
              <h2 className="abt__heading_center">Our Foundation & Mission</h2>
              <p className="abt__who_text_center">
                Vexoweb was founded with a clear mission: <strong>to help businesses grow using 
                modern technology, AI, and data-driven strategies — not hype or shortcuts.</strong> 
                We don't just "build websites" or "do SEO" — we solve real-world business problems using custom-engineered software systems.
              </p>
            </div>

            {/* Symmetrical Separator Line */}
            <div className="abt__line_separator"></div>

            {/* Symmetrical Row-Wise Focus Cards [1] */}
            <div className="abt__who_focus_grid_block">
              <h3 className="abt__focus_title_center">We work with brands that want:</h3>
              <div className="abt__wants_grid_center">
                {whatWeWant.map((item, index) => {
                  const themes = ['want_cyan', 'want_purple', 'want_blue', 'want_green'];
                  const currentTheme = themes[index % themes.length];
                  
                  return (
                    <div key={index} className={`abt__want_card_center ${currentTheme}`}>
                      <span className="abt__want_icon_badge_center">{item.icon}</span>
                      <p className="abt__want_text_center">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* 3️⃣ What Makes Us Different (Bento Asymmetric Redesign [1]) */}
      <section className="abt__different_section">
        <div className="abt__container">
          <span className="abt__sec_badge cyan">DIFFERENTIATORS</span>
          <h2 className="abt__heading">What Makes Us Different</h2>
          <p className="abt__sec_subtitle">
            Most agencies focus on either marketing or development. <strong>We bridge both.</strong>
          </p>
          
          <div className="abt__different_grid">
            {/* Left Box: Advantages timeline column [1] */}
            <div className="abt__different_box abt__adv_card">
              <h3>Our Core Advantage</h3>
              <div className="abt__advantages_list">
                {advantages.map((advantage, index) => (
                  <div key={index} className="abt__advantage_item">
                    <div className="abt__advantage_indicator">
                      <span className="abt__adv_index">0{index + 1}</span>
                    </div>
                    <p className="abt__advantage_text">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Dynamic Solutions Grid (5 Distinct Colorful Badges [1]) */}
            <div className="abt__different_box abt__solutions_card">
              <h3>Every Solution Is Designed To Be:</h3>
              <div className="abt__solutions_grid">
                {solutions.map((solution, index) => {
                  // Mapped to customized, distinct brand accents [1]
                  const solutionThemes = ['sol_cyan', 'sol_purple', 'sol_green', 'sol_blue', 'sol_orange'];
                  const currentTheme = solutionThemes[index % solutionThemes.length];
                  
                  return (
                    <div key={index} className={`abt__solution_badge ${currentTheme}`}>
                      <span className="abt__solution_icon">{solution.icon}</span>
                      <span className="abt__solution_text">{solution.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ What We Do (Services) */}
     {/* 4️⃣ What We Do (3 Circular Ecosystem Wheels [1]) */}
      <section className="abt__services_section">
        <div className="abt__container">
          <span className="abt__sec_badge purple">SERVICES</span>
          <h2 className="abt__heading">What We Do</h2>
          <p className="abt__sec_subtitle">We deliver robust, end-to-end digital solutions designed for conversion, stability, and scale.</p>
          
          <div className="abt__wheels_grid">
            
            {/* Wheel 1: Engineering & Apps (Blue Theme) */}
            <div className="abt__wheel_container theme_blue">
              <div className="abt__wheel_core">
                <span className="core_icon">💻</span>
                <h5>ENGINEERING</h5>
              </div>
              <div className="abt__wheel_nodes">
                <div className="abt__wheel_node n1">
                  <span>01</span>
                  <p>AI Web Application Development</p>
                </div>
                <div className="abt__wheel_node n2">
                  <span>02</span>
                  <p>AI Software Development</p>
                </div>
                <div className="abt__wheel_node n3">
                  <span>03</span>
                  <p>Full-Stack Web Development</p>
                </div>
              </div>
            </div>

            {/* Wheel 2: Design & Search (Cyan Theme) */}
            <div className="abt__wheel_container theme_cyan">
              <div className="abt__wheel_core">
                <span className="core_icon">🔍</span>
                <h5>OPTIMIZATION</h5>
              </div>
              <div className="abt__wheel_nodes">
                <div className="abt__wheel_node n1">
                  <span>04</span>
                  <p>AI Website Design & UX</p>
                </div>
                <div className="abt__wheel_node n2">
                  <span>05</span>
                  <p>SEO Services</p>
                </div>
                <div className="abt__wheel_node n3">
                  <span>06</span>
                  <p>AI Search Optimization (GEO)</p>
                </div>
              </div>
            </div>

            {/* Wheel 3: Automation & Scale (Purple Theme) */}
            <div className="abt__wheel_container theme_purple">
              <div className="abt__wheel_core">
                <span className="core_icon">⚙️</span>
                <h5>OPERATIONS</h5>
              </div>
              <div className="abt__wheel_nodes">
                <div className="abt__wheel_node n1">
                  <span>07</span>
                  <p>E-commerce Development & Optimization</p>
                </div>
                <div className="abt__wheel_node n2">
                  <span>08</span>
                  <p>AI Automation & Integrations</p>
                </div>
                <div className="abt__wheel_node n3">
                  <span>09</span>
                  <p>Website Performance, Security & Maintenance</p>
                </div>
              </div>
            </div>

          </div>

          <p className="abt__services_note">
            Each service is built around real-world business outcomes, not just technical delivery.
          </p>
        </div>
      </section>
      {/* 5️⃣ Our Approach */}
      {/* 5️⃣ Our Approach (Modern Roadmap Step Grid Redesign [1]) */}
      <section className="abt__approach_section_new">
        <div className="abt__container">
          <span className="abt__sec_badge green">APPROACH</span>
          <h2 className="abt__heading">Our Approach</h2>
          <p className="abt__sec_subtitle">A transparent, structured process engineered to yield actual business growth.</p>
          
          {/* Modern 4-Column Roadmap Flow [1] */}
          <div className="abt__approach_grid_new">
            {approach.map((step, index) => {
              // Custom colors matching your other pages [1]
              const stepColors = ['step_blue', 'step_orange', 'step_green', 'step_purple'];
              const currentTheme = stepColors[index % stepColors.length];
              
              return (
                <div key={index} className={`abt__approach_card_new ${currentTheme}`}>
                  {/* Huge translucent background watermark number [1] */}
                  <div className="abt__step_watermark">0{step.number}</div>
                  
                  {/* Top colored accent indicator bar [1] */}
                  <div className="abt__step_accent_bar"></div>
                  
                  {/* Step Content */}
                  <span className="abt__step_badge_index">STEP 0{step.number}</span>
                  <h3 className="abt__step_title_new">{step.title}</h3>
                  <p className="abt__step_desc_new">{step.description}</p>
                  
                  {/* Connecting arrow pointing to next step (hidden on the last card) [1] */}
                  {index < approach.length - 1 && (
                    <div className="abt__step_connector_arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* 6️⃣ Built for the Future of Search & AI (Symmetrical Strip Stack Redesign [1]) */}
      <section className="abt__future_section">
        <div className="abt__container">
          <span className="abt__sec_badge blue">FUTURE-PROOF</span>
          <h2 className="abt__heading">Built for the Future of Search & AI</h2>
          <p className="abt__sec_subtitle">
            Search is changing. AI-generated answers, voice search, and generative engines are 
            redefining brand visibility globally.
          </p>
          
          {/* Centered Horizontal Strip Stack [1] */}
          <div className="abt__future_strip_list">
            {futurePrep.map((item, index) => {
              // Custom color themes mapped to each row [1]
              const themes = ['item_blue', 'item_purple', 'item_green', 'item_orange'];
              const currentTheme = themes[index % themes.length];

              return (
                <div key={index} className={`abt__future_strip_item ${currentTheme}`}>
                  <div className="abt__strip_left">
                    {/* Circle Index Badge [1] */}
                    <div className="abt__strip_circle">0{index + 1}</div>
                    <span className="abt__strip_text">{item}</span>
                  </div>
                  
                  {/* Subtle directional chevron icon on the right */}
                  <span className="abt__strip_arrow_icon">→</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7️⃣ Who We Work With */}
      {/* 7️⃣ Who We Work With (Asymmetric Bento Grid Redesign [1]) */}
      <section className="abt__clients_section">
        <div className="abt__container">
          <span className="abt__sec_badge yellow">PARTNERS</span>
          <h2 className="abt__heading">Who We Work With</h2>
          <p className="abt__sec_subtitle">We collaborate with forward-thinking brands ready to eliminate legacy code blocks.</p>
          
          {/* Asymmetrical Bento Grid [1] */}
          <div className="abt__clients_bento_grid">
            {whoWeWorkWith.map((client, index) => {
              // Asymmetric size and color mapping [1]
              const bentoSizes = ['bento_wide', 'bento_normal', 'bento_normal', 'bento_normal', 'bento_normal'];
              const bentoThemes = ['client_blue', 'client_green', 'client_orange', 'client_purple', 'client_red'];
              
              const currentSize = bentoSizes[index % bentoSizes.length];
              const currentTheme = bentoThemes[index % bentoThemes.length];

              // Custom SVG icons matched to each client tier [1]
              const clientIcons = [
                // Node 1: Startup icon (Blue)
                <svg className="abt__client_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>,
                // Node 2: E-commerce icon (Green)
                <svg className="abt__client_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>,
                // Node 3: Service leads icon (Orange)
                <svg className="abt__client_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>,
                // Node 4: Agencies icon (Purple)
                <svg className="abt__client_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>,
                // Node 5: Enterprise Legacy icon (Red)
                <svg className="abt__client_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ];

              return (
                <div key={index} className={`abt__client_bento_card ${currentSize} ${currentTheme}`}>
                  {/* Top color indicator line [1] */}
                  <div className="abt__client_accent_bar"></div>
                  
                  <div className="abt__client_header">
                    <div className="abt__client_avatar_circle">
                      {clientIcons[index]}
                    </div>
                    <span className="abt__client_tag">PROFILE 0{index + 1}</span>
                  </div>
                  <h3 className="abt__client_title">{client}</h3>
                  <p className="abt__client_desc">
                    We deploy custom-engineered digital systems and automated pipelines designed to support this exact brand segment for long-term scalability.
                  </p>
                </div>
              );
            })}
          </div>
          
          <p className="abt__clients_footer">
            If your growth depends on your digital presence, we can help.
          </p>
        </div>
      </section>

      {/* 8️⃣ Our Values */}
    {/* 8️⃣ Our Values (Overlapping Split Card Redesign [1]) */}
      <section className="abt__values_section_split">
        <div className="abt__container">
          <span className="abt__sec_badge yellow">VALUES</span>
          <h2 className="abt__heading_white">Our Values</h2>
          <p className="abt__sec_subtitle_white">The core engineering standards guiding our team through every deployment cycle.</p>
          
          <div className="abt__values_grid_split">
            {values.map((value, index) => (
              <div key={index} className="abt__value_card_split">
                {/* Circular top icon circle [1] */}
                <div className="abt__value_icon_circle_split">
                  <span className="abt__value_icon_inner">{value.icon}</span>
                </div>
                
                {/* Uppercase Title [1] */}
                <h3>{value.title}</h3>
                
                {/* Description [1] */}
                <p className="abt__value_card_desc">{value.description}</p>
                
                {/* Underlined bottom link [1] */}
                <span className="abt__value_more_link">CORE 0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 9️⃣ Why Choose */}
    {/* 9️⃣ Why Choose (Infographic Wave Style Redesign [1]) */}
      <section className="abt__why_section">
        <div className="abt__container">
          <span className="abt__sec_badge cyan">WHY CHOOSE US</span>
          <h2 className="abt__heading">Why Vexoweb?</h2>
          <p className="abt__sec_subtitle">We focus strictly on clear outcomes, clean code bases, and performance scalability.</p>
          
          <div className="abt__why_row_wrapper">
            {/* Semicircle Wave Connector Line [1] */}
            <div className="abt__why_connection_line"></div>

            <div className="abt__why_row">
              {whyChoose.map((reason, index) => {
                // Exact infographic matching color themes [1]
                const whyThemes = ['why_blue', 'why_orange', 'why_green', 'why_purple', 'why_pink'];
                const currentTheme = whyThemes[index % whyThemes.length];

                // Custom SVG icons matched to each differentiator [1]
                const whyIcons = [
                  // Node 1: Technical expertise + marketing (Blue)
                  <svg className="abt__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>,
                  // Node 2: AI-ready development (Orange)
                  <svg className="abt__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>,
                  // Node 3: SEO built-in (Green)
                  <svg className="abt__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>,
                  // Node 4: Business-focused (Purple)
                  <svg className="abt__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>,
                  // Node 5: Long-term partners (Pink)
                  <svg className="abt__why_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ];

                return (
                  <div key={index} className={`abt__why_node ${currentTheme}`}>
                    {/* Outer Wave Semicircle Arch [1] */}
                    <div className="abt__why_arch"></div>

                    {/* Inner Icon Circle [1] */}
                    <div className="abt__why_circle">
                      {whyIcons[index]}
                    </div>

                    {/* Descriptions */}
                    <div className="abt__why_text_block">
                      <span className="abt__why_meta">Standard 0{index + 1}</span>
                      <p className="abt__why_desc_p">{reason}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* 🔟 Final CTA */}
      <section className="abt__cta_section">
        <div className="abt__container">
          <div className="abt__cta_banner">
            <div className="abt__cta_banner_glow"></div>
            <h2>Let's Build Something That Works</h2>
            <p>
              Whether you need an AI-powered application, a high-performing website, or sustainable 
              growth through search, Vexoweb is ready to help.
            </p>
            <div className="abt__cta_buttons">
              <a href="/contact-us" className="abt__cta_btn abt__cta_primary">
                 Get in Touch <span className="arrow">→</span>
              </a>
              <a href="/seo-services#contact" className="abt__cta_btn abt__cta_secondary">
                 Request a Free Audit <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;