import { CITY_PAGES, CITY_PAGE_SLUGS } from './cityPagesContent';

export const CITY_TYPE_META = {
  'website-development': {
    stats: [
      { value: '48hr', label: 'Average first draft turnaround' },
      { value: '100%', label: 'Mobile-friendly designs' },
      { value: 'Local', label: 'Eastern Province focus' },
      { value: '24hr', label: 'Support response time' },
    ],
    whoItsFor: [
      'Shops, clinics & professional services in your town',
      'Schools, tuition centres & training institutes',
      'Hotels, restaurants & tourism operators',
      'Startups launching their first online presence',
    ],
    problems: [
      'Outdated websites that lose mobile customers',
      'No online visibility in local Google searches',
      'Slow sites that frustrate visitors on phones',
      'DIY builders that look unprofessional',
    ],
    process: [
      { number: '1', title: 'Discovery Call', description: 'We learn your business, goals, and local market.' },
      { number: '2', title: 'Design & Content', description: 'Modern layouts tailored to your brand and audience.' },
      { number: '3', title: 'Development', description: 'Fast, secure, mobile-first build with clean code.' },
      { number: '4', title: 'Launch & Support', description: 'Go live with training and ongoing local support.' },
    ],
    slugPrefix: 'website-development',
    parentCta: 'Explore all website development services',
  },
  seo: {
    stats: [
      { value: 'Top 3', label: 'Local ranking targets' },
      { value: 'Maps', label: 'Google Business optimization' },
      { value: 'Monthly', label: 'Performance reports' },
      { value: 'Local', label: 'City-specific keywords' },
    ],
    whoItsFor: [
      'Shops wanting more walk-in customers from Google',
      'Service businesses competing in local search',
      'Clinics & professionals needing map visibility',
      'Brands expanding across the Eastern Province',
    ],
    problems: [
      'Invisible on Google when customers search nearby',
      'Competitors outranking you on Maps',
      'Website traffic but no phone calls or enquiries',
      'No clear SEO strategy for your town',
    ],
    process: [
      { number: '1', title: 'SEO Audit', description: 'We analyse your site, rankings, and local competitors.' },
      { number: '2', title: 'On-Page Fixes', description: 'Optimize pages, metadata, and local content.' },
      { number: '3', title: 'Maps & Citations', description: 'Strengthen Google Business and local listings.' },
      { number: '4', title: 'Track & Grow', description: 'Monthly reports and continuous improvement.' },
    ],
    slugPrefix: 'seo',
    parentCta: 'Explore all SEO services',
  },
  software: {
    stats: [
      { value: 'Custom', label: 'Built around your workflow' },
      { value: 'POS+', label: 'Billing & inventory systems' },
      { value: 'Secure', label: 'Data-safe architecture' },
      { value: 'Local', label: 'Batticaloa-based team' },
    ],
    whoItsFor: [
      'Retailers needing POS & billing systems',
      'Warehouses managing stock & suppliers',
      'Clinics with appointment & patient records',
      'Growing businesses outgrowing spreadsheets',
    ],
    problems: [
      'Manual processes slowing daily operations',
      'Disconnected tools causing data errors',
      'Off-the-shelf software that does not fit',
      'No visibility into sales or inventory',
    ],
    process: [
      { number: '1', title: 'Requirements', description: 'Map your workflow and define exactly what to build.' },
      { number: '2', title: 'Architecture', description: 'Design a scalable system around your operations.' },
      { number: '3', title: 'Build & Test', description: 'Develop, test, and refine with your team.' },
      { number: '4', title: 'Deploy & Train', description: 'Launch on-site with training and support.' },
    ],
    slugPrefix: 'software-development',
    parentCta: 'Explore software development services',
  },
  'mobile-app': {
    stats: [
      { value: 'Android', label: '& iOS development' },
      { value: 'Cross', label: 'Platform options' },
      { value: 'Store', label: 'Submission support' },
      { value: 'Local', label: 'Eastern Province clients' },
    ],
    whoItsFor: [
      'Businesses wanting customer-facing mobile apps',
      'Shops with ordering & delivery needs',
      'Services needing booking & notifications',
      'Brands reaching customers on phones',
    ],
    problems: [
      'No app while competitors engage on mobile',
      'Poor mobile website experience for repeat users',
      'Manual booking and communication overhead',
      'Unclear path from idea to App Store launch',
    ],
    process: [
      { number: '1', title: 'App Strategy', description: 'Define features, users, and platform approach.' },
      { number: '2', title: 'UI/UX Design', description: 'Intuitive screens your customers will love.' },
      { number: '3', title: 'Development', description: 'Native or cross-platform build with solid APIs.' },
      { number: '4', title: 'Launch', description: 'Store submission, testing, and post-launch support.' },
    ],
    slugPrefix: 'mobile-app-development',
    parentCta: 'Explore mobile app development',
  },
};

export function getCityTypeMeta(serviceType) {
  return CITY_TYPE_META[serviceType] || CITY_TYPE_META['website-development'];
}

export function getRelatedCities(serviceType, currentSlug) {
  const meta = getCityTypeMeta(serviceType);
  return CITY_PAGE_SLUGS.filter(
    (slug) => slug.startsWith(meta.slugPrefix) && slug !== currentSlug
  )
    .map((slug) => CITY_PAGES[slug])
    .filter(Boolean);
}
