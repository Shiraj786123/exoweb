import React from 'react';
import HeroTrustText from './HeroTrustText';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Localized Eyebrow Badge */}
        <span className="hero-badge">
          <span className="badge-dot">●</span>
          <span className="hero-badge-text">
            <span className="hero-badge-accent">Web &amp; Software Agency</span>
            <span className="hero-badge-light"> — Batticaloa, Sri Lanka</span>
          </span>
        </span>
        
        {/* Localized Main Typography */}
        <h1>
          Web Design & Software Development for Businesses in{" "}
          <span className="highlight-text">Batticaloa</span>
        </h1>
        
        {/* Localized Description */}
        <p className="hero-desc">
          From your first website to a full custom software system — Vexoweb helps
          businesses in Batticaloa, Kattankudy, and across Eastern Province grow online.
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
        <HeroTrustText text={HERO_TRUST_TEXT.home} />
        
      </div>
    </section>
  );
}