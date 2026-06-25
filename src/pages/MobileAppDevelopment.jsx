import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb, { BreadcrumbSchema } from '../components/Breadcrumb';
import {
  CityCtaBand,
  CityProcessSection,
  CityStatsSection,
} from '../components/CityPageSections';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { getCityTypeMeta } from '../content/cityPageEnhancements';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const SERVICES = [
  {
    title: 'Android App Development',
    desc: 'Native Android apps optimized for performance, offline use, and local business workflows.',
    icon: '🤖',
  },
  {
    title: 'iOS App Development',
    desc: 'Polished iPhone & iPad apps with smooth UX and App Store-ready submission support.',
    icon: '🍎',
  },
  {
    title: 'Cross-Platform Apps',
    desc: 'React Native apps that reach both Android and iOS from a single efficient codebase.',
    icon: '⚡',
  },
  {
    title: 'Business & Booking Apps',
    desc: 'Customer ordering, appointment booking, and service apps tailored to your operations.',
    icon: '📅',
  },
  {
    title: 'UI/UX Design',
    desc: 'Clean, intuitive mobile interfaces designed for real users — not just screenshots.',
    icon: '🎨',
  },
  {
    title: 'Backend & APIs',
    desc: 'Secure APIs, databases, and admin panels that power your app behind the scenes.',
    icon: '🔗',
  },
];

const PLATFORMS = [
  {
    title: 'Android',
    desc: 'Reach the majority of mobile users in Sri Lanka with native Android apps.',
    icon: '🤖',
    className: 'mapp__platform-card--android',
  },
  {
    title: 'iOS',
    desc: 'Premium iPhone experiences for brands that want polish and performance.',
    icon: '🍎',
    className: 'mapp__platform-card--ios',
  },
  {
    title: 'Cross-Platform',
    desc: 'Ship faster with one codebase for both platforms — ideal for MVPs and startups.',
    icon: '📲',
    className: 'mapp__platform-card--cross',
  },
];

