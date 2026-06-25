import { createStaticPage } from '../src/lib/createStaticPage';
import SEOServices from '../src/pages/SEOServices';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(SEOServices, {
  title: 'SEO Services in Batticaloa & Eastern Province | Vexoweb',
  description:
    'Local SEO & Google ranking services for businesses in Batticaloa, Kattankudy & the Eastern Province. Get found by more customers.',
  path: '/seo-services',
  breadcrumb: PAGE_BREADCRUMBS.seoServices,
});
