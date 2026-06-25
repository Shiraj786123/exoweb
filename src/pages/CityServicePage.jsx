import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb, { BreadcrumbSchema } from '../components/Breadcrumb';
import HeroTrustText from '../components/HeroTrustText';
import {
  CityAudienceSection,
  CityCtaBand,
  CityProcessSection,
  CityRelatedSection,
  CityServicesGrid,
  CityStatsSection,
} from '../components/CityPageSections';
import { SITE_URL } from '../lib/siteConfig';
import { getCityBreadcrumb } from '../content/cityPagesContent';
import { getCityTypeMeta, getRelatedCities } from '../content/cityPageEnhancements';

export default function CityServicePage({ config }) {
  const breadcrumb = getCityBreadcrumb(config);
  const meta = getCityTypeMeta(config.serviceType);
  const related = getRelatedCities(config.serviceType, config.slug);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vexoweb',
    url: SITE_URL,
    telephone: '+94740309534',
    email: 'info@vexoweb.lk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Batticaloa',
      addressRegion: 'Eastern Province',
      addressCountry: 'LK',
    },
    areaServed: {
      '@type': 'City',
      name: config.city,
    },
    description: config.description,
  };

  return (
    <div className="fswd__page_wrapper">
      <Navbar />
      <BreadcrumbSchema items={breadcrumb} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>

      <section className="fswd__hero_section fswd__hero_section--top">
        <div className="fswd__hero_overlay" aria-hidden="true" />
        <div className="fswd__hero_content">
          <Breadcrumb
            items={breadcrumb}
            className="breadcrumb--centered breadcrumb--on-dark"
          />
          <div className="fswd__hero_badge">
            <span className="badge-dot">●</span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">{config.eyebrow}</span>
              <span className="hero-badge-light"> — {config.city}, Sri Lanka</span>
            </span>
          </div>
          <h1 className="fswd__h1">
            {config.h1}
            <br />
            <span className="highlight-text">{config.h1Accent}</span>
          </h1>
          <p className="fswd__hero_description">{config.heroDesc}</p>
          <a href="#contact" className="fswd__cta_primary">
            {config.ctaText}
          </a>
          <HeroTrustText text={`TRUSTED BY BUSINESSES IN ${config.city.toUpperCase()} & THE EASTERN PROVINCE`} />
        </div>
      </section>

      <CityStatsSection meta={meta} />

      <section className="fswd__what_section">
        <div className="fswd__container fswd__what_wrapper">
          <div className="fswd__what_content_left">
            <span className="fswd__sec_badge cyan">LOCAL EXPERTS</span>
            <h2 className="fswd__h2">{config.serviceListTitle}</h2>
            <p className="fswd__section_description">
              Vexoweb helps {config.city} businesses grow online with practical, results-focused
              digital services — backed by a local team that understands the Eastern Province market.
            </p>
          </div>
          <div className="fswd__what_box_right">
            <div className="fswd__callout_box">
              <span className="fswd__callout_icon">📍</span>
              <p>
                Based in Batticaloa, we serve businesses across {config.city} and the wider east
                coast with websites, software, mobile apps, and SEO — all from one trusted local team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CityAudienceSection config={config} meta={meta} />
      <CityServicesGrid config={config} />
      <CityProcessSection config={config} meta={meta} />
      <CityCtaBand config={config} meta={meta} />
      <CityRelatedSection config={config} related={related} />

      <ContactSection />
      <Footer />
    </div>
  );
}
