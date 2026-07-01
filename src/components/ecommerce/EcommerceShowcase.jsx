import React, { useState } from 'react';
import {
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiOutlineCodeBracket,
  HiOutlineBuildingStorefront,
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineSquare3Stack3D,
  HiOutlineClipboardDocumentList,
  HiOutlineTag,
  HiOutlineChartBar,
  HiOutlineMagnifyingGlass,
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineHeart,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';
import woocommerceIcon from '../../assets/icons/woocommerce.svg';
import shopifyIcon from '../../assets/icons/shopify.svg';
import magentoIcon from '../../assets/icons/magento.svg';
import opencartIcon from '../../assets/icons/opencart.svg';
import ServiceProcessSection from '../ServiceProcessSection';
import ShowcaseServicePanelIntro from '../showcase/ShowcaseServicePanelIntro';
import {
  ECOMMERCE_PLATFORMS,
  ECOMMERCE_SERVICES_INTRO,
  ECOMMERCE_SERVICE_CARDS,
  ECOMMERCE_SERVICES,
  ECOMMERCE_FEATURE_TILES,
  ECOMMERCE_INDUSTRY_TILES,
  ECOMMERCE_PROCESS_SHORT,
} from '../../content/ecommercePageContent';

const platformIcons = {
  woocommerce: woocommerceIcon,
  shopify: shopifyIcon,
  magento: magentoIcon,
  opencart: opencartIcon,
};

const serviceIcons = {
  cart: HiOutlineShoppingCart,
  bag: HiOutlineShoppingBag,
  code: HiOutlineCodeBracket,
  store: HiOutlineBuildingStorefront,
  refresh: HiOutlineArrowPath,
};

const featureIcons = {
  device: HiOutlineDevicePhoneMobile,
  shield: HiOutlineShieldCheck,
  box: HiOutlineCube,
  layers: HiOutlineSquare3Stack3D,
  clipboard: HiOutlineClipboardDocumentList,
  tag: HiOutlineTag,
  chart: HiOutlineChartBar,
  search: HiOutlineMagnifyingGlass,
};

const industryIcons = {
  shirt: HiOutlineSparkles,
  cpu: HiOutlineCpuChip,
  gem: HiOutlineSparkles,
  sofa: HiOutlineCube,
  cart: HiOutlineShoppingCart,
  heart: HiOutlineHeart,
  book: HiOutlineBookOpen,
  building: HiOutlineBuildingOffice2,
};

const SectionHead = ({ title, subtitle }) => (
  <div className="ecd-show__head">
    <h2 className="ecd-show__title">{title}</h2>
    {subtitle && <p className="ecd-show__subtitle">{subtitle}</p>}
  </div>
);

const EcommerceShowcase = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  const toggleService = (index) => {
    setOpenServiceIndex((prev) => (prev === index ? null : index));
  };

  return (
  <div className="ecd-show">
    {/* Platforms */}
    <section className="ecd-show__platforms">
      <div className="ecd-show__container">
        <p className="ecd-show__platforms_label">We build with the world&apos;s leading ecommerce platforms</p>
        <div className="ecd-show__platforms_row">
          {ECOMMERCE_PLATFORMS.map((platform) => (
            <div key={platform.name} className="ecd-show__platform_item">
              {platform.icon === 'custom' ? (
                <span className="ecd-show__platform_custom" aria-hidden="true">
                  <HiOutlineCodeBracket />
                </span>
              ) : (
                <img src={platformIcons[platform.icon].src || platformIcons[platform.icon]} alt={platform.name} />
              )}
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services — 5 cards */}
    <section className="ecd-show__section">
      <div className="ecd-show__container">
        <SectionHead title={ECOMMERCE_SERVICES_INTRO.title} subtitle={ECOMMERCE_SERVICES_INTRO.subtitle} />
        <div className="ecd-show__services_wrap">
          <div className="ecd-show__services_grid">
            {ECOMMERCE_SERVICE_CARDS.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              const detail = ECOMMERCE_SERVICES[index];
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

          {openServiceIndex !== null && ECOMMERCE_SERVICES[openServiceIndex] && (
            <div
              className="ecd-show__service_panel ecd-show__service_panel--full"
              style={{ '--panel-accent': ECOMMERCE_SERVICE_CARDS[openServiceIndex].color }}
            >
              <div className="ecd-show__service_panel_inner">
                <ShowcaseServicePanelIntro
                  intro={ECOMMERCE_SERVICES[openServiceIndex].intro}
                  closing={ECOMMERCE_SERVICES[openServiceIndex].closing}
                />
                <div className="ecd-show__service_panel_features">
                  <p className="ecd-show__service_label">{ECOMMERCE_SERVICES[openServiceIndex].includesLabel}</p>
                  <ul className="ecd-show__service_bullets ecd-show__service_bullets--horizontal">
                    {ECOMMERCE_SERVICES[openServiceIndex].bullets.map((item) => (
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

    {/* Features — 8 tiles */}
    <section className="ecd-show__section ecd-show__section--alt">
      <div className="ecd-show__container">
        <SectionHead title="Powerful Features for a Successful Online Store" />
        <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line">
          {ECOMMERCE_FEATURE_TILES.map((feature) => {
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

    {/* Industries — 8 tiles */}
    <section className="ecd-show__section">
      <div className="ecd-show__container">
        <SectionHead
          title="Industries We Serve"
          subtitle="Custom ecommerce solutions for every industry."
        />
        <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line">
          {ECOMMERCE_INDUSTRY_TILES.map((industry) => {
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

    {/* Process */}
    <ServiceProcessSection
      title="Our Ecommerce Development Process"
      subtitle="A simple and effective process to build your dream online store."
      steps={ECOMMERCE_PROCESS_SHORT}
      alt
    />
  </div>
  );
};

export default EcommerceShowcase;
