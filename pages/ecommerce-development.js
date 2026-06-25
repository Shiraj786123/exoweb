import { createStaticPage } from '../src/lib/createStaticPage';
import EcommercePage from '../src/pages/EcommercePage';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(EcommercePage, {
  title: 'E-Commerce Website Development Sri Lanka | Vexoweb',
  description:
    'Build & optimize your online store. Shopify, WooCommerce & custom e-commerce development for Sri Lankan businesses.',
  path: '/ecommerce-development',
  breadcrumb: PAGE_BREADCRUMBS.ecommerceDevelopment,
});
