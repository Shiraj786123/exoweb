import React from 'react';

const SERVICES = [
  { title: 'Web Design', color: '#2563eb' },
  { title: 'Development', color: '#16a34a' },
  { title: 'SEO Setup', color: '#9333ea' },
  { title: 'Support', color: '#ea580c' },
];

const WebsiteHeroVisual = () => (
  <div className="ecd-hero__visual" aria-hidden="true">
    <div className="ecd-hero__laptop">
      <div className="ecd-hero__laptop_bar">
        <span />
        <span />
        <span />
      </div>
      <div className="ecd-hero__store ecd-hero__store--website">
        <div className="ecd-hero__store_header">
          <strong>VEXOWEB</strong>
          <span>Home · Services · About · Contact</span>
        </div>
        <div className="ecd-hero__store_banner ecd-hero__store_banner--website">
          <small>Professional Websites</small>
          <strong>Grow Your Business Online</strong>
        </div>
        <div className="ecd-hero__web_services">
          {SERVICES.map((service) => (
            <div key={service.title} className="ecd-hero__web_service" style={{ '--svc-color': service.color }}>
              <span className="ecd-hero__web_service_dot" />
              <span>{service.title}</span>
            </div>
          ))}
        </div>
        <div className="ecd-hero__web_cta">
          <span>Get a Free Quote</span>
        </div>
      </div>
    </div>
    <div className="ecd-hero__phone">
      <div className="ecd-hero__phone_notch" />
      <div className="ecd-hero__phone_screen">
        <div className="ecd-hero__phone_header">
          <strong>VEXO</strong>
          <span className="ecd-hero__phone_menu" />
        </div>
        <div className="ecd-hero__phone_hero ecd-hero__phone_hero--website">
          <small>Your Business</small>
          <strong>Online Presence</strong>
        </div>
        <div className="ecd-hero__phone_blocks">
          <div className="ecd-hero__phone_block" />
          <div className="ecd-hero__phone_block ecd-hero__phone_block--short" />
          <div className="ecd-hero__phone_block" />
        </div>
      </div>
    </div>
    <div className="ecd-hero__plant" />
  </div>
);

export default WebsiteHeroVisual;
