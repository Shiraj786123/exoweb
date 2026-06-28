import { createStaticPage } from '../src/lib/createStaticPage';
import FullStackWebDev from '../src/pages/FullStackWebDev';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(FullStackWebDev, {
  title: MAIN_SERVICE_SEO.websiteDevelopment.title,
  description: MAIN_SERVICE_SEO.websiteDevelopment.description,
  path: '/website-development',
  breadcrumb: PAGE_BREADCRUMBS.websiteDevelopment,
});
