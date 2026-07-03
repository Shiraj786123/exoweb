import { SITE_URL } from './siteConfig';

export const VEXOWEB_ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const VEXOWEB_LOCAL_BUSINESS = {
  '@type': 'LocalBusiness',
  '@id': VEXOWEB_ORGANIZATION_ID,
  name: 'Vexoweb',
  url: SITE_URL,
  telephone: '+94740309534',
  email: 'info@vexoweb.lk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Batticaloa',
    addressLocality: 'Batticaloa',
    addressRegion: 'Eastern Province',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.7172,
    longitude: 81.7004,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Eastern Province, Sri Lanka',
  },
};

export function buildBreadcrumbSchema(items) {
  if (!items?.length) return null;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${items[items.length - 1]?.href || ''}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href === '/' ? '' : item.href}` } : {}),
    })),
  };
}

export function buildServiceSchema({ name, description, path, areaServed }) {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    name,
    description,
    provider: { '@id': VEXOWEB_ORGANIZATION_ID },
    areaServed: areaServed || {
      '@type': 'AdministrativeArea',
      name: 'Eastern Province, Sri Lanka',
    },
    url: `${SITE_URL}${path}`,
  };
}

export function buildCityLocalBusinessSchema(config) {
  return {
    ...VEXOWEB_LOCAL_BUSINESS,
    '@id': `${SITE_URL}${config.path}#localbusiness`,
    areaServed: {
      '@type': 'City',
      name: config.city,
    },
    description: config.description,
  };
}

export function buildSchemaGraph(...nodes) {
  const graph = [VEXOWEB_LOCAL_BUSINESS, ...nodes.filter(Boolean)];

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function buildServicePageSchema({ breadcrumb, serviceName, description, path }) {
  return buildSchemaGraph(
    buildBreadcrumbSchema(breadcrumb),
    buildServiceSchema({ name: serviceName, description, path })
  );
}

export function buildCityPageSchema(config, breadcrumb) {
  const serviceName = breadcrumb[breadcrumb.length - 1]?.label || config.h1;

  return buildSchemaGraph(
    buildBreadcrumbSchema(breadcrumb),
    buildCityLocalBusinessSchema(config),
    buildServiceSchema({
      name: serviceName,
      description: config.description,
      path: config.path,
      areaServed: {
        '@type': 'City',
        name: config.city,
      },
    })
  );
}
