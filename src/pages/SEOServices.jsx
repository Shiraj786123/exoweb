import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SEOServices = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  // 2. Brutalist Gallery Stats
  const brutalistStats = [
    { value: "+145%", label: "Organic Search Growth", color: "var(--color-burgundy)" },
    { value: "3.2x", label: "Lead Conversion Lift", color: "var(--color-pink)" },
    { value: "+88%", label: "Topical Authority Score", color: "var(--color-orange-coral)" }
  ];

  // 3. Staircase Target Audience
  const staircaseAudience = [
    { number: "01", title: "Invisible Brands", text: "Businesses struggling to gain traction or rank on competitive search pages.", color: "var(--color-pink)" },
    { number: "02", title: "Traffic Drop Recovery", text: "Sites suffering sudden drop-offs from algorithms or core indexing changes.", color: "var(--color-orange-coral)" },
    { number: "03", title: "Conversion Mismatch", text: "Websites capturing clicks but failing to convert visitors into qualified leads.", color: "var(--color-burgundy)" },
    { number: "04", title: "E-commerce Competitors", text: "Online retailers looking to scale organic sales via automated schema channels.", color: "var(--color-rose)" },
    { number: "05", title: "Local Service Providers", text: "Businesses targeting high-intent localized search queries in specific regions.", color: "var(--color-warm-yellow)" }
  ];

  // 4. Problems Solved (3D Perspective Deck)
  const problemsDeck = [
    { icon: "📉", tag: "RANK_LEAK", title: "Poor Rankings", text: "Failing to appear in valuable high-intent user query slots.", color: "var(--color-burgundy)" },
    { icon: "🚫", tag: "NO_TRAFFIC", title: "Low Organic Traffic", text: "Unoptimized search footprint driving zero transactional volume.", color: "var(--color-orange-coral)" },
    { icon: "⚠️", tag: "TECH_ERR", title: "Technical Issues", text: "Crawl blocks, duplicate indexing paths, and broken server webhooks.", color: "var(--color-pink)" },
    { icon: "📝", tag: "WEAK_CONTENT", title: "Thin Performance", text: "Content that fails to satisfy algorithmic search intent guidelines.", color: "var(--color-rose)" },
    { icon: "💔", tag: "CONV_LEAK", title: "Zero Lead Conversions", text: "Capturing bulk unqualified traffic that immediately bounces.", color: "var(--color-warm-yellow)" },
    { icon: "🚨", tag: "PENALTY_RISK", title: "Algorithmic Penalty", text: "Loss of visibility due to unoptimized manual action updates.", color: "var(--color-pink)" }
  ];

  // 5. Capabilities Bento Services (Asymmetric Comic Strip Grid)
  const bentoServices = [
    { 
      size: "bento-large", 
      num: "01", 
      title: "Custom Technical SEO Audits & Strategy", 
      desc: "We perform a thorough diagnostic evaluation of your website backend crawl topology. This includes optimizing raw sitemap routing, resolving rendering leaks, auditing indexation flags, and mapping high-speed API performance layers to secure search visibility.", 
      category: "TECHNICAL ENGINEERING", 
      accent: "var(--color-warm-yellow)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    { 
      size: "bento-small-top", 
      num: "02", 
      title: "On-Page SEO & Topical Content", 
      desc: "Optimizing content layout structure and mapping structured semantic entities.", 
      category: "SEMANTIC LAYERS", 
      accent: "var(--color-pink)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    { 
      size: "bento-small-bottom", 
      num: "03", 
      title: "Core Web Vitals Optimization", 
      desc: "Resolving layout shifts, caching payloads, and boosting page speed.", 
      category: "PERFORMANCE", 
      accent: "var(--color-rose)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    { 
      size: "bento-wide-top", 
      num: "04", 
      title: "Keyword Intent & Entity Mapping", 
      desc: "Analyzing user intents and structuring keyword matrices designed to capture qualified prospects across transaction funnels.", 
      category: "AUDIENCE TARGETING", 
      accent: "var(--color-burgundy)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 6V12L16 14" />
        </svg>
      )
    },
    { 
      size: "bento-wide-bottom", 
      num: "05", 
      title: "Local & E-commerce Schema Markup", 
      desc: "Deploying automated structured JSON-LD data sitemaps and localized Google Business Profile synchronization paths.", 
      category: "DATA ENHANCEMENT", 
      accent: "var(--color-orange-coral)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    }
  ];

  // 6. Tools Supported (Pipeline train nodes)
  const toolsPipeline = [
    { title: "Search Console", desc: "Google monitoring index and crawl diagnostics.", tag: "INDEXING", color: "var(--color-burgundy)" },
    { title: "Google Analytics", desc: "Tracking traffic paths, active goals, and behaviors.", tag: "BEHAVIORS", color: "var(--color-orange-coral)" },
    { title: "Technical Crawlers", desc: "Performing automated architecture health scans.", tag: "TECHNICAL", color: "var(--color-pink)" },
    { title: "Rank Tracking", desc: "Real-time visibility index reporting updates.", tag: "METRICS", color: "var(--color-warm-yellow)" }
  ];

  // 7. Comparison Side-By-Side Data
  const comparison = [
    { basic: "Targeting simple rank positions", optimized: "Focused on AI answers & global search footprints" },
    { basic: "Pruning isolated keyword strings", optimized: "Structuring semantic entities & topical coverage" },
    { basic: "Chasing click volume alone", optimized: "Fusing search intent with lead capture flows" },
    { basic: "Short-term ad campaigns", optimized: "Continuous long-term visibility infrastructure" }
  ];

  // 8. Process Timeline (Alternating Industrial Track)
  const processSteps = [
    {
      number: "1",
      title: "Crawl Diagnostics",
      description: "Evaluating database index health, server responses, and technical sitemaps.",
      color: "var(--color-warm-yellow)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Topical Strategy",
      description: "Mapping keyword intent matrices to solve consumer search needs.",
      color: "var(--color-burgundy)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      )
    },
    {
      number: "3",
      title: "On-Page refactoring",
      description: "Optimizing content structural loops and cleaning HTML payload scripts.",
      color: "var(--color-pink)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Topical Authority",
      description: "Executing link earning architectures and strengthening index relevance.",
      color: "var(--color-rose)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Goal Tracking",
      description: "Continuous rank, crawl budget, and transactional monitoring.",
      color: "var(--color-orange-coral)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
          <path d="M12 12l9-9-3 12-3-3-3 3-3-3z" />
        </svg>
      )
    }
  ];

  // 9. Why Choose Mosaic Data
  const whyChooseMosaic = [
    { size: "why-bento-large", num: "01", title: "Strong Technical Foundation", desc: "We focus our optimizations on resolving rendering scripts and database query bottlenecks to guarantee clean indexation parameters.", color: "var(--color-pink)" },
    { size: "why-bento-small", num: "02", title: "Intent Mapping", desc: "No vanity metrics. Every query we target is aligned with active purchase actions.", color: "var(--color-orange-coral)" },
    { size: "why-bento-small", num: "03", title: "AI Search Alignment", desc: "Structuring schema data to ensure visibility inside cognitive platforms.", color: "var(--color-burgundy)" },
    { size: "why-bento-medium", num: "04", title: "White-Hat Integrity", desc: "We use Best-Practice standards that build long-term value and resist indexing drops.", color: "var(--color-rose)" },
    { size: "why-bento-wide", num: "05", title: "Transparent Metrics", desc: "Direct dashboard access tracking crawl, sitemap, and organic revenue metrics.", color: "var(--color-warm-yellow)" }
  ];

  // 10. FAQ Louver Dataset
  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is an incremental growth framework. Initial technical upgrades can improve sitemap indexation in weeks, but major competitive rankings typically require 3 to 6 months."
    },
    {
      question: "Do you guarantee search engine rankings?",
      answer: "Ethical SEO providers cannot guarantee specific search positions due to continuous ranking updates. We guarantee structured, best-practice technical implementation and performance transparency."
    },
    {
      question: "Is SEO still relevant with the evolution of AI search?",
      answer: "Yes. Algorithmic search models rely heavily on crawl structures, JSON-LD schemas, and entity authority to generate and source answers. Optimization remains critical for brand presence."
    },
    {
      question: "Do you offer localized and e-commerce SEO optimizations?",
      answer: "Yes. We design and integrate structured local Google Business Profile schemas and optimize massive product catalogs for scalable commerce engines."
    }
  ];

  return (
    <div className="seos__wrapper">
      <Navbar />

{/* 1. HERO SECTION (Centered Single-Column Theme) */}
<section className="ecd__hero_centered_layout">
  <div className="ecd__hero_overlay_centered"></div>
  <div className="ecd__hero_container_centered">
    
    {/* Centered Pill Badge (Now completely visible) */}
    <div className="ecd__badge_pill_centered">
      <span className="badge_dot_indicator">●</span> SEO SERVICES
    </div>

    {/* Centered Title */}
    <h1 className="ecd__hero_title_centered">
      SEO Services That Grow <br />
      <span className="highlight_sky_blue">Visibility, Traffic & Leads</span>
    </h1>

    {/* Centered Subtitle Description */}
    <p className="ecd__hero_text_centered">
      We provide professional SEO services designed to help businesses rank higher on Google, 
      attract qualified traffic, and generate consistent leads. Our approach combines technical 
      SEO, content optimization, and data-driven strategy to deliver long-term, sustainable results.
    </p>

    {/* Centered Dual-Button Group */}
    <div className="ecd__hero_buttons_centered">
      <a href="#audit" className="ecd__btn_primary_centered">
        Get Free Audit
      </a>
      <a href="#work" className="ecd__btn_secondary_centered">
        See Our Work ↓
      </a>
    </div>

    {/* Small Centered Trust Indicator */}
    <p className="ecd__hero_trust_text_centered">
      TRUSTED BY 120+ BUSINESSES ACROSS THE UK, USA & EUROPE
    </p>

  </div>
</section>
      {/* 2. OVERVIEW: THE BRUTALIST GALLERY BLOCK (White Theme) */}
      <section className="fswd__section_wrapper ecd-bg-white ecd-brutalist-section">
        <div className="ecd-brutalist-ticker">
          <div className="ticker-wrapper">
            <span>INDEX MATRICES ● ORGANIC TRAFFIC GROWTH ● SEMANTIC ENTITIES ● CORE PERFORMANCE SCHEMAS ● </span>
            <span>INDEX MATRICES ● ORGANIC TRAFFIC GROWTH ● SEMANTIC ENTITIES ● CORE PERFORMANCE SCHEMAS ● </span>
          </div>
        </div>
        <div className="ecd-brutalist-content">
          <span className="fswd__label" style={{ color: "var(--color-burgundy)" }}>Audits</span>
          <h2 className="ecd-brutalist-serif-heading">What Are SEO Services?</h2>
          <p className="ecd-brutalist-lead-desc">
            SEO services optimize your codebase and database schema structures so your site ranks higher in organic search pipelines. Unlike temporary PPC models, our indexing setups build sustainable visibility that compounds over time.
          </p>
          
          <div className="ecd-brutalist-stats-row">
            {brutalistStats.map((stat, index) => (
              <div key={index} className="ecd-brutalist-stat-panel" style={{ "--panel-accent": stat.color }}>
                <span className="panel-stat-val">{stat.value}</span>
                <span className="panel-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TARGET AUDIENCE: THE STEPPED SLANTED COLUMNS (Light Gray Theme) */}
      <section className="fswd__section_wrapper ecd-bg-gray">
        <div className="ecd-stepped-audience-layout">
          <div className="ecd-stepped-intro">
            <span className="fswd__label" style={{ color: "var(--color-pink)" }}>Target Profiles</span>
            <h2 className="ecd__section_heading_dark">Who Is This Service For?</h2>
            
            <div className="ecd-audience-stairs">
              {staircaseAudience.map((audience, index) => (
                <div key={index} className="staircase-step" style={{ "--step-index": index, "--step-accent": audience.color }}>
                  <div className="staircase-num">{audience.number}</div>
                  <div className="staircase-text">
                    <h4>{audience.title}</h4>
                    <p>{audience.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ecd-stepped-warning-col">
            <div className="staircase-static-terminal">
              <div className="terminal-header">
                <span className="terminal-dot"></span>
                <span>CRAWL_DIAGNOSTIC_ALERT</span>
              </div>
              <div className="terminal-body">
                <p className="warn-title">CRAWL PENALTY DETECTED:</p>
                <p className="warn-text">If your website has experienced traffic drops, unoptimized schema paths, or broken internal link hierarchies, technical optimization is required immediately.</p>
                <span className="terminal-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEMS WE SOLVE: THE 3D LAYERED PERSPECTIVE DECK (Dark Theme) */}
      <section className="fswd__section_wrapper ecd-bg-dark">
        <div className="ecd-isometric-problems-layout">
          <div className="section-header-centered">
            <span className="fswd__label" style={{ color: "var(--color-pink)" }}>Crawl Friction Points</span>
            <h2 className="fswd__section_heading">Problems We Solve</h2>
          </div>
          
          <div className="ecd-isometric-deck">
            {problemsDeck.map((problem, index) => (
              <div key={index} className="ecd-isometric-deck-card" style={{ "--glow-accent": problem.color }}>
                <div className="card-isometric-meta">
                  <span className="problem-label" style={{ backgroundColor: problem.color, color: '#ffffff' }}>
                    {problem.tag}
                  </span>
                  <div className="ecd__isometric_icon">{problem.icon}</div>
                </div>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </div>
            ))}
          </div>
          
          <div className="ecd-problems-deck-statement">
            <p>We fix what is holding your site back — technically and strategically.</p>
          </div>
        </div>
      </section>

     {/* 5. CAPABILITIES BENTO SERVICES: THE ASYMMETRIC COMIC STRIP (White Theme) */}
<section className="fswd__section_wrapper ecd-bg-white">
  <div className="bento-comic-strip-container">
    <div className="section-header-centered">
      <span className="fswd__label" style={{ color: "var(--color-warm-yellow)" }}>Capabilities Bento</span>
      <h2 className="ecd__section_heading_dark">Our SEO Services</h2>
    </div>

    <div className="bento-comic-grid">
      {bentoServices.map((service, index) => (
        <div key={index} className={`comic-bento-card ${service.size}`} style={{ "--card-accent": service.accent }}>
          <div className="card-top-header">
            <div className="card-icon-frame" style={{ color: service.accent }}>{service.icon}</div>
            <span className="service-badge-tag">{service.category}</span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
          <div className="bento-oversized-index">{service.num}</div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* 6. PLATFORMS SUPPORTED: THE HORIZONTAL PIPELINE STRIP (Soft Blue Theme) */}
      <section className="fswd__section_wrapper ecd-bg-soft-blue">
        <div className="ecd-platforms-strip-container">
          <div className="section-header-centered">
            <span className="fswd__label" style={{ color: "var(--color-rose)" }}>Integrations</span>
            <h2 className="ecd__section_heading_dark">Tools & Platforms We Use</h2>
          </div>

          <div className="ecd-pipeline-strip-flow">
            <div className="ecd-pipeline-vector-line"></div>
            
            <div className="ecd-pipeline-rail">
              {toolsPipeline.map((plat, index) => (
                <div key={index} className="ecd-pipeline-node" style={{ "--plat-color": plat.color }}>
                  <div className="pipeline-dot">
                    <span className="pipeline-dot-inner"></span>
                  </div>
                  <span className="pipeline-tag" style={{ backgroundColor: plat.color }}>{plat.tag}</span>
                  <h4>{plat.title}</h4>
                  <p>{plat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON MATRIX: THE SPLIT-BLADE SCREEN (White Theme) */}
 
 {/* 7. COMPARISON MATRIX: THE SPLIT-BLADE SCREEN (White Theme) */}
      {/* 7. COMPARISON MATRIX: THE SPLIT-BLADE SCREEN (White Theme) */}
      <section className="fswd__section_wrapper ecd-bg-white">
        <div className="ecd-split-blade-matrix">
          <div className="section-header-centered">
            <span className="fswd__label" style={{ color: "var(--color-pink)" }}>Comparative Reality</span>
            <h2 className="ecd__section_heading_dark">SEO vs AI Search Optimization (Important Difference)</h2>
          </div>

          <div className="ecd-split-blade-table">
            {/* Left Side: Traditional SEO */}
            <div className="ecd-blade-col blade-left-basic">
              <h4>Traditional SEO</h4>
              {comparison.map((item, index) => (
                <div key={index} className="ecd-blade-row">
                  <span className="blade-icon-cross">✕</span>
                  <p>{item.basic}</p> {/* Maps to 'basic' key */}
                </div>
              ))}
            </div>

            {/* Neon Dividing Bar */}
            <div className="ecd-blade-center-divider">
              <div className="blade-neon-dot"></div>
            </div>

            {/* Right Side: AI Search Optimization */}
            <div className="ecd-blade-col blade-right-optimized">
              <h4>AI Search Optimization</h4>
              {comparison.map((item, index) => (
                <div key={index} className="ecd-blade-row">
                  <span className="blade-icon-check">✓</span>
                  <p>{item.optimized}</p> {/* Maps to 'optimized' key */}
                </div>
              ))}
            </div>
          </div>
          <p className="ecd__comparison_tagline_dark">
            For AI-driven visibility, see our <a href="/ai-search-optimization">AI Search Optimization service</a> [1].
          </p>
        </div>
      </section>

      {/* 8. DEVELOPMENT PROCESS: THE ALTERNATING INDUSTRIAL TRACK (Gray Theme) */}
      <section className="fswd__section_wrapper ecd-bg-gray">
        <div className="ecd-alternating-track-container">
          <div className="section-header-centered">
            <span className="fswd__label" style={{ color: "var(--color-burgundy)" }}>Process Pipeline</span>
            <h2 className="ecd__section_heading_dark">Our SEO Process</h2>
          </div>

          <div className="ecd-alternating-timeline">
            <div className="alternating-spine-track"></div>
            
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`timeline-track-node ${isEven ? 'anchor-left' : 'anchor-right'}`} style={{ "--step-color": step.color }}>
                  {/* Spine Indicator Node */}
                  <div className="track-spine-bullet">
                    <span className="spine-bullet-inner"></span>
                  </div>

                  {/* Structural Alternating Card wrapper */}
                  <div className="track-floating-card">
                    <div className="track-card-header">
                      <span className="track-card-index" style={{ backgroundColor: step.color }}>{step.number}</span>
                      <div className="track-card-icon">{step.icon}</div>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE US: THE MODERN MINIMALIST MOSAIC */}
      <section className="fswd__section_wrapper ecd-bg-split">
        <div className="ecd-modern-mosaic-layout">
          <div className="section-header-centered">
            <span className="fswd__label" style={{ color: "var(--color-orange-coral)" }}>System Value</span>
            <h2 className="ecd__section_heading_dark">Why Choose ZonzocTech for SEO?</h2>
          </div>

          <div className="ecd-mosaic-grid">
            {whyChooseMosaic.map((mosaic, index) => (
              <div key={index} className={`ecd-mosaic-tile ${mosaic.size}`} style={{ "--tile-accent": mosaic.color }}>
                <div className="ecd-mosaic-meta">
                  <span className="ecd-mosaic-index" style={{ color: mosaic.color, backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    0{index + 1}
                  </span>
                </div>
                <h3>{mosaic.title}</h3>
                <p>{mosaic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs: THE EDGE-TO-EDGE ARCHITECTURAL LOUVERS (White Theme) */}
      <section className="fswd__section_wrapper ecd-bg-white">
        <div className="ecd-louvers-container">
          <div className="section-header-centered">
            <span className="fswd__label" style={{ color: "var(--color-warm-yellow)" }}>Knowledge Base</span>
            <h2 className="ecd__section_heading_dark">Frequently Asked Questions</h2>
          </div>

          <div className="ecd-louvers-list">
            {faqs.map((faq, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div key={index} className={`ecd-louver-row-bar ${isOpen ? 'active' : ''}`}>
                  <button className="ecd-louver-header" onClick={() => setFaqOpenIndex(isOpen ? null : index)}>
                    <h4>{faq.question}</h4>
                    <div className="ecd-louver-toggle-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </button>
                  <div className="ecd-louver-content">
                    <div className="ecd-louver-inner-desc">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA: THE IMMERSIVE RADIAL BLACK HOLE */}
      <section className="fswd__section_wrapper ecd-bg-white">
        <div className="ecd-radial-black-hole-container">
          <div className="ecd-black-hole-glowing-core"></div>
          <div className="ecd-black-hole-content">
            <span className="ecd-black-hole-badge" style={{ color: "var(--color-warm-yellow)" }}>SEO AUDIT</span>
            <h2>Ready to Grow with SEO?</h2>
            <p>
              If you want consistent traffic and leads from search engines, let's start with a clear 
              SEO strategy.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="capsule-primary-btn ecd-glowing-cta-btn">
                Get a Free SEO Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;





