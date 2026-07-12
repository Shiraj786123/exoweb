import React, { useState } from 'react';
// Note: No CSS imports are included here to prevent Next.js global styling conflicts!

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const tabs = [
    { id: 'ai', label: 'Software Development' },
    { id: 'ux', label: 'Website Development' },
    { id: 'seo', label: 'SEO Marketing' }
  ];

  const services = {
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
          'Cloud Infrastructure (AWS, Azure)',
          'Microservices Architecture',
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
    ]
  };

  return (
    <section className="solution-section">
      <div className="solution-container">
        
        {/* 1st Line: Main Headings spanning full-width */}
        <div className="solution-title-block">
          <h2 className="solution-title">
            We Are The Ultimate Solution For Your Business Growth
          </h2>
          <p className="solution-subtitle">
            Tailored digital strategies engineered to help premium brands scale smarter, faster, and stronger.
          </p>
        </div>

        {/* 2nd Line: Horizontal Navbar Strip directly underneath */}
        <div className="solution-navbar-row">
          <div className="solution-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                /* ✅ FIXED: Added hover class configuration to connect with your new global hover styles */
                className={`tab-btn hover-${tab.id} ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3rd Line: 3 Rectangle Boxes side-by-side in a row */}
        <div className={`services-grid theme-${activeTab}`}>
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

      </div>
    </section>
  );
};

export default SolutionSection;