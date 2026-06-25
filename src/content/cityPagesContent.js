const WEB_DESIGN_SERVICES = [
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

function buildWebDesignCity(city, slug, seoTitle, description, heroDesc) {
  return {
    slug,
    path: `/${slug}`,
    city,
    serviceType: 'web-design',
    parentService: { label: 'Website Development', href: '/website-development' },
    seoTitle,
    eyebrow: 'Web Design',
    h1: `Web Design in ${city}`,
    h1Accent: `Professional websites for ${city} businesses`,
    heroDesc,
    description,
    services: WEB_DESIGN_SERVICES,
    serviceListTitle: `Web design services in ${city}`,
    ctaText: `Get a Free ${city} Website Consultation`,
    breadcrumbName: `Web Design in ${city}`,
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
    eyebrow: 'Local SEO',
    h1: `SEO Services in ${city}`,
    h1Accent: `Rank higher and win more local customers`,
    heroDesc,
    description,
    services: SEO_SERVICES,
    serviceListTitle: `SEO services in ${city}`,
    ctaText: `Get a Free ${city} SEO Audit`,
    breadcrumbName: `SEO Services in ${city}`,
  };
}

/** @type {Record<string, object>} */
export const CITY_PAGES = {
  'web-design-batticaloa': buildWebDesignCity(
    'Batticaloa',
    'web-design-batticaloa',
    'Web Design in Batticaloa | Business Websites | Vexoweb',
    'Affordable, professional web design in Batticaloa. Custom business websites built to attract local customers and generate leads.',
    'We build fast, modern websites for shops, clinics, schools, and businesses across Batticaloa — designed to turn visitors into customers.'
  ),
  'web-design-kattankudy': buildWebDesignCity(
    'Kattankudy',
    'web-design-kattankudy',
    'Web Design in Kattankudy | Business Websites | Vexoweb',
    'Web design & website development for Kattankudy businesses. Modern, mobile-friendly sites that win more local customers.',
    'Professional web design for Kattankudy businesses — mobile-friendly sites that help you stand out and grow locally.'
  ),
  'web-design-kalmunai': buildWebDesignCity(
    'Kalmunai',
    'web-design-kalmunai',
    'Web Design in Kalmunai | Business Websites | Vexoweb',
    'Professional web design in Kalmunai. We build fast, modern websites for local businesses across the Ampara district.',
    'Modern websites for Kalmunai businesses — built for speed, mobile users, and local lead generation across the east coast.'
  ),
  'web-design-ampara': buildWebDesignCity(
    'Ampara',
    'web-design-ampara',
    'Web Design in Ampara | Business Websites | Vexoweb',
    'Web design & development for Ampara businesses. Get a modern website that brings in customers from across the district.',
    'We design and develop websites for Ampara district businesses — from retail and services to tourism and professional firms.'
  ),
  'web-design-trincomalee': buildWebDesignCity(
    'Trincomalee',
    'web-design-trincomalee',
    'Web Design in Trincomalee | Business Websites | Vexoweb',
    'Professional web design in Trincomalee. Websites for hotels, tourism, retail & service businesses across the east coast.',
    'Web design for Trincomalee hotels, tourism operators, retail shops, and service businesses — built to attract east coast customers.'
  ),
  'seo-services-batticaloa': buildSeoCity(
    'Batticaloa',
    'seo-services-batticaloa',
    'SEO Services in Batticaloa | Rank Higher Locally | Vexoweb',
    'Local SEO services in Batticaloa. Rank higher on Google, get found on Maps & attract more customers in the Eastern Province.',
    'Help Batticaloa customers find your business on Google Search and Maps with local SEO built for Eastern Province markets.'
  ),
  'seo-services-kattankudy': buildSeoCity(
    'Kattankudy',
    'seo-services-kattankudy',
    'SEO Services in Kattankudy | Rank Higher Locally | Vexoweb',
    'SEO services for Kattankudy businesses. Improve your Google rankings & local visibility to win more customers.',
    'Local SEO for Kattankudy businesses — improve rankings, Google Maps visibility, and organic traffic from nearby customers.'
  ),
  'seo-services-kalmunai': buildSeoCity(
    'Kalmunai',
    'seo-services-kalmunai',
    'SEO Services in Kalmunai | Rank Higher Locally | Vexoweb',
    'Local SEO services in Kalmunai. Get your business found on Google & Google Maps across the Ampara district.',
    'SEO services tailored for Kalmunai and the Ampara district — rank for the searches your local customers actually use.'
  ),
  'software-development-batticaloa': {
    slug: 'software-development-batticaloa',
    path: '/software-development-batticaloa',
    city: 'Batticaloa',
    serviceType: 'software',
    parentService: { label: 'Software Development', href: '/software-development' },
    seoTitle: 'Software Development in Batticaloa | Custom Apps | Vexoweb',
    eyebrow: 'Custom Software',
    h1: 'Software Development in Batticaloa',
    h1Accent: 'POS, billing & business systems built locally',
    heroDesc:
      'Custom software for Batticaloa businesses — POS, billing, inventory, and booking systems designed around how you actually work.',
    description:
      'Custom software development in Batticaloa. POS, billing, inventory & booking systems built for Eastern Province businesses.',
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
    eyebrow: 'Mobile Apps',
    h1: 'Mobile App Development in Batticaloa',
    h1Accent: 'Android & iOS apps for local businesses',
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
