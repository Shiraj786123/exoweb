import { createStaticPage } from '../src/lib/createStaticPage';
import ContactPage from '../src/pages/ContactPage';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(ContactPage, {
  title: 'Contact Vexoweb | Web & Software Agency Batticaloa',
  description:
    'Get a free proposal from Vexoweb. Call, WhatsApp or email our Batticaloa team — we reply within 24 hours.',
  path: '/contact',
  breadcrumb: PAGE_BREADCRUMBS.contact,
});
