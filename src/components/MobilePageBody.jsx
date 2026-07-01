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
  HiOutlinePuzzlePiece,
  HiOutlineStar,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePaintBrush,
  HiOutlineBolt,
  HiOutlineLifebuoy,
  HiOutlineClipboardDocumentList,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import {
  MOB_DETAILS_LABEL,
  MOB_INTRO,
  MOB_WHY_INVEST,
  MOB_WHY_CHOOSE,
  MOB_EASTERN_PROVINCE,
  MOB_AREAS,
  MOB_FAQ,
  MOB_RELATED,
  MOB_CTA,
} from '../content/mobilePageContent';
import MobileWhyShowcaseSection from './mobile/MobileWhyShowcaseSection';
import PageBodyCtaSection from './shared/PageBodyCtaSection';

const whyInvestIcons = {
  engagement: HiOutlineChatBubbleLeftRight,
  visibility: HiOutlineEye,
  automation: HiOutlineCog6Tooth,
  experience: HiOutlineArrowTrendingUp,
  revenue: HiOutlineCurrencyDollar,
  loyalty: HiOutlineStar,
  data: HiOutlineChartBar,
};

const whyChooseIcons = {
  custom: HiOutlineDevicePhoneMobile,
  platforms: HiOutlineSquares2X2,
  design: HiOutlinePaintBrush,
  security: HiOutlineShieldCheck,
  integration: HiOutlinePuzzlePiece,
  performance: HiOutlineBolt,
  support: HiOutlineLifebuoy,
  process: HiOutlineClipboardDocumentList,
};

const BenefitTiles = ({ items, iconMap, className = '' }) => (
  <div className={className}>
    {items.map((benefit) => {
      const Icon = iconMap[benefit.icon] || HiOutlineCheckCircle;
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
);

const relatedIcons = {
  'Website Development': HiOutlineGlobeAlt,
  'Ecommerce Development': HiOutlineShoppingCart,
  'Software Development': HiOutlineCodeBracket,
  'AI Software Development': HiOutlineCpuChip,
  'SEO Services': HiOutlineMagnifyingGlass,
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

    <PageBodyCtaSection cta={MOB_CTA} />

    <SectionShell icon={HiOutlineArrowTrendingUp} title={MOB_WHY_INVEST.title} subtitle={MOB_WHY_INVEST.subtitle} variant="alt">
      <p className="ecd-v2__label ecd-v2__label--center">{MOB_WHY_INVEST.listLabel}</p>
      <BenefitTiles
        items={MOB_WHY_INVEST.benefits}
        iconMap={whyInvestIcons}
        className="ecd-show__mini_grid ecd-show__mini_grid--cols-7 ecd-show__mini_grid--full-labels"
      />
    </SectionShell>

    <SectionShell icon={HiOutlineMapPin} title={MOB_EASTERN_PROVINCE.title}>
      <Prose paragraphs={MOB_EASTERN_PROVINCE.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row ecd-v2__related_row--areas">
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
      <p className="ecd-v2__label ecd-v2__label--center">{MOB_WHY_CHOOSE.listLabel}</p>
      <BenefitTiles
        items={MOB_WHY_CHOOSE.benefits}
        iconMap={whyChooseIcons}
        className="ecd-show__mini_grid ecd-show__mini_grid--single-line ecd-show__mini_grid--full-labels"
      />
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
  </div>
);

export default MobilePageBody;
