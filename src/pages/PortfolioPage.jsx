import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import HeroTrustText from '../components/HeroTrustText';
import PortfolioGrid from '../components/PortfolioGrid';
import ProposalCtaButton from '../components/shared/ProposalCtaButton';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';
import { PORTFOLIO_GRID_PROJECTS } from '../content/portfolioProjects';
import { PORTFOLIO_HERO, PORTFOLIO_RESULTS } from '../content/portfolioPageContent';

const PortfolioPage = () => (
  <div className="portfolio__wrapper">
    <Navbar />

    <section className="portfolio-hero">
      <div className="portfolio-hero__bg" aria-hidden="true" />
      <div className="portfolio-hero__container">
        <Breadcrumb
          items={PAGE_BREADCRUMBS.portfolio}
          className="breadcrumb--centered breadcrumb--on-dark"
        />

        <div className="portfolio-hero__badge">
          <span className="portfolio-hero__badge_dot" />
          {PORTFOLIO_HERO.badge}
        </div>

        <h1 className="portfolio-hero__title">
          {PORTFOLIO_HERO.h1Line1}{' '}
          <span className="portfolio-hero__highlight">{PORTFOLIO_HERO.h1Line2}</span>
        </h1>

        <p className="portfolio-hero__tagline">{PORTFOLIO_HERO.tagline}</p>

        <div className="portfolio-hero__actions hero-cta-wrap">
          <ProposalCtaButton
            className="portfolio-hero__cta_primary hero-cta-btn"
            service="Portfolio"
          >
            {PORTFOLIO_HERO.primaryCta} <span aria-hidden="true">→</span>
          </ProposalCtaButton>
          <a href={PORTFOLIO_HERO.secondaryHref} className="portfolio-hero__cta_secondary">
            {PORTFOLIO_HERO.secondaryCta} <span aria-hidden="true">→</span>
          </a>
        </div>

        <HeroTrustText text={HERO_TRUST_TEXT.portfolio} />
      </div>
    </section>

    <section className="portfolio-results" id="portfolio-results">
      <div className="portfolio-results__container">
        <header className="portfolio-results__header">
          <span className="success-tag">{PORTFOLIO_RESULTS.eyebrow}</span>
          <h2 className="success-title">{PORTFOLIO_RESULTS.title}</h2>
          <p className="success-subtitle">{PORTFOLIO_RESULTS.subtitle}</p>
        </header>

        <PortfolioGrid projects={PORTFOLIO_GRID_PROJECTS} />
      </div>
    </section>

    <ContactSection />
    <Footer />
  </div>
);

export default PortfolioPage;
