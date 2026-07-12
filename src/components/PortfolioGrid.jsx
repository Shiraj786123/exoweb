import React from 'react';
import { portfolioProjectAlt } from '../lib/imageAlt';

export default function PortfolioGrid({ projects }) {
  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <article key={project.id} className="project-card project-card--grid">
          <div className="project-img-wrapper">
            <img src={project.img} alt={portfolioProjectAlt(project)} className="project-img" loading="lazy" />
          </div>

          <div className="project-info">
            <h3 className="project-card-title">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project-card-desc">{project.desc}</p>

            <div className="project-extra">
              {project.extra.map((item) => (
                <span
                  key={item.text}
                  style={{ background: item.Background }}
                  className="tech-badge"
                >
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
