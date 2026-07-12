import React from 'react';
import Image from 'next/image';
import {
  HiOutlineArrowTrendingUp,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';

const statIcons = {
  projects: HiOutlineBriefcase,
  satisfaction: HiOutlineCheckCircle,
  support: HiOutlineClock,
  custom: HiOutlineWrenchScrewdriver,
  traffic: HiOutlineChartBar,
  rankings: HiOutlineArrowTrendingUp,
  leads: HiOutlineUserGroup,
  ethical: HiOutlineShieldCheck,
};

const WhyShowcaseSection = ({ content, image, imageAlt }) => (
  <section className="ecd-show__why">
    <div className="ecd-show__container">
      <div className="ecd-show__head">
        <h2 className="ecd-show__title">{content.title}</h2>
        <p className="ecd-show__subtitle">{content.subtitle}</p>
      </div>
      <div className="ecd-show__why_layout">
        <div className="ecd-show__why_col ecd-show__why_col--list">
          <ul className="ecd-show__why_list">
            {content.bullets.map((item) => (
              <li key={item}>
                <HiOutlineCheckCircle className="ecd-show__why_check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="ecd-show__why_col ecd-show__why_col--image">
          <div className="ecd-show__why_image">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 900px) 90vw, 320px"
              className="ecd-show__why_image_img"
            />
          </div>
        </div>
        <div className="ecd-show__why_col ecd-show__why_col--stats">
          <div className="ecd-show__stats_grid">
            {content.stats.map((stat) => {
              const Icon = statIcons[stat.icon] || HiOutlineBriefcase;
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
    </div>
  </section>
);

export default WhyShowcaseSection;
