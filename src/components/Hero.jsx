import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Premium Glow Badge */}
        <span className="hero-badge">
          <span className="badge-dot">●</span> AI Web Application Development Agency
        </span>
        
        {/* Main Typography Header Hierarchy */}
        <h1>
          Transform Your Business With AI-Powered Digital Solutions <br />
          <span className="highlight-text">for Modern Businesses</span>
        </h1>
        
        {/* Dark Mode Optimized Description Text */}
        <p className="hero-desc">
          We build custom AI-powered web applications. From intelligent dashboards 
          to enterprise cloud integrations — we scale your business growth.
        </p>
        
        {/* Core Call to Actions */}
        <div className="hero-buttons">
          <button className="primary-btn">
            Get Free Consultation
          </button>
          
          <button className="secondary-btn">
            View Portfolio <span className="arrow">→</span>
          </button>
        </div>
        
        {/* Subdued Social Proof Divider */}
        <p className="hero-trust-text">
          Trusted by 120+ businesses across the UK, USA & Europe
        </p>
        
      </div>
    </section>
  );
}