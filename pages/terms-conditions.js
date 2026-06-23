import { createStaticPage } from '../src/lib/createStaticPage';
import TermsConditions from '../src/pages/TermsConditions';

export default createStaticPage(TermsConditions, {
  title: 'Terms and Conditions',
  description:
    'Read the Vexoweb terms and conditions covering service usage, responsibilities, and policies for our digital solutions and website.',
  path: '/terms-conditions',
});
