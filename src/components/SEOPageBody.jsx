import React from 'react';
import Link from 'next/link';
import {
  HiOutlineMapPin,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentText,
  HiOutlineBuildingStorefront,
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineShoppingCart,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import ServiceProcessSection from './ServiceProcessSection';
import {
  SEO_METRICS,
  SEO_SERVICES,
  SEO_BENEFITS,
  SEO_PROCESS,
  SEO_INDUSTRIES,
  SEO_AREAS,
  SEO_FAQ,
  SEO_WHY,
} from '../content/seoPageContent';

const serviceIcons = {
  local: HiOutlineMapPin,
  technical: HiOutlineWrenchScrewdriver,
  onpage: HiOutlineDocumentText,
  gbp: HiOutlineBuildingStorefront,
  keyword: HiOutlineMagnifyingGlass,
  content: HiOutlinePencilSquare,
  ecommerce: HiOutlineShoppingCart,
  audit: HiOutlineClipboardDocumentCheck,
};

const benefitIcons = {
  rank: HiOutlineArrowTrendingUp,
  traffic: HiOutlineGlobeAlt,
  leads: HiOutlineUserGroup,
  trust: HiOutlineShieldCheck,
  growth: HiOutlineChartBar,
  local: HiOutlineMapPin,
};

const industryIcons = {
  local: HiOutlineMapPin,
  ecommerce: HiOutlineShoppingCart,
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  services: HiOutlineBriefcase,
  education: HiOutlineAcademicCap,
};

const RankingChart = () => (
  <div className="seo-ref__chart" aria-hidden="true">
    <div className="seo-ref__chart_header">
      <span>Organic Traffic Growth</span>
      <strong>+186%</strong>
    </div>
    <div className="seo-ref__chart_bars">
      {[30, 45, 55, 70, 85, 100].map((h, i) => (
        <div key={i} className="seo-ref__chart_bar" style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="seo-ref__chart_labels">
      <span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span><span>M6</span>
    </div>
  </div>
);

const Header = ({ title, subtitle, light }) => (
  <div className={`seo-ref__header${light ? ' seo-ref__header--light' : ''}`}>
    <h2 className="seo-ref__title">{title}</h2>
    {subtitle && <p className="seo-ref__subtitle">{subtitle}</p>}
  </div>
);

const SEOPageBody = () => (
  <div className="seo-ref">
    <section className="seo-ref__metrics">
      <div className="seo-ref__container">
        <div className="seo-ref__metrics_row">
          {SEO_METRICS.map((m) => (
            <div key={m.label} className="seo-ref__metric">
              <strong style={{ color: m.color }}>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="seo-ref__section">
      <div className="seo-ref__container">
        <Header title="Our SEO Services" subtitle="Comprehensive search engine optimisation for sustainable growth." />
        <div className="seo-ref__services">
          {SEO_SERVICES.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article key={s.title} className="seo-ref__service">
                <div className="seo-ref__service_icon" style={{ backgroundColor: `${s.color}14`, color: s.color }}><Icon /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a href="#contact" className="seo-ref__link" style={{ color: s.color }}>Learn More →</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="seo-ref__benefits">
      <div className="seo-ref__container">
        <Header title="Why Invest in SEO?" subtitle="More customers search online before choosing a product or service." light />
        <div className="seo-ref__benefits_grid">
          {SEO_BENEFITS.map((b) => {
            const Icon = benefitIcons[b.icon];
            return (
              <div key={b.title} className="seo-ref__benefit">
                <div className="seo-ref__benefit_icon"><Icon /></div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="seo-ref__section seo-ref__section--alt">
      <div className="seo-ref__container">
        <div className="seo-ref__split">
          <div>
            <Header title="Data-Driven SEO Results" subtitle="Track measurable improvements in traffic, rankings and leads." />
            <RankingChart />
          </div>
          <div>
            <Header title="Why Choose Vexoweb?" subtitle="Ethical SEO strategies that deliver long-term business growth." />
            <ul className="seo-ref__why_list">
              {SEO_WHY.map((item) => (
                <li key={item}>
                  <HiOutlineCheckCircle className="seo-ref__why_check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ServiceProcessSection
      title="Our SEO Process"
      subtitle="A systematic approach to improving your search visibility."
      steps={SEO_PROCESS}
    />

    <section className="seo-ref__section seo-ref__section--alt">
      <div className="seo-ref__container">
        <Header title="Industries We Work With" />
        <div className="seo-ref__industries">
          {SEO_INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.icon];
            return (
              <div key={ind.title} className="seo-ref__industry">
                <div style={{ color: ind.color }}><Icon /></div>
                <span>{ind.title}</span>
              </div>
            );
          })}
        </div>
        <Header title="SEO Services Across the Eastern Province" subtitle="Explore our SEO services in nearby locations." />
        <div className="seo-ref__areas">
          {SEO_AREAS.map((area) => (
            <Link key={area.href} href={area.href} className="seo-ref__area_pill">{area.label}</Link>
          ))}
        </div>
      </div>
    </section>

    <section className="seo-ref__section">
      <div className="seo-ref__container seo-ref__container--narrow">
        <Header title="Frequently Asked Questions" />
        <div className="seo-ref__faq">
          {SEO_FAQ.map((item) => (
            <details key={item.q} className="seo-ref__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default SEOPageBody;
