import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const AREAS = [
  { label: 'Batticaloa', href: '/website-development-batticaloa', tag: 'East coast hub', icon: FaMapMarkerAlt },
  { label: 'Kattankudy', href: '/website-development-kattankudy', tag: 'Local businesses', icon: FaMapMarkerAlt },
  { label: 'Kalmunai', href: '/website-development-kalmunai', tag: 'Retail & services', icon: FaMapMarkerAlt },
  { label: 'Ampara', href: '/website-development-ampara', tag: 'Growing market', icon: FaMapMarkerAlt },
  { label: 'Trincomalee', href: '/website-development-trincomalee', tag: 'Tourism & trade', icon: FaMapMarkerAlt },
  {
    label: 'SEO services',
    href: '/seo-services',
    tag: 'Local SEO',
    icon: FaSearch,
  },
];

const AreaCard = ({ area }) => {
  const Icon = area.icon;

  return (
    <Link href={area.href} className="home-areas__card">
      <span className="home-areas__card-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="home-areas__card-body">
        <span className="home-areas__card-label">{area.label}</span>
        <span className="home-areas__card-hint">{area.tag}</span>
      </span>
      <span className="home-areas__card-action">
        View services
        <FaArrowRight className="home-areas__card-arrow-icon" aria-hidden="true" />
      </span>
    </Link>
  );
};

const HomeAreasSection = () => {
  return (
    <section className="home-areas" aria-labelledby="home-areas-heading">
      <div className="home-areas__glow home-areas__glow--left" aria-hidden="true" />
      <div className="home-areas__glow home-areas__glow--right" aria-hidden="true" />

      <div className="home-areas__inner">
        <div className="home-areas__content">
          <p className="home-areas__eyebrow">
            <span className="home-areas__dot" aria-hidden="true" />
            Areas we serve
          </p>
          <h2 id="home-areas-heading" className="home-areas__title">
            Local web &amp; software,{' '}
            <span className="home-areas__title-accent">right across the east</span>
          </h2>
          <p className="home-areas__desc">
            We work with businesses throughout the Eastern Province. Choose your town for services
            tailored to your area.
          </p>

          <ul className="home-areas__highlights">
            <li>On-site support across the east coast</li>
            <li>Websites, software &amp; SEO in one team</li>
            <li>Free consultation for local businesses</li>
          </ul>
        </div>

        <div className="home-areas__grid home-areas__grid--locations">
          {AREAS.map((area) => (
            <AreaCard key={area.label} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAreasSection;
