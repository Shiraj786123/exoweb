import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import launchGrowImg from '../assets/ecommerce/ecd-launch-grow.png';
import paymentGatewayImg from '../assets/ecommerce/ecd-payment-gateway.png';
import shippingDeliveryImg from '../assets/ecommerce/ecd-shipping-delivery.png';
import {
  HiOutlineShoppingCart,
  HiOutlineCodeBracket,
  HiOutlineBuildingStorefront,
  HiOutlineArrowRightCircle,
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
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver,
  HiOutlineQuestionMarkCircle,
  HiOutlineLink,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineChatBubbleLeftRight,
  HiOutlineLifebuoy,
} from 'react-icons/hi2';
import {
  ECOMMERCE_INTRO,
  ECOMMERCE_WHY_BUSINESS,
  ECOMMERCE_PAYMENT,
  ECOMMERCE_SHIPPING,
  ECOMMERCE_INVENTORY,
  ECOMMERCE_FEATURES_SECTION,
  ECOMMERCE_FEATURES,
  ECOMMERCE_WHY_CHOOSE,
  ECOMMERCE_SEO,
  ECOMMERCE_FAQ,
  ECOMMERCE_RELATED,
  ECOMMERCE_CTA,
} from '../content/ecommercePageContent';
import EcommerceWhyShowcaseSection from './ecommerce/EcommerceWhyShowcaseSection';

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
  'Responsive Mobile Design': HiOutlineDevicePhoneMobile,
  'Fast Loading Speed': HiOutlineBolt,
  'Product Search & Smart Filters': HiOutlineMagnifyingGlass,
  'Secure Customer Accounts': HiOutlineUserCircle,
  'Wishlist Functionality': HiOutlineHeart,
  'Product Reviews & Ratings': HiOutlineStar,
  'Discount Coupons & Promotions': HiOutlineTag,
  'Related Products': HiOutlineShoppingCart,
  'Email Notifications': HiOutlineEnvelope,
  'Analytics Dashboard': HiOutlineChartPie,
};

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2'];

const whyIcons = {
  'Custom Ecommerce Solutions': HiOutlineCodeBracket,
  'Experienced Development Team': HiOutlineWrenchScrewdriver,
  'Mobile-First Development': HiOutlineDevicePhoneMobile,
  'SEO-Friendly Ecommerce Websites': HiOutlineMagnifyingGlass,
  'Secure Online Shopping': HiOutlineShieldCheck,
  'Scalable for Future Growth': HiOutlineChartBar,
  'Long-Term Technical Support': HiOutlineLifebuoy,
  'Transparent Communication': HiOutlineChatBubbleLeftRight,
};

const seoIcons = {
  'Keyword-Optimised Product Pages': HiOutlineTag,
  'Category Optimisation': HiOutlineClipboardDocumentCheck,
  'Technical SEO': HiOutlineBolt,
  'Structured Data': HiOutlineCodeBracket,
  'Performance Optimisation': HiOutlineRocketLaunch,
};

