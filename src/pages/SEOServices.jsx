import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import SEOPageBody from '../components/SEOPageBody';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const SEOServices = () => (
  <div className="seos__wrapper">
    <Navbar />

    <section
      className="ecd__hero_centered_layout"
      style={{ paddingTop: '190px', position: 'relative' }}
    >
      <div className="ecd__hero_overlay_centered" />
      <div className="ecd__hero_container_centered">
        <Breadcrumb items={PAGE_BREADCRUMBS.seoServices} className="breadcrumb--centered breadcrumb--on-dark" />
        <div className="ecd__badge_pill_centered">
          <span className="badge_dot_indicator">●</span>
          <span className="hero-badge-text">
            <span className="hero-badge-accent">SEO Services</span>
            <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
          </span>
        </div>
        <h1 className="seos__h1">{MAIN_SERVICE_SEO.seoServices.h1}</h1>
        <p className="ecd__hero_text_centered">
          Looking for professional SEO services in the Eastern Province? We help businesses improve Google
          rankings, increase organic website traffic and generate more qualified enquiries through proven
          search engine optimisation strategies.
        </p>
        <div className="ecd__hero_actions hero-cta-wrap">
          <a href="#contact" className="ecd__hero_cta_primary hero-cta-btn">
            Request a Free SEO Audit
          </a>
          <a href="#contact" className="ecd__hero_cta_secondary">
            Talk to Our Team <span className="arrow">→</span>
          </a>
        </div>
        <HeroTrustText text={HERO_TRUST_TEXT.seo} />
      </div>
    </section>

    <SEOPageBody />

    <HomeTechStackSection />
    <ContactSection />
    <Footer />
  </div>
);

export default SEOServices;
