import React from 'react';
import Link from 'next/link';
import {
  HiOutlineShoppingCart,
  HiOutlineBuildingOffice2,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCake,
  HiOutlineBriefcase,
  HiOutlineDeviceTablet,
} from 'react-icons/hi2';
import { SiAndroid, SiApple, SiFlutter, SiReact, SiKotlin, SiSwift, SiFirebase, SiNodedotjs } from 'react-icons/si';
import { APP_SCREENS } from './mobile/MobileAppScreens';
import ServiceProcessSection from './ServiceProcessSection';
import {
  MOB_PLATFORMS,
  MOB_SERVICES,
  MOB_HIGHLIGHTS,
  MOB_PROCESS,
  MOB_INDUSTRIES,
  MOB_TECH,
  MOB_FAQ,
} from '../content/mobilePageContent';

const platformIcons = { android: SiAndroid, ios: SiApple, flutter: SiFlutter, react: SiReact };
const serviceIcons = {
  android: SiAndroid,
  ios: SiApple,
  cross: HiOutlineDeviceTablet,
  business: HiOutlineBuildingOffice2,
  cart: HiOutlineShoppingCart,
  enterprise: HiOutlineBriefcase,
};
const highlightIcons = { users: HiOutlineUsers, workflow: HiOutlineCog6Tooth, secure: HiOutlineShieldCheck };
const industryIcons = {
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  retail: HiOutlineShoppingCart,
  education: HiOutlineAcademicCap,
  food: HiOutlineCake,
  services: HiOutlineBriefcase,
};
const techIcons = { flutter: SiFlutter, react: SiReact, kotlin: SiKotlin, swift: SiSwift, firebase: SiFirebase, node: SiNodedotjs };

const PhoneShowcase = ({ screenKey }) => {
  const Screen = APP_SCREENS[screenKey];
  return (
    <div className="mob-ref__phone">
      <div className="mob-ref__phone_frame">
        <div className="mob-ref__phone_screen">
          <Screen />
        </div>
      </div>
    </div>
  );
};

const Header = ({ title, subtitle }) => (
  <div className="mob-ref__header">
    <h2 className="mob-ref__title">{title}</h2>
    {subtitle && <p className="mob-ref__subtitle">{subtitle}</p>}
  </div>
);

const MobilePageBody = () => (
  <div className="mob-ref">
    <section className="mob-ref__platforms">
      <div className="mob-ref__container">
        <p className="mob-ref__platforms_label">We build apps for every platform</p>
        <div className="mob-ref__platforms_row">
          {MOB_PLATFORMS.map((p) => {
            const Icon = platformIcons[p.icon];
            return (
              <div key={p.name} className="mob-ref__platform">
                <span style={{ color: p.color }}><Icon /></span>
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="mob-ref__section">
      <div className="mob-ref__container">
        <Header title="Our Mobile App Development Services" subtitle="Custom Android, iOS and cross-platform applications." />
        <div className="mob-ref__services">
          {MOB_SERVICES.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article key={s.title} className="mob-ref__service">
                <div className="mob-ref__service_icon" style={{ backgroundColor: `${s.color}14`, color: s.color }}><Icon /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a href="#contact" className="mob-ref__link" style={{ color: s.color }}>Learn More →</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {MOB_HIGHLIGHTS.map((h, i) => {
      const Icon = highlightIcons[h.icon];
      const reverse = i % 2 === 1;
      return (
        <section key={h.title} className={`mob-ref__highlight${reverse ? ' mob-ref__highlight--reverse' : ''}`}>
          <div className="mob-ref__container mob-ref__highlight_inner">
            <div className="mob-ref__highlight_content">
              <div className="mob-ref__highlight_icon" style={{ color: h.color }}><Icon /></div>
              <h2>{h.title}</h2>
              <p>{h.description}</p>
              <a href="#contact" className="mob-ref__cta" style={{ backgroundColor: h.color }}>Get Started</a>
            </div>
            <PhoneShowcase screenKey={h.screen} />
          </div>
        </section>
      );
    })}

    <ServiceProcessSection
      title="Our App Development Process"
      subtitle="From idea to App Store launch."
      steps={MOB_PROCESS}
      alt
    />

    <section className="mob-ref__section">
      <div className="mob-ref__container">
        <Header title="Industries We Serve" />
        <div className="mob-ref__industries">
          {MOB_INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.icon];
            return (
              <div key={ind.title} className="mob-ref__industry">
                <div style={{ color: ind.color }}><Icon /></div>
                <span>{ind.title}</span>
              </div>
            );
          })}
        </div>
        <div className="mob-ref__tech_row">
          {MOB_TECH.map((t) => {
            const Icon = techIcons[t.icon];
            return (
              <div key={t.name} className="mob-ref__tech_chip">
                <span style={{ color: t.color }}><Icon /></span>
                <span>{t.name}</span>
              </div>
            );
          })}
        </div>
        <div className="mob-ref__area_wrap">
          <Link href="/mobile-app-development-batticaloa" className="mob-ref__area_btn">Mobile App Development in Batticaloa →</Link>
        </div>
      </div>
    </section>

    <section className="mob-ref__section mob-ref__section--alt">
      <div className="mob-ref__container mob-ref__container--narrow">
        <Header title="Frequently Asked Questions" />
        <div className="mob-ref__faq">
          {MOB_FAQ.map((item) => (
            <details key={item.q} className="mob-ref__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default MobilePageBody;
