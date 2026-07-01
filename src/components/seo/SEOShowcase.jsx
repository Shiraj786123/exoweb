import React, { useState } from 'react';
import {
  HiOutlineMapPin,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentText,
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineBuildingStorefront,
  HiOutlineShoppingCart,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import ServiceProcessSection from '../ServiceProcessSection';
import ShowcasePlatformStrip from '../showcase/ShowcasePlatformStrip';
import ShowcaseServicePanelIntro from '../showcase/ShowcaseServicePanelIntro';
import {
  SEO_CHANNELS,
  SEO_SERVICES_INTRO,
  SEO_SERVICE_CARDS,
  SEO_SERVICE_DETAILS,
  SEO_FEATURE_TILES,
  SEO_INDUSTRY_TILES,
  SEO_PROCESS_SHORT,
  SEO_WHY_INVEST,
} from '../../content/seoPageContent';

const serviceIcons = {
  local: HiOutlineMapPin,
  technical: HiOutlineWrenchScrewdriver,
  onpage: HiOutlineDocumentText,
  keyword: HiOutlineMagnifyingGlass,
  content: HiOutlinePencilSquare,
  gbp: HiOutlineBuildingStorefront,
  ecommerce: HiOutlineShoppingCart,
  audit: HiOutlineClipboardDocumentCheck,
};

const featureIcons = {
  rank: HiOutlineArrowTrendingUp,
  traffic: HiOutlineGlobeAlt,
  leads: HiOutlineUserGroup,
  visibility: HiOutlineEye,
  trust: HiOutlineShieldCheck,
  ads: HiOutlineCurrencyDollar,
  growth: HiOutlineChartBar,
};

const industryIcons = {
  local: HiOutlineMapPin,
  ecommerce: HiOutlineShoppingCart,
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  professional: HiOutlineBriefcase,
  education: HiOutlineAcademicCap,
};

const SectionHead = ({ title, subtitle }) => (
  <div className="ecd-show__head">
    <h2 className="ecd-show__title">{title}</h2>
    {subtitle && <p className="ecd-show__subtitle">{subtitle}</p>}
  </div>
);

const SEOShowcase = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    setOpenServiceIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="ecd-show">
      <ShowcasePlatformStrip
        label="We optimise your visibility across leading search platforms"
        items={SEO_CHANNELS}
      />

      <section className="ecd-show__section">
        <div className="ecd-show__container">
          <SectionHead title={SEO_SERVICES_INTRO.title} subtitle={SEO_SERVICES_INTRO.subtitle} />
          <div className="ecd-show__services_wrap">
            <div className="ecd-show__services_grid ecd-show__services_grid--eight">
              {SEO_SERVICE_CARDS.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const detail = SEO_SERVICE_DETAILS[index];
                const isOpen = openServiceIndex === index;
                return (
                  <article
                    key={service.title}
                    className={`ecd-show__service_card${isOpen ? ' ecd-show__service_card--open' : ''}`}
                  >
                    <div className="ecd-show__service_head">
                      <div className="ecd-show__service_icon" style={{ color: service.color }}>
                        <Icon />
                      </div>
                      <h3>{service.title}</h3>
                      <p className="ecd-show__service_summary">{service.summary}</p>
                      {detail && (
                        <button
                          type="button"
                          className="ecd-show__service_toggle"
                          style={{ color: service.color }}
                          aria-expanded={isOpen}
                          onClick={() => toggleService(index)}
                        >
                          <span>View Details</span>
                          <span className="ecd-show__service_toggle_icon" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {openServiceIndex !== null && SEO_SERVICE_DETAILS[openServiceIndex] && (
              <div
                className="ecd-show__service_panel ecd-show__service_panel--full"
                style={{ '--panel-accent': SEO_SERVICE_CARDS[openServiceIndex].color }}
              >
                <div className="ecd-show__service_panel_inner">
                  <ShowcaseServicePanelIntro
                    intro={SEO_SERVICE_DETAILS[openServiceIndex].intro}
                    closing={SEO_SERVICE_DETAILS[openServiceIndex].closing}
                  />
                  <div className="ecd-show__service_panel_features">
                    <p className="ecd-show__service_label">{SEO_SERVICE_DETAILS[openServiceIndex].includesLabel}</p>
                    <ul className="ecd-show__service_bullets ecd-show__service_bullets--horizontal">
                      {SEO_SERVICE_DETAILS[openServiceIndex].bullets.map((item) => (
                        <li key={item}>
                          <HiOutlineCheckCircle aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="ecd-show__section ecd-show__section--alt">
        <div className="ecd-show__container">
          <SectionHead title={SEO_WHY_INVEST.title} subtitle={SEO_WHY_INVEST.subtitle} />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line ecd-show__mini_grid--cols-7">
            {SEO_FEATURE_TILES.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div key={feature.title} className="ecd-show__mini_card">
                  <div className="ecd-show__mini_icon" style={{ color: feature.color }}>
                    <Icon />
                  </div>
                  <span>{feature.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecd-show__section">
        <div className="ecd-show__container">
          <SectionHead
            title="Industries We Work With"
            subtitle="Professional SEO for businesses across every industry."
          />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line ecd-show__mini_grid--cols-6">
            {SEO_INDUSTRY_TILES.map((industry) => {
              const Icon = industryIcons[industry.icon];
              return (
                <div key={industry.title} className="ecd-show__mini_card">
                  <div className="ecd-show__mini_icon" style={{ color: industry.color }}>
                    <Icon />
                  </div>
                  <span>{industry.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceProcessSection
        title="Our SEO Process"
        subtitle="A systematic approach to improving your search visibility."
        steps={SEO_PROCESS_SHORT}
        alt
      />
    </div>
  );
};

export default SEOShowcase;
