import React from 'react';
import Image from 'next/image';
import {
  HiOutlineCheckCircle,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';
import whyChooseImg from '../../assets/icons/ecd-ai-robot.png';
import { ECOMMERCE_WHY_SHOWCASE } from '../../content/ecommercePageContent';

const statIcons = {
  projects: HiOutlineBriefcase,
  satisfaction: HiOutlineCheckCircle,
  support: HiOutlineClock,
  custom: HiOutlineWrenchScrewdriver,
};

const EcommerceWhyShowcaseSection = () => (
  <section className="ecd-show__why">
    <div className="ecd-show__container">
      <div className="ecd-show__head">
        <h2 className="ecd-show__title">{ECOMMERCE_WHY_SHOWCASE.title}</h2>
        <p className="ecd-show__subtitle">{ECOMMERCE_WHY_SHOWCASE.subtitle}</p>
      </div>
      <div className="ecd-show__why_layout">
        <ul className="ecd-show__why_list">
          {ECOMMERCE_WHY_SHOWCASE.bullets.map((item) => (
            <li key={item}>
              <HiOutlineCheckCircle className="ecd-show__why_check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="ecd-show__why_image">
          <Image src={whyChooseImg} alt="Ecommerce development by Vexoweb" width={380} height={440} />
        </div>
        <div className="ecd-show__stats_grid">
          {ECOMMERCE_WHY_SHOWCASE.stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <div key={stat.label} className="ecd-show__stat_card">
                <div className="ecd-show__stat_icon" style={{ color: stat.color }}>
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
);

export default EcommerceWhyShowcaseSection;
