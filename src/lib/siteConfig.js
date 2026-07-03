import { CITY_PAGE_SLUGS } from '../content/cityPagesContent';

export const SITE_NAME = 'Vexoweb';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vexoweb.lk';

/** Core public indexable routes (path only, leading slash). */
export const CORE_SITEMAP_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/software-development',
  '/website-development',
  '/seo-services',
  '/ecommerce-development',
  '/ai-software-development',
  '/mobile-app-development',
  '/privacy-policy',
  '/terms-conditions',
];

/** All indexable routes — core pages plus city landing pages. */
export const SITEMAP_ROUTES = [
  ...CORE_SITEMAP_ROUTES,
  ...CITY_PAGE_SLUGS.map((slug) => `/${slug}`),
];
