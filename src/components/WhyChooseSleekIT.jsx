import React from 'react';
import blackHandImage from '../assets/icons/ai1.png';
import growthLineImage from '../assets/icons/earning-line.png';

const BENEFITS = [
  {
    text: 'Free Project Consultation',
    label: 'Popular',
    labelClass: 'label-blue',
    theme: 'blue',
    desc: 'Expert advice before you commit',
  },
  {
    text: 'Fast Project Delivery',
    label: 'On-Time',
    labelClass: 'label-green',
    theme: 'green',
    desc: 'Agile sprints with clear milestones',
  },
  {
    text: 'Affordable Packages',
    label: 'Best Value',
    labelClass: 'label-purple',
    theme: 'purple',
    desc: 'Transparent pricing for every budget',
  },
  {
    text: 'No Hidden Charges',
    label: 'Verified',
    labelClass: 'label-amber',
    theme: 'amber',
    desc: 'What we quote is what you pay',
  },
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12l3 3 5-6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <div className="why-choose-left-panel">
            <span className="why-choose-tag">Why Partner With Us</span>

            <h2 className="why-choose-title">
              Why Choose <span className="highlight-text">Zonzoctech?</span>
            </h2>

            <p className="why-choose-description">
              At Zonzoctech, we don&apos;t just build software systems — we architect tomorrow&apos;s
              digital success structures using{' '}
              <span className="colorful-accent-text">intelligent development frameworks.</span>
            </p>

            <ul className="benefits-list">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit.text}
                  className={`benefit-item benefit-item--${benefit.theme}`}
                >
                  <div className="benefit-icon-box">
                    <CheckIcon />
                  </div>
                  <div className="benefit-copy">
                    <span className="benefit-text">{benefit.text}</span>
                    <span className="benefit-desc">{benefit.desc}</span>
                  </div>
                  <span className={`benefit-label ${benefit.labelClass}`}>{benefit.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="why-choose-right">
          <div className="hero-image-wrapper">
            <div className="notification-card">
              <span className="notification-badge">Project Delivered Successfully</span>
              <p className="notification-title">Enterprise Platform Live</p>
            </div>

            <div className="stats-card">
              <div className="stats-header">
                <h3>Annual Client Performance Growth</h3>
              </div>
              <div className="stats-chart">
                <img src={growthLineImage} alt="Growth Chart" className="growth-line" />
              </div>
              <div className="stats-info">
                <h4 className="stats-number">120+ Systems Deployed</h4>
                <div className="stats-growth">
                  <span className="growth-arrow">▲</span>
                  <span className="growth-text">35% Efficiency Spike</span>
                </div>
              </div>
            </div>

            <img
              src={blackHandImage}
              alt="Future Systems Engineering"
              className="hero-main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
