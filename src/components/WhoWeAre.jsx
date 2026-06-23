import React from 'react';
import TechnologyStackMarquee from './TechnologyStackMarquee';
import { HOME_TECH_STACK_LABEL } from '../content/serviceTechStackContent';

const WhoWeAreSection = () => {
  return (
    <section className="whoweare-section" aria-labelledby="whoweare-title">
      <div className="whoweare__glow whoweare__glow--left" aria-hidden="true" />
      <div className="whoweare__glow whoweare__glow--right" aria-hidden="true" />
      <div className="whoweare__grid-pattern" aria-hidden="true" />

      <div className="whoweare-container">
        <header className="whoweare-header-block">
          <span className="whoweare__tag">Who We Are</span>
          <h2 id="whoweare-title" className="whoweare-main-title">
            Who We Are &amp; Why Choose{' '}
            <span className="highlight-text-gradient">Vexoweb</span>
          </h2>
          <p className="whoweare-sub-description">
            At Vexoweb, we&apos;re more than just a digital agency—we&apos;re your growth partner.
            With over a decade of experience, we specialize in building modern websites,
            boosting visibility through smart SEO, and integrating cutting-edge AI technologies
            to future-proof your business.
          </p>

          <h3 className="whoweare-tech-stack-label">{HOME_TECH_STACK_LABEL}</h3>
        </header>

        <TechnologyStackMarquee />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
