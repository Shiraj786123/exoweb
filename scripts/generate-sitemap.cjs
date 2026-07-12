/**
 * Writes public/sitemap.xml at build time (static file — no serverless SSR needed).
 * Core routes are read from src/lib/siteConfig.js so lists cannot drift.
 */
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vexoweb.lk').replace(/\/$/, '');
const SITE_CONFIG_PATH = path.join(__dirname, '../src/lib/siteConfig.js');

function getCoreRoutes() {
  const source = fs.readFileSync(SITE_CONFIG_PATH, 'utf8');
  const coreBlock = source.match(/CORE_SITEMAP_ROUTES\s*=\s*\[([\s\S]*?)\]/);
  if (!coreBlock) {
    throw new Error('CORE_SITEMAP_ROUTES not found in siteConfig.js');
  }
  return [...coreBlock[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function getCitySlugs() {
  const cityPagesPath = path.join(__dirname, '../src/content/cityPagesContent.js');
  const source = fs.readFileSync(cityPagesPath, 'utf8');
  const slugs = [];

  for (const match of source.matchAll(/^\s+'([a-z0-9-]+)':/gm)) {
    slugs.push(match[1]);
  }

  return slugs;
}

function buildSitemapXml(coreRoutes, citySlugs) {
  const lastmod = new Date().toISOString().split('T')[0];
  const routes = [...coreRoutes, ...citySlugs.map((slug) => `/${slug}`)];

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

const CORE_ROUTES = getCoreRoutes();
const citySlugs = getCitySlugs();
const xml = buildSitemapXml(CORE_ROUTES, citySlugs);
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Sitemap written to ${outputPath} (${CORE_ROUTES.length + citySlugs.length} URLs)`);
