import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mobTrustImg from '../assets/mobile/mob-app-business.png';
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineArrowTrendingUp,
  HiOutlineEye,
  HiOutlineCog6Tooth,
  HiOutlineHeart,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineQuestionMarkCircle,
  HiOutlineLink,
  HiOutlineArrowRightCircle,
  HiOutlineMapPin,
  HiOutlineCodeBracket,
  HiOutlineShoppingCart,
  HiOutlineCpuChip,
  HiOutlineMagnifyingGlass,
  HiOutlineCloud,
  HiOutlinePuzzlePiece,
} from 'react-icons/hi2';
import {
  SiFlutter,
  SiReact,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiNodedotjs,
} from 'react-icons/si';
import {
  MOB_DETAILS_LABEL,
  MOB_INTRO,
  MOB_WHY_INVEST,
  MOB_WHY_CHOOSE,
  MOB_EASTERN_PROVINCE,
  MOB_AREAS,
  MOB_TECH,
  MOB_FAQ,
  MOB_RELATED,
  MOB_CTA,
} from '../content/mobilePageContent';
import MobileWhyShowcaseSection from './mobile/MobileWhyShowcaseSection';

const whyInvestIcons = {
  'Improve customer engagement': HiOutlineHeart,
  'Increase brand visibility': HiOutlineEye,
  'Automate business processes': HiOutlineCog6Tooth,
  'Enhance customer experience': HiOutlineArrowTrendingUp,
  'Generate additional revenue': HiOutlineCurrencyDollar,
  'Build customer loyalty': HiOutlineHeart,
  'Access real-time business data': HiOutlineChartBar,
};

const relatedIcons = {
  'Website Development': HiOutlineGlobeAlt,
  'Ecommerce Development': HiOutlineShoppingCart,
  'Software Development': HiOutlineCodeBracket,
  'AI Software Development': HiOutlineCpuChip,
  'SEO Services': HiOutlineMagnifyingGlass,
};

const techIcons = {
  flutter: SiFlutter,
  react: SiReact,
  kotlin: SiKotlin,
  swift: SiSwift,
  firebase: SiFirebase,
  node: SiNodedotjs,
  api: HiOutlinePuzzlePiece,
  cloud: HiOutlineCloud,
};

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

const MobilePageBody = () => (
  <div className="ecd-v2 ecd-v2--details">
    <div className="ecd-v2__details_label">
      <div className="ecd-v2__container">
        <div className="ecd-v2__details_label_inner">
          <div className="ecd-v2__details_label_copy">
            <span>{MOB_DETAILS_LABEL.badge}</span>
            <h2>{MOB_DETAILS_LABEL.title}</h2>
            <p>{MOB_DETAILS_LABEL.subtitle}</p>
          </div>
          <SectionVisual
            src={mobTrustImg}
            alt="Professional mobile app development services"
            className="ecd-v2__section_visual--launch"
          />
        </div>
      </div>
    </div>

    <section className="ecd-v2__intro ecd-v2__intro--brief">
      <div className="ecd-v2__container">
        <div className="ecd-v2__intro_brief">
          <div className="ecd-v2__intro_icon" aria-hidden="true">
            <HiOutlineDevicePhoneMobile />
          </div>
          <p>{MOB_INTRO.summary}</p>
          <p>{MOB_INTRO.closing}</p>
        </div>
      </div>
    </section>

    <SectionShell icon={HiOutlineArrowTrendingUp} title={MOB_WHY_INVEST.title} subtitle={MOB_WHY_INVEST.subtitle} variant="alt">
      <div className="ecd-v2__benefit_grid">
        {MOB_WHY_INVEST.bullets.map((item) => {
          const Icon = whyInvestIcons[item] || HiOutlineCheckCircle;
          return (
            <div key={item} className="ecd-v2__benefit_card">
              <div className="ecd-v2__benefit_icon">
                <Icon aria-hidden="true" />
              </div>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineMapPin} title={MOB_EASTERN_PROVINCE.title}>
      <Prose paragraphs={MOB_EASTERN_PROVINCE.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row">
        {MOB_AREAS.map((area) => (
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
      icon={HiOutlineShieldCheck}
      title={MOB_WHY_CHOOSE.title}
      titleAccent={MOB_WHY_CHOOSE.titleAccent}
      subtitle={MOB_WHY_CHOOSE.subtitle}
      variant="alt"
    >
      <p className="ecd-v2__center_lead">{MOB_WHY_CHOOSE.listLabel}</p>
      <ul className="ecd-v2__bullets ecd-v2__bullets--chips">
        {MOB_WHY_CHOOSE.bullets.map((item) => (
          <li key={item}>
            <HiOutlineCheckCircle aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionShell>

    <SectionShell icon={HiOutlineCpuChip} title="Technologies We Use" variant="alt">
      <p className="ecd-v2__center_lead">Modern technologies to build secure, scalable and high-performance mobile applications.</p>
      <div className="ecd-v2__tech_grid">
        {MOB_TECH.map((tech) => {
          const Icon = techIcons[tech.icon];
          return (
            <div key={tech.name} className="ecd-v2__tech_item" style={{ '--tech-color': tech.color }}>
              {Icon && <Icon aria-hidden="true" />}
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </SectionShell>

    <MobileWhyShowcaseSection />

    <SectionShell icon={HiOutlineQuestionMarkCircle} title="Frequently Asked Questions">
      <div className="ecd-v2__faq">
        {MOB_FAQ.map((item) => (
          <details key={item.q} className="ecd-v2__faq_item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>

    <SectionShell icon={HiOutlineLink} title={MOB_RELATED.title} variant="alt">
      <Prose paragraphs={MOB_RELATED.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row">
        {MOB_RELATED.links.map((link) => {
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
      <p className="ecd-v2__closing ecd-v2__closing--center">{MOB_RELATED.closing}</p>
    </SectionShell>

    <section className="ecd-v2__cta_section">
      <div className="ecd-v2__container">
        <div className="ecd-v2__cta_compact vexoweb-cta-banner">
          <div className="ecd-v2__cta_compact_text">
            <h2 className="ecd-v2__cta_compact_title">{MOB_CTA.title}</h2>
            {MOB_CTA.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="ecd-v2__cta_compact_actions">
            <a href="#contact" className="ecd-v2__cta_btn_primary">
              {MOB_CTA.primaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default MobilePageBody;
