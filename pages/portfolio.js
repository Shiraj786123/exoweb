import { createStaticPage } from '../src/lib/createStaticPage';
import PortfolioPage from '../src/pages/PortfolioPage';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(PortfolioPage, {
  title: 'Portfolio | Real Projects & Results | Vexoweb',
  description:
    'Explore Vexoweb portfolio — e-commerce, software, SEO and web development projects delivering real results for businesses worldwide.',
  path: '/portfolio',
  breadcrumb: PAGE_BREADCRUMBS.portfolio,
});
