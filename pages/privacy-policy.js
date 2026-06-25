import { createStaticPage } from '../src/lib/createStaticPage';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(PrivacyPolicy, {
  title: 'Privacy Policy | Vexoweb',
  description:
    "Vexoweb's privacy policy explaining how we collect, use and protect your information.",
  path: '/privacy-policy',
  breadcrumb: PAGE_BREADCRUMBS.privacyPolicy,
});
