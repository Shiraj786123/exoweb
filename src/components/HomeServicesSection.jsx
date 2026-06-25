import React from 'react';
import Link from 'next/link';
import { FaCode, FaGlobe, FaMobileAlt, FaSearch } from 'react-icons/fa';

const SERVICES = [
  {
    title: 'Software development',
    description:
      'Custom POS, billing, inventory and booking systems built around how your business actually works.',
    href: '/software-development',
    icon: FaCode,
    theme: 'brand',
  },
  {
    title: 'Website development',
    description:
      'Fast, modern, mobile-friendly websites and web apps designed to turn visitors into customers.',
    href: '/website-development',
    icon: FaGlobe,
    theme: 'sky',
  },
  {
    title: 'Mobile app development',
    description:
      "Native and cross-platform Android & iOS apps that put your business in your customers' pockets.",
    href: '/mobile-app-development',
    icon: FaMobileAlt,
    theme: 'featured',
    badge: 'NEW',
  },
  {
    title: 'SEO marketing',
    description:
      'Local SEO and Google Business optimization so customers in your area find you first.',
    href: '/seo-services',
    icon: FaSearch,
    theme: 'warm',
  },
];

const HomeServicesSection = () => {
  return (
    <section className="home-services" aria-labelledby="home-services-heading">
      <div className="home-services__inner">
        <header className="home-services__header">
          <h2 id="home-services-heading" className="home-services__title">
            One partner for websites, software, apps &amp; SEO
          </h2>
          <p className="home-services__subtitle">
            Tailored digital solutions engineered to help businesses across the Eastern Province
            grow smarter and faster.
          </p>
        </header>

        <div className="home-services__grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`home-services__card home-services__card--${service.theme}`}
              >
                {service.badge ? (
                  <span className="home-services__badge">{service.badge}</span>
                ) : null}

                <div className="home-services__icon-wrap" aria-hidden="true">
                  <Icon className="home-services__icon" />
                </div>

                <h3 className="home-services__card-title">{service.title}</h3>
                <p className="home-services__card-desc">{service.description}</p>

                <Link href={service.href} className="home-services__link">
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
