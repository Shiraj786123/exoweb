import { createStaticPage } from '../src/lib/createStaticPage';
import FullStackWebDev from '../src/pages/FullStackWebDev';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(FullStackWebDev, {
  title: 'Website Development & Web Design Batticaloa | Vexoweb',
  description:
    'Professional website development & web design for businesses in Batticaloa & Eastern Province. Fast, modern, lead-generating sites.',
  path: '/website-development',
  breadcrumb: PAGE_BREADCRUMBS.websiteDevelopment,
});
