import React from 'react';
import Link from 'next/link';

const FEATURE_ICONS = ['🎯', '📱', '🚀', '📍', '⚡', '🛠️'];

const PROCESS_STEP_THEMES = [
  { icon: '💬', color: '#38bdf8', label: 'Phase 01' },
  { icon: '🎨', color: '#6366f1', label: 'Phase 02' },
  { icon: '⚙️', color: '#10b981', label: 'Phase 03' },
  { icon: '🚀', color: '#f59e0b', label: 'Phase 04' },
];

export function CityStatsSection({ meta }) {
  return (
    <section className="city-page__stats" aria-label="Key highlights">
      <div className="city-page__stats-grid">
        {meta.stats.map((stat) => (
          <div key={stat.label} className="city-page__stat-card">
            <span className="city-page__stat-value">{stat.value}</span>
            <span className="city-page__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CityAudienceSection({ config, meta }) {
  return (
    <section className="fswd__split_section_split">
      <div className="fswd__container">
        <span className="fswd__sec_badge yellow">WHO WE HELP</span>
        <h2 className="fswd__h2">Built for {config.city} businesses</h2>
        <p className="fswd__section_description_white">
          Practical solutions for local shops, services, and growing brands across the Eastern Province.
        </p>

        <div className="fswd__split_grid_split city-page__split-single">
          <div className="fswd__split_card_split split_blue">
            <span className="fswd__split_tag">IDEAL FOR</span>
            <h3 className="fswd__h3">Who this is for</h3>
            <ul className="fswd__check_list">
              {meta.whoItsFor.map((item) => (
                <li key={item}>
                  <span className="check_marker">✓</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="fswd__split_card_split split_red">
            <span className="fswd__split_tag">CHALLENGES</span>
            <h3 className="fswd__h3">Problems we solve</h3>
            <ul className="fswd__check_list">
              {meta.problems.map((item) => (
                <li key={item}>
                  <span className="check_marker">✓</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CityServicesGrid({ config }) {
  return (
    <section className="city-page__cards-section">
      <div className="city-page__cards-inner">
        <div className="city-page__cards-header">
          <span className="fswd__sec_badge purple">SERVICES</span>
          <h2 className="fswd__h2">{config.serviceListTitle}</h2>
          <p className="fswd__section_description">
            Everything you need to grow online in {config.city} — delivered by a local team that
            understands your market.
          </p>
        </div>

        <div className="city-page__cards-grid">
          {config.services.map((service, index) => (
            <article key={service} className="city-page__feature-card">
              <div className="city-page__feature-icon" aria-hidden="true">
                {FEATURE_ICONS[index % FEATURE_ICONS.length]}
              </div>
              <h3 className="city-page__feature-title">{service}</h3>
              <p className="city-page__feature-desc">
                Professional {service.toLowerCase()} for {config.city} businesses with ongoing
                local support.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CityProcessSection({ config, meta }) {
  return (
    <section className="city-journey" aria-labelledby="city-journey-title">
      <div className="city-journey__glow city-journey__glow--left" aria-hidden="true" />
      <div className="city-journey__glow city-journey__glow--right" aria-hidden="true" />

      <div className="city-journey__inner">
        <div className="city-journey__layout">
          <header className="city-journey__intro">
            <span className="city-journey__badge">Our Process</span>
            <h2 id="city-journey-title" className="city-journey__title">
              How we work with <span className="city-journey__title-accent">{config.city}</span>{' '}
              clients
            </h2>
            <p className="city-journey__subtitle">
              A clear, guided journey from first conversation to launch — built around your local
              goals with zero guesswork.
            </p>

            <div className="city-journey__meta">
              <div className="city-journey__meta-item">
                <span className="city-journey__meta-value">{meta.process.length}</span>
                <span className="city-journey__meta-label">Simple steps</span>
              </div>
              <div className="city-journey__meta-divider" aria-hidden="true" />
              <div className="city-journey__meta-item">
                <span className="city-journey__meta-value">Local</span>
                <span className="city-journey__meta-label">Batticaloa team</span>
              </div>
            </div>

            <a href="#contact" className="city-journey__intro-cta">
              Start your project
              <span aria-hidden="true">→</span>
            </a>
          </header>

          <ol className="city-journey__timeline">
            {meta.process.map((step, index) => {
              const theme = PROCESS_STEP_THEMES[index % PROCESS_STEP_THEMES.length];
              const isLast = index === meta.process.length - 1;

              return (
                <li
                  key={step.number}
                  className="city-journey__step"
                  style={{ '--step-color': theme.color }}
                >
                  <div className="city-journey__rail" aria-hidden="true">
                    <span className="city-journey__node">
                      <span className="city-journey__node-num">0{step.number}</span>
                    </span>
                    {!isLast && <span className="city-journey__line" />}
                  </div>

                  <article className="city-journey__card">
                    <div className="city-journey__card-accent" aria-hidden="true" />
                    <div className="city-journey__card-head">
                      <span className="city-journey__card-icon" aria-hidden="true">
                        {theme.icon}
                      </span>
                      <span className="city-journey__card-phase">{theme.label}</span>
                    </div>
                    <h3 className="city-journey__card-title">{step.title}</h3>
                    <p className="city-journey__card-desc">{step.description}</p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function CityCtaBand({ config, meta }) {
  return (
    <section className="city-page__cta-band">
      <div className="city-page__cta-inner">
        <h2 className="city-page__cta-title">Ready to grow your business in {config.city}?</h2>
        <p className="city-page__cta-text">
          Get a free consultation from our Batticaloa team. We reply within 24 hours with honest
          advice and a clear next step.
        </p>
        <div className="city-page__cta-actions">
          <a href="#contact" className="city-page__cta-btn city-page__cta-btn--primary">
            {config.ctaText}
          </a>
          <Link
            href={config.parentService.href}
            className="city-page__cta-btn city-page__cta-btn--ghost"
          >
            {meta.parentCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CityRelatedSection({ config, related }) {
  if (!related.length) return null;

  return (
    <section className="city-page__related">
      <div className="city-page__related-inner">
        <span className="fswd__sec_badge green">NEARBY AREAS</span>
        <h2 className="fswd__h2">We also serve nearby towns</h2>
        <p className="fswd__section_description">
          Explore our services in other Eastern Province locations.
        </p>
        <div className="city-page__related-grid">
          {related.map((city) => (
            <Link key={city.slug} href={city.path} className="city-page__related-link">
              {city.breadcrumbName}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
