import { WEBSITE_DEV_RICH } from './websiteDevelopmentCities';
import { SEO_RICH } from './seoCities';
import { SOFTWARE_RICH } from './softwareCities';
import { MOBILE_RICH } from './mobileCities';

const RICH_CITY_CONTENT = {
  ...WEBSITE_DEV_RICH,
  ...SEO_RICH,
  ...SOFTWARE_RICH,
  ...MOBILE_RICH,
};

export function getRichCityContent(slug) {
  return RICH_CITY_CONTENT[slug] || null;
}

export function hasRichCityContent(slug) {
  return Boolean(RICH_CITY_CONTENT[slug]);
}
