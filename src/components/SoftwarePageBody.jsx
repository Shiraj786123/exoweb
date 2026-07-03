import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import softDetailsVisual from '../assets/software/soft-details-visual.jpg';
import {
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRightCircle,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineCog6Tooth,
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlineArrowTrendingUp,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlinePuzzlePiece,
  HiOutlineCloud,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import {
  SOFT_DETAILS_LABEL,
  SOFT_INTRO,
  SOFT_WHY_CUSTOM,
  SOFT_EASTERN_PROVINCE,
  SOFT_INDUSTRIES,
  SOFT_AREAS,
  SOFT_FAQ,
  SOFT_CTA,
} from '../content/softwarePageContent';
import PageBodyCtaSection from './shared/PageBodyCtaSection';

const whyCustomIcons = {
  briefcase: HiOutlineBriefcase,
  automation: HiOutlineCog6Tooth,
  productivity: HiOutlineArrowTrendingUp,
  costs: HiOutlineCurrencyDollar,
  security: HiOutlineShieldCheck,
  integration: HiOutlinePuzzlePiece,
  cloud: HiOutlineCloud,
  value: HiOutlineChartBar,
};

const industryIcons = {
  retail: HiOutlineShoppingBag,
  hotel: HiOutlineBuildingOffice2,
  health: HiOutlineHeart,
  education: HiOutlineAcademicCap,
  factory: HiOutlineCog6Tooth,
  logistics: HiOutlineTruck,
};

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#db2777', '#6366f1', '#0d9488'];

const SectionVisual = ({ src, alt, className = '', width = 420, height = 340 }) => (
  <div className={`ecd-v2__section_visual${className ? ` ${className}` : ''}`}>
    <Image src={src} alt={alt} width={width} height={height} className="ecd-v2__section_visual_img" />
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
  titleClassName = 'ecd-h4',
  TitleTag = 'h4',
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
            <TitleTag className={titleClassName}>
              {title}
              {titleAccent && (
                <>
                  {' '}
                  <span className="ecd-v2__title_accent">{titleAccent}</span>
                </>
              )}
            </TitleTag>
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
            <h4 className="ecd-h4">{SOFT_DETAILS_LABEL.title}</h4>
            <p>{SOFT_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={softDetailsVisual}
            alt="Custom software development services by Vexoweb in Eastern Province, Sri Lanka"
            className="ecd-v2__section_visual--website-details"
            width={1024}
            height={769}
          />
        </div>
      </div>
    </div>

    <PageBodyCtaSection
      cta={SOFT_CTA}
      service="Software Development"
      intro={{
        icon: <HiOutlineCodeBracket />,
        text: SOFT_INTRO.summary,
      }}
    />

    <SectionShell
      icon={HiOutlineSparkles}
      title={SOFT_WHY_CUSTOM.title}
      variant="alt"
    >
      <p className="ecd-v2__center_lead ecd-v2__center_lead--wide">{SOFT_WHY_CUSTOM.description}</p>
      <p className="ecd-v2__label ecd-v2__label--center">{SOFT_WHY_CUSTOM.listLabel}</p>
      <div className="ecd-show__mini_grid ecd-show__mini_grid--cols-4 ecd-show__mini_grid--full-labels">
        {SOFT_WHY_CUSTOM.benefits.map((benefit) => {
          const Icon = whyCustomIcons[benefit.icon] || HiOutlineCheckCircle;
          return (
            <div key={benefit.label} className="ecd-show__mini_card">
              <div className="ecd-show__mini_icon" style={{ color: benefit.color }}>
                <Icon aria-hidden="true" />
              </div>
              <span>{benefit.label}</span>
            </div>
          );
        })}
      </div>
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
      <div className="ecd-v2__ship_row ecd-v2__ship_row--cols-3">
        {SOFT_INDUSTRIES.map((industry, index) => {
          const Icon = industryIcons[industry.icon];
          const accent = shipAccents[index % shipAccents.length];
          return (
            <article key={industry.title} className="ecd-v2__ship_card" style={{ '--ship-accent': accent }}>
              <span className="ecd-v2__ship_num" style={{ background: accent }}>{index + 1}</span>
              <div className="ecd-v2__ship_icon" style={{ color: accent }}>
                <Icon />
              </div>
              <h5 className="ecd-h5">{industry.title}</h5>
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
      <div className="ecd-v2__related_row ecd-v2__related_row--areas" style={{ '--related-cols': SOFT_AREAS.length }}>
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

    <SectionShell
      icon={HiOutlineQuestionMarkCircle}
      title="Frequently Asked Questions"
      variant="alt"
      titleClassName="ecd-h6"
      TitleTag="h6"
    >
      <div className="ecd-v2__faq">
        {SOFT_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  </div>
);

export default SoftwarePageBody;
