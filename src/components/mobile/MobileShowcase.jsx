import React, { useState } from 'react';
import {
  HiOutlineShoppingCart,
  HiOutlineBuildingOffice2,
  HiOutlineDeviceTablet,
  HiOutlineDevicePhoneMobile,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineBolt,
  HiOutlineBellAlert,
  HiOutlineShieldCheck,
  HiOutlineArrowsRightLeft,
  HiOutlineCloudArrowUp,
  HiOutlineBuildingStorefront,
  HiOutlineWrenchScrewdriver,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCake,
} from 'react-icons/hi2';
import ServiceProcessSection from '../ServiceProcessSection';
import ShowcasePlatformStrip from '../showcase/ShowcasePlatformStrip';
import ShowcaseServicePanelIntro from '../showcase/ShowcaseServicePanelIntro';
import {
  MOB_PLATFORMS,
  MOB_SERVICES_INTRO,
  MOB_SERVICE_CARDS,
  MOB_SERVICE_DETAILS,
  MOB_FEATURE_TILES,
  MOB_INDUSTRY_TILES,
  MOB_PROCESS_SHORT,
} from '../../content/mobilePageContent';

const serviceIcons = {
  android: HiOutlineDevicePhoneMobile,
  ios: HiOutlineDevicePhoneMobile,
  cross: HiOutlineDeviceTablet,
  business: HiOutlineBuildingOffice2,
  cart: HiOutlineShoppingCart,
  booking: HiOutlineCalendarDays,
  enterprise: HiOutlineBriefcase,
};

const featureIcons = {
  speed: HiOutlineBolt,
  bell: HiOutlineBellAlert,
  shield: HiOutlineShieldCheck,
  api: HiOutlineArrowsRightLeft,
  offline: HiOutlineCloudArrowUp,
  store: HiOutlineBuildingStorefront,
  sync: HiOutlineArrowsRightLeft,
  support: HiOutlineWrenchScrewdriver,
};

const industryIcons = {
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  retail: HiOutlineShoppingCart,
  education: HiOutlineAcademicCap,
  food: HiOutlineCake,
  services: HiOutlineBriefcase,
};

const SectionHead = ({ title, subtitle }) => (
  <div className="ecd-show__head">
    <h2 className="ecd-show__title">{title}</h2>
    {subtitle && <p className="ecd-show__subtitle">{subtitle}</p>}
  </div>
);

const MobileShowcase = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    setOpenServiceIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="ecd-show">
      <ShowcasePlatformStrip label="We build apps for every platform" items={MOB_PLATFORMS} />

      <section className="ecd-show__section">
        <div className="ecd-show__container">
          <SectionHead title={MOB_SERVICES_INTRO.title} subtitle={MOB_SERVICES_INTRO.subtitle} />
          <div className="ecd-show__services_wrap">
            <div className="ecd-show__services_grid ecd-show__services_grid--seven">
              {MOB_SERVICE_CARDS.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const detail = MOB_SERVICE_DETAILS[index];
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

            {openServiceIndex !== null && MOB_SERVICE_DETAILS[openServiceIndex] && (
              <div
                className="ecd-show__service_panel ecd-show__service_panel--full"
                style={{ '--panel-accent': MOB_SERVICE_CARDS[openServiceIndex].color }}
              >
                <div className="ecd-show__service_panel_inner">
                  <ShowcaseServicePanelIntro
                    intro={MOB_SERVICE_DETAILS[openServiceIndex].intro}
                    closing={MOB_SERVICE_DETAILS[openServiceIndex].closing}
                  />
                  <div className="ecd-show__service_panel_features">
                    <p className="ecd-show__service_label">{MOB_SERVICE_DETAILS[openServiceIndex].includesLabel}</p>
                    <ul className="ecd-show__service_bullets ecd-show__service_bullets--horizontal">
                      {MOB_SERVICE_DETAILS[openServiceIndex].bullets.map((item) => (
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
          <SectionHead title="What You Get With Every Mobile App" />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line">
            {MOB_FEATURE_TILES.map((feature) => {
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
            subtitle="Professional mobile applications for businesses across every industry."
          />
          <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line ecd-show__mini_grid--cols-6">
            {MOB_INDUSTRY_TILES.map((industry) => {
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
        title="Our Mobile App Development Process"
        subtitle="From idea to App Store launch—a proven process for every project."
        steps={MOB_PROCESS_SHORT}
        alt
      />
    </div>
  );
};

export default MobileShowcase;
