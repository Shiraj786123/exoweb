import React from 'react';
import Link from 'next/link';
import {
  HiOutlineBuildingOffice2,
  HiOutlineSquare3Stack3D,
  HiOutlineClipboardDocumentList,
  HiOutlineCreditCard,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiOutlineIdentification,
  HiOutlineGlobeAlt,
  HiOutlineCog6Tooth,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlinePuzzlePiece,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineTruck,
  HiOutlineShoppingBag,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import { SiPhp, SiLaravel, SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiPostgresql } from 'react-icons/si';
import ServiceProcessSection from './ServiceProcessSection';
import {
  SOFT_STATS,
  SOFT_SERVICES,
  SOFT_BENEFITS,
  SOFT_PROCESS,
  SOFT_TECH,
  SOFT_INDUSTRIES,
  SOFT_FAQ,
} from '../content/softwarePageContent';

const serviceIcons = {
  business: HiOutlineBuildingOffice2,
  erp: HiOutlineSquare3Stack3D,
  inventory: HiOutlineClipboardDocumentList,
  pos: HiOutlineCreditCard,
  booking: HiOutlineCalendarDays,
  crm: HiOutlineUserGroup,
  hr: HiOutlineIdentification,
  web: HiOutlineGlobeAlt,
  analytics: HiOutlineChartBar,
};

const benefitIcons = {
  custom: HiOutlineSparkles,
  automation: HiOutlineCog6Tooth,
  cost: HiOutlineCurrencyDollar,
  secure: HiOutlineShieldCheck,
  integration: HiOutlinePuzzlePiece,
  value: HiOutlineSparkles,
};

const industryIcons = {
  retail: HiOutlineShoppingBag,
  hotel: HiOutlineBuildingOffice2,
  health: HiOutlineHeart,
  education: HiOutlineAcademicCap,
  factory: HiOutlineCog6Tooth,
  logistics: HiOutlineTruck,
};

const techIcons = {
  php: SiPhp,
  laravel: SiLaravel,
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  api: HiOutlinePuzzlePiece,
};

const Header = ({ title, subtitle, light }) => (
  <div className={`soft-ref__header${light ? ' soft-ref__header--light' : ''}`}>
    <h2 className="soft-ref__title">{title}</h2>
    {subtitle && <p className="soft-ref__subtitle">{subtitle}</p>}
  </div>
);

const SoftwarePageBody = () => (
  <div className="soft-ref">
    <section className="soft-ref__stats">
      <div className="soft-ref__container">
        <div className="soft-ref__stats_row">
          {SOFT_STATS.map((s) => (
            <div key={s.label} className="soft-ref__stat">
              <strong style={{ color: s.color }}>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="soft-ref__section">
      <div className="soft-ref__container">
        <Header title="Our Software Development Services" subtitle="Custom software solutions built for your business." />
        <div className="soft-ref__services">
          {SOFT_SERVICES.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article key={s.title} className="soft-ref__service_card">
                <div className="soft-ref__service_icon" style={{ backgroundColor: `${s.color}14`, color: s.color }}>
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a href="#contact" className="soft-ref__link" style={{ color: s.color }}>
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="soft-ref__benefits">
      <div className="soft-ref__container">
        <Header title="Why Choose Custom Software?" subtitle="Software built specifically for how your business works." light />
        <div className="soft-ref__benefits_grid">
          {SOFT_BENEFITS.map((b) => {
            const Icon = benefitIcons[b.icon];
            return (
              <div key={b.title} className="soft-ref__benefit">
                <div className="soft-ref__benefit_icon"><Icon /></div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <ServiceProcessSection
      title="Our Development Process"
      subtitle="From discovery to deployment and beyond."
      steps={SOFT_PROCESS}
      alt
    />

    <section className="soft-ref__section">
      <div className="soft-ref__container">
        <Header title="Technologies We Use" subtitle="Modern, proven technologies for reliable software." />
        <div className="soft-ref__tech_grid">
          {SOFT_TECH.map((t) => {
            const Icon = techIcons[t.icon];
            return (
              <div key={t.name} className="soft-ref__tech_item">
                <span style={{ color: t.color }}><Icon /></span>
                <span>{t.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="soft-ref__section">
      <div className="soft-ref__container">
        <Header title="Industries We Serve" />
        <div className="soft-ref__industries">
          {SOFT_INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.icon];
            return (
              <div key={ind.title} className="soft-ref__industry">
                <div style={{ color: ind.color }}><Icon /></div>
                <span>{ind.title}</span>
              </div>
            );
          })}
        </div>
        <div className="soft-ref__area_wrap">
          <Link href="/software-development-batticaloa" className="soft-ref__area_btn">Software Development in Batticaloa →</Link>
        </div>
      </div>
    </section>

    <section className="soft-ref__section soft-ref__section--alt">
      <div className="soft-ref__container soft-ref__container--narrow">
        <Header title="Frequently Asked Questions" />
        <div className="soft-ref__faq">
          {SOFT_FAQ.map((item) => (
            <details key={item.q} className="soft-ref__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default SoftwarePageBody;
