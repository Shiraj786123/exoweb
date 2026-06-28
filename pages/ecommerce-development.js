import { createStaticPage } from '../src/lib/createStaticPage';
import EcommercePage from '../src/pages/EcommercePage';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(EcommercePage, {
  title: MAIN_SERVICE_SEO.ecommerceDevelopment.title,
  description: MAIN_SERVICE_SEO.ecommerceDevelopment.description,
  path: '/ecommerce-development',
  breadcrumb: PAGE_BREADCRUMBS.ecommerceDevelopment,
});
