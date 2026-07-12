import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import webDetailsVisual from '../assets/website/web-details-visual.jpg';
import {
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineWrenchScrewdriver,
  HiOutlinePencilSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineArrowTrendingUp,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineCake,
  HiOutlineAcademicCap,
  HiOutlineWrench,
  HiOutlineShoppingBag,
  HiOutlineBriefcase,
  HiOutlineCube,
  HiOutlineHomeModern,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRightCircle,
  HiOutlineMapPin,
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';
import {
  WEB_DETAILS_LABEL,
  WEB_INTRO,
  WEB_EASTERN_PROVINCE,
  WEB_FEATURES,
  WEB_CMS,
  WEB_SEO,
  WEB_MAINTENANCE,
  WEB_INDUSTRIES,
  WEB_AREAS,
  WEB_FAQ,
  WEB_CTA,
} from '../content/websitePageContent';
import PageBodyCtaSection from './shared/PageBodyCtaSection';
import HorizontalZigzagInfographic from './shared/HorizontalZigzagInfographic';

const featureIcons = {
  device: HiOutlineDevicePhoneMobile,
  search: HiOutlineMagnifyingGlass,
  speed: HiOutlineBolt,
  shield: HiOutlineShieldCheck,
  edit: HiOutlinePencilSquare,
  growth: HiOutlineArrowTrendingUp,
};

const industryIcons = {
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  food: HiOutlineCake,
  education: HiOutlineAcademicCap,
  build: HiOutlineWrench,
  retail: HiOutlineShoppingBag,
  professional: HiOutlineBriefcase,
  manufacturing: HiOutlineCube,
  realestate: HiOutlineHomeModern,
  logistics: HiOutlineTruck,
};

const seoItemIcons = {
  'Technical SEO': HiOutlineCog6Tooth,
  'On-Page SEO': HiOutlineDocumentText,
  'Local SEO Ready': HiOutlineMapPin,
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

const IconPointsCard = ({ item, index, iconMap, fallbackIcon, accents = shipAccents }) => {
  const Icon = iconMap[item.icon] || iconMap[item.title] || fallbackIcon;
  const accent = accents[index % accents.length];
  return (
    <article className="ecd-v2__ship_card" style={{ '--ship-accent': accent }}>
      <span className="ecd-v2__ship_num" style={{ background: accent }}>{index + 1}</span>
      <div className="ecd-v2__ship_icon" style={{ color: accent }}>
        <Icon />
      </div>
      <h5 className="ecd-h5">{item.title}</h5>
      {item.description ? (
        <p>{item.description}</p>
      ) : (
        <ul className="ecd-v2__ship_points">
          {item.points.map((point) => (
            <li key={point}>
              <HiOutlineCheckCircle aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const IconPointsRow = ({ items, iconMap, fallbackIcon, wrap = false, cols }) => (
  <div
    className={`ecd-v2__ship_row${cols ? ` ecd-v2__ship_row--cols-${cols}` : wrap ? ' ecd-v2__ship_row--wrap' : ''}`}
    style={cols ? { '--ship-cols': cols } : !wrap ? { '--ship-cols': items.length } : undefined}
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

const WebsitePageBody = () => (
  <div className="ecd-v2 ecd-v2--details">
    <div className="ecd-v2__details_label">
      <div className="ecd-v2__container">
        <div className="ecd-v2__details_label_inner">
          <div className="ecd-v2__details_label_copy">
            <span>{WEB_DETAILS_LABEL.badge}</span>
            <h4 className="ecd-h4">{WEB_DETAILS_LABEL.title}</h4>
            <p>{WEB_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={webDetailsVisual}
            alt="Professional website development services by Vexoweb in Eastern Province, Sri Lanka"
            className="ecd-v2__section_visual--website-details"
            width={1024}
            height={769}
          />
        </div>
      </div>
    </div>

    <PageBodyCtaSection
      cta={WEB_CTA}
      service="Website Development"
      intro={{
        icon: <HiOutlineGlobeAlt />,
        text: WEB_INTRO.summary,
      }}
    />

    <SectionShell icon={HiOutlineGlobeAlt} title={WEB_EASTERN_PROVINCE.title} variant="alt">
      <Prose paragraphs={WEB_EASTERN_PROVINCE.intro} className="ecd-v2__prose--center" />
      <HorizontalZigzagInfographic
        items={WEB_FEATURES}
        iconMap={featureIcons}
        fallbackIcon={HiOutlineGlobeAlt}
      />
    </SectionShell>

    <SectionShell icon={HiOutlinePencilSquare} title={WEB_CMS.title} titleAccent={WEB_CMS.titleAccent}>
      <Prose paragraphs={WEB_CMS.intro} className="ecd-v2__prose--center" />
      <IconPointsRow items={WEB_CMS.items} iconMap={{}} fallbackIcon={HiOutlinePencilSquare} />
      <p className="ecd-v2__closing ecd-v2__closing--center">{WEB_CMS.closing}</p>
    </SectionShell>

    <SectionShell
      icon={HiOutlineMagnifyingGlass}
      title={WEB_SEO.title}
      titleAccent={WEB_SEO.titleAccent}
      variant="hero"
    >
      <Prose paragraphs={WEB_SEO.intro} className="ecd-v2__prose--center ecd-v2__prose--light" />
      <HorizontalZigzagInfographic
        items={WEB_SEO.items}
        iconMap={seoItemIcons}
        fallbackIcon={HiOutlineMagnifyingGlass}
      />
      <p className="ecd-v2__closing ecd-v2__closing--center ecd-v2__closing--light">{WEB_SEO.closing}</p>
    </SectionShell>

    <SectionShell icon={HiOutlineWrenchScrewdriver} title={WEB_MAINTENANCE.title} titleAccent={WEB_MAINTENANCE.titleAccent} variant="alt">
      <Prose paragraphs={WEB_MAINTENANCE.intro} className="ecd-v2__prose--center" />
      <IconPointsRow items={WEB_MAINTENANCE.items} iconMap={{}} fallbackIcon={HiOutlineWrenchScrewdriver} />
      <p className="ecd-v2__closing ecd-v2__closing--center">{WEB_MAINTENANCE.closing}</p>
    </SectionShell>

    <SectionShell
      icon={HiOutlineBriefcase}
      title="Industries We Work With"
      subtitle="We build websites for businesses across many industries, including:"
    >
      <div className="ecd-show__mini_grid ecd-show__mini_grid--cols-5 ecd-show__mini_grid--full-labels">
        {WEB_INDUSTRIES.map((industry) => {
          const Icon = industryIcons[industry.icon];
          return (
            <div key={industry.title} className="ecd-show__mini_card">
              <div className="ecd-show__mini_icon" style={{ color: industry.color }}>
                <Icon />
              </div>
              <span>{industry.title}</span>
            </div>
          );
        })}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineMapPin} title="Areas We Serve" variant="alt">
      <p className="ecd-v2__center_lead">
        Our website development services are available throughout the Eastern Province, including:
      </p>
      <div className="ecd-v2__related_row" style={{ '--related-cols': WEB_AREAS.length }}>
        {WEB_AREAS.map((area) => (
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
        {WEB_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  </div>
);

export default WebsitePageBody;
