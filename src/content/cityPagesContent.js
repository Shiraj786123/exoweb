const WEBSITE_SERVICES = [
  'Custom business website design',
  'Mobile-friendly responsive layouts',
  'Lead-generation landing pages',
  'Local business branding online',
  'Website speed & performance setup',
  'Ongoing support & updates',
];

const SEO_SERVICES = [
  'Local SEO & Google Maps optimization',
  'Keyword research for your area',
  'On-page SEO for service pages',
  'Google Business Profile setup',
  'Monthly ranking & traffic reports',
  'Content strategy for local search',
];

const SOFTWARE_SERVICES = [
  'Custom POS & billing systems',
  'Inventory management software',
  'Booking & appointment systems',
  'Business dashboards & reporting',
  'API integrations with existing tools',
  'Ongoing maintenance & support',
];

const MOBILE_SERVICES = [
  'Android & iOS app development',
  'Cross-platform mobile apps',
  'Business app UI/UX design',
  'App store submission support',
  'Backend API for mobile apps',
  'Maintenance & feature updates',
];

function buildWebsiteCity(city, slug, seoTitle, description, heroDesc) {
  return {
    slug,
    path: `/${slug}`,
    city,
    serviceType: 'website-development',
    parentService: { label: 'Website Development', href: '/website-development' },
    seoTitle,
    eyebrow: 'Website Development',
    h1: `Website Development in ${city}`,
    h1Line1: 'Website Development in',
    h1Line2: city,
    heroTagline: `Professional websites for ${city} businesses`,
    heroDesc,
    description,
    services: WEBSITE_SERVICES,
    serviceListTitle: `Website development services in ${city}`,
    ctaText: 'Get a Free Website Consultation',
    breadcrumbName: `Website Development in ${city}`,
  };
}

function buildSeoCity(city, slug, seoTitle, description, heroDesc) {
  return {
    slug,
    path: `/${slug}`,
    city,
    serviceType: 'seo',
    parentService: { label: 'SEO Services', href: '/seo-services' },
    seoTitle,
    eyebrow: 'SEO Services',
    h1: `SEO Services in ${city}`,
    h1Line1: 'SEO Services in',
    h1Line2: city,
    heroTagline: 'Rank higher and win more local customers',
    heroDesc,
    description,
    services: SEO_SERVICES,
    serviceListTitle: `SEO services in ${city}`,
    ctaText: 'Get a Free SEO Audit',
    breadcrumbName: `SEO Services in ${city}`,
  };
}

