import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb, { BreadcrumbSchema } from '../components/Breadcrumb';
import MobilePageBody from '../components/MobilePageBody';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';
const MobileAppDevelopment = () => {
  const breadcrumb = PAGE_BREADCRUMBS.mobileAppDevelopment;

  return (
    <div className="fswd__page_wrapper">
      <Navbar />
      <BreadcrumbSchema items={breadcrumb} />

      <section className="fswd__hero_section fswd__hero_section--top">
        <div className="fswd__hero_overlay" aria-hidden="true" />
        <div className="fswd__hero_content">
          <Breadcrumb items={breadcrumb} className="breadcrumb--centered breadcrumb--on-dark" />
          <div className="fswd__hero_badge">
            <span className="badge-dot">●</span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">Mobile App Development</span>
              <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
            </span>
          </div>
          <h1 className="fswd__h1">{MAIN_SERVICE_SEO.mobileAppDevelopment.h1}</h1>
          <p className="fswd__hero_description">
            Looking for professional mobile app development in the Eastern Province? We develop custom Android
            and iOS applications that help businesses improve customer engagement, streamline operations and
            accelerate digital growth.
          </p>
          <a href="#contact" className="fswd__cta_primary">
            Get a Free App Consultation
          </a>
          <HeroTrustText text={HERO_TRUST_TEXT.mobileApp} />
        </div>
      </section>

      <MobilePageBody />

      <HomeTechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
