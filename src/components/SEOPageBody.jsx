import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HiOutlineMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineMapPin,
  HiOutlineArrowRightCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineLink,
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineShoppingCart,
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import {
  SEO_DETAILS_LABEL,
  SEO_INTRO,
  SEO_WHY_INVEST,
  SEO_EASTERN_PROVINCE,
  SEO_WHY_CHOOSE,
  SEO_AREAS,
  SEO_FAQ,
  SEO_RELATED,
  SEO_CTA,
} from '../content/seoPageContent';
import SEOWhyShowcaseSection from './seo/SEOWhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../data/whyShowcaseImages';

const whyChooseIcons = {
  'Experienced SEO Specialists': HiOutlineMagnifyingGlass,
  'Local SEO Expertise': HiOutlineMapPin,
  'Ethical White Hat SEO': HiOutlineShieldCheck,
  'Technical SEO Professionals': HiOutlineWrenchScrewdriver,
  'Transparent SEO Reporting': HiOutlineChartBar,
  'Data-Driven SEO Strategies': HiOutlineChartBar,
  'AI Search Optimisation': HiOutlineCpuChip,
  'Long-Term Growth Focus': HiOutlineArrowRightCircle,
};

const relatedIcons = {
  'Website Development': HiOutlineGlobeAlt,
  'Ecommerce Development': HiOutlineShoppingCart,
  'Software Development': HiOutlineCodeBracket,
  'Mobile App Development': HiOutlineDevicePhoneMobile,
  'AI Software Development': HiOutlineCpuChip,
};

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2'];

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
}) => (
  <section
    className={[
      'ecd-v2__section',
      variant === 'alt' && 'ecd-v2__section--alt',
      variant === 'hero' && 'ecd-v2__section--hero',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <div className="ecd-v2__container">
      <div className="ecd-v2__section_head">
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

const IconPointsCard = ({ item, index, iconMap, fallbackIcon, accents = shipAccents }) => {
  const Icon = iconMap[item.title] || fallbackIcon;
  const accent = accents[index % accents.length];
  return (
    <article className="ecd-v2__ship_card" style={{ '--ship-accent': accent }}>
      <span className="ecd-v2__ship_num" style={{ background: accent }}>{index + 1}</span>
      <div className="ecd-v2__ship_icon" style={{ color: accent }}>
        <Icon />
      </div>
      <h3>{item.title}</h3>
      <ul className="ecd-v2__ship_points">
        {item.points.map((point) => (
          <li key={point}>
            <HiOutlineCheckCircle aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const IconPointsRow = ({ items, iconMap, fallbackIcon, cols }) => (
  <div
    className={`ecd-v2__ship_row ecd-v2__ship_row--wrap${cols ? ` ecd-v2__ship_row--cols-${cols}` : ''}`}
    style={cols ? { '--ship-cols': cols } : undefined}
  >
    {items.map((item, index) => (
      <IconPointsCard
        key={item.title}
        item={item}
        index={index}
        iconMap={iconMap}
        fallbackIcon={fallbackIcon}
      />
    ))}
  </div>
);

const SEOPageBody = () => (
  <div className="ecd-v2 ecd-v2--details">
    <div className="ecd-v2__details_label">
      <div className="ecd-v2__container">
        <div className="ecd-v2__details_label_inner">
          <div className="ecd-v2__details_label_copy">
            <span>{SEO_DETAILS_LABEL.badge}</span>
            <h2>{SEO_DETAILS_LABEL.title}</h2>
            <p>{SEO_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={WHY_SHOWCASE_IMAGES.seo}
            alt="Professional SEO services by Vexoweb"
            className="ecd-v2__section_visual--launch"
          />
        </div>
      </div>
    </div>

    <section className="ecd-v2__intro ecd-v2__intro--brief">
      <div className="ecd-v2__container">
        <div className="ecd-v2__intro_brief">
          <div className="ecd-v2__intro_icon" aria-hidden="true">
            <HiOutlineMagnifyingGlass />
          </div>
          <div>
            <p>{SEO_INTRO.summary}</p>
            <p>{SEO_INTRO.closing}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionShell icon={HiOutlineChartBar} title={SEO_WHY_INVEST.title} variant="alt">
      <Prose paragraphs={SEO_WHY_INVEST.intro} className="ecd-v2__prose--center" />
      <p className="ecd-v2__center_lead">{SEO_WHY_INVEST.subtitle}</p>
    </SectionShell>

    <SectionShell icon={HiOutlineMapPin} title={SEO_EASTERN_PROVINCE.title}>
      <Prose paragraphs={SEO_EASTERN_PROVINCE.intro} className="ecd-v2__prose--center" />
    </SectionShell>

    <SectionShell
      icon={HiOutlineShieldCheck}
      title={SEO_WHY_CHOOSE.title}
      titleAccent={SEO_WHY_CHOOSE.titleAccent}
      variant="hero"
    >
      <p className="ecd-v2__center_lead ecd-v2__center_lead--light">{SEO_WHY_CHOOSE.subtitle}</p>
      <IconPointsRow
        items={SEO_WHY_CHOOSE.items}
        iconMap={whyChooseIcons}
        fallbackIcon={HiOutlineMagnifyingGlass}
        cols={4}
      />
    </SectionShell>

    <SectionShell icon={HiOutlineMapPin} title="Areas We Serve" variant="alt">
      <p className="ecd-v2__center_lead">
        Our SEO services are available throughout the Eastern Province, including:
      </p>
      <div className="ecd-v2__related_row">
        {SEO_AREAS.map((area) => (
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

    <SEOWhyShowcaseSection />

    <SectionShell icon={HiOutlineQuestionMarkCircle} title="Frequently Asked Questions">
      <div className="ecd-v2__faq">
        {SEO_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineLink} title={SEO_RELATED.title} variant="alt">
      <Prose paragraphs={SEO_RELATED.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row">
        {SEO_RELATED.links.map((link) => {
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
      <p className="ecd-v2__closing ecd-v2__closing--center">{SEO_RELATED.closing}</p>
    </SectionShell>

    <section className="ecd-v2__cta_section">
      <div className="ecd-v2__container">
        <div className="ecd-v2__cta_compact vexoweb-cta-banner">
          <div className="ecd-v2__cta_compact_text">
            <h2 className="ecd-v2__cta_compact_title">{SEO_CTA.title}</h2>
            {SEO_CTA.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="ecd-v2__cta_compact_actions">
            <a href="#contact" className="ecd-v2__cta_btn_primary">
              {SEO_CTA.primaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SEOPageBody;
