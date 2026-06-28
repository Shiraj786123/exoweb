import { createStaticPage } from '../src/lib/createStaticPage';
import SEOServices from '../src/pages/SEOServices';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(SEOServices, {
  title: MAIN_SERVICE_SEO.seoServices.title,
  description: MAIN_SERVICE_SEO.seoServices.description,
  path: '/seo-services',
  breadcrumb: PAGE_BREADCRUMBS.seoServices,
});