/** @type {Record<string, object>} */
export const CITY_PAGES = {
  'website-development-batticaloa': buildWebsiteCity(
    'Batticaloa',
    'website-development-batticaloa',
    'Website Development in Batticaloa | Web Design | Vexoweb',
    'Looking for website development in Batticaloa? Vexoweb creates modern, responsive business websites that help companies generate more customers across the Eastern Province.',
    'We build fast, modern websites for shops, clinics, schools, and businesses across Batticaloa — designed to turn visitors into customers.'
  ),
  'website-development-kattankudy': buildWebsiteCity(
    'Kattankudy',
    'website-development-kattankudy',
    'Website Development in Kattankudy | Web Design | Vexoweb',
    'Professional website development services in Kattankudy. We design modern business websites, landing pages and custom web solutions that help your business grow online.',
    'Professional website development for Kattankudy businesses — mobile-friendly sites that help you stand out and grow locally.'
  ),
  'website-development-kalmunai': buildWebsiteCity(
    'Kalmunai',
    'website-development-kalmunai',
    'Website Development in Kalmunai | Web Design | Vexoweb',
    'Affordable website development in Kalmunai for businesses, schools, hotels and service providers. SEO-friendly websites designed to increase enquiries and sales.',
    'Modern websites for Kalmunai businesses — built for speed, mobile users, and local lead generation across the east coast.'
  ),
  'website-development-ampara': buildWebsiteCity(
    'Ampara',
    'website-development-ampara',
    'Website Development in Ampara | Web Design | Vexoweb',
    'Custom website development in Ampara with responsive design, SEO optimisation and high-performance websites built to attract more local customers.',
    'We design and develop websites for Ampara district businesses — from retail and services to tourism and professional firms.'
  ),
  'website-development-trincomalee': buildWebsiteCity(
    'Trincomalee',
    'website-development-trincomalee',
    'Website Development in Trincomalee | Web Design | Vexoweb',
    'Professional website development in Trincomalee. We build business websites, eCommerce stores and custom web applications that deliver measurable results.',
    'Website development for Trincomalee hotels, tourism operators, retail shops, and service businesses — built to attract east coast customers.'
  ),
  'seo-batticaloa': buildSeoCity(
    'Batticaloa',
    'seo-batticaloa',
    'SEO Services in Batticaloa | Rank Higher Locally | Vexoweb',
    'SEO services in Batticaloa to improve Google rankings, increase website traffic and attract more local customers through proven search engine optimisation.',
    'Help Batticaloa customers find your business on Google Search and Maps with local SEO built for Eastern Province markets.'
  ),
  'seo-kattankudy': buildSeoCity(
    'Kattankudy',
    'seo-kattankudy',
    'SEO Services in Kattankudy | Vexoweb',
    'Grow your business with professional SEO services in Kattankudy. Improve Google visibility, attract more local customers and increase enquiries.',
    'Local SEO for Kattankudy businesses — improve rankings, Google Maps visibility, and organic traffic from nearby customers.'
  ),
  'seo-kalmunai': buildSeoCity(
    'Kalmunai',
    'seo-kalmunai',
    'SEO Services in Kalmunai | Vexoweb',
    'Affordable SEO services in Kalmunai to help businesses rank higher on Google, generate more traffic and increase local leads.',
    'SEO services tailored for Kalmunai and the Ampara district — rank for the searches your local customers actually use.'
  ),
  'seo-ampara': buildSeoCity(
    'Ampara',
    'seo-ampara',
    'SEO Services in Ampara | Vexoweb',
    "Vexoweb offers SEO services in Ampara to improve your website's Google rankings, increase organic traffic and help your business reach more customers.",
    'Professional SEO for Ampara businesses — improve Google visibility and attract more customers across the district.'
  ),
  'software-development-batticaloa': {
    slug: 'software-development-batticaloa',
    path: '/software-development-batticaloa',
    city: 'Batticaloa',
    serviceType: 'software',
    parentService: { label: 'Software Development', href: '/software-development' },
    seoTitle: 'Software Development Services in Batticaloa | Vexoweb',
    eyebrow: 'Software Development',
    h1: 'Software Development in Batticaloa',
    h1Line1: 'Software Development in',
    h1Line2: 'Batticaloa',
    heroTagline: 'POS, billing & business systems built locally',
    heroDesc:
      'Custom software for Batticaloa businesses — POS, billing, inventory, and booking systems designed around how you actually work.',
    description:
      'Custom software development in Batticaloa including ERP, POS, inventory, booking and business management systems built specifically for your business.',
    services: SOFTWARE_SERVICES,
    serviceListTitle: 'Software development services in Batticaloa',
    ctaText: 'Get a Free Software Consultation',
    breadcrumbName: 'Software Development in Batticaloa',
  },
  'mobile-app-development-batticaloa': {
    slug: 'mobile-app-development-batticaloa',
    path: '/mobile-app-development-batticaloa',
    city: 'Batticaloa',
    serviceType: 'mobile-app',
    parentService: { label: 'Mobile App Development', href: '/mobile-app-development' },
    seoTitle: 'Mobile App Development in Batticaloa | Vexoweb',
    eyebrow: 'Mobile App Development',
    h1: 'Mobile App Development in Batticaloa',
    h1Line1: 'Mobile App Development in',
    h1Line2: 'Batticaloa',
    heroTagline: 'Android & iOS apps for local businesses',
    heroDesc:
      'Android and iOS mobile apps for Batticaloa businesses — native and cross-platform applications that perform in the real world.',
    description:
      'Android & iOS mobile app development in Batticaloa. Custom mobile applications for local businesses across the Eastern Province.',
    services: MOBILE_SERVICES,
    serviceListTitle: 'Mobile app services in Batticaloa',
    ctaText: 'Get a Free App Consultation',
    breadcrumbName: 'Mobile App Development in Batticaloa',
  },
};

export const CITY_PAGE_SLUGS = Object.keys(CITY_PAGES);

export function getCityPageBySlug(slug) {
  return CITY_PAGES[slug] || null;
}

export function getCityBreadcrumb(config) {
  return [
    { label: 'Home', href: '/' },
    { label: config.parentService.label, href: config.parentService.href },
    { label: config.breadcrumbName },
  ];
}

export function getCityPageTitle(config) {
  return config.seoTitle || `${config.h1} | Vexoweb`;
}

/** Hero heading lines — always 3 lines (service + city + tagline). */
export function getCityHeroLines(config) {
  const city = config.city || '';
  const line1 =
    config.h1Line1 ||
    (config.h1 && city ? config.h1.replace(new RegExp(`\\s*${city}\\s*$`), '').trim() : config.h1) ||
    config.eyebrow ||
    '';
  const line2 = config.h1Line2 || city;
  const tagline = config.heroTagline || config.h1Accent || '';

  return { line1, line2, tagline };
}
