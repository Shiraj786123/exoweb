import React from 'react';
import Image from 'next/image';
import ecdDetailsVisual from '../assets/ecommerce/ecd-details-visual.jpg';
import paymentGatewayImg from '../assets/ecommerce/ecd-payment-gateway.png';
import {
  HiOutlineShoppingCart,
  HiOutlineCodeBracket,
  HiOutlineBuildingStorefront,
  HiOutlineCheckCircle,
  HiOutlineCreditCard,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineChartBar,
  HiOutlineHandThumbUp,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineCalculator,
  HiOutlineMap,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
  HiOutlineMagnifyingGlass,
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineTag,
  HiOutlineEnvelope,
  HiOutlineChartPie,
  HiOutlineSparkles,
  HiOutlineQuestionMarkCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2';
import {
  ECOMMERCE_INTRO,
  ECOMMERCE_WHY_BUSINESS,
  ECOMMERCE_PAYMENT,
  ECOMMERCE_SHIPPING,
  ECOMMERCE_INVENTORY,
  ECOMMERCE_FEATURES_SECTION,
  ECOMMERCE_FEATURES,
  ECOMMERCE_SEO,
  ECOMMERCE_FAQ,
  ECOMMERCE_CTA,
} from '../content/ecommercePageContent';
import PageBodyCtaSection from './shared/PageBodyCtaSection';
import IsometricStaircaseFeatures from './shared/IsometricStaircaseFeatures';

const whyBusinessIcons = {
  'Reach More Customers': HiOutlineGlobeAlt,
  'Grow Revenue & Credibility': HiOutlineChartBar,
  'Better Customer Experience': HiOutlineHandThumbUp,
  'Lower Operating Costs': HiOutlineCurrencyDollar,
};

const paymentIcons = {
  'Local Payment Gateways': HiOutlineBuildingStorefront,
  'International Payments': HiOutlineGlobeAlt,
  'Secure Checkout': HiOutlineShieldCheck,
};

const inventoryIcons = {
  'Product & Stock Control': HiOutlineCube,
  'Order Processing': HiOutlineClipboardDocumentList,
  'Reports & Analytics': HiOutlineChartPie,
};

const shippingIcons = {
  'Shipping Rate Calculation': HiOutlineCalculator,
  'Delivery Zone Management': HiOutlineMap,
  'Courier Integration': HiOutlineTruck,
  'Order Tracking': HiOutlineMapPin,
  'Click & Collect': HiOutlineBuildingStorefront,
};

const featureIcons = {
  'Mobile Design': HiOutlineDevicePhoneMobile,
  'Fast Loading': HiOutlineBolt,
  'Smart Search': HiOutlineMagnifyingGlass,
  'Secure Accounts': HiOutlineUserCircle,
  Wishlist: HiOutlineHeart,
  'Buyer Reviews': HiOutlineStar,
  Coupons: HiOutlineTag,
  'Related Items': HiOutlineShoppingCart,
  'Email Alerts': HiOutlineEnvelope,
  Analytics: HiOutlineChartPie,
};

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2'];

const seoIcons = {
  'Keyword-Optimised Product Pages': HiOutlineTag,
  'Category Optimisation': HiOutlineClipboardDocumentCheck,
  'Technical SEO': HiOutlineBolt,
  'Structured Data': HiOutlineCodeBracket,
  'Performance Optimisation': HiOutlineRocketLaunch,
};

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

const IconPointsCard = ({ item, index, iconMap, fallbackIcon, accents = shipAccents, pointsLimit }) => {
  const Icon = iconMap[item.title] || fallbackIcon;
  const accent = accents[index % accents.length];
  const points = pointsLimit && item.points
    ? item.points.slice(0, pointsLimit)
    : item.points;
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
          {points.map((point) => (
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

const IconPointsRow = ({ items, iconMap, fallbackIcon, wrap = false, cols, className = '', pointsLimit }) => (
  <div
    className={`ecd-v2__ship_row${cols ? ` ecd-v2__ship_row--cols-${cols}` : wrap ? ' ecd-v2__ship_row--wrap' : ''}${className ? ` ${className}` : ''}`}
    style={cols ? { '--ship-cols': cols } : !wrap ? { '--ship-cols': items.length } : undefined}
  >
    {items.map((item, index) => (
      <IconPointsCard
        key={item.title}
        item={item}
        index={index}
        iconMap={iconMap}
        fallbackIcon={fallbackIcon}
        pointsLimit={pointsLimit}
      />
    ))}
  </div>
);

const EcommercePageBody = () => (
  <div className="ecd-v2 ecd-v2--details">
    <div className="ecd-v2__details_label">
      <div className="ecd-v2__container">
        <div className="ecd-v2__details_label_inner">
          <div className="ecd-v2__details_label_copy">
            <span>In-Depth Ecommerce Solutions</span>
            <h4 className="ecd-h4">Everything You Need to Launch &amp; Grow Online</h4>
            <p>Explore our complete ecommerce development capabilities, platforms, integrations and support services.</p>
          </div>
          <SectionVisual
            src={ecdDetailsVisual}
            alt="Ecommerce website and online store development by Vexoweb in Eastern Province, Sri Lanka"
            className="ecd-v2__section_visual--website-details"
            width={1024}
            height={769}
          />
        </div>
      </div>
    </div>
    {/* Intro + CTA */}
    <PageBodyCtaSection
      cta={ECOMMERCE_CTA}
      service="Ecommerce Development"
      intro={{
        icon: <HiOutlineShoppingCart />,
        text: ECOMMERCE_INTRO.summary,
      }}
    />

    {/* Why every business */}
    <SectionShell
      icon={HiOutlineGlobeAlt}
      title={ECOMMERCE_WHY_BUSINESS.title}
      variant="alt"
    >
      <Prose paragraphs={ECOMMERCE_WHY_BUSINESS.intro} className="ecd-v2__prose--center" />
      <IconPointsRow
        items={ECOMMERCE_WHY_BUSINESS.items}
        iconMap={whyBusinessIcons}
        fallbackIcon={HiOutlineGlobeAlt}
      />
    </SectionShell>

    {/* Payment */}
    <section className="ecd-v2__section ecd-v2__section--payment">
      <div className="ecd-v2__container">
        <div className="ecd-v2__payment_split">
          <div className="ecd-v2__payment_split_left">
            <div className="ecd-v2__payment_split_head">
              <div className="ecd-v2__section_icon_wrap" aria-hidden="true">
                <HiOutlineCreditCard />
              </div>
              <h4 className="ecd-h4">{ECOMMERCE_PAYMENT.title}</h4>
            </div>
            <Prose paragraphs={ECOMMERCE_PAYMENT.intro} />
            <IconPointsRow
              className="ecd-v2__ship_row--payment"
              items={ECOMMERCE_PAYMENT.items}
              iconMap={paymentIcons}
              fallbackIcon={HiOutlineCreditCard}
            />
          </div>
          <SectionVisual
            src={paymentGatewayImg}
            alt="Vexoweb ecommerce store with secure payment gateway integration"
            className="ecd-v2__section_visual--payment"
          />
        </div>
        <p className="ecd-v2__closing ecd-v2__closing--center ecd-v2__closing--payment">{ECOMMERCE_PAYMENT.closing}</p>
      </div>
    </section>

    {/* Shipping */}
    <SectionShell
      icon={HiOutlineTruck}
      title={ECOMMERCE_SHIPPING.title}
      titleAccent={ECOMMERCE_SHIPPING.titleAccent}
      variant="hero"
      titleClassName="ecd-h4"
      TitleTag="h4"
    >
      <IconPointsRow
        items={ECOMMERCE_SHIPPING.items}
        iconMap={shippingIcons}
        fallbackIcon={HiOutlineTruck}
      />
    </SectionShell>

    {/* Inventory */}
    <SectionShell
      icon={HiOutlineCube}
      title={ECOMMERCE_INVENTORY.title}
      titleClassName="ecd-h4"
      TitleTag="h4"
    >
      <Prose paragraphs={ECOMMERCE_INVENTORY.intro} className="ecd-v2__prose--center" />
      <IconPointsRow
        items={ECOMMERCE_INVENTORY.items}
        iconMap={inventoryIcons}
        fallbackIcon={HiOutlineCube}
      />
      <p className="ecd-v2__closing ecd-v2__closing--center">{ECOMMERCE_INVENTORY.closing}</p>
    </SectionShell>

    {/* Features */}
    <SectionShell
      icon={HiOutlineSparkles}
      title={ECOMMERCE_FEATURES_SECTION.title}
      variant="alt"
      titleClassName="ecd-h4"
      TitleTag="h4"
    >
      <p className="ecd-v2__center_lead">{ECOMMERCE_FEATURES_SECTION.intro}</p>
      <IsometricStaircaseFeatures
        items={ECOMMERCE_FEATURES}
        iconMap={featureIcons}
        fallbackIcon={HiOutlineSparkles}
        perRow={5}
      />
    </SectionShell>

    {/* SEO */}
    <SectionShell
      icon={HiOutlineMagnifyingGlass}
      title={ECOMMERCE_SEO.title}
      variant="alt"
      titleClassName="ecd-h4"
      TitleTag="h4"
    >
      <Prose paragraphs={ECOMMERCE_SEO.intro} className="ecd-v2__prose--center" />
      <p className="ecd-v2__center_lead">{ECOMMERCE_SEO.leadIn}</p>
      <IconPointsRow
        items={ECOMMERCE_SEO.items}
        iconMap={seoIcons}
        fallbackIcon={HiOutlineMagnifyingGlass}
      />
    </SectionShell>

    {/* FAQ */}
    <SectionShell
      icon={HiOutlineQuestionMarkCircle}
      title="Frequently Asked Questions"
      titleClassName="ecd-h6"
      TitleTag="h6"
    >
      <div className="ecd-v2__faq ecd-v2__faq--cols">
        <div className="ecd-v2__faq_col">
          {ECOMMERCE_FAQ.slice(0, 6).map((item) => (
            <details key={item.q} className="ecd-v2__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <div className="ecd-v2__faq_col">
          {ECOMMERCE_FAQ.slice(6).map((item) => (
            <details key={item.q} className="ecd-v2__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  </div>
);

export default EcommercePageBody;
