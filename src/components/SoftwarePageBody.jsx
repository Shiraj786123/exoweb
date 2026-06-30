import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import trustVisualImg from '../assets/icons/web-dev-trust-visual.png';
import {
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineLink,
  HiOutlineArrowRightCircle,
  HiOutlineShoppingCart,
  HiOutlineDevicePhoneMobile,
  HiOutlineMagnifyingGlass,
  HiOutlineCpuChip,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineCog6Tooth,
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineSparkles,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import {
  SOFT_DETAILS_LABEL,
  SOFT_INTRO,
  SOFT_WHY_CUSTOM,
  SOFT_EASTERN_PROVINCE,
  SOFT_INDUSTRIES,
  SOFT_AREAS,
  SOFT_FAQ,
  SOFT_RELATED,
  SOFT_CTA,
} from '../content/softwarePageContent';
import SoftwareWhyShowcaseSection from './software/SoftwareWhyShowcaseSection';

const industryIcons = {
  retail: HiOutlineShoppingBag,
  hotel: HiOutlineBuildingOffice2,
  health: HiOutlineHeart,
  education: HiOutlineAcademicCap,
  factory: HiOutlineCog6Tooth,
  logistics: HiOutlineTruck,
};

const relatedIcons = {
  'Website Development': HiOutlineGlobeAlt,
  'Ecommerce Development': HiOutlineShoppingCart,
  'Mobile App Development': HiOutlineDevicePhoneMobile,
  'AI Software Development': HiOutlineCpuChip,
  'SEO Services': HiOutlineMagnifyingGlass,
};

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#db2777', '#6366f1', '#0d9488'];

const SectionVisual = ({ src, alt, className = '' }) => (
  <div className={`ecd-v2__section_visual${className ? ` ${className}` : ''}`}>
    <Image src={src} alt={alt} width={420} height={340} className="ecd-v2__section_visual_img" />
  </div>
);

const SectionShell = ({
  icon: Icon,
  title,
  titleAccent,
  subtitle,
  children,
  variant = 'default',
  visual,
}) => (
  <section
    className={[
      'ecd-v2__section',
      variant === 'alt' && 'ecd-v2__section--alt',
      variant === 'hero' && 'ecd-v2__section--hero',
      visual && 'ecd-v2__section--with_visual',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <div className="ecd-v2__container">
      <div
        className={[
          'ecd-v2__section_head',
          visual && 'ecd-v2__section_head--with_visual',
          visual && variant === 'hero' && 'ecd-v2__section_head--hero_visual',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="ecd-v2__section_head_copy">
          {Icon && (
            <div className="ecd-v2__section_icon_wrap" aria-hidden="true">
              <Icon />
            </div>
          )}
          <div>
            <h2 className="ecd-v2__title">
              {title}
              {titleAccent && (
                <>
                  {' '}
                  <span className="ecd-v2__title_accent">{titleAccent}</span>
                </>
              )}
            </h2>
            {subtitle && <p className="ecd-v2__subtitle">{subtitle}</p>}
          </div>
        </div>
        {visual && (
          <SectionVisual src={visual.src} alt={visual.alt} className={visual.className} />
        )}
      </div>
      {children}
    </div>
  </section>
);

const Prose = ({ paragraphs, className = '' }) => (
  <div className={`ecd-v2__prose${className ? ` ${className}` : ''}`}>
    {paragraphs.map((p) => (
      <p key={p.slice(0, 48)}>{p}</p>
    ))}
  </div>
);

const SoftwarePageBody = () => (
  <div className="ecd-v2 ecd-v2--details">
    <div className="ecd-v2__details_label">
      <div className="ecd-v2__container">
        <div className="ecd-v2__details_label_inner">
          <div className="ecd-v2__details_label_copy">
            <span>{SOFT_DETAILS_LABEL.badge}</span>
            <h2>{SOFT_DETAILS_LABEL.title}</h2>
            <p>{SOFT_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={trustVisualImg}
            alt="Professional software development services"
            className="ecd-v2__section_visual--launch"
          />
        </div>
      </div>
    </div>

    <section className="ecd-v2__intro ecd-v2__intro--brief">
      <div className="ecd-v2__container">
        <div className="ecd-v2__intro_brief">
          <div className="ecd-v2__intro_icon" aria-hidden="true">
            <HiOutlineCodeBracket />
          </div>
          <p>{SOFT_INTRO.summary}</p>
        </div>
      </div>
    </section>

    <SectionShell
      icon={HiOutlineSparkles}
      title={SOFT_WHY_CUSTOM.title}
      subtitle={SOFT_WHY_CUSTOM.subtitle}
      variant="alt"
    >
      <Prose paragraphs={SOFT_WHY_CUSTOM.intro} className="ecd-v2__prose--center" />
      <p className="ecd-v2__center_lead">{SOFT_WHY_CUSTOM.listLabel}</p>
      <ul className="ecd-v2__bullets ecd-v2__bullets--chips">
        {SOFT_WHY_CUSTOM.bullets.map((bullet) => (
          <li key={bullet}>
            <HiOutlineCheckCircle aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </SectionShell>

    <SectionShell icon={HiOutlineGlobeAlt} title={SOFT_EASTERN_PROVINCE.title}>
      <Prose paragraphs={SOFT_EASTERN_PROVINCE.intro} className="ecd-v2__prose--center" />
    </SectionShell>

    <SectionShell
      icon={HiOutlineBriefcase}
      title="Industries We Work With"
      subtitle="We build custom software for businesses across many industries, including:"
      variant="alt"
    >
      <div className="ecd-v2__ship_row ecd-v2__ship_row--wrap ecd-v2__ship_row--cols-3">
        {SOFT_INDUSTRIES.map((industry, index) => {
          const Icon = industryIcons[industry.icon];
          const accent = shipAccents[index % shipAccents.length];
          return (
            <article key={industry.title} className="ecd-v2__ship_card" style={{ '--ship-accent': accent }}>
              <span className="ecd-v2__ship_num" style={{ background: accent }}>{index + 1}</span>
              <div className="ecd-v2__ship_icon" style={{ color: accent }}>
                <Icon />
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineMapPin} title="Areas We Serve">
      <p className="ecd-v2__center_lead">
        Our software development services are available throughout the Eastern Province, including:
      </p>
      <div className="ecd-v2__related_row">
        {SOFT_AREAS.map((area) => (
          <Link key={area.href} href={area.href} className="ecd-v2__related_tile">
            <div className="ecd-v2__related_tile_icon">
              <HiOutlineMapPin />
            </div>
            <span className="ecd-v2__related_tile_label">{area.label}</span>
            <HiOutlineArrowRightCircle className="ecd-v2__related_tile_arrow" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </SectionShell>

    <SoftwareWhyShowcaseSection />

    <SectionShell icon={HiOutlineQuestionMarkCircle} title="Frequently Asked Questions" variant="alt">
      <div className="ecd-v2__faq">
        {SOFT_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineLink} title={SOFT_RELATED.title}>
      <Prose paragraphs={SOFT_RELATED.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row">
        {SOFT_RELATED.links.map((link) => {
          const Icon = relatedIcons[link.label] || HiOutlineArrowRightCircle;
          return (
            <Link key={link.href} href={link.href} className="ecd-v2__related_tile">
              <div className="ecd-v2__related_tile_icon">
                <Icon />
              </div>
              <span className="ecd-v2__related_tile_label">{link.label}</span>
              <HiOutlineArrowRightCircle className="ecd-v2__related_tile_arrow" aria-hidden="true" />
            </Link>
          );
        })}
      </div>
      <p className="ecd-v2__closing ecd-v2__closing--center">{SOFT_RELATED.closing}</p>
    </SectionShell>

    <section className="ecd-v2__cta_section">
      <div className="ecd-v2__container">
        <div className="ecd-v2__cta_compact vexoweb-cta-banner">
          <div className="ecd-v2__cta_compact_text">
            <h2 className="ecd-v2__cta_compact_title">{SOFT_CTA.title}</h2>
            {SOFT_CTA.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="ecd-v2__cta_compact_actions">
            <a href="#contact" className="ecd-v2__cta_btn_primary">
              {SOFT_CTA.primaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SoftwarePageBody;
