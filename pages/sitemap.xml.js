import { SITE_URL, SITEMAP_ROUTES } from '../src/lib/siteConfig';

function buildSitemapXml() {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = SITEMAP_ROUTES.map((path) => {
    const loc = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
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
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(buildSitemapXml());
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
