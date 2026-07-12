import { createStaticPage } from '../src/lib/createStaticPage';
import TermsConditions from '../src/pages/TermsConditions';
import { PAGE_BREADCRUMBS } from '../src/content/pageBreadcrumbs';

export default createStaticPage(TermsConditions, {
  title: 'Terms & Conditions | Vexoweb',
  description:
    "The terms and conditions governing the use of Vexoweb's website and services.",
  path: '/terms-conditions',
  breadcrumb: PAGE_BREADCRUMBS.termsConditions,
});
