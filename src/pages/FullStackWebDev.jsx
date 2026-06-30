import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import WebsiteShowcase from '../components/website/WebsiteShowcase';
import WebsitePageBody from '../components/WebsitePageBody';
import WebsiteHeroVisual from '../components/website/WebsiteHeroVisual';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { WEB_HERO } from '../content/websitePageContent';
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

const FullStackWebDev = () => (
  <div className="ecd__wrapper">
    <Navbar />

    <section className="ecd-hero">
      <div className="ecd-hero__bg" aria-hidden="true" />
      <div className="ecd-hero__container">
        <div className="ecd-hero__content">
          <Breadcrumb
            items={PAGE_BREADCRUMBS.websiteDevelopment}
            className="breadcrumb--on-dark"
          />
          <div className="ecd-hero__badge">
            <span className="ecd-hero__badge_dot" />
            {WEB_HERO.badge}
          </div>
          <h1 className="ecd-hero__h1">
            {WEB_HERO.h1Line1}{' '}
            <span className="ecd-hero__highlight">{WEB_HERO.h1Line2}</span>
          </h1>
          <p className="ecd-hero__tagline">{WEB_HERO.tagline}</p>
          <p className="ecd-hero__desc">{WEB_HERO.description}</p>
          <ul className="ecd-hero__highlights">
            {WEB_HERO.highlights.map((item) => {
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
              {WEB_HERO.primaryCta} <span aria-hidden="true">→</span>
            </a>
            <a href={WEB_HERO.secondaryHref} className="ecd-hero__cta_secondary">
              {WEB_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <WebsiteHeroVisual />
      </div>
    </section>

    <WebsiteShowcase />
    <WebsitePageBody />

    <ContactSection />
    <Footer />
  </div>
);

export default FullStackWebDev;
