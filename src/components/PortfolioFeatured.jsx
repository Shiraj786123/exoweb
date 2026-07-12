import React from 'react';
import { portfolioProjectAlt } from '../lib/imageAlt';

export default function PortfolioFeatured({ project }) {
  if (!project) return null;

  return (
    <article className="portfolio-featured">
      <a
        href={project.href}
        className="portfolio-featured__media"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} live website`}
      >
        <img
          src={project.img}
          alt={portfolioProjectAlt(project)}
          className="portfolio-featured__img"
          loading="eager"
        />
      </a>

      <div className="portfolio-featured__body">
        <span className="portfolio-featured__eyebrow">Featured Project</span>
        <h2 className="portfolio-featured__title">
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h2>
        <p className="portfolio-featured__desc">{project.desc}</p>

        <div className="project-extra portfolio-featured__tags">
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

        <a
          href={project.href}
          className="portfolio-featured__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Website <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
