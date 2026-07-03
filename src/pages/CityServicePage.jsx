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
} from '../components/CityPageSections';
import { SITE_URL } from '../lib/siteConfig';
import { getCityBreadcrumb, getCityHeroLines } from '../content/cityPagesContent';
import { getRelatedCities, getCityTypeMeta } from '../content/cityPageEnhancements';
import RichCitySections from '../components/RichCitySections';
import HomeTechStackSection from '../components/HomeTechStackSection';
import { getRichCityContent } from '../content/richCityContent';

export default function CityServicePage({ config }) {
  const breadcrumb = getCityBreadcrumb(config);
  const heroLines = getCityHeroLines(config);
  const richSections = getRichCityContent(config.slug);
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
            <span className="fswd__h1_line">{heroLines.line1}</span>
            <span className="fswd__h1_line fswd__h1_line--accent highlight-text">
              {heroLines.line2}
            </span>
          </h1>
          {heroLines.tagline ? (
            <p className="fswd__hero_tagline">{heroLines.tagline}</p>
          ) : null}
          <p className="fswd__hero_description">{config.heroDesc}</p>
          <div className="hero-cta-wrap">
            <a href="#contact" className="fswd__cta_primary hero-cta-btn">
              {config.ctaText}
            </a>
          </div>
          <HeroTrustText text={`TRUSTED BY BUSINESSES IN ${config.city.toUpperCase()} & THE EASTERN PROVINCE`} />
        </div>
      </section>

      {richSections ? (
        <RichCitySections sections={richSections} config={config} />
      ) : (
        <>
          <CityAudienceSection config={config} meta={meta} />
          <CityServicesGrid config={config} />
          <CityProcessSection config={config} meta={meta} />
          <CityCtaBand config={config} meta={meta} />
        </>
      )}

      <CityRelatedSection config={config} related={related} />

      <HomeTechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
