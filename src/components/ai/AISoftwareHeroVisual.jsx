import React from 'react';

const AISoftwareHeroVisual = () => (
  <div className="aiss-hero__visual" aria-hidden="true">
    <div className="aiss-hero__panel">
      <div className="aiss-hero__panel_bar">
        <span />
        <span />
        <span />
      </div>
      <div className="aiss-hero__panel_body">
        <div className="aiss-hero__panel_header">
          <strong>AI Assistant</strong>
          <span>Live · Processing</span>
        </div>
        <div className="aiss-hero__chat">
          <div className="aiss-hero__chat_msg aiss-hero__chat_msg--user">
            <span>Can you summarise today&apos;s sales report?</span>
          </div>
          <div className="aiss-hero__chat_msg aiss-hero__chat_msg--ai">
            <span>Revenue up 24%. Top product: Wireless Headphones. 3 leads need follow-up.</span>
          </div>
        </div>
        <div className="aiss-hero__metrics">
          <div className="aiss-hero__metric">
            <small>Efficiency</small>
            <strong>92%</strong>
          </div>
          <div className="aiss-hero__metric">
            <small>Tasks Automated</small>
            <strong>847</strong>
          </div>
          <div className="aiss-hero__metric">
            <small>Response Time</small>
            <strong>0.8s</strong>
          </div>
        </div>
      </div>
    </div>
    <div className="aiss-hero__chip">
      <span className="aiss-hero__chip_dot" />
      AI Model Active
    </div>
  </div>
);

export default AISoftwareHeroVisual;
