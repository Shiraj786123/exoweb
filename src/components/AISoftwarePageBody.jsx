import React from 'react';
import Image from 'next/image';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineRocketLaunch,
  HiOutlineCog6Tooth,
  HiOutlineSparkles,
  HiOutlinePuzzlePiece,
  HiOutlineCpuChip,
  HiOutlineCircleStack,
  HiOutlineLightBulb,
  HiOutlineBolt,
  HiOutlineChartBarSquare,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineTruck,
  HiOutlineArrowTrendingUp,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineScale,
  HiOutlineTrophy,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiOpenai,
  SiNodedotjs,
  SiReact,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si';
import whyChooseImg from '../assets/icons/ecd-ai-robot.png';
import {
  AI_PLATFORMS,
  AI_SERVICES,
  AI_TRANSFORM_STEPS,
  AI_INDUSTRIES,
  AI_BENEFITS,
  AI_TECHNOLOGIES,
  AI_WHY_CHOOSE,
  AI_TESTIMONIALS,
} from '../content/aiPageContent';

const serviceIcons = {
  chat: HiOutlineChatBubbleLeftRight,
  agent: HiOutlineRocketLaunch,
  automation: HiOutlineCog6Tooth,
  sparkles: HiOutlineSparkles,
  integration: HiOutlinePuzzlePiece,
  software: HiOutlineCpuChip,
};

const transformIcons = {
  data: HiOutlineCircleStack,
  brain: HiOutlineLightBulb,
  bolt: HiOutlineBolt,
  growth: HiOutlineChartBarSquare,
};

const industryIcons = {
  health: HiOutlineHeart,
  retail: HiOutlineShoppingBag,
  hotel: HiOutlineBuildingOffice2,
  education: HiOutlineAcademicCap,
  finance: HiOutlineBanknotes,
  logistics: HiOutlineTruck,
};

const benefitIcons = {
  productivity: HiOutlineArrowTrendingUp,
  cost: HiOutlineCurrencyDollar,
  experience: HiOutlineUserGroup,
  decisions: HiOutlineLightBulb,
  scale: HiOutlineScale,
  competitive: HiOutlineTrophy,
};

const techIcons = {
  python: SiPython,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  langchain: SiLangchain,
  openai: SiOpenai,
  node: SiNodedotjs,
  react: SiReact,
  flutter: SiFlutter,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  aws: SiAmazonwebservices,
  gcloud: SiGooglecloud,
  docker: SiDocker,
  kubernetes: SiKubernetes,
};

const SectionHeader = ({ title, subtitle, align = 'center' }) => (
  <div className={`aiss-ref__header aiss-ref__header--${align}`}>
    <h2 className="aiss-ref__title">{title}</h2>
    {subtitle && <p className="aiss-ref__subtitle">{subtitle}</p>}
  </div>
);

const DashboardMockup = () => (
  <div className="aiss-ref__dashboard" aria-hidden="true">
    <div className="aiss-ref__dashboard_top">
      <span className="aiss-ref__dashboard_dot" />
      <span className="aiss-ref__dashboard_dot" />
      <span className="aiss-ref__dashboard_dot" />
    </div>
    <div className="aiss-ref__dashboard_body">
      <div className="aiss-ref__dashboard_stats">
        <div className="aiss-ref__dashboard_stat">
          <span>Revenue</span>
          <strong>+24%</strong>
        </div>
        <div className="aiss-ref__dashboard_stat">
          <span>Efficiency</span>
          <strong>92%</strong>
        </div>
      </div>
      <div className="aiss-ref__dashboard_chart">
        <div className="aiss-ref__bar" style={{ height: '45%' }} />
        <div className="aiss-ref__bar" style={{ height: '70%' }} />
        <div className="aiss-ref__bar" style={{ height: '55%' }} />
        <div className="aiss-ref__bar" style={{ height: '85%' }} />
        <div className="aiss-ref__bar" style={{ height: '65%' }} />
        <div className="aiss-ref__bar" style={{ height: '90%' }} />
      </div>
      <div className="aiss-ref__dashboard_ring">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="#2563eb"
            strokeWidth="8"
            strokeDasharray="160 201"
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <span>92%</span>
      </div>
    </div>
  </div>
);

