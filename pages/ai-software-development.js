import { createStaticPage } from '../src/lib/createStaticPage';
import AISoftwareServices from '../src/pages/AISoftwareServices';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(AISoftwareServices, {
  title: MAIN_SERVICE_SEO.aiSoftwareDevelopment.title,
  description: MAIN_SERVICE_SEO.aiSoftwareDevelopment.description,
  path: '/ai-software-development',
  breadcrumb: PAGE_BREADCRUMBS.aiSoftwareDevelopment,
});
