import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import AISoftwarePageBody from '../components/AISoftwarePageBody';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const AISoftwareServices = () => (
  <div className="aiss__wrapper">
    <Navbar />

    <section className="aiss__hero_centered_layout">
      <div className="aiss__hero_overlay_centered" />
      <div className="aiss__hero_container_centered">
        <Breadcrumb items={PAGE_BREADCRUMBS.aiSoftwareDevelopment} className="breadcrumb--centered breadcrumb--on-dark" />
        <div className="aiss__badge_pill_centered">
          <span className="badge_dot_indicator">●</span>
          <span className="hero-badge-text">
            <span className="hero-badge-accent">AI Software Development</span>
            <span className="hero-badge-light"> — Sri Lanka</span>
          </span>
        </div>
        <h1 className="aiss__h1">{MAIN_SERVICE_SEO.aiSoftwareDevelopment.h1}</h1>
        <p className="aiss__hero_text_centered">
          At Vexoweb, we provide professional AI software development services in Sri Lanka — helping businesses
          harness artificial intelligence to improve productivity, reduce costs and deliver better customer experiences.
        </p>
        <div className="aiss__hero_buttons_centered">
          <a href="#contact" className="aiss__btn_primary_centered">
            Get Free AI Consultation
          </a>
          <a href="#contact" className="aiss__btn_secondary_centered">
            Explore AI Solutions ↓
          </a>
        </div>
        <HeroTrustText text={HERO_TRUST_TEXT.aiSoftware} />
      </div>
    </section>

    <AISoftwarePageBody />

    <HomeTechStackSection />
    <ContactSection />
    <Footer />
  </div>
);

export default AISoftwareServices;
