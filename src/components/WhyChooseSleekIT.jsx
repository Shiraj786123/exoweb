import React from 'react';
// Import your images
import blackHandImage from '../assets/icons/ai1.png';
import growthLineImage from '../assets/icons/earning-line.png';
const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        
        {/* Left Content Column */}
        <div className="why-choose-left">
          <span className="why-choose-tag">WHY PARTNER WITH US</span>
          
          <h2 className="why-choose-title">
            Why Choose <span className="highlight-text">Zonzoctech?</span>
          </h2>
          
          <p className="why-choose-description">
            At Zonzoctech, we don't just build software systems — we architect tomorrow's 
            digital success structures using <span className="colorful-accent-text">intelligent development frameworks.</span>
          </p>

          {/* Clean, Professionally Aligned Benefits List */}
          <ul className="benefits-list">
            <li className="benefit-item">
              <div className="benefit-content-left">
                <div className="benefit-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="benefit-text">Free Project Consultation</span>
              </div>
              <span className="benefit-label label-blue">Popular</span>
            </li>
            
            <li className="benefit-item">
              <div className="benefit-content-left">
                <div className="benefit-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="benefit-text">Fast Project Delivery</span>
              </div>
              <span className="benefit-label label-green">On-Time</span>
            </li>
            
            <li className="benefit-item">
              <div className="benefit-content-left">
                <div className="benefit-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="benefit-text">Affordable Packages</span>
              </div>
              <span className="benefit-label label-purple">Best Value</span>
            </li>
            
            <li className="benefit-item">
              <div className="benefit-content-left">
                <div className="benefit-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="benefit-text">No Hidden Charges</span>
              </div>
              <span className="benefit-label label-amber">Verified</span>
            </li>
          </ul>
        </div>

        {/* Right Graphical Showcase Column */}
        <div className="why-choose-right">
          <div className="hero-image-wrapper">
            
            {/* Floating Notification Card */}
            <div className="notification-card">
              <span className="notification-badge">Project Delivered Successfully</span>
              <p className="notification-title">Enterprise Platform Live</p>
            </div>

            {/* Analytics Performance Widget */}
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