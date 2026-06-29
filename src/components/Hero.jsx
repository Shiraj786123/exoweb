import React from 'react';
import HeroTrustText from './HeroTrustText';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Localized Eyebrow Badge */}
        <span className="hero-badge">
          <span className="badge-dot">●</span>
          <span className="hero-badge-text">
            <span className="hero-badge-accent">Web &amp; Software Agency</span>
            <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
          </span>
        </span>
        
        {/* Localized Main Typography */}
        <h1>
          {MAIN_SERVICE_SEO.home.h1}
        </h1>
        
        {/* Localized Description */}
        <p className="hero-desc">
          From your first website to a full custom software system — Vexoweb helps
          businesses in Kattankudy and across Eastern Province grow online.
        </p>
        
        {/* Core Call to Actions */}
        <div className="hero-buttons hero-cta-wrap">
          <a href="#contact" className="primary-btn hero-cta-btn">
            Get Free SEO Audit
          </a>

          <a href="#results" className="secondary-btn hero-cta-btn-secondary">
            View Local Results <span className="arrow">→</span>
          </a>
        </div>
        
        {/* Subdued Social Proof Divider */}
        <HeroTrustText text={HERO_TRUST_TEXT.home} />
        
      </div>
    </section>
  );
}