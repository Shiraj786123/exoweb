import React, { useState } from 'react';
import {
  HiOutlineComputerDesktop,
  HiOutlineCodeBracket,
  HiOutlineShoppingCart,
  HiOutlineArrowPath,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineBolt,
  HiOutlinePencilSquare,
  HiOutlineArrowTrendingUp,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineCake,
  HiOutlineAcademicCap,
  HiOutlineWrench,
  HiOutlineShoppingBag,
  HiOutlineBriefcase,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { SiWordpress } from 'react-icons/si';
import { importTechIcon } from '../../data/technologyStack';
import ServiceProcessSection from '../ServiceProcessSection';
import ShowcaseServicePanelIntro from '../showcase/ShowcaseServicePanelIntro';
import {
  WEB_PLATFORMS,
  WEB_SERVICES_INTRO,
  WEB_SERVICE_CARDS,
  WEB_SERVICE_DETAILS,
  WEB_FEATURE_TILES,
  WEB_INDUSTRY_TILES,
  WEB_PROCESS_SHORT,
} from '../../content/websitePageContent';

const serviceIcons = {
  business: HiOutlineComputerDesktop,
  wordpress: SiWordpress,
  cart: HiOutlineShoppingCart,
  code: HiOutlineCodeBracket,
  refresh: HiOutlineArrowPath,
  support: HiOutlineWrenchScrewdriver,
};

const featureIcons = {
  design: HiOutlinePencilSquare,
  device: HiOutlineDevicePhoneMobile,
  search: HiOutlineMagnifyingGlass,
  speed: HiOutlineBolt,
  shield: HiOutlineShieldCheck,
  edit: HiOutlinePencilSquare,
  growth: HiOutlineArrowTrendingUp,
  support: HiOutlineWrenchScrewdriver,
};

const industryIcons = {
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  food: HiOutlineCake,
  education: HiOutlineAcademicCap,
  build: HiOutlineWrench,
  retail: HiOutlineShoppingBag,
  professional: HiOutlineBriefcase,
  realestate: HiOutlineHomeModern,
};

const SectionHead = ({ title, subtitle }) => (
  <div className="ecd-show__head">
    <h2 className="ecd-show__title">{title}</h2>
    {subtitle && <p className="ecd-show__subtitle">{subtitle}</p>}
  </div>
);

const WebsiteShowcase = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    setOpenServiceIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="ecd-show">
      <section className="ecd-show__platforms">
        <div className="ecd-show__container">
          <p className="ecd-show__platforms_label">Built with modern web technologies</p>
          <div className="ecd-show__platforms_row">
            {WEB_PLATFORMS.map((platform) => {
              const iconSrc = importTechIcon(platform.icon);
              return (
                <div key={platform.name} className="ecd-show__platform_item">
                  {iconSrc && (
                    <img src={iconSrc.src || iconSrc} alt={platform.name} />
                  )}
                  <span>{platform.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecd-show__section">
        <div className="ecd-show__container">
          <SectionHead title={WEB_SERVICES_INTRO.title} subtitle={WEB_SERVICES_INTRO.subtitle} />
          <div className="ecd-show__services_wrap">
            <div className="ecd-show__services_grid ecd-show__services_grid--six">
              {WEB_SERVICE_CARDS.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const detail = WEB_SERVICE_DETAILS[index];
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

            {openServiceIndex !== null && WEB_SERVICE_DETAILS[openServiceIndex] && (
              <div
                className="ecd-show__service_panel ecd-show__service_panel--full"
                style={{ '--panel-accent': WEB_SERVICE_CARDS[openServiceIndex].color }}
              >
                <div className="ecd-show__service_panel_inner">
                  <ShowcaseServicePanelIntro
                    intro={WEB_SERVICE_DETAILS[openServiceIndex].intro}
                    closing={WEB_SERVICE_DETAILS[openServiceIndex].closing}
                  />
                  <div className="ecd-show__service_panel_features">
                    <p className="ecd-show__service_label">{WEB_SERVICE_DETAILS[openServiceIndex].includesLabel}</p>
                    <ul className="ecd-show__service_bullets ecd-show__service_bullets--horizontal">
                      {WEB_SERVICE_DETAILS[openServiceIndex].bullets.map((item) => (
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
          <SectionHead title="What You Get With Every Website" />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line">
            {WEB_FEATURE_TILES.map((feature) => {
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
            subtitle="Professional websites for businesses across every industry."
          />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line">
            {WEB_INDUSTRY_TILES.map((industry) => {
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
        title="Our Website Development Process"
        subtitle="A proven process to deliver your website on time and on budget."
        steps={WEB_PROCESS_SHORT}
        alt
      />
    </div>
  );
};

export default WebsiteShowcase;
