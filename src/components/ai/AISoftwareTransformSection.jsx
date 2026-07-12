import React from 'react';
import { AI_TRANSFORM } from '../../content/aiSoftwarePageContent';

const DashboardMockup = () => (
  <div className="aiss-v2__dashboard" aria-hidden="true">
    <div className="aiss-v2__dashboard_top">
      <span className="aiss-v2__dashboard_dot" />
      <span className="aiss-v2__dashboard_dot" />
      <span className="aiss-v2__dashboard_dot" />
    </div>
    <div className="aiss-v2__dashboard_body">
      <div className="aiss-v2__dashboard_stats">
        <div className="aiss-v2__dashboard_stat">
          <span>Conversations</span>
          <strong>1,248</strong>
        </div>
        <div className="aiss-v2__dashboard_stat">
          <span>Efficiency</span>
          <strong>92%</strong>
        </div>
      </div>
      <div className="aiss-v2__dashboard_chart">
        <div className="aiss-v2__bar" style={{ height: '45%' }} />
        <div className="aiss-v2__bar" style={{ height: '70%' }} />
        <div className="aiss-v2__bar" style={{ height: '55%' }} />
        <div className="aiss-v2__bar" style={{ height: '85%' }} />
        <div className="aiss-v2__bar" style={{ height: '65%' }} />
        <div className="aiss-v2__bar" style={{ height: '90%' }} />
      </div>
      <p className="aiss-v2__dashboard_label">Performance Overview</p>
    </div>
  </div>
);

const AISoftwareTransformSection = () => (
  <section className="aiss-v2__section aiss-v2__section--alt">
    <div className="aiss-v2__container">
      <div className="aiss-v2__section_head">
        <h4 className="ecd-h4">{AI_TRANSFORM.title}</h4>
        <p className="aiss-v2__subtitle">{AI_TRANSFORM.subtitle}</p>
      </div>
      <div className="aiss-v2__transform_layout">
        <div className="aiss-v2__transform_flow">
          {AI_TRANSFORM.steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="aiss-v2__transform_step">
                <div className="aiss-v2__transform_circle" style={{ background: step.color }}>
                  {index + 1}
                </div>
                <div>
                  <h5 className="ecd-h5">{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
              {index < AI_TRANSFORM.steps.length - 1 && (
                <span className="aiss-v2__transform_arrow" aria-hidden="true">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <DashboardMockup />
      </div>
    </div>
  </section>
);

export default AISoftwareTransformSection;
