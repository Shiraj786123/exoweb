import React from 'react';
import Image from 'next/image';
import {
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiOutlineCodeBracket,
  HiOutlineBuildingStorefront,
  HiOutlineArrowPath,
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
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineCheckCircle,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';
import woocommerceIcon from '../assets/icons/woocommerce.svg';
import shopifyIcon from '../assets/icons/shopify.svg';
import magentoIcon from '../assets/icons/magento.svg';
import opencartIcon from '../assets/icons/opencart.svg';
import whyChooseImg from '../assets/icons/ecd-ai-robot.png';
import ServiceProcessSection from './ServiceProcessSection';
import {
  ECOMMERCE_PLATFORMS,
  ECOMMERCE_SERVICES,
  ECOMMERCE_FEATURES,
  ECOMMERCE_INDUSTRIES,
  ECOMMERCE_PROCESS,
  ECOMMERCE_WHY_CHOOSE,
} from '../content/ecommercePageContent';

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

const statIcons = {
  projects: HiOutlineBriefcase,
  satisfaction: HiOutlineCheckCircle,
  support: HiOutlineClock,
  custom: HiOutlineWrenchScrewdriver,
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="ecd-ref__header">
    <h2 className="ecd-ref__title">{title}</h2>
    {subtitle && <p className="ecd-ref__subtitle">{subtitle}</p>}
  </div>
);

const EcommercePageBody = () => (
  <div className="ecd-ref">
    {/* Platform logos */}
    <section className="ecd-ref__platforms">
      <div className="ecd-ref__container">
        <p className="ecd-ref__platforms_label">We build with the world&apos;s leading ecommerce platforms</p>
        <div className="ecd-ref__platforms_row">
          {ECOMMERCE_PLATFORMS.map((platform) => (
            <div key={platform.name} className="ecd-ref__platform_item">
              {platform.icon === 'custom' ? (
                <span className="ecd-ref__platform_custom" aria-hidden="true">
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

    {/* Services */}
    <section className="ecd-ref__section">
      <div className="ecd-ref__container">
        <SectionHeader
          title="Our Ecommerce Development Services"
          subtitle="Complete ecommerce solutions to start, grow and scale your online business."
        />
        <div className="ecd-ref__services_grid">
          {ECOMMERCE_SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article key={service.title} className="ecd-ref__service_card">
                <div className="ecd-ref__service_icon" style={{ color: service.color }}>
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="ecd-ref__learn_more">
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="ecd-ref__section ecd-ref__section--alt">
      <div className="ecd-ref__container">
        <SectionHeader title="Powerful Features for a Successful Online Store" />
        <div className="ecd-ref__mini_grid">
          {ECOMMERCE_FEATURES.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <div key={feature.title} className="ecd-ref__mini_card">
                <div className="ecd-ref__mini_icon" style={{ color: feature.color }}>
                  <Icon />
                </div>
                <span>{feature.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="ecd-ref__section">
      <div className="ecd-ref__container">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Custom ecommerce solutions for every industry."
        />
        <div className="ecd-ref__mini_grid">
          {ECOMMERCE_INDUSTRIES.map((industry) => {
            const Icon = industryIcons[industry.icon];
            return (
              <div key={industry.title} className="ecd-ref__mini_card">
                <div className="ecd-ref__mini_icon" style={{ color: industry.color }}>
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
      title="Our Ecommerce Development Process"
      subtitle="A simple and effective process to build your dream online store."
      steps={ECOMMERCE_PROCESS}
      alt
    />

    {/* Why Choose */}
    <section className="ecd-ref__why">
      <div className="ecd-ref__container">
        <div className="ecd-ref__why_header">
          <h2 className="ecd-ref__title">{ECOMMERCE_WHY_CHOOSE.title}</h2>
          <p className="ecd-ref__subtitle">{ECOMMERCE_WHY_CHOOSE.subtitle}</p>
        </div>
        <div className="ecd-ref__why_layout">
          <ul className="ecd-ref__why_list">
            {ECOMMERCE_WHY_CHOOSE.bullets.map((item) => (
              <li key={item}>
                <HiOutlineCheckCircle className="ecd-ref__why_check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="ecd-ref__why_image">
            <Image src={whyChooseImg} alt="Ecommerce development by Vexoweb" width={420} height={480} />
          </div>
          <div className="ecd-ref__stats_grid">
            {ECOMMERCE_WHY_CHOOSE.stats.map((stat) => {
              const Icon = statIcons[stat.icon];
              return (
                <div key={stat.label} className="ecd-ref__stat_card">
                  <div className="ecd-ref__stat_icon" style={{ color: stat.color }}>
                    <Icon />
                  </div>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EcommercePageBody;
