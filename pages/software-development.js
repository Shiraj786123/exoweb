import { createStaticPage } from '../src/lib/createStaticPage';
import SoftwareDevelopment from '../src/pages/SoftwareDevelopment';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(SoftwareDevelopment, {
  title: 'Custom Software Development in Batticaloa | Vexoweb',
  description:
    'Custom software, POS, billing & inventory systems built for businesses in Batticaloa & the Eastern Province of Sri Lanka.',
  path: '/software-development',
  breadcrumb: PAGE_BREADCRUMBS.softwareDevelopment,
});
