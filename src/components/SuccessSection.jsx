import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../content/portfolioProjects';
import { portfolioProjectAlt } from '../lib/imageAlt';

const SCROLL_SPEED = 42;

const projects = PORTFOLIO_PROJECTS;
const loopedProjects = [...projects, ...projects];

const SuccessSection = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const animationRef = useRef(null);
  const lastFrameRef = useRef(0);

  const [offset, setOffset] = useState(0);
  const [metrics, setMetrics] = useState({ cardWidth: 280, gap: 20 });

  const getSetWidth = useCallback(() => {
    return projects.length * (metrics.cardWidth + metrics.gap);
  }, [metrics.cardWidth, metrics.gap]);

  const normalizeOffset = useCallback(
    (value) => {
      const setWidth = getSetWidth();
      if (!setWidth) return 0;
      return ((value % setWidth) + setWidth) % setWidth;
    },
    [getSetWidth]
  );

  const measureLayout = useCallback(() => {
    const firstCard = trackRef.current?.querySelector('.project-card');
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(trackRef.current);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '24');

    setMetrics({ cardWidth, gap });
  }, []);

  useEffect(() => {
    measureLayout();
    window.addEventListener('resize', measureLayout);
    return () => window.removeEventListener('resize', measureLayout);
  }, [measureLayout]);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameRef.current;
      lastFrameRef.current = timestamp;
      const setWidth = getSetWidth();

      if (setWidth > 0) {
        const nextOffset = normalizeOffset(
          offsetRef.current + (SCROLL_SPEED * elapsed) / 1000
        );
        offsetRef.current = nextOffset;
        setOffset(nextOffset);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastFrameRef.current = 0;
    };
  }, [getSetWidth, normalizeOffset]);

  return (
    <section className="success-section" id="results">
      <div className="success-container">
        <div className="success-header">
          <span className="success-tag">PROVEN EXPERTISE</span>

          <h2 className="success-title">
            Real Results, Engineered For Ultimate Performance
          </h2>
          <p className="success-subtitle">
            Our recent portfolio highlights our engineering expertise in delivering
            tailored digital solutions that meet unique global objectives.
          </p>
        </div>

        <div className="projects-slider" ref={sliderRef}>
          <div
            ref={trackRef}
            className="projects-track"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {loopedProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="project-card">
                <div className="project-img-wrapper">
                  <img
                    src={project.img}
                    alt={portfolioProjectAlt(project)}
                    className="project-img"
                  />
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
                    {project.extra.map((item, idx) => (
                      <span
                        key={idx}
                        style={{ background: item.Background }}
                        className="tech-badge"
                      >
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
