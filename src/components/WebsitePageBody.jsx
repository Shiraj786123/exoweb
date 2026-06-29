import React from 'react';
import Link from 'next/link';
import {
  HiOutlineComputerDesktop,
  HiOutlineCodeBracket,
  HiOutlineShoppingCart,
  HiOutlineArrowPath,
  HiOutlineWrenchScrewdriver,
  HiOutlineDevicePhoneMobile,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlinePencilSquare,
  HiOutlineArrowTrendingUp,
  HiOutlineBolt,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineCake,
  HiOutlineAcademicCap,
  HiOutlineWrench,
  HiOutlineShoppingBag,
} from 'react-icons/hi2';
import { SiWordpress, SiReact, SiNextdotjs, SiPhp, SiLaravel, SiNodedotjs } from 'react-icons/si';
import ServiceProcessSection from './ServiceProcessSection';
import {
  WEB_TECH_STACK,
  WEB_SERVICES,
  WEB_FEATURES,
  WEB_PROCESS,
  WEB_INDUSTRIES,
  WEB_AREAS,
  WEB_FAQ,
} from '../content/websitePageContent';

const techIcons = {
  wordpress: SiWordpress,
  react: SiReact,
  next: SiNextdotjs,
  php: SiPhp,
  laravel: SiLaravel,
  node: SiNodedotjs,
};

const serviceIcons = {
  business: HiOutlineComputerDesktop,
  wordpress: SiWordpress,
  cart: HiOutlineShoppingCart,
  code: HiOutlineCodeBracket,
  refresh: HiOutlineArrowPath,
  support: HiOutlineWrenchScrewdriver,
};

const featureIcons = {
  device: HiOutlineDevicePhoneMobile,
  search: HiOutlineMagnifyingGlass,
  speed: HiOutlineBolt,
  shield: HiOutlineShieldCheck,
  edit: HiOutlinePencilSquare,
  growth: HiOutlineArrowTrendingUp,
};

const industryIcons = {
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  food: HiOutlineCake,
  education: HiOutlineAcademicCap,
  build: HiOutlineWrench,
  retail: HiOutlineShoppingBag,
};

const Header = ({ title, subtitle }) => (
  <div className="web-ref__header">
    <h2 className="web-ref__title">{title}</h2>
    {subtitle && <p className="web-ref__subtitle">{subtitle}</p>}
  </div>
);

const WebsitePageBody = () => (
  <div className="web-ref">
    <section className="web-ref__platforms">
      <div className="web-ref__container">
        <p className="web-ref__platforms_label">Built with modern web technologies</p>
        <div className="web-ref__platforms_row">
          {WEB_TECH_STACK.map((t) => {
            const Icon = techIcons[t.icon];
            return (
              <div key={t.name} className="web-ref__platform_item">
                <span className="web-ref__platform_icon" style={{ color: t.color }}><Icon /></span>
                <span>{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="web-ref__section">
      <div className="web-ref__container">
        <Header title="Our Website Development Services" subtitle="Professional websites tailored to your business goals." />
        <div className="web-ref__services">
          {WEB_SERVICES.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article key={s.title} className="web-ref__service_card">
                <div className="web-ref__service_icon" style={{ backgroundColor: `${s.color}14`, color: s.color }}>
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a href="#contact" className="web-ref__link" style={{ color: s.color }}>
                  View Details <span aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="web-ref__section web-ref__section--alt">
      <div className="web-ref__container">
        <Header title="Why Businesses Choose Us" subtitle="Every website is built for performance, security and growth." />
        <div className="web-ref__features">
          {WEB_FEATURES.map((f) => {
            const Icon = featureIcons[f.icon];
            return (
              <div key={f.title} className="web-ref__feature_card">
                <div className="web-ref__feature_icon" style={{ color: f.color }}><Icon /></div>
                <span>{f.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <ServiceProcessSection
      title="Our Website Development Process"
      subtitle="A proven process from concept to launch."
      steps={WEB_PROCESS}
    />

    <section className="web-ref__section web-ref__section--alt">
      <div className="web-ref__container">
        <Header title="Industries We Work With" subtitle="We build websites for businesses across many industries." />
        <div className="web-ref__industries">
          {WEB_INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.icon];
            return (
              <div key={ind.title} className="web-ref__industry_card">
                <div className="web-ref__industry_icon" style={{ color: ind.color }}><Icon /></div>
                <span>{ind.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="web-ref__section">
      <div className="web-ref__container">
        <Header title="Areas We Serve" subtitle="Website development services across the Eastern Province." />
        <div className="web-ref__areas">
          {WEB_AREAS.map((area) => (
            <Link key={area.href} href={area.href} className="web-ref__area_pill">{area.label}</Link>
          ))}
        </div>
      </div>
    </section>

    <section className="web-ref__section web-ref__section--alt">
      <div className="web-ref__container web-ref__container--narrow">
        <Header title="Frequently Asked Questions" />
        <div className="web-ref__faq">
          {WEB_FAQ.map((item) => (
            <details key={item.q} className="web-ref__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default WebsitePageBody;
