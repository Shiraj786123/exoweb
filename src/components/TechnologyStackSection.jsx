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
  titleClassName = 'whoweare__h2',
  titleTag: TitleTag = 'h2',
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
            <TitleTag id={`${id}-title`} className={titleClassName}>
              {title}
              {titleAccent ? (
                <span className="highlight-text-gradient">{titleAccent}</span>
              ) : null}
            </TitleTag>
          ) : null}

          {description ? (
            <p className="whoweare-sub-description">{description}</p>
          ) : null}

          <h5 className="ecd-h5">{stackLabel}</h5>
        </header>

        <TechnologyStackMarquee />
      </div>
    </section>
  );
};

export default TechnologyStackSection;
