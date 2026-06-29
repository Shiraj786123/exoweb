import React from 'react';
import Link from 'next/link';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import ServiceProcessSection from './ServiceProcessSection';
import { normalizeCityProcessSteps } from '../utils/processSteps';
import {
  getServiceMeta,
  getIndustryMeta,
  getBenefitMeta,
  WEB_TECH_STRIP,
  SEO_METRICS_STRIP,
} from '../utils/citySectionIcons';
import {
  getCityLocalData,
  getOsmEmbedUrl,
  getGoogleMapsUrl,
} from '../content/cityLocalData';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { getWebDevIntroRobo, WEB_DEV_TRUST_VISUAL } from '../content/webDevVisuals';

const TRUST_CARD_COLORS = ['#2563eb', '#7c3aed', '#16a34a', '#ea580c', '#0891b2', '#6366f1'];

function WebDevTrustVisual() {
  return (
    <div className="city-rich__trust-visual">
      <img
        src={WEB_DEV_TRUST_VISUAL.src}
        alt={WEB_DEV_TRUST_VISUAL.alt}
        className="city-rich__trust-visual-img"
        loading="lazy"
      />
    </div>
  );
}

function WebDevRoboVisual({ cityName, tall = false, showBadge = false, fillHeight = false }) {
  const robo = getWebDevIntroRobo(cityName);
  const localData = showBadge ? getCityLocalData(cityName) : null;

  return (
    <div className={`city-rich__robo-wrap${fillHeight ? ' city-rich__robo-wrap--fill' : ''}`}>
      <div
        className={[
          'city-rich__robo-visual',
          `city-rich__robo-visual--${robo.theme}`,
          tall ? 'city-rich__robo-visual--tall' : '',
          fillHeight ? 'city-rich__robo-visual--fill' : '',
        ].filter(Boolean).join(' ')}
      >
        <div className="city-rich__robo-frame">
          <img
            src={robo.src}
            alt={robo.alt}
            className="city-rich__robo-img"
            loading="lazy"
          />
        </div>
        {localData ? (
          <div className="city-rich__local-badge">
            <HiOutlineMapPin aria-hidden="true" />
            <div>
              <strong>{cityName}</strong>
              <span>{localData.location}</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CityLocalMedia({ cityName, showMap = true, tall = false }) {
  const localData = getCityLocalData(cityName);
  if (!localData) return null;

  const mapUrl = showMap ? getOsmEmbedUrl(localData.lat, localData.lng, cityName) : null;
  const mapsLink = getGoogleMapsUrl(localData.lat, localData.lng, cityName);

  return (
    <div className="city-rich__local-media">
      <div className={`city-rich__local-photo${tall ? ' city-rich__local-photo--tall' : ''}`}>
        <img src={localData.image} alt={localData.imageAlt} loading="lazy" />
        <div className="city-rich__local-badge">
          <HiOutlineMapPin aria-hidden="true" />
          <div>
            <strong>{cityName}</strong>
            <span>{localData.location}</span>
          </div>
        </div>
      </div>
      {mapUrl ? (
        <div className="city-rich__local-map">
          <iframe
            title={`Map of ${cityName}`}
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}
      {mapsLink ? (
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="city-rich__local-map-link"
        >
          View {cityName} on Google Maps <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </div>
  );
}

const SECTION_VARIANTS = {
  intro: 'city-rich--intro',
  why: 'city-rich--why',
  services: 'city-rich--services',
  benefits: 'city-rich--benefits',
  industries: 'city-rich--industries',
  process: 'city-rich--process',
  trust: 'city-rich--trust',
  serving: 'city-rich--serving',
  areas: 'city-rich--areas',
  localSeo: 'city-rich--local-seo',
  faq: 'city-rich--faq',
  cta: 'city-rich--cta',
  tech: 'city-rich--tech',
  related: 'city-rich--related',
};

function SectionShell({ variant, children, className = '', alt = false }) {
  return (
    <section
      className={`city-rich ${SECTION_VARIANTS[variant] || ''}${alt ? ' city-rich--alt' : ''} ${className}`.trim()}
    >
      <div className="city-rich__inner">{children}</div>
    </section>
  );
}

function SectionHeader({ title, subtitle, light = false, align = 'center' }) {
  return (
    <div className={`city-rich__header city-rich__header--${align}${light ? ' city-rich__header--light' : ''}`}>
      <h2 className="city-rich__h2">{title}</h2>
      {subtitle ? <p className="city-rich__subtitle">{subtitle}</p> : null}
    </div>
  );
}

function CheckList({ items, className = '', light = false }) {
  if (!items?.length) return null;
  return (
    <ul className={`city-rich__check-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>
          <HiOutlineCheckCircle className={`city-rich__check-icon${light ? ' city-rich__check-icon--light' : ''}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const WebsiteMockup = () => (
  <div className="city-rich__mockup" aria-hidden="true">
    <div className="city-rich__mockup_top">
      <span /><span /><span />
    </div>
    <div className="city-rich__mockup_body">
      <div className="city-rich__mockup_nav" />
      <div className="city-rich__mockup_hero" />
      <div className="city-rich__mockup_cards">
        <span /><span /><span />
      </div>
    </div>
  </div>
);

const SeoChartMockup = () => (
  <div className="city-rich__chart" aria-hidden="true">
    <div className="city-rich__chart_head">
      <span>Organic Traffic</span>
      <strong>+186%</strong>
    </div>
    <div className="city-rich__chart_bars">
      {[30, 45, 55, 70, 85, 100].map((h, i) => (
        <div key={i} className="city-rich__chart_bar" style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="city-rich__chart_labels">
      {['M1', 'M2', 'M3', 'M4', 'M5', 'M6'].map((l) => (
        <span key={l}>{l}</span>
      ))}
    </div>
  </div>
);

export function RichCityIntro({ section, config }) {
  const isSeo = config?.serviceType === 'seo';
  const isWebDev = config?.serviceType === 'website-development';
  const cityName = config?.city;

  return (
    <>
      <SectionShell variant="intro">
        <div className="city-rich__intro-layout">
          <div className="city-rich__intro-copy">
            {section.badge ? <span className="city-rich__badge">{section.badge}</span> : null}
            <h2 className="city-rich__h2">{section.title}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="city-rich__lead">{p}</p>
            ))}
            {section.bullets?.length ? <CheckList items={section.bullets} /> : null}
            {section.cta ? (
              <a href="#contact" className="city-rich__btn city-rich__btn--primary">{section.cta}</a>
            ) : null}
          </div>
          <div className="city-rich__intro-visual">
            {isSeo ? (
              <SeoChartMockup />
            ) : isWebDev ? (
              <WebDevRoboVisual cityName={cityName} tall showBadge />
            ) : (
              <WebsiteMockup />
            )}
          </div>
        </div>
      </SectionShell>
      <SectionShell variant="intro" className="city-rich--strip">
        <div className="city-rich__strip">
          {isSeo ? (
            SEO_METRICS_STRIP.map((m) => (
              <div key={m.label} className="city-rich__metric">
                <strong style={{ color: m.color }}>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))
          ) : (
            WEB_TECH_STRIP.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.name} className="city-rich__tech-chip">
                  <Icon style={{ color: t.color }} />
                  <span>{t.name}</span>
                </div>
              );
            })
          )}
        </div>
      </SectionShell>
    </>
  );
}

export function RichCityWhy({ section }) {
  const bullets = section.bullets?.slice(0, 6) || [];
  return (
    <SectionShell variant="why">
      <SectionHeader title={section.title} subtitle={section.subtitle} light align="center" />
      <div className="city-rich__why-grid city-rich__why-grid--six">
        {bullets.map((item) => {
          const meta = getBenefitMeta(item);
          const Icon = meta.icon;
          return (
            <div key={item} className="city-rich__why-item">
              <div className="city-rich__why-icon">
                <Icon />
              </div>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function RichCityServices({ section }) {
  return (
    <SectionShell variant="services" alt>
      <SectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="city-rich__service-grid">
        {section.items.map((item) => {
          const meta = getServiceMeta(item.title);
          const Icon = meta.icon;
          return (
            <article key={item.title} className="city-rich__service-card">
              <div
                className="city-rich__service-icon"
                style={{ backgroundColor: `${meta.color}14`, color: meta.color }}
              >
                <Icon />
              </div>
              <h3 className="city-rich__h3">{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contact" className="city-rich__learn-more" style={{ color: meta.color }}>
                Learn More <span aria-hidden="true">→</span>
              </a>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function RichCityBenefits({ section }) {
  return (
    <SectionShell variant="benefits">
      <SectionHeader title={section.title} subtitle={section.subtitle} light align="center" />
      {section.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="city-rich__text city-rich__text--on-dark city-rich__text--center">{p}</p>
      ))}
      <div className="city-rich__benefits-grid">
        {section.bullets?.map((item) => {
          const meta = getBenefitMeta(item);
          const Icon = meta.icon;
          return (
            <div key={item} className="city-rich__benefit-item">
              <div className="city-rich__benefit-icon" style={{ color: meta.color }}>
                <Icon />
              </div>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function RichCityIndustries({ section }) {
  return (
    <SectionShell variant="industries">
      <SectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="city-rich__industry-grid">
        {section.items.map((item) => {
          const meta = getIndustryMeta(item.title);
          const Icon = meta.icon;
          return (
            <article key={item.title} className="city-rich__industry-card">
              <div className="city-rich__industry-icon" style={{ color: meta.color }}>
                <Icon />
              </div>
              <h3 className="city-rich__h3">{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function RichCityTrust({ section, config }) {
  const isWebDev = config?.serviceType === 'website-development';
  const bullets = section.bullets?.slice(0, 6) || [];

  if (isWebDev) {
    return (
      <SectionShell variant="trust" className="city-rich--trust-webdev">
        <SectionHeader title={section.title} subtitle={section.subtitle} align="center" light />
        {section.paragraphs?.map((p) => (
          <p key={p.slice(0, 40)} className="city-rich__text city-rich__text--center city-rich__trust-lead">{p}</p>
        ))}
        <div className="city-rich__trust-balanced">
          <WebDevTrustVisual />
          <div className="city-rich__trust-panel city-rich__trust-panel--vibrant">
            {section.listLabel ? <h3 className="city-rich__h3">{section.listLabel}</h3> : null}
            <div className="city-rich__trust-feature-grid">
              {bullets.map((item, index) => {
                const meta = getBenefitMeta(item);
                const Icon = meta.icon;
                const color = TRUST_CARD_COLORS[index % TRUST_CARD_COLORS.length];
                return (
                  <div key={item} className="city-rich__trust-feature-card">
                    <div
                      className="city-rich__trust-feature-icon"
                      style={{ backgroundColor: `${color}18`, color }}
                    >
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="city-rich__trust-feature-text">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell variant="trust" alt>
      <div className="city-rich__trust-layout">
        <div className="city-rich__trust-copy">
          <SectionHeader title={section.title} subtitle={section.subtitle} align="left" />
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="city-rich__text">{p}</p>
          ))}
        </div>
        <div className="city-rich__trust-panel">
          {section.listLabel ? <h3 className="city-rich__h3">{section.listLabel}</h3> : null}
          <div className="city-rich__trust-grid">
            {bullets.map((item) => (
              <div key={item} className="city-rich__trust-item">
                <HiOutlineCheckCircle className="city-rich__trust-check" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function RichCityServing({ section, config }) {
  const cityName = config?.city;
  const localData = getCityLocalData(cityName);

  return (
    <SectionShell variant="serving">
      <div className="city-rich__serving-layout">
        <div className="city-rich__serving-copy">
          <SectionHeader title={section.title} align="left" />
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="city-rich__text">{p}</p>
          ))}
          <a href="#contact" className="city-rich__btn city-rich__btn--primary">
            Get a Free Quote
          </a>
        </div>
        {localData ? (
          <CityLocalMedia cityName={cityName} showMap />
        ) : (
          <div className="city-rich__serving-card">
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="city-rich__text">{p}</p>
            ))}
          </div>
        )}
      </div>
    </SectionShell>
  );
}

export function RichCityAreas({ section }) {
  if (!section.links?.length) return null;
  return (
    <SectionShell variant="areas" alt>
      <SectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="city-rich__areas-grid">
        {section.links.map((link) => (
          <Link key={link.href} href={link.href} className="city-rich__area-link">
            {link.label}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

export function RichCityLocalSeo({ section, config }) {
  const cityName = section.city || config?.city;
  const localData = getCityLocalData(cityName);

  return (
    <SectionShell variant="localSeo">
      <div className="city-rich__local-layout">
        <div className="city-rich__local-copy">
          <SectionHeader title={section.title} align="left" />
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="city-rich__text">{p}</p>
          ))}
          {section.listLabel ? <h3 className="city-rich__h3">{section.listLabel}</h3> : null}
          <div className="city-rich__channel-pills">
            {section.bullets?.map((item) => (
              <span key={item} className="city-rich__channel-pill">{item}</span>
            ))}
          </div>
          {section.footer ? (
            <p className="city-rich__text city-rich__text--footer">{section.footer}</p>
          ) : null}
        </div>
        {localData ? (
          <CityLocalMedia cityName={cityName} showMap />
        ) : null}
      </div>
    </SectionShell>
  );
}

export function RichCityTech({ section }) {
  return (
    <SectionShell variant="tech">
      <SectionHeader title={section.title} subtitle={section.subtitle} />
      <div className="city-rich__tech-grid">
        {section.items.map((item) => (
          <span key={item} className="city-rich__tech-pill">{item}</span>
        ))}
      </div>
    </SectionShell>
  );
}

export function RichCityFaq({ section }) {
  return (
    <SectionShell variant="faq" alt>
      <SectionHeader title={section.title || 'Frequently Asked Questions'} />
      <div className="city-rich__faq-list">
        {section.items.map((item) => (
          <details key={item.q} className="city-rich__faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export function RichCityCta({ section }) {
  return (
    <SectionShell variant="cta">
      <div className="city-rich__cta-card vexoweb-cta-banner">
        <h2 className="city-rich__cta-title">{section.title}</h2>
        {section.paragraphs?.map((p) => (
          <p key={p.slice(0, 40)} className="city-rich__cta-text">{p}</p>
        ))}
        <a href="#contact" className="city-rich__btn city-rich__btn--cta city-page__cta-btn city-page__cta-btn--primary">
          {section.cta || 'Contact Us Today'}
        </a>
      </div>
    </SectionShell>
  );
}

const RENDERERS = {
  intro: RichCityIntro,
  why: RichCityWhy,
  services: RichCityServices,
  benefits: RichCityBenefits,
  industries: RichCityIndustries,
  trust: RichCityTrust,
  serving: RichCityServing,
  areas: RichCityAreas,
  localSeo: RichCityLocalSeo,
  tech: RichCityTech,
  faq: RichCityFaq,
  cta: RichCityCta,
};

export default function RichCitySections({ sections, config }) {
  if (!sections?.length) return null;

  return (
    <div className="city-ref">
      {sections.map((section, index) => {
        if (section.type === 'process') {
          const steps = normalizeCityProcessSteps(section.steps, section.variant);
          return (
            <ServiceProcessSection
              key={`process-${index}`}
              title={section.title}
              subtitle={section.subtitle}
              steps={steps}
              alt
            />
          );
        }

        const Renderer = RENDERERS[section.type];
        if (!Renderer) return null;
        return (
          <Renderer
            key={`${section.type}-${index}`}
            section={section}
            config={config}
          />
        );
      })}
    </div>
  );
}