const relatedIcons = {
  'Website Development': HiOutlineGlobeAlt,
  'Mobile App Development': HiOutlineDevicePhoneMobile,
  'Software Development': HiOutlineCodeBracket,
  'AI Software Development': HiOutlineCpuChip,
  'SEO Services': HiOutlineMagnifyingGlass,
  'Website Maintenance & Support': HiOutlineWrenchScrewdriver,
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

const EcommercePageBody = () => (
  <div className="ecd-v2 ecd-v2--details">
    <div className="ecd-v2__details_label">
      <div className="ecd-v2__container">
        <div className="ecd-v2__details_label_inner">
          <div className="ecd-v2__details_label_copy">
            <span>In-Depth Ecommerce Solutions</span>
            <h2>Everything You Need to Launch &amp; Grow Online</h2>
            <p>Explore our complete ecommerce development capabilities, platforms, integrations and support services.</p>
          </div>
          <SectionVisual
            src={launchGrowImg}
            alt="Online store with mobile shopping and ecommerce growth"
            className="ecd-v2__section_visual--launch"
          />
        </div>
      </div>
    </div>
    {/* Intro — short summary */}
    <section className="ecd-v2__intro ecd-v2__intro--brief">
      <div className="ecd-v2__container">
        <div className="ecd-v2__intro_brief">
          <div className="ecd-v2__intro_icon" aria-hidden="true">
            <HiOutlineShoppingCart />
          </div>
          <p>{ECOMMERCE_INTRO.summary}</p>
        </div>
      </div>
    </section>

    {/* Why every business */}
    <SectionShell icon={HiOutlineGlobeAlt} title={ECOMMERCE_WHY_BUSINESS.title} variant="alt">
      <Prose paragraphs={ECOMMERCE_WHY_BUSINESS.intro} className="ecd-v2__prose--center" />
      <IconPointsRow
        items={ECOMMERCE_WHY_BUSINESS.items}
        iconMap={whyBusinessIcons}
        fallbackIcon={HiOutlineGlobeAlt}
      />
      <Prose paragraphs={ECOMMERCE_WHY_BUSINESS.closing} className="ecd-v2__prose--center ecd-v2__prose--closing" />
    </SectionShell>

    {/* Payment */}
    <SectionShell
      icon={HiOutlineCreditCard}
      title={ECOMMERCE_PAYMENT.title}
      visual={{
        src: paymentGatewayImg,
        alt: 'Secure payment gateway and credit card checkout integration',
        className: 'ecd-v2__section_visual--payment',
      }}
    >
      <Prose paragraphs={ECOMMERCE_PAYMENT.intro} className="ecd-v2__prose--center" />
      <IconPointsRow
        items={ECOMMERCE_PAYMENT.items}
        iconMap={paymentIcons}
        fallbackIcon={HiOutlineCreditCard}
      />
      <p className="ecd-v2__closing ecd-v2__closing--center">{ECOMMERCE_PAYMENT.closing}</p>
    </SectionShell>

    {/* Shipping */}
    <SectionShell
      icon={HiOutlineTruck}
      title={ECOMMERCE_SHIPPING.title}
      titleAccent={ECOMMERCE_SHIPPING.titleAccent}
      variant="hero"
      visual={{
        src: shippingDeliveryImg,
        alt: 'Ecommerce shipping and delivery truck fulfillment',
        className: 'ecd-v2__section_visual--shipping',
      }}
    >
      <Prose paragraphs={ECOMMERCE_SHIPPING.intro} className="ecd-v2__prose--center ecd-v2__prose--light" />
      <IconPointsRow
        items={ECOMMERCE_SHIPPING.items}
        iconMap={shippingIcons}
        fallbackIcon={HiOutlineTruck}
      />
    </SectionShell>

    {/* Inventory */}
    <SectionShell icon={HiOutlineCube} title={ECOMMERCE_INVENTORY.title}>
      <Prose paragraphs={ECOMMERCE_INVENTORY.intro} className="ecd-v2__prose--center" />
      <IconPointsRow
        items={ECOMMERCE_INVENTORY.items}
        iconMap={inventoryIcons}
        fallbackIcon={HiOutlineCube}
      />
      <p className="ecd-v2__closing ecd-v2__closing--center">{ECOMMERCE_INVENTORY.closing}</p>
    </SectionShell>

    {/* Features */}
    <SectionShell icon={HiOutlineSparkles} title={ECOMMERCE_FEATURES_SECTION.title} variant="alt">
      <p className="ecd-v2__center_lead">{ECOMMERCE_FEATURES_SECTION.intro}</p>
      <IconPointsRow
        items={ECOMMERCE_FEATURES}
        iconMap={featureIcons}
        fallbackIcon={HiOutlineSparkles}
        cols={5}
      />
    </SectionShell>

    {/* Why choose */}
    <SectionShell
      icon={HiOutlineShieldCheck}
      title={ECOMMERCE_WHY_CHOOSE.title}
      titleAccent={ECOMMERCE_WHY_CHOOSE.titleAccent}
      variant="hero"
    >
      <p className="ecd-v2__center_lead ecd-v2__center_lead--light">{ECOMMERCE_WHY_CHOOSE.intro}</p>
      <IconPointsRow
        items={ECOMMERCE_WHY_CHOOSE.items}
        iconMap={whyIcons}
        fallbackIcon={HiOutlineShieldCheck}
        cols={4}
      />
    </SectionShell>

    {/* SEO */}
    <SectionShell icon={HiOutlineMagnifyingGlass} title={ECOMMERCE_SEO.title} variant="alt">
      <Prose paragraphs={ECOMMERCE_SEO.intro} className="ecd-v2__prose--center" />
      <p className="ecd-v2__center_lead">{ECOMMERCE_SEO.leadIn}</p>
      <IconPointsRow
        items={ECOMMERCE_SEO.items}
        iconMap={seoIcons}
        fallbackIcon={HiOutlineMagnifyingGlass}
      />
    </SectionShell>

    <EcommerceWhyShowcaseSection />

    {/* FAQ */}
    <SectionShell icon={HiOutlineQuestionMarkCircle} title="Frequently Asked Questions">
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

    {/* Related — row with icons */}
    <SectionShell icon={HiOutlineLink} title={ECOMMERCE_RELATED.title} variant="alt">
      <Prose paragraphs={ECOMMERCE_RELATED.intro} className="ecd-v2__prose--center" />
      <div className="ecd-v2__related_row">
        {ECOMMERCE_RELATED.links.map((link) => {
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
      <p className="ecd-v2__closing ecd-v2__closing--center">{ECOMMERCE_RELATED.closing}</p>
    </SectionShell>

    {/* Final CTA — compact banner */}
    <section className="ecd-v2__cta_section">
      <div className="ecd-v2__container">
        <div className="ecd-v2__cta_compact vexoweb-cta-banner">
          <div className="ecd-v2__cta_compact_text">
            <h2 className="ecd-v2__cta_compact_title">{ECOMMERCE_CTA.title}</h2>
            <p>{ECOMMERCE_CTA.description}</p>
          </div>
          <div className="ecd-v2__cta_compact_actions">
            <a href="#contact" className="ecd-v2__cta_btn_primary">
              {ECOMMERCE_CTA.primaryCta} <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="ecd-v2__cta_btn_secondary">
              {ECOMMERCE_CTA.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EcommercePageBody;
