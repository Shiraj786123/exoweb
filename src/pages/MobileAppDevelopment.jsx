import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import MobileShowcase from '../components/mobile/MobileShowcase';
import MobilePageBody from '../components/MobilePageBody';
import MobileHeroVisual from '../components/mobile/MobileHeroVisual';
import ProposalCtaButton from '../components/shared/ProposalCtaButton';
import ServiceTechStackSection from '../components/ServiceTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { MOB_HERO } from '../content/mobilePageContent';
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineDeviceTablet,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';

const heroHighlightIcons = {
  device: HiOutlineDevicePhoneMobile,
  tablet: HiOutlineDeviceTablet,
  shield: HiOutlineShieldCheck,
};

const MobileAppDevelopment = () => (
  <div className="ecd__wrapper">
    <Navbar />

    <section className="ecd-hero">
      <div className="ecd-hero__bg" aria-hidden="true" />
      <div className="ecd-hero__container">
        <div className="ecd-hero__content">
          <Breadcrumb
            items={PAGE_BREADCRUMBS.mobileAppDevelopment}
            className="breadcrumb--on-dark"
          />
          <div className="ecd-hero__badge">
            <span className="ecd-hero__badge_dot" />
            {MOB_HERO.badge}
          </div>
          <h1 className="ecd-h1">
            {MOB_HERO.h1Line1}{' '}
            <span className="ecd-hero__highlight">{MOB_HERO.h1Line2}</span>
          </h1>
          <p className="ecd-hero__tagline">{MOB_HERO.tagline}</p>
          <p className="ecd-hero__desc">{MOB_HERO.description}</p>
          <ul className="ecd-hero__highlights">
            {MOB_HERO.highlights.map((item) => {
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
            <ProposalCtaButton className="ecd-hero__cta_primary hero-cta-btn" service="Mobile App Development">
              {MOB_HERO.primaryCta} <span aria-hidden="true">→</span>
            </ProposalCtaButton>
            <a href={MOB_HERO.secondaryHref} className="ecd-hero__cta_secondary">
              {MOB_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <MobileHeroVisual />
      </div>
    </section>

    <MobileShowcase />
    <MobilePageBody />

    <ServiceTechStackSection service="mobile" />
    <ContactSection />
    <Footer />
  </div>
);

export default MobileAppDevelopment;
