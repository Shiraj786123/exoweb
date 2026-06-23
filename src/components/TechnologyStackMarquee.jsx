import React from 'react';
import { importTechIcon, ROW_THEMES, TECH_STACK_ROWS } from '../data/technologyStack';

const TechnologyStackMarquee = () => {
  return (
    <div className="tech-rows-container">
      {TECH_STACK_ROWS.map((rowItems, rowIndex) => {
        const infiniteRowItems = [
          ...rowItems,
          ...rowItems,
          ...rowItems,
          ...rowItems,
          ...rowItems,
          ...rowItems,
          ...rowItems,
          ...rowItems,
        ];
        const theme = ROW_THEMES[rowIndex];

        return (
          <div
            key={rowIndex}
            className={`tech-scroll-row tech-scroll-row--${theme}`}
          >
            <div className={`tech-cards-track tech-cards-track-${rowIndex + 1}`}>
              {infiniteRowItems.map((tech, techIndex) => (
                <div key={techIndex} className="tech-row-item-card">
                  <div className="tech-icon-wrapper">
                    <img
                      src={importTechIcon(tech.icon)}
                      alt=""
                      className="tech-svg-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="tech-label">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyStackMarquee;
