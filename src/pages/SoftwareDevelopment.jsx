import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import SoftwareShowcase from '../components/software/SoftwareShowcase';
import SoftwarePageBody from '../components/SoftwarePageBody';
import SoftwareHeroVisual from '../components/software/SoftwareHeroVisual';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { SOFT_HERO } from '../content/softwarePageContent';
import {
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
  HiOutlineCloud,
} from 'react-icons/hi2';

const heroHighlightIcons = {
  cog: HiOutlineCog6Tooth,
  shield: HiOutlineShieldCheck,
  cloud: HiOutlineCloud,
};

const SoftwareDevelopment = () => (
  <div className="ecd__wrapper">
    <Navbar />

    <section className="ecd-hero">
      <div className="ecd-hero__bg" aria-hidden="true" />
      <div className="ecd-hero__container">
        <div className="ecd-hero__content">
          <Breadcrumb
            items={PAGE_BREADCRUMBS.softwareDevelopment}
            className="breadcrumb--on-dark"
          />
          <div className="ecd-hero__badge">
            <span className="ecd-hero__badge_dot" />
            {SOFT_HERO.badge}
          </div>
          <h1 className="ecd-hero__h1">
            {SOFT_HERO.h1Line1}{' '}
            <span className="ecd-hero__highlight">{SOFT_HERO.h1Line2}</span>
          </h1>
          <p className="ecd-hero__tagline">{SOFT_HERO.tagline}</p>
          <p className="ecd-hero__desc">{SOFT_HERO.description}</p>
          <ul className="ecd-hero__highlights">
            {SOFT_HERO.highlights.map((item) => {
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
            <a href="#contact" className="ecd-hero__cta_primary hero-cta-btn">
              {SOFT_HERO.primaryCta} <span aria-hidden="true">→</span>
            </a>
            <a href={SOFT_HERO.secondaryHref} className="ecd-hero__cta_secondary">
              {SOFT_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <SoftwareHeroVisual />
      </div>
    </section>

    <SoftwareShowcase />
    <SoftwarePageBody />

    <ContactSection />
    <Footer />
  </div>
);

export default SoftwareDevelopment;
