import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import EcommerceShowcase from '../components/ecommerce/EcommerceShowcase';
import EcommercePageBody from '../components/EcommercePageBody';
import EcommerceHeroVisual from '../components/ecommerce/EcommerceHeroVisual';
import ServiceTechStackSection from '../components/ServiceTechStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { ECOMMERCE_HERO } from '../content/ecommercePageContent';
import {
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
  HiOutlineDevicePhoneMobile,
} from 'react-icons/hi2';

const heroHighlightIcons = {
  cog: HiOutlineCog6Tooth,
  shield: HiOutlineShieldCheck,
  device: HiOutlineDevicePhoneMobile,
};

const EcommerceDev = () => (
  <div className="ecd__wrapper">
    <Navbar />

    <section className="ecd-hero">
      <div className="ecd-hero__bg" aria-hidden="true" />
      <div className="ecd-hero__container">
        <div className="ecd-hero__content">
          <Breadcrumb
            items={PAGE_BREADCRUMBS.ecommerceDevelopment}
            className="breadcrumb--on-dark"
          />
          <div className="ecd-hero__badge">
            <span className="ecd-hero__badge_dot" />
            {ECOMMERCE_HERO.badge}
          </div>
          <h1 className="ecd-hero__h1">
            {ECOMMERCE_HERO.h1Line1}{' '}
            <span className="ecd-hero__highlight">{ECOMMERCE_HERO.h1Line2}</span>
          </h1>
          <p className="ecd-hero__tagline">{ECOMMERCE_HERO.tagline}</p>
          <p className="ecd-hero__desc">{ECOMMERCE_HERO.description}</p>
          <ul className="ecd-hero__highlights">
            {ECOMMERCE_HERO.highlights.map((item) => {
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
              {ECOMMERCE_HERO.primaryCta} <span aria-hidden="true">→</span>
            </a>
            <a href={ECOMMERCE_HERO.secondaryHref} className="ecd-hero__cta_secondary">
              {ECOMMERCE_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <EcommerceHeroVisual />
      </div>
    </section>

    <EcommerceShowcase />
    <EcommercePageBody />

    <ServiceTechStackSection service="ecommerce" />
    <ContactSection />
    <Footer />
  </div>
);

export default EcommerceDev;
