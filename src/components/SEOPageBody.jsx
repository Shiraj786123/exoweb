import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HiOutlineMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineMapPin,
  HiOutlineArrowRightCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineCpuChip,
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
  SEO_CTA,
} from '../content/seoPageContent';
import seoDetailsVisual from '../assets/seo/seo-details-visual.jpg';
import PageBodyCtaSection from './shared/PageBodyCtaSection';

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

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2'];

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
  titleClassName = 'ecd-h4',
  TitleTag = 'h4',
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
      <h5 className="ecd-h5">{item.title}</h5>
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
    className={`ecd-v2__ship_row${cols ? ` ecd-v2__ship_row--cols-${cols}` : ' ecd-v2__ship_row--wrap'}`}
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
            <h4 className="ecd-h4">{SEO_DETAILS_LABEL.title}</h4>
            <p>{SEO_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={seoDetailsVisual}
            alt="Professional SEO services and Google ranking growth by Vexoweb in Eastern Province, Sri Lanka"
            className="ecd-v2__section_visual--website-details"
            width={1024}
            height={769}
          />
        </div>
      </div>
    </div>

    <PageBodyCtaSection
      cta={SEO_CTA}
      service="SEO"
      intro={{
        icon: <HiOutlineMagnifyingGlass />,
        children: (
          <>
            <p>{SEO_INTRO.summary}</p>
            <p>{SEO_INTRO.closing}</p>
          </>
        ),
      }}
    />

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
      <div className="ecd-v2__related_row" style={{ '--related-cols': SEO_AREAS.length }}>
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

    <SectionShell
      icon={HiOutlineQuestionMarkCircle}
      title="Frequently Asked Questions"
      titleClassName="ecd-h6"
      TitleTag="h6"
    >
      <div className="ecd-v2__faq">
        {SEO_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  </div>
);

export default SEOPageBody;
