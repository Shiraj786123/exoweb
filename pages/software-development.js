import { createStaticPage } from '../src/lib/createStaticPage';
import SoftwareDevelopment from '../src/pages/SoftwareDevelopment';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(SoftwareDevelopment, {
  title: MAIN_SERVICE_SEO.softwareDevelopment.title,
  description: MAIN_SERVICE_SEO.softwareDevelopment.description,
  path: '/software-development',
  breadcrumb: PAGE_BREADCRUMBS.softwareDevelopment,
});
