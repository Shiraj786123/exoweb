import { createStaticPage } from '../src/lib/createStaticPage';
import AboutUs from '../src/pages/AboutUs';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(AboutUs, {
  title: 'About Vexoweb | Web & Software Team in Batticaloa',
  description:
    'Meet Vexoweb — the Batticaloa-based team building websites, software & SEO for Eastern Province businesses.',
  path: '/about',
  breadcrumb: PAGE_BREADCRUMBS.about,
});
