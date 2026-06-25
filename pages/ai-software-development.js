import { createStaticPage } from '../src/lib/createStaticPage';
import AISoftwareServices from '../src/pages/AISoftwareServices';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(AISoftwareServices, {
  title: 'AI Software Development in Sri Lanka | Vexoweb',
  description:
    'AI-powered web applications, automation & smart software solutions for businesses in Sri Lanka. Future-proof your operations.',
  path: '/ai-software-development',
  breadcrumb: PAGE_BREADCRUMBS.aiSoftwareDevelopment,
});
