import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AISoftwareServices = () => {
  const targetAudience = [
    { num: "01.", title: "Startups", desc: "Replacing Manual Systems" },
    { num: "02.", title: "Enterprises", desc: "Scaling Content Pipelines" },
    { num: "03.", title: "Logistics", desc: "Optimizing Route Efficiency" },
    { num: "04.", title: "Fintech", desc: "Reducing Fraud Detection Lag" },
    { num: "05.", title: "E-commerce", desc: "Customizing User Flows" }
  ];

  const painPoints = [
    { name: "Legacy Code Redundancy", status: "RESOLVED" },
    { name: "API Pipeline Latency", status: "OPTIMIZED" },
    { name: "Distributed Data Silos", status: "INTEGRATED" },
    { name: "System Scaling Bottlenecks", status: "SECURED" }
  ];

  const services = [
    { type: "ENGINEERING", title: "Replacing Manual Systems", desc: "Monolithic to microservice transition embedded with cognitive decision layers." },
    { type: "COGNITIVE", title: "Optimizing Redundant Efficiency", desc: "Agentic pipelines executing workflows autonomously across endpoints." },
    { type: "COGNITIVE", title: "Decision Support & Fraud Detection", desc: "High-speed reasoning models acting as secondary assurance loops." }
  ];

  const comparison = [
    { feature: "Rule Logic", traditional: "Manual rules", ai: "Intelligent decision-making" },
    { feature: "Workflow", traditional: "Static workflows", ai: "Adaptive automation" },
    { feature: "Data Value", traditional: "Limited insights", ai: "Predictive analytics" },
    { feature: "Scaling", traditional: "Human-dependent", ai: "Scales with data" }
  ];

  return (
    <div className="aiss__wrapper">
      <Navbar />

     {/* 1. HERO SECTION (Centered Single-Column Theme - Matched with Reference Layout) */}
<section className="aiss__hero_centered_layout">
  <div className="aiss__hero_overlay_centered"></div>
  <div className="aiss__hero_container_centered">
    
    {/* Centered Pill Badge (Protected Top Spacing) */}
    <div className="aiss__badge_pill_centered">
      <span className="aiss__badge_dot_indicator">🤖</span> AI Software Development Services
    </div>

    {/* Centered Title */}
    <h1 className="aiss__hero_title_centered">
      AI-Powered Web Development Agency <br />
      <span className="highlight_sky_blue">Trusted by Businesses in the UK & USA</span>
    </h1>

    {/* Centered Subtitle Description */}
    <p className="aiss__hero_text_centered">
      We design high-converting websites, drive targeted organic traffic, and automate your 
      business with AI — so you grow faster without working harder.
    </p>

    {/* Centered Dual-Button Group */}
    <div className="aiss__hero_buttons_centered">
      <a href="#contact" className="aiss__btn_primary_centered">
        Get Free Growth Plan
      </a>
      <a href="#what-is" className="aiss__btn_secondary_centered">
        See Our Work ↓
      </a>
    </div>

  </div>
</section>
{/* 2. WHAT IS AI SOFTWARE SECTION */}
<section id="what-is" className="aiss__section_wrapper">
  <div className="aiss__dark_card split-layout">
    
    {/* Left Side Column - Detailed Core Messaging */}
    <div className="text-column">
      <span className="aiss__label">What Is AI Software</span>
      <h2 className="aiss__heading">
        Smarter Automation, <br />
        <span className="text_gradient_tech">Built for Enterprise Scale</span>
      </h2>
      <p className="aiss__description">
        Beyond experimental sandboxes. ZonzocTech builds custom AI software for 
        enterprise systems, prioritizing architectural stability over off-the-shelf wrappers. 
        We integrate deterministic agentic logic directly into your secure core workflows.
      </p>

      {/* Dynamic Colored Feature Highlights */}
      <ul className="aiss__feature_list">
        <li>
          <span className="feature_icon purple_glow">✦</span>
          <span><strong>Custom-Engineered Core:</strong> No reliance on fragile third-party wrappers.</span>
        </li>
        <li>
          <span className="feature_icon cyan_glow">✦</span>
          <span><strong>Enterprise Vectorization:</strong> Safe, secure private database pipeline integration.</span>
        </li>
        <li>
          <span className="feature_icon gold_glow">✦</span>
          <span><strong>Deterministic Guardrails:</strong> Rigorously optimized system logic prioritizing uptime.</span>
        </li>
      </ul>
    </div>

    {/* Right Side Column - Interactive Precision Wireframe Graphic */}
    <div className="visual-column">
      <div className="wireframe-container">
        <div className="wireframe-bg-glow"></div>
        
        {/* Decorative corner crosshairs representing precision-engineering */}
        <div className="tech-corner tl"></div>
        <div className="tech-corner tr"></div>
        <div className="tech-corner bl"></div>
        <div className="tech-corner br"></div>

        <svg viewBox="0 0 200 200" fill="none" className="geometric-octahedron">
          {/* Colored structural wireframe path segments */}
          <path d="M100 20 L145 65 L100 110 L55 65 Z" stroke="#ebd175" strokeWidth="1.2" />
          <path d="M100 65 L145 110 L100 155 L55 110 Z" stroke="#89cbf7" strokeWidth="1.2" />
          <path d="M100 20 L100 155" stroke="#b2a6f2" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M55 65 L145 110" stroke="#ebd175" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M55 110 L145 65" stroke="#89cbf7" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Neon keyframe-pulsing glow indicator nodes */}
          <circle cx="100" cy="20" r="4" fill="#e59fd1" className="glow-node nod-pink" />
          <circle cx="145" cy="65" r="4" fill="#89cbf7" className="glow-node nod-cyan" />
          <circle cx="100" cy="110" r="4" fill="#ebd175" className="glow-node nod-gold" />
          <circle cx="55" cy="65" r="4" fill="#8be4af" className="glow-node nod-green" />
          <circle cx="100" cy="65" r="4" fill="#ffffff" className="glow-node nod-white" />
          <circle cx="145" cy="110" r="4" fill="#ebd175" className="glow-node nod-gold" />
          <circle cx="100" cy="155" r="4" fill="#b2a6f2" className="glow-node nod-purple" />
          <circle cx="55" cy="110" r="4" fill="#ebd175" className="glow-node nod-gold" />
        </svg>
        <div className="wireframe-label">ENGINEERING PRECISION</div>
      </div>
    </div>

  </div>
</section>

     {/* 3. WHO NEEDS AI SOFTWARE SECTION */}
<section className="aiss__section_wrapper">
  {/* Added a custom accent-navy-container class to change the container background color */}
  <div className="aiss__dark_card split-layout accent-navy-container">
    
    {/* Left Column: Heading and Subtitle */}
    <div className="text-column">
      <span className="aiss__label">Who Needs AI Software</span>
      <h2 className="aiss__heading">
        Does Your Business Suffer From Friction?
      </h2>
      <p className="aiss__description_sub">
        Qualify Your Need for Custom AI.
      </p>
    </div>

    {/* Right Column: Interactive Multi-Color Table Rows */}
    <div className="audience-column">
      <div className="audience-list">
        {targetAudience.map((item, index) => {
          // Dynamic array of colors matching your cyber/engineering theme
          const rowColors = ['#b2a6f2', '#38bdf8', '#ebd175', '#e59fd1', '#8be4af'];
          const currentAccent = rowColors[index % rowColors.length];

          return (
            <div 
              key={index} 
              className="audience-row" 
              style={{ '--row-accent': currentAccent }}
            >
              <span className="row-num">{item.num}</span>
              <span className="row-title">{item.title}</span>
              <span className="row-desc">{item.desc}</span>
              <span className="row-arrow">→</span>
            </div>
          );
        })}
      </div>
    </div>

  </div>
</section>

{/* 4. FRICTION POINTS SECTION (Light Pastel Theme) */}
<section className="aiss__section_wrapper">
  {/* Updated class to light-pastel-container for the soft yellow, pink, and purple background */}
  <div className="aiss__dark_card friction-layout light-pastel-container">
    
    {/* Diagnostic Header Bar */}
    <div className="friction-header-bar">
      <span>COMMON OPERATIONAL PAIN POINTS WE RESOLVE →</span>
      <span className="status-green">SYSTEM DIAGNOSTICS ACTIVE</span>
    </div>

    {/* Split Screen Layout */}
    <div className="friction-split">
      
      {/* Left Column: Live Terminal Session Mockup */}
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <span className="terminal-title">system_diagnostics.sh</span>
        </div>
        <div className="terminal-body">
          <p className="txt-green"><span className="term-prompt">$</span> zonzoc_monitor --status</p>
          <p className="txt-green">[SYSTEM STATUS: ACTIVE]</p>
          <p className="txt-red blink"><span className="term-alert">▲</span> LATENCY DETECTED</p>
          <p className="txt-orange"><span className="term-alert">▲</span> SILOS DETECTED</p>
          <p className="txt-purple"><span className="term-alert">▲</span> BOTTLENECK DETECTED</p>
        </div>
      </div>

      {/* Right Column: Multi-Color Status Indicators (Yellow, Pink, Purple) */}
      <div className="friction-table">
        {painPoints.map((point, index) => {
          // Palette using professional variations of Pink, Yellow, and Purple
          const painPointColors = ['#db2777', '#d97706', '#7c3aed', '#ec4899', '#6d28d9'];
          const pointAccent = painPointColors[index % painPointColors.length];

          return (
            <div 
              key={index} 
              className="table-row"
              style={{ '--point-accent': pointAccent }}
            >
              <span className="point-name">{point.name}</span>
              <div className="point-status-wrapper">
                <span className="status-dot-mini"></span>
                <span className="point-status">{point.status}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
{/* 5. SERVICE CATALOG SECTION (Light Yellow Theme) */}
<section className="aiss__section_wrapper">
  {/* Added light-yellow-container class for the light yellow gradient background */}
  <div className="aiss__dark_card catalog-layout light-yellow-container">
    
    {/* Section Header */}
    <div className="catalog-header-bar">
      <span>Service Catalog</span>
    </div>

    {/* Split Layout */}
    <div className="catalog-split">
      
      {/* Left Column: Dark Terminal Monitor for rich contrast */}
      <div className="terminal-container mini-terminal">
        <div className="terminal-header">
          <span className="terminal-title">ENGINEERING_CONSOLE</span>
        </div>
        <div className="terminal-body">
          <p className="txt-green">→ [SYSTEM STATUS: OK]</p>
          <p className="txt-red">= LATENCY DETECTED</p>
          <p className="txt-red">= SILOS DETECTED</p>
          <p className="txt-red">= BOTTLENECK DETECTED</p>
        </div>
      </div>

      {/* Right Column: Stacked Frosted-Glass Cards */}
      <div className="cognitive-stack">
        {services.map((service, index) => (
          <div key={index} className="cognitive-card">
            <div className="card-badge">{service.type}</div>
            <div className="card-info">
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* 6. INFINITE TEXT TICKER */}
<div className="aiss__ticker_wrap">
  <div className="aiss__ticker_content">
    <span>AGENTIC WORKFLOWS</span>
    <span className="ticker-dot">●</span>
    <span>SECURE ENDPOINT PIPELINES</span>
    <span className="ticker-dot">●</span>
    <span>COGNITIVE AUTO-SCALING</span>
    <span className="ticker-dot">●</span>
    <span>INTELLIGENT SYSTEMS</span>
    <span className="ticker-dot">●</span>
  </div>
  <div className="aiss__ticker_content" aria-hidden="true">
    <span>AGENTIC WORKFLOWS</span>
    <span className="ticker-dot">●</span>
    <span>SECURE ENDPOINT PIPELINES</span>
    <span className="ticker-dot">●</span>
    <span>COGNITIVE AUTO-SCALING</span>
    <span className="ticker-dot">●</span>
    <span>INTELLIGENT SYSTEMS</span>
    <span className="ticker-dot">●</span>
  </div>
</div>
     {/* 7. COMPARISON TABLE SECTION (Dark Purple Theme) */}
<section className="aiss__section_wrapper">
  {/* Added accent-purple-container class to change the container background color */}
  <div className="aiss__dark_card comparison-layout accent-purple-container">
    
    {/* Section Header */}
    <div className="comparison-header">
      <span>Cyber Split-Terminal</span>
    </div>

    {/* Symmetrical Comparison Table */}
    <div className="comparison-grid">
      
      {/* Aligned Grid Header Row */}
      <div className="grid-header-row">
        <div className="grid-header">Feature</div>
        <div className="grid-header">Traditional</div>
        <div className="grid-header">AI-First</div>
      </div>

      {/* Dynamic Symmetrical Rows */}
      {comparison.map((row, index) => (
        <div key={index} className="comparison-row">
          <div className="grid-cell cell-feature">{row.feature}</div>
          <div className="grid-cell cell-traditional">{row.traditional}</div>
          <div className="grid-cell cell-ai">{row.ai}</div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* 8. FINAL CTA SECTION */}
      <section className="aiss__section_wrapper">
        <div className="aiss__dark_card cta-layout">
          <div className="cta-left">
            <h2>Ready to Build? →</h2>
            <p>Request Your Free AI Software Consultation</p>
          </div>
          <div className="cta-right-box">
            <span className="box-badge">Obsidian</span>
            <h3>Build production-ready intelligence with engineering precision.</h3>
            <a href="#contact" className="capsule-primary-btn">Request Your Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISoftwareServices;