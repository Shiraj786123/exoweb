import React from 'react';

// Import your images
import blackHandImage from '../assets/icons/future-empower.png';
import growthLineImage from '../assets/icons/earning-line.png';

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        
        {/* Left Content */}
        <div className="why-choose-left">
          <p className="section-subtitle">Building Future-Ready IT Systems</p>
          <h1 className="section-title">
            Why Choose <span className="highlight-text">Zonzoctech?</span>
          </h1>
          <p className="section-description">
            At Zonzoctech, we don't just build solutions — we predict tomorrow's 
            success with AI-powered innovation
          </p>

          {/* Benefits List */}
          <ul className="benefits-list">
  <li className="benefit-item">
    <div className="benefit-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span>Free Project Consultation</span>
  </li>
  <li className="benefit-item">
    <div className="benefit-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span>Fast Project Delivery</span>
  </li>
  <li className="benefit-item">
    <div className="benefit-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span>Affordable Packages</span>
  </li>
  <li className="benefit-item">
    <div className="benefit-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span>No Hidden Charges</span>
  </li>
</ul>
        </div>

        {/* Right Content */}
        <div className="why-choose-right">
          
          {/* Notification Card */}
          <div className="notification-card">
            <div className="notification-header">
              <span className="notification-badge">Recently Project Delivered!</span>
            </div>
            <div className="notification-content">
              <p className="notification-title">Web Development completed</p>
            
            </div>
          </div>

          {/* Stats Card */}
          <div className="stats-card">
            <div className="stats-header">
              <h3>Client Growth Stats Last Year</h3>
            </div>
            <div className="stats-chart">
              <img src={growthLineImage} alt="Growth Chart" className="growth-line" />
            </div>
            <div className="stats-info">
              <h2 className="stats-number">Clients Served: 120</h2>
              <div className="stats-growth">
                <span className="growth-arrow">↑</span>
                <span className="growth-text">35% Growth Last Year</span>
              </div>
            </div>
          </div>

          {/* Main Hero Image */}
          <img 
            src={blackHandImage} 
            alt="Future Empower" 
            className="hero-main-image"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
