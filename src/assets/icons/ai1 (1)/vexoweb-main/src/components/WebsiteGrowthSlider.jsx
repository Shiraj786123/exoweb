import React from 'react';

const WebsiteGrowthSlider = ({ onOpenPopup }) => {
  const handleAuditClick = () => {
    if (onOpenPopup) {
      onOpenPopup();
    }
  };

  return (
    <div className="growth-slider-container">
      <div className="growth-content-wrapper">
        {/* Left Content */}
        <div className="growth-text-section">
          <div className="growth-badge">
            <span className="badge-icon">🚀</span>
            <span>Transform Your Business</span>
          </div>
          
          <h1 className="growth-title">
            Build a Website That <span className="highlightgrowth">Drives Growth</span>
          </h1>
          
          <p className="growth-description">
            AI-powered design, SEO optimization, and automation that turn visitors into customers. 
            Experience the difference of a website built for results.
          </p>

          <div className="growth-features">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <div>
                <h4>Modern Design</h4>
                <p>Beautiful, responsive layouts</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <div>
                <h4>Lightning Fast</h4>
                <p>Optimized for speed & SEO</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📈</span>
              <div>
                <h4>Higher Conversions</h4>
                <p>Turn traffic into revenue</p>
              </div>
            </div>
          </div>

          <button className="growth-cta-btn" onClick={handleAuditClick}>
            Get Free Website Audit
            <span className="btn-arrow">→</span>
          </button>

          <div className="growth-stats">
            <div className="stat">
              <h3>+61%</h3>
              <p>Avg. Conversion Increase</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Success Stories</p>
            </div>
            <div className="stat">
              <h3>4.9/5</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Dashboard */}
        <div className="growth-dashboard-section">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <div className="header-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="header-title">Analytics Dashboard</div>
              <div className="header-actions">
                <span className="action-dot"></span>
                <span className="action-dot"></span>
              </div>
            </div>

            <div className="dashboard-body">
              <div className="metric-highlight">
                <div className="metric-label">Total Revenue</div>
                <div className="metric-value">$78,502</div>
                <div className="metric-change positive">
                  <span className="arrow">↑</span>
                  <span>+68%</span>
                </div>
              </div>

              <div className="metrics-row">
                <div className="mini-metric">
                  <div className="mini-label">Conversion Rate</div>
                  <div className="mini-value">4.2%</div>
                  <div className="mini-spark"></div>
                </div>
                <div className="mini-metric">
                  <div className="mini-label">Avg. Order</div>
                  <div className="mini-value">$125</div>
                  <div className="mini-spark trend-up"></div>
                </div>
              </div>

              <div className="chart-area">
                <div className="chart-bars">
                  <div className="gbar" style={{height: '45%'}}></div>
                  <div className="gbar" style={{height: '60%'}}></div>
                  <div className="gbar" style={{height: '50%'}}></div>
                  <div className="gbar" style={{height: '75%'}}></div>
                  <div className="gbar" style={{height: '85%'}}></div>
                  <div className="gbar active" style={{height: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-indicator">
            <span className="ai-pulse"></span>
            <span>AI Powered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteGrowthSlider;
