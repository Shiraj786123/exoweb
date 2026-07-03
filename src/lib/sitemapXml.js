import { SITE_URL, SITEMAP_ROUTES } from './siteConfig';

export function buildSitemapXml() {
  const lastmod = new Date().toISOString().split('T')[0];
  const baseUrl = SITE_URL.replace(/\/$/, '');

  const urls = SITEMAP_ROUTES.map((path) => {
    const loc = path === '/' ? baseUrl : `${baseUrl}${path}`;
    const priority = path === '/' ? '1.0' : '0.8';

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
