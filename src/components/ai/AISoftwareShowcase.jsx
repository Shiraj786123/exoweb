import React, { useState } from 'react';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineRocketLaunch,
  HiOutlineCog6Tooth,
  HiOutlineSparkles,
  HiOutlinePuzzlePiece,
  HiOutlineCpuChip,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTrophy,
  HiOutlineBolt,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineWrenchScrewdriver,
  HiOutlineTruck,
} from 'react-icons/hi2';
import ServiceProcessSection from '../ServiceProcessSection';
import ShowcasePlatformStrip from '../showcase/ShowcasePlatformStrip';
import {
  AI_PLATFORMS,
  AI_SERVICES_INTRO,
  AI_SERVICE_CARDS,
  AI_SERVICES,
  AI_FEATURE_TILES,
  AI_INDUSTRY_TILES,
  AI_PROCESS_SHORT,
} from '../../content/aiSoftwarePageContent';

const serviceIcons = {
  chat: HiOutlineChatBubbleLeftRight,
  agent: HiOutlineRocketLaunch,
  automation: HiOutlineCog6Tooth,
  sparkles: HiOutlineSparkles,
  integration: HiOutlinePuzzlePiece,
  software: HiOutlineCpuChip,
};

const featureIcons = {
  productivity: HiOutlineArrowTrendingUp,
  cost: HiOutlineCurrencyDollar,
  experience: HiOutlineUserGroup,
  decisions: HiOutlineLightBulb,
  scale: HiOutlineScale,
  accuracy: HiOutlineShieldCheck,
  competitive: HiOutlineTrophy,
  future: HiOutlineBolt,
};

const industryIcons = {
  health: HiOutlineHeart,
  retail: HiOutlineShoppingBag,
  hotel: HiOutlineBuildingOffice2,
  education: HiOutlineAcademicCap,
  finance: HiOutlineBanknotes,
  construction: HiOutlineWrenchScrewdriver,
  manufacturing: HiOutlineCog6Tooth,
  logistics: HiOutlineTruck,
};

const SectionHead = ({ title, subtitle }) => (
  <div className="aiss-show__head">
    <h2 className="aiss-show__title">{title}</h2>
    {subtitle && <p className="aiss-show__subtitle">{subtitle}</p>}
  </div>
);

const AISoftwareShowcase = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    setOpenServiceIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="aiss-show" id="ai-services">
      <ShowcasePlatformStrip label="We integrate with leading AI platforms" items={AI_PLATFORMS} />

      <section className="aiss-show__section">
        <div className="aiss-show__container">
          <SectionHead title={AI_SERVICES_INTRO.title} subtitle={AI_SERVICES_INTRO.subtitle} />
          {AI_SERVICES_INTRO.paragraphs.map((p) => (
            <p key={p} className="aiss-show__services_lead">{p}</p>
          ))}
          <div className="aiss-show__services_wrap">
            <div className="aiss-show__services_grid aiss-show__services_grid--six">
              {AI_SERVICE_CARDS.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const detail = AI_SERVICES[index];
                const isOpen = openServiceIndex === index;
                return (
                  <article
                    key={service.title}
                    className={`aiss-show__service_card${isOpen ? ' aiss-show__service_card--open' : ''}`}
                  >
                    <div className="aiss-show__service_head">
                      <div className="aiss-show__service_icon" style={{ color: service.color }}>
                        <Icon />
                      </div>
                      <h3>{service.title}</h3>
                      <p className="aiss-show__service_summary">{service.summary}</p>
                      {detail && (
                        <button
                          type="button"
                          className="aiss-show__service_toggle"
                          style={{ color: service.color }}
                          aria-expanded={isOpen}
                          onClick={() => toggleService(index)}
                        >
                          <span>View Details</span>
                          <span className="aiss-show__service_toggle_icon" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {openServiceIndex !== null && AI_SERVICES[openServiceIndex] && (
              <div
                className="aiss-show__service_panel aiss-show__service_panel--full"
                style={{ '--panel-accent': AI_SERVICE_CARDS[openServiceIndex].color }}
              >
                <div className="aiss-show__service_panel_inner">
                  <div className="aiss-show__service_panel_intro">
                    <p>{AI_SERVICES[openServiceIndex].intro}</p>
                    <p className="aiss-show__service_closing">{AI_SERVICES[openServiceIndex].closing}</p>
                  </div>
                  <div className="aiss-show__service_panel_features">
                    <p className="aiss-show__service_label">{AI_SERVICES[openServiceIndex].includesLabel}</p>
                    <ul className="aiss-show__service_bullets aiss-show__service_bullets--horizontal">
                      {AI_SERVICES[openServiceIndex].bullets.map((item) => (
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

      <section className="aiss-show__section aiss-show__section--alt">
        <div className="aiss-show__container">
          <SectionHead title="Benefits of AI Software for Your Business" />
          <div className="aiss-show__mini_grid aiss-show__mini_grid--single-line">
            {AI_FEATURE_TILES.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div key={feature.title} className="aiss-show__mini_card">
                  <div className="aiss-show__mini_icon" style={{ color: feature.color }}>
                    <Icon />
                  </div>
                  <span>{feature.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="aiss-show__section">
        <div className="aiss-show__container">
          <SectionHead title="Industries We Serve" subtitle="Custom AI solutions for every industry." />
          <div className="aiss-show__mini_grid aiss-show__mini_grid--single-line">
            {AI_INDUSTRY_TILES.map((industry) => {
              const Icon = industryIcons[industry.icon];
              return (
                <div key={industry.title} className="aiss-show__mini_card">
                  <div className="aiss-show__mini_icon" style={{ color: industry.color }}>
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
        title="Our AI Development Process"
        subtitle="A structured process to ensure your AI solution delivers measurable results."
        steps={AI_PROCESS_SHORT}
        alt
      />
    </div>
  );
};

export default AISoftwareShowcase;
