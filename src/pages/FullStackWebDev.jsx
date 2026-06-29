import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import WebsitePageBody from '../components/WebsitePageBody';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const FullStackWebDev = () => (
  <div className="fswd__page_wrapper">
    <Navbar />

    <section className="fswd__hero_section fswd__hero_section--top">
      <div className="fswd__hero_overlay" aria-hidden="true" />
      <div className="fswd__hero_content">
        <Breadcrumb items={PAGE_BREADCRUMBS.websiteDevelopment} className="breadcrumb--centered breadcrumb--on-dark" />
        <div className="fswd__hero_badge">
          <span className="badge-dot">●</span>
          <span className="hero-badge-text">
            <span className="hero-badge-accent">Website Development</span>
            <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
          </span>
        </div>
        <h1 className="fswd__h1">{MAIN_SERVICE_SEO.websiteDevelopment.h1}</h1>
        <p className="fswd__hero_description">
          Your website is often the first impression customers have of your business. We provide professional
          website development across the Eastern Province — modern, responsive and SEO-friendly websites
          that help businesses attract more customers and grow online.
        </p>
        <div className="hero-cta-wrap">
          <a href="#contact" className="fswd__cta_primary hero-cta-btn">
            Get a Free Website Consultation
          </a>
        </div>
        <HeroTrustText text={HERO_TRUST_TEXT.fullStack} />
      </div>
    </section>

    <WebsitePageBody />

    <HomeTechStackSection />
    <ContactSection />
    <Footer />
  </div>
);

export default FullStackWebDev;
