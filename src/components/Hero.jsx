import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Localized Eyebrow Badge */}
        <span className="hero-badge">
          <span className="badge-dot">●</span> Local SEO Services — Batticaloa, Sri Lanka
        </span>
        
        {/* Localized Main Typography */}
        <h1>
          SEO Services for Batticaloa & <br />
          <span className="highlight-text">Eastern Province Businesses</span>
        </h1>
        
        {/* Localized Description */}
        <p className="hero-desc">
          We help businesses in Batticaloa, Kattankudy, and Eastern Province rank 
          higher on Google — so local customers find you first, not your competitors.
        </p>
        
        {/* Core Call to Actions */}
        <div className="hero-buttons">
          <button className="primary-btn">
            Get Free SEO Audit
          </button>
          
          <button className="secondary-btn">
            View Local Results <span className="arrow">→</span>
          </button>
        </div>
        
        {/* Subdued Social Proof Divider */}
        <p className="hero-trust-text">
          HELPING EASTERN PROVINCE BUSINESSES DOMINATE LOCAL SEARCH
        </p>
        
      </div>
    </section>
  );
}