import React, { useState } from 'react';

import bgImage from '../assets/icons/bg.jpeg';   // ✅ Correct image path

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const sectionStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.5) 0%, rgba(26, 41, 66, 0.55) 100%), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  const tabs = [
    { id: 'ai', label: 'Software Development' },
    { id: 'ux', label: 'Website Development' },
    { id: 'seo', label: 'SEO Marketing' }
  ];

  const services = {
    seo: [
      {
        title: 'SEO Strategy & Planning',
        items: [
          'Competitor Analysis',
          'SEO Audit & Website Analysis',
          'Keyword Research & Planning',
          'Technical SEO Assessment',
          'SEO Roadmap & Strategy',
        ]
      },
      {
        title: 'On-Page & Technical SEO',
        items: [
          'On-Page Optimization',
          'Schema Markup Implementation',
          'Core Web Vitals Optimization',
          'Internal Linking Structure',
          'Technical SEO Fixes & Enhancements'
        ]
      },
      {
        title: 'Off-Page & Authority Building',
        items: [
          'Guest Posting & Outreach',
          'Brand Mentions & Citations',
          'Reputation Management',
          'Link Building & Backlink Strategy',
          'Local SEO & Google Business Profile'
        ]
      }
    ],
    ux: [
      {
        title: 'Business & Corporate Websites',
        items: [
          'Landing Page Design',
          'Website Redesign & Modernization',
          'Portfolio & Personal Websites',
          'Corporate Website Development',
          'Startup & Small Business Websites',
        ]
      },
      {
        title: 'E-Commerce Development',
        items: [
          'Custom E-Commerce Solutions',
          'Payment Gateway Integration',
          'Product & Inventory Management',
          'Conversion Optimization',
          'Shopify & WooCommerce Development',
        ]
      },
      {
        title: 'UI Development & Performance',
        items: [
          'Responsive Web Design',
          'React / Next.js Development',
          'Website Speed Optimization',
          'SEO-Friendly Development',
          'HTML, CSS, JavaScript Development',
        ]
      }
    ],
    ai: [
      {
        title: 'Custom Software Development',
        items: [
          'Enterprise Software Solutions',
          'SaaS Product Development',
          'API Development & Integration',
          'Legacy System Modernization',
          'Custom Web Applications',
        ]
      },
      {
        title: 'Web & Mobile Applications',
        items: [
          'Progressive Web Apps (PWA)',
          'Android & iOS Development',
          'Cross-Platform Apps ',
          'UI/UX Design & Prototyping',
          'Scalable App Architecture',
        ]
      },
      {
        title: 'Cloud, Backend & DevOps',
        items: [
          'Backend Development',
          'Database Design & Optimization',
          'DevOps & CI/CD Pipelines',
          'Cloud Infrastructure(AWS,Azure)',
          'Microservices Architecture',
        ]
      }
    ]
  };

  return (
    <section className="solution-section" style={sectionStyle}>
      <div className="solution-hero">
        <h1 className="solution-title">
          We're the Solution You've Been Searching For...
        </h1>
        <p className="solution-subtitle">
          From SEO and AI to custom web design, we offer tailored strategies
          <br />
          that help brands grow smarter, faster, and stronger in today's digital landscape.
        </p>

        {/* Tab Navigation */}
        <div className="solution-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {services[activeTab].map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-card-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, idx) => (
                <li key={idx} className="service-item">
                  <span className="service-arrow">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/*<button className="service-btn">
        <span className="btn-text">
          <span>NEED TO GET THE SERVICE?</span>
          <span>NEED TO GET THE SERVICE?</span>
        </span>
        <span className="btn-arrow">↗</span>
      </button>*/}
    </section>
  );
};

export default SolutionSection;
