import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import trustVisualImg from '../assets/icons/web-dev-trust-visual.png';
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
  HiOutlineLink,
  HiOutlineArrowRightCircle,
  HiOutlineMapPin,
  HiOutlineCodeBracket,
  HiOutlineShoppingCart,
  HiOutlineCpuChip,
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
  WEB_RELATED,
  WEB_CTA,
} from '../content/websitePageContent';
import WebsiteWhyShowcaseSection from './website/WebsiteWhyShowcaseSection';

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

const relatedIcons = {
  'Ecommerce Development': HiOutlineShoppingCart,
  'SEO Services': HiOutlineMagnifyingGlass,
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

const IconPointsCard = ({ item, index, iconMap, fallbackIcon, accents = shipAccents }) => {
  const Icon = iconMap[item.icon] || iconMap[item.title] || fallbackIcon;
  const accent = accents[index % accents.length];
  return (
    <article className="ecd-v2__ship_card" style={{ '--ship-accent': accent }}>
      <span className="ecd-v2__ship_num" style={{ background: accent }}>{index + 1}</span>
      <div className="ecd-v2__ship_icon" style={{ color: accent }}>
        <Icon />
      </div>
      <h3>{item.title}</h3>
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
    className={`ecd-v2__ship_row${wrap ? ' ecd-v2__ship_row--wrap' : ''}${cols ? ` ecd-v2__ship_row--cols-${cols}` : ''}`}
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
            <h2>{WEB_DETAILS_LABEL.title}</h2>
            <p>{WEB_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={trustVisualImg}
            alt="Professional website development services"
            className="ecd-v2__section_visual--launch"
          />
        </div>
      </div>
    </div>

    <section className="ecd-v2__intro ecd-v2__intro--brief">
      <div className="ecd-v2__container">
        <div className="ecd-v2__intro_brief">
          <div className="ecd-v2__intro_icon" aria-hidden="true">
            <HiOutlineGlobeAlt />
          </div>
          <p>{WEB_INTRO.summary}</p>
        </div>
      </div>
    </section>

    <SectionShell icon={HiOutlineGlobeAlt} title={WEB_EASTERN_PROVINCE.title} variant="alt">
      <Prose paragraphs={WEB_EASTERN_PROVINCE.intro} className="ecd-v2__prose--center" />
      <IconPointsRow
        items={WEB_FEATURES}
        iconMap={featureIcons}
        fallbackIcon={HiOutlineGlobeAlt}
        cols={3}
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
      <IconPointsRow items={WEB_SEO.items} iconMap={{}} fallbackIcon={HiOutlineMagnifyingGlass} />
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
      <div className="ecd-show__mini_grid ecd-show__mini_grid--single-line ecd-show__mini_grid--cols-10">
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
      <div className="ecd-v2__related_row">
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

    <WebsiteWhyShowcaseSection />

    <SectionShell icon={HiOutlineQuestionMarkCircle} title="Frequently Asked Questions">
      <div className="ecd-v2__faq">
        {WEB_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineLink} title={WEB_RELATED.title} variant="alt">
      <Prose paragraphs={WEB_RELATED.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row">
        {WEB_RELATED.links.map((link) => {
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
      <p className="ecd-v2__closing ecd-v2__closing--center">{WEB_RELATED.closing}</p>
    </SectionShell>

    <section className="ecd-v2__cta_section">
      <div className="ecd-v2__container">
        <div className="ecd-v2__cta_compact vexoweb-cta-banner">
          <div className="ecd-v2__cta_compact_text">
            <h2 className="ecd-v2__cta_compact_title">{WEB_CTA.title}</h2>
            {WEB_CTA.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="ecd-v2__cta_compact_actions">
            <a href="#contact" className="ecd-v2__cta_btn_primary">
              {WEB_CTA.primaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default WebsitePageBody;
