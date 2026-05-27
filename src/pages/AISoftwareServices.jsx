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

      {/* 1. HERO SECTION */}
      <section className="aiss__hero">
        <div className="aiss__hero_gradient"></div>
        <div className="aiss__hero_container">
          <div className="aiss__hero_label">
            <span className="aiss__label_icon">🤖</span>
            AI Software Development Services
          </div>
          <h1 className="aiss__hero_title">
            AI-Powered Web Development Agency <br />
            <span className="gradient-text">Trusted by Businesses in the UK & USA</span>
          </h1>
          <p className="aiss__hero_text">
            We design high-converting websites, drive targeted organic traffic, and automate your 
            business with AI — so you grow faster without working harder.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="capsule-primary-btn">Get Free Growth Plan</a>
          </div>
          <a href="#what-is" className="hero-scroll-link">
            See Our Work <span className="scroll-arrow">↓</span>
          </a>
        </div>
      </section>

      {/* 2. WHAT IS AI SOFTWARE SECTION */}
      <section id="what-is" className="aiss__section_wrapper">
        <div className="aiss__dark_card split-layout">
          <div className="text-column">
            <span className="aiss__label">What Is AI Software</span>
            <p className="aiss__description">
              Beyond experimental sandboxes. ZonzocTech builds custom AI software for 
              enterprise systems, prioritizing stability over off-the-shelf wrappers.
            </p>
          </div>
          <div className="visual-column">
            <div className="wireframe-container">
              <svg viewBox="0 0 200 200" fill="none" className="geometric-octahedron">
                <path d="M100 20 L145 65 L100 110 L55 65 Z" stroke="#ebd175" strokeWidth="1" />
                <path d="M100 65 L145 110 L100 155 L55 110 Z" stroke="#89cbf7" strokeWidth="1" />
                <path d="M100 20 L100 155" stroke="#b2a6f2" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M55 65 L145 110" stroke="#ebd175" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M55 110 L145 65" stroke="#89cbf7" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="100" cy="20" r="4" fill="#e59fd1" className="glow-node" />
                <circle cx="145" cy="65" r="4" fill="#89cbf7" className="glow-node" />
                <circle cx="100" cy="110" r="4" fill="#ebd175" className="glow-node" />
                <circle cx="55" cy="65" r="4" fill="#8be4af" className="glow-node" />
                <circle cx="100" cy="65" r="4" fill="#ffffff" className="glow-node" />
                <circle cx="145" cy="110" r="4" fill="#ebd175" className="glow-node" />
                <circle cx="100" cy="155" r="4" fill="#b2a6f2" className="glow-node" />
                <circle cx="55" cy="110" r="4" fill="#ebd175" className="glow-node" />
              </svg>
              <div className="wireframe-label">ENGINEERING PRECISION</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO NEEDS AI SOFTWARE SECTION */}
      <section className="aiss__section_wrapper">
        <div className="aiss__dark_card split-layout">
          <div className="text-column">
            <span className="aiss__label">Who Needs AI Software</span>
            <h2 className="aiss__heading">
              Does Your Business Suffer From Friction?
            </h2>
            <p className="aiss__description_sub">
              Qualify Your Need for Custom AI.
            </p>
          </div>
          <div className="audience-column">
            <div className="audience-list">
              {targetAudience.map((item, index) => (
                <div key={index} className="audience-row">
                  <span className="row-num">{item.num}</span>
                  <span className="row-title">{item.title}</span>
                  <span className="row-desc">{item.desc}</span>
                  <span className="row-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FRICTION POINTS SECTION */}
      <section className="aiss__section_wrapper">
        <div className="aiss__dark_card friction-layout">
          <div className="friction-header-bar">
            <span>COMMON OPERATIONAL PAIN POINTS WE RESOLVE →</span>
            <span className="status-green">SYSTEM OK →</span>
          </div>
          <div className="friction-split">
            <div className="terminal-container">
              <div className="terminal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="terminal-title">system_diagnostics.sh</span>
              </div>
              <div className="terminal-body">
                <p className="txt-green">[SYSTEM STATUS: OK]</p>
                <p className="txt-red blink">LATENCY DETECTED</p>
                <p className="txt-red">SILOS DETECTED</p>
                <p className="txt-red">BOTTLENECK DETECTED</p>
              </div>
            </div>
            <div className="friction-table">
              {painPoints.map((point, index) => (
                <div key={index} className="table-row">
                  <span className="point-name">{point.name}</span>
                  <span className="point-status">{point.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE CATALOG SECTION */}
      <section className="aiss__section_wrapper">
        <div className="aiss__dark_card catalog-layout">
          <div className="catalog-header-bar">
            <span>Service Catalog</span>
          </div>
          <div className="catalog-split">
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

      {/* 7. COMPARISON TABLE SECTION */}
      <section className="aiss__section_wrapper">
        <div className="aiss__dark_card comparison-layout">
          <div className="comparison-header">
            <span>Cyber Split-Terminal</span>
          </div>
          <div className="comparison-grid">
            <div className="grid-header">Feature</div>
            <div className="grid-header">Traditional</div>
            <div className="grid-header">AI-First</div>
            {comparison.map((row, index) => (
              <React.Fragment key={index}>
                <div className="grid-cell cell-feature">{row.feature}</div>
                <div className="grid-cell cell-traditional">{row.traditional}</div>
                <div className="grid-cell cell-ai">{row.ai}</div>
              </React.Fragment>
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