import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import SoftwarePageBody from '../components/SoftwarePageBody';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const SoftwareDevelopment = () => (
  <>
    <Navbar />
    <div className="software-page">
      <section className="hero" style={{ paddingTop: '190px' }}>
        <div className="hero-container">
          <Breadcrumb items={PAGE_BREADCRUMBS.softwareDevelopment} className="breadcrumb--centered breadcrumb--on-dark" />
          <span className="hero-badge">
            <span className="badge-dot">●</span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">Custom Software Development</span>
              <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
            </span>
          </span>
          <h1 className="software__h1">{MAIN_SERVICE_SEO.softwareDevelopment.h1}</h1>
          <p className="hero-desc">
            Looking for reliable software development in the Eastern Province? We develop custom software
            solutions that help businesses automate operations, improve efficiency and accelerate growth.
          </p>
          <div className="hero-buttons hero-cta-wrap">
            <a href="#contact" className="primary-btn hero-cta-btn">Get Free Consultation</a>
            <a href="/#results" className="secondary-btn">
              View Portfolio <span className="arrow">→</span>
            </a>
          </div>
          <HeroTrustText text={HERO_TRUST_TEXT.software} />
        </div>
      </section>

      <SoftwarePageBody />
    </div>

    <HomeTechStackSection />
    <ContactSection />
    <Footer />
  </>
);

export default SoftwareDevelopment;