const MobileAppDevelopment = () => {
  const breadcrumb = PAGE_BREADCRUMBS.mobileAppDevelopment;
  const meta = getCityTypeMeta('mobile-app');

  const mockConfig = {
    city: 'Eastern Province',
    ctaText: 'Get a Free App Consultation',
    parentService: { href: '/mobile-app-development' },
    serviceListTitle: 'Mobile application development services',
  };

  return (
    <div className="fswd__page_wrapper">
      <Navbar />
      <BreadcrumbSchema items={breadcrumb} />

      <section className="fswd__hero_section fswd__hero_section--top">
        <div className="fswd__hero_overlay" aria-hidden="true" />
        <div className="fswd__hero_content">
          <Breadcrumb items={breadcrumb} className="breadcrumb--centered breadcrumb--on-dark" />
          <div className="fswd__hero_badge">
            <span className="badge-dot">●</span>
            <span className="hero-badge-text">
              <span className="hero-badge-accent">Mobile App Development</span>
              <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
            </span>
          </div>
          <h1 className="fswd__h1">
            Mobile App Development for Android &amp; iOS{' '}
            <span className="highlight-text">Eastern Province</span>
          </h1>
          <p className="fswd__hero_description">
            Android and iOS mobile applications for businesses in Batticaloa and across Sri Lanka —
            native and cross-platform apps built to perform, scale, and delight users.
          </p>
          <a href="#contact" className="fswd__cta_primary">
            Get a Free App Consultation
          </a>
          <HeroTrustText text={HERO_TRUST_TEXT.mobileApp} />
        </div>
      </section>

      <CityStatsSection meta={meta} />

      <section className="fswd__what_section">
        <div className="fswd__container fswd__what_wrapper">
          <div className="fswd__what_content_left">
            <span className="fswd__sec_badge yellow">MOBILE FIRST</span>
            <h2 className="fswd__h2">What Is Mobile App Development?</h2>
            <p className="fswd__section_description">
              Mobile app development means building software that runs on smartphones and tablets —
              putting your business directly in your customers&apos; pockets with ordering, booking,
              notifications, and more.
            </p>
          </div>
          <div className="fswd__what_box_right">
            <div className="fswd__callout_box">
              <span className="fswd__callout_icon">📱</span>
              <p>
                From idea to App Store — Vexoweb handles design, development, testing, and launch so
                you can focus on running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fswd__split_section_split">
        <div className="fswd__container">
          <span className="fswd__sec_badge yellow">WHO WE HELP</span>
          <h2 className="fswd__h2">Who needs a mobile app?</h2>
          <p className="fswd__section_description_white">
            If your customers live on their phones, a dedicated app can drive loyalty, repeat orders,
            and smoother operations.
          </p>

          <div className="fswd__split_grid_split city-page__split-single">
            <div className="fswd__split_card_split split_blue">
              <span className="fswd__split_tag">IDEAL FOR</span>
              <h3 className="fswd__h3">Businesses that benefit most</h3>
              <ul className="fswd__check_list">
                {meta.whoItsFor.map((item) => (
                  <li key={item}>
                    <span className="check_marker">✓</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fswd__split_card_split split_red">
              <span className="fswd__split_tag">CHALLENGES</span>
              <h3 className="fswd__h3">Problems we solve</h3>
              <ul className="fswd__check_list">
                {meta.problems.map((item) => (
                  <li key={item}>
                    <span className="check_marker">✓</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="city-page__cards-section">
        <div className="city-page__cards-inner">
          <div className="city-page__cards-header">
            <span className="fswd__sec_badge purple">CAPABILITIES</span>
            <h2 className="fswd__h2">Our mobile app development services</h2>
            <p className="fswd__section_description">
              End-to-end mobile solutions — from wireframes to App Store launch and beyond.
            </p>
          </div>

          <div className="city-page__cards-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="city-page__feature-card">
                <div className="city-page__feature-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="city-page__feature-title">{service.title}</h3>
                <p className="city-page__feature-desc">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__services_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge cyan">PLATFORMS</span>
          <h2 className="fswd__h2">Android, iOS &amp; cross-platform</h2>
          <p className="fswd__section_description">
            We help you choose the right approach based on your budget, timeline, and audience.
          </p>

          <div className="mapp__platforms">
            {PLATFORMS.map((platform) => (
              <article
                key={platform.title}
                className={`mapp__platform-card ${platform.className}`}
              >
                <div className="mapp__platform-icon" aria-hidden="true">
                  {platform.icon}
                </div>
                <h3 className="mapp__platform-title">{platform.title}</h3>
                <p className="mapp__platform-desc">{platform.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CityProcessSection config={mockConfig} meta={meta} />

      <section className="fswd__why_section">
        <div className="fswd__container">
          <span className="fswd__sec_badge green">WHY VEXOWEB</span>
          <h2 className="fswd__h2">Why choose us for your app?</h2>
          <p className="fswd__section_description">
            A local team that combines mobile expertise with websites, software, and SEO — so your
            entire digital presence works together.
          </p>

          <div className="fswd__why_strip_list">
            {[
              { text: 'Batticaloa-based team with Eastern Province clients', theme: 'fswd_item_blue' },
              { text: 'Clear pricing and honest project advice', theme: 'fswd_item_purple' },
              { text: 'UI/UX design included — not an afterthought', theme: 'fswd_item_green' },
              { text: 'Post-launch support and feature updates', theme: 'fswd_item_cyan' },
            ].map((item, index) => (
              <div key={item.text} className={`fswd__why_strip_item ${item.theme}`}>
                <div className="fswd__why_strip_left">
                  <div className="fswd__why_strip_circle">0{index + 1}</div>
                  <span className="fswd__why_strip_text">{item.text}</span>
                </div>
                <span className="fswd__why_strip_arrow_icon">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CityCtaBand
        config={{
          city: 'your business',
          ctaText: 'Get a Free App Consultation',
          parentService: { href: '/contact' },
        }}
        meta={{
          ...meta,
          parentCta: 'Talk to our Batticaloa team',
        }}
      />

      <section className="city-page__related">
        <div className="city-page__related-inner">
          <span className="fswd__sec_badge green">LOCAL APPS</span>
          <h2 className="fswd__h2">Mobile apps in Batticaloa</h2>
          <p className="fswd__section_description">
            Looking for app development in a specific town? We serve businesses across the east coast.
          </p>
          <div className="city-page__related-grid">
            <Link href="/mobile-app-development-batticaloa" className="city-page__related-link">
              Mobile App Development in Batticaloa
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
