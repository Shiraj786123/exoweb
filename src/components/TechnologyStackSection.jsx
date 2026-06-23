import React from 'react';
import TechnologyStackMarquee from './TechnologyStackMarquee';

const TechnologyStackSection = ({
  tag,
  title,
  titleAccent,
  description,
  stackLabel = 'Our Technology Stack',
  variant = 'service',
  id = 'technology-stack',
}) => {
  const sectionClass =
    variant === 'service'
      ? 'whoweare-section whoweare-section--tech-only'
      : 'whoweare-section';

  return (
    <section className={sectionClass} id={id} aria-labelledby={`${id}-title`}>
      <div className="whoweare__glow whoweare__glow--left" aria-hidden="true" />
      <div className="whoweare__glow whoweare__glow--right" aria-hidden="true" />
      <div className="whoweare__grid-pattern" aria-hidden="true" />

      <div className="whoweare-container">
        <header className="whoweare-header-block">
          {tag ? <span className="whoweare__tag">{tag}</span> : null}

          {title ? (
            <h2 id={`${id}-title`} className="whoweare-main-title">
              {title}
              {titleAccent ? (
                <span className="highlight-text-gradient">{titleAccent}</span>
              ) : null}
            </h2>
          ) : null}

          {description ? (
            <p className="whoweare-sub-description">{description}</p>
          ) : null}

          <h3 className="whoweare-tech-stack-label">{stackLabel}</h3>
        </header>

        <TechnologyStackMarquee />
      </div>
    </section>
  );
};

export default TechnologyStackSection;