const AISoftwarePageBody = () => (
  <div className="aiss-ref">
    {/* AI platform logos */}
    <section className="aiss-ref__platforms">
      <div className="aiss-ref__container">
        <p className="aiss-ref__platforms_label">We work with the world&apos;s leading AI technologies</p>
        <div className="aiss-ref__platforms_row">
          {AI_PLATFORMS.map((platform) => (
            <span
              key={platform.name}
              className="aiss-ref__ai_logo"
              style={{ color: platform.color }}
            >
              {platform.name}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* What We Build */}
    <section className="aiss-ref__section">
      <div className="aiss-ref__container">
        <SectionHeader
          title="What We Build"
          subtitle="Powerful AI Solutions for Modern Businesses"
        />
        <div className="aiss-ref__services_grid">
          {AI_SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article key={service.title} className="aiss-ref__service_card">
                <div className="aiss-ref__service_icon" style={{ backgroundColor: `${service.color}14`, color: service.color }}>
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="aiss-ref__learn_more">
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* How AI Transforms */}
    <section className="aiss-ref__section aiss-ref__section--alt">
      <div className="aiss-ref__container">
        <SectionHeader title="How AI Transforms Your Business" align="left" />
        <div className="aiss-ref__transform_layout">
          <div className="aiss-ref__transform_steps">
            {AI_TRANSFORM_STEPS.map((step, index) => {
              const Icon = transformIcons[step.icon];
              return (
                <div key={step.title} className="aiss-ref__transform_step">
                  <div className="aiss-ref__transform_icon" style={{ backgroundColor: step.color }}>
                    <Icon />
                  </div>
                  {index < AI_TRANSFORM_STEPS.length - 1 && (
                    <span className="aiss-ref__transform_arrow" aria-hidden="true">→</span>
                  )}
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
          <DashboardMockup />
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="aiss-ref__section">
      <div className="aiss-ref__container">
        <SectionHeader
          title="Industries We Serve"
          subtitle="AI solutions tailored for every industry"
        />
        <div className="aiss-ref__industries_grid">
          {AI_INDUSTRIES.map((industry) => {
            const Icon = industryIcons[industry.icon];
            return (
              <div key={industry.title} className="aiss-ref__industry_card">
                <div className="aiss-ref__industry_icon" style={{ color: industry.color }}>
                  <Icon />
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            );
          })}
        </div>
        <div className="aiss-ref__center_btn_wrap">
          <a href="#contact" className="aiss-ref__btn_outline">
            View All Industries <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>

    {/* Key Benefits — dark section */}
    <section className="aiss-ref__benefits">
      <div className="aiss-ref__container">
        <SectionHeader title="Key Benefits of AI for Your Business" />
        <div className="aiss-ref__benefits_grid">
          {AI_BENEFITS.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];
            return (
              <div key={benefit.title} className="aiss-ref__benefit_item">
                <div className="aiss-ref__benefit_icon">
                  <Icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Technologies + Why Choose */}
    <section className="aiss-ref__section aiss-ref__section--tech">
      <div className="aiss-ref__container">
        <div className="aiss-ref__split">
          <div className="aiss-ref__split_col">
            <div className="aiss-ref__split_head">
              <h2 className="aiss-ref__title">Technologies We Use</h2>
              <p className="aiss-ref__subtitle aiss-ref__subtitle--left">
                {AI_WHY_CHOOSE.subtitle}
              </p>
            </div>
            <div className="aiss-ref__tech_grid">
              {AI_TECHNOLOGIES.map((tech) => {
                const Icon = techIcons[tech.icon];
                return (
                  <div key={tech.name} className="aiss-ref__tech_item">
                    <span className="aiss-ref__tech_icon" style={{ color: tech.color }}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="aiss-ref__tech_label">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="aiss-ref__split_col aiss-ref__why_col">
            <div className="aiss-ref__split_head">
              <h2 className="aiss-ref__title">{AI_WHY_CHOOSE.title}</h2>
              <p className="aiss-ref__subtitle aiss-ref__subtitle--left aiss-ref__subtitle--invisible" aria-hidden="true">
                &nbsp;
              </p>
            </div>
            <div className="aiss-ref__why_layout">
              <ul className="aiss-ref__why_list">
                {AI_WHY_CHOOSE.bullets.map((item) => (
                  <li key={item}>
                    <HiOutlineCheckCircle className="aiss-ref__why_check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="aiss-ref__why_image">
                <Image
                  src={whyChooseImg}
                  alt="AI development by Vexoweb"
                  fill
                  className="aiss-ref__why_image_img"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="aiss-ref__section aiss-ref__section--alt">
      <div className="aiss-ref__container">
        <SectionHeader title="What Our Clients Say" />
        <div className="aiss-ref__testimonials">
          {AI_TESTIMONIALS.map((item) => (
            <article key={item.name} className="aiss-ref__testimonial_card">
              <span className="aiss-ref__quote" aria-hidden="true">&ldquo;</span>
              <p>{item.text}</p>
              <div className="aiss-ref__testimonial_author">
                <img src={item.avatar} alt={item.name} loading="lazy" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="aiss-ref__dots" aria-hidden="true">
          <span className="aiss-ref__dot aiss-ref__dot--active" />
          <span className="aiss-ref__dot" />
          <span className="aiss-ref__dot" />
        </div>
      </div>
    </section>
  </div>
);

export default AISoftwarePageBody;
