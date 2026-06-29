import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import EcommercePageBody from '../components/EcommercePageBody';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const EcommerceDev = () => (
  <div className="ecd__wrapper">
    <Navbar />

    <section className="ecd__hero">
      <div className="ecd__hero_pattern" />
      <div className="ecd__hero_container">
        <Breadcrumb items={PAGE_BREADCRUMBS.ecommerceDevelopment} className="breadcrumb--centered breadcrumb--on-dark" />
        <div className="ecd__hero_badge">
          <span className="ecd__badge_dot" />
          <span className="hero-badge-text">
            <span className="hero-badge-accent">Ecommerce Development</span>
            <span className="hero-badge-light"> — Sri Lanka</span>
          </span>
        </div>
        <h1 className="ecd__h1">{MAIN_SERVICE_SEO.ecommerceDevelopment.h1}</h1>
        <p className="ecd__hero_text">
          The ecommerce industry is growing rapidly, and customers expect a fast, secure and convenient online
          shopping experience. At Vexoweb, we provide professional ecommerce website development services across
          Sri Lanka — helping businesses build modern online stores that are secure, scalable and designed for growth.
        </p>
        <div className="ecd__hero_actions">
          <a href="#contact" className="ecd__hero_cta_primary">
            Get Free Consultation
          </a>
          <a href="#contact" className="ecd__hero_cta_secondary">
            View Portfolio <span className="arrow">→</span>
          </a>
        </div>
        <HeroTrustText text={HERO_TRUST_TEXT.ecommerce} />
      </div>
    </section>

    <EcommercePageBody />

    <HomeTechStackSection />
    <ContactSection />
    <Footer />
  </div>
);

export default EcommerceDev;
