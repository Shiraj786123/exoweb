import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import SEOShowcase from '../components/seo/SEOShowcase';
import SEOPageBody from '../components/SEOPageBody';
import SEOHeroVisual from '../components/seo/SEOHeroVisual';
import ProposalCtaButton from '../components/shared/ProposalCtaButton';
import ServiceTechStackSection from '../components/ServiceTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { SEO_HERO } from '../content/seoPageContent';
import {
  HiOutlineArrowTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from 'react-icons/hi2';

const heroHighlightIcons = {
  rank: HiOutlineArrowTrendingUp,
  traffic: HiOutlineGlobeAlt,
  local: HiOutlineMapPin,
};

const SEOServices = () => (
  <div className="ecd__wrapper">
    <Navbar />

    <section className="ecd-hero">
      <div className="ecd-hero__bg" aria-hidden="true" />
      <div className="ecd-hero__container">
        <div className="ecd-hero__content">
          <Breadcrumb
            items={PAGE_BREADCRUMBS.seoServices}
            className="breadcrumb--on-dark"
          />
          <div className="ecd-hero__badge">
            <span className="ecd-hero__badge_dot" />
            {SEO_HERO.badge}
          </div>
          <h1 className="ecd-h1">
            {SEO_HERO.h1Line1}{' '}
            <span className="ecd-hero__highlight">{SEO_HERO.h1Line2}</span>
          </h1>
          <p className="ecd-hero__tagline">{SEO_HERO.tagline}</p>
          <p className="ecd-hero__desc">{SEO_HERO.description}</p>
          <ul className="ecd-hero__highlights">
            {SEO_HERO.highlights.map((item) => {
              const Icon = heroHighlightIcons[item.icon];
              return (
                <li key={item.title}>
                  <span className="ecd-hero__highlight_icon" style={{ color: item.color }}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
          <div className="ecd-hero__actions hero-cta-wrap">
            <ProposalCtaButton className="ecd-hero__cta_primary hero-cta-btn" service="SEO">
              {SEO_HERO.primaryCta} <span aria-hidden="true">→</span>
            </ProposalCtaButton>
            <a href={SEO_HERO.secondaryHref} className="ecd-hero__cta_secondary">
              {SEO_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <SEOHeroVisual />
      </div>
    </section>

    <SEOShowcase />
    <SEOPageBody />

    <ServiceTechStackSection service="seo" />
    <ContactSection />
    <Footer />
  </div>
);

export default SEOServices;
