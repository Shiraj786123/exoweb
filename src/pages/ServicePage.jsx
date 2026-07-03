import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import ProposalCtaButton from '../components/shared/ProposalCtaButton';
import ServiceTechStackSection from '../components/ServiceTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { getServicePageConfig } from '../content/servicePagesRegistry';

const THEMES = {
  ecd: {
    wrapper: 'ecd__wrapper',
    hero: 'ecd-hero',
    heroBg: 'ecd-hero__bg',
    heroContainer: 'ecd-hero__container',
    heroContent: 'ecd-hero__content',
    heroBadge: 'ecd-hero__badge',
    heroBadgeDot: 'ecd-hero__badge_dot',
    heroHighlight: 'ecd-hero__highlight',
    heroTagline: 'ecd-hero__tagline',
    heroDesc: 'ecd-hero__desc',
    heroHighlights: 'ecd-hero__highlights',
    heroHighlightIcon: 'ecd-hero__highlight_icon',
    heroActions: 'ecd-hero__actions',
    heroCtaPrimary: 'ecd-hero__cta_primary',
    heroCtaSecondary: 'ecd-hero__cta_secondary',
    h1: 'ecd-h1',
  },
  aiss: {
    wrapper: 'aiss__wrapper',
    hero: 'aiss-hero',
    heroBg: 'aiss-hero__bg',
    heroContainer: 'aiss-hero__container',
    heroContent: 'aiss-hero__content',
    heroBadge: 'aiss-hero__badge',
    heroBadgeDot: 'aiss-hero__badge_dot',
    heroHighlight: 'aiss-hero__highlight',
    heroTagline: 'aiss-hero__tagline',
    heroDesc: 'aiss-hero__desc',
    heroHighlights: 'aiss-hero__highlights',
    heroHighlightIcon: 'aiss-hero__highlight_icon',
    heroActions: 'aiss-hero__actions',
    heroCtaPrimary: 'aiss-hero__cta_primary',
    heroCtaSecondary: 'aiss-hero__cta_secondary',
    h1: 'ecd-h1',
  },
};

export default function ServicePage({ serviceId }) {
  const config = getServicePageConfig(serviceId);
  if (!config) return null;

  const {
    theme,
    hero,
    heroIcons,
    HeroVisual,
    Showcase,
    PageBody,
    techStackKey,
    proposalService,
    breadcrumbKey,
  } = config;

  const t = THEMES[theme] || THEMES.ecd;
  const breadcrumb = PAGE_BREADCRUMBS[breadcrumbKey];

  return (
    <div className={t.wrapper}>
      <Navbar />

      <section className={t.hero}>
        <div className={t.heroBg} aria-hidden="true" />
        <div className={t.heroContainer}>
          <div className={t.heroContent}>
            <Breadcrumb items={breadcrumb} className="breadcrumb--on-dark" />
            <div className={t.heroBadge}>
              <span className={t.heroBadgeDot} />
              {hero.badge}
            </div>
            <h1 className={t.h1}>
              {hero.h1Line1}{' '}
              <span className={t.heroHighlight}>{hero.h1Line2}</span>
            </h1>
            <p className={t.heroTagline}>{hero.tagline}</p>
            <p className={t.heroDesc}>{hero.description}</p>
            <ul className={t.heroHighlights}>
              {hero.highlights.map((item) => {
                const Icon = heroIcons[item.icon];
                return (
                  <li key={item.title}>
                    <span className={t.heroHighlightIcon} style={{ color: item.color }}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className={`${t.heroActions} hero-cta-wrap`}>
              <ProposalCtaButton
                className={`${t.heroCtaPrimary} hero-cta-btn`}
                service={proposalService}
              >
                {hero.primaryCta} <span aria-hidden="true">→</span>
              </ProposalCtaButton>
              <a href={hero.secondaryHref} className={t.heroCtaSecondary}>
                {hero.secondaryCta}
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Showcase />
      <PageBody />

      <ServiceTechStackSection service={techStackKey} />
      <ContactSection />
      <Footer />
    </div>
  );
}
