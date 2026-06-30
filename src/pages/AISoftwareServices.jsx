import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';
import AISoftwareShowcase from '../components/ai/AISoftwareShowcase';
import AISoftwarePageBody from '../components/AISoftwarePageBody';
import AISoftwareHeroVisual from '../components/ai/AISoftwareHeroVisual';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { AI_HERO } from '../content/aiSoftwarePageContent';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCpuChip,
  HiOutlineBolt,
} from 'react-icons/hi2';

const heroHighlightIcons = {
  chat: HiOutlineChatBubbleLeftRight,
  cpu: HiOutlineCpuChip,
  bolt: HiOutlineBolt,
};

const AISoftwareServices = () => (
  <div className="aiss__wrapper">
    <Navbar />

    <section className="aiss-hero">
      <div className="aiss-hero__bg" aria-hidden="true" />
      <div className="aiss-hero__container">
        <div className="aiss-hero__content">
          <Breadcrumb
            items={PAGE_BREADCRUMBS.aiSoftwareDevelopment}
            className="breadcrumb--on-dark"
          />
          <div className="aiss-hero__badge">
            <span className="aiss-hero__badge_dot" />
            {AI_HERO.badge}
          </div>
          <h1 className="aiss-hero__h1">
            {AI_HERO.h1Line1}{' '}
            <span className="aiss-hero__highlight">{AI_HERO.h1Line2}</span>
          </h1>
          <p className="aiss-hero__tagline">{AI_HERO.tagline}</p>
          <p className="aiss-hero__desc">{AI_HERO.description}</p>
          <ul className="aiss-hero__highlights">
            {AI_HERO.highlights.map((item) => {
              const Icon = heroHighlightIcons[item.icon];
              return (
                <li key={item.title}>
                  <span className="aiss-hero__highlight_icon" style={{ color: item.color }}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
          <div className="aiss-hero__actions hero-cta-wrap">
            <a href="#contact" className="aiss-hero__cta_primary hero-cta-btn">
              {AI_HERO.primaryCta} <span aria-hidden="true">→</span>
            </a>
            <a href={AI_HERO.secondaryHref} className="aiss-hero__cta_secondary">
              {AI_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <AISoftwareHeroVisual />
      </div>
    </section>

    <AISoftwareShowcase />
    <AISoftwarePageBody />

    <ContactSection />
    <Footer />
  </div>
);

export default AISoftwareServices;
