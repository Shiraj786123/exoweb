import { createStaticPage } from '../src/lib/createStaticPage';
import MobileAppDevelopment from '../src/pages/MobileAppDevelopment';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(MobileAppDevelopment, {
  title: MAIN_SERVICE_SEO.mobileAppDevelopment.title,
  description: MAIN_SERVICE_SEO.mobileAppDevelopment.description,
  path: '/mobile-app-development',
  breadcrumb: PAGE_BREADCRUMBS.mobileAppDevelopment,
});
