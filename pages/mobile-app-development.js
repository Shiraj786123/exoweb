import { createStaticPage } from '../src/lib/createStaticPage';
import MobileAppDevelopment from '../src/pages/MobileAppDevelopment';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(MobileAppDevelopment, {
  title: 'Mobile App Development in Batticaloa, Sri Lanka | Vexoweb',
  description:
    'Android & iOS mobile application development for businesses in Batticaloa & Sri Lanka. Native & cross-platform apps that perform.',
  path: '/mobile-app-development',
  breadcrumb: PAGE_BREADCRUMBS.mobileAppDevelopment,
});
