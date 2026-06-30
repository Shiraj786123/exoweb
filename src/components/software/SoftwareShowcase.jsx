import React, { useState } from 'react';
import {
  HiOutlineBuildingOffice2,
  HiOutlineSquare3Stack3D,
  HiOutlineClipboardDocumentList,
  HiOutlineCreditCard,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiOutlineIdentification,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineCog6Tooth,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlinePuzzlePiece,
  HiOutlineCloud,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineTruck,
  HiOutlineShoppingBag,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import ServiceProcessSection from '../ServiceProcessSection';
import ShowcasePlatformStrip from '../showcase/ShowcasePlatformStrip';
import {
  SOFT_PLATFORMS,
  SOFT_SERVICES_INTRO,
  SOFT_SERVICE_CARDS,
  SOFT_SERVICE_DETAILS,
  SOFT_FEATURE_TILES,
  SOFT_INDUSTRY_TILES,
  SOFT_PROCESS_SHORT,
} from '../../content/softwarePageContent';

const serviceIcons = {
  business: HiOutlineBuildingOffice2,
  erp: HiOutlineSquare3Stack3D,
  inventory: HiOutlineClipboardDocumentList,
  pos: HiOutlineCreditCard,
  booking: HiOutlineCalendarDays,
  crm: HiOutlineUserGroup,
  hr: HiOutlineIdentification,
  web: HiOutlineGlobeAlt,
};

const featureIcons = {
  custom: HiOutlineSparkles,
  automation: HiOutlineCog6Tooth,
  productivity: HiOutlineChartBar,
  cost: HiOutlineCurrencyDollar,
  shield: HiOutlineShieldCheck,
  integration: HiOutlinePuzzlePiece,
  cloud: HiOutlineCloud,
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

const SectionHead = ({ title, subtitle }) => (
  <div className="ecd-show__head">
    <h2 className="ecd-show__title">{title}</h2>
    {subtitle && <p className="ecd-show__subtitle">{subtitle}</p>}
  </div>
);

const SoftwareShowcase = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    setOpenServiceIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="ecd-show">
      <ShowcasePlatformStrip label="Built with modern technologies" items={SOFT_PLATFORMS} />

      <section className="ecd-show__section">
        <div className="ecd-show__container">
          <SectionHead title={SOFT_SERVICES_INTRO.title} subtitle={SOFT_SERVICES_INTRO.subtitle} />
          <div className="ecd-show__services_wrap">
            <div className="ecd-show__services_grid ecd-show__services_grid--eight">
              {SOFT_SERVICE_CARDS.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const detail = SOFT_SERVICE_DETAILS[index];
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

            {openServiceIndex !== null && SOFT_SERVICE_DETAILS[openServiceIndex] && (
              <div
                className="ecd-show__service_panel ecd-show__service_panel--full"
                style={{ '--panel-accent': SOFT_SERVICE_CARDS[openServiceIndex].color }}
              >
                <div className="ecd-show__service_panel_inner">
                  <div className="ecd-show__service_panel_intro">
                    <p>{SOFT_SERVICE_DETAILS[openServiceIndex].intro}</p>
                    <p className="ecd-show__service_closing">{SOFT_SERVICE_DETAILS[openServiceIndex].closing}</p>
                  </div>
                  <div className="ecd-show__service_panel_features">
                    <p className="ecd-show__service_label">{SOFT_SERVICE_DETAILS[openServiceIndex].includesLabel}</p>
                    <ul className="ecd-show__service_bullets ecd-show__service_bullets--horizontal">
                      {SOFT_SERVICE_DETAILS[openServiceIndex].bullets.map((item) => (
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
          <SectionHead title="Benefits of Custom Software" />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line">
            {SOFT_FEATURE_TILES.map((feature) => {
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
            title="Industries We Serve"
            subtitle="Custom software solutions for businesses across every industry."
          />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line ecd-show__mini_grid--cols-6">
            {SOFT_INDUSTRY_TILES.map((industry) => {
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
        title="Our Software Development Process"
        subtitle="A proven process to deliver your software on time and on budget."
        steps={SOFT_PROCESS_SHORT}
        alt
      />
    </div>
  );
};

export default SoftwareShowcase;
