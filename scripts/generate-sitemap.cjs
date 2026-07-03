/**
 * Writes public/sitemap.xml at build time (static file — no serverless SSR needed).
 */
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vexoweb.lk').replace(/\/$/, '');

const CORE_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/software-development',
  '/website-development',
  '/seo-services',
  '/ecommerce-development',
  '/ai-software-development',
  '/mobile-app-development',
  '/portfolio',
  '/privacy-policy',
  '/terms-conditions',
];

function getCitySlugs() {
  const cityPagesPath = path.join(__dirname, '../src/content/cityPagesContent.js');
  const source = fs.readFileSync(cityPagesPath, 'utf8');
  const slugs = [];

  for (const match of source.matchAll(/^\s+'([a-z0-9-]+)':/gm)) {
    slugs.push(match[1]);
  }

  return slugs;
}

function buildSitemapXml() {
  const lastmod = new Date().toISOString().split('T')[0];
  const routes = [...CORE_ROUTES, ...getCitySlugs().map((slug) => `/${slug}`)];

  const urls = routes
    .map((route) => {
      const loc = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
      const priority = route === '/' ? '1.0' : '0.8';

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, buildSitemapXml(), 'utf8');
console.log(`Sitemap written to ${outputPath} (${CORE_ROUTES.length + getCitySlugs().length} URLs)`);
