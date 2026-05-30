import { createStaticPage } from '../src/lib/createStaticPage';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';

export default createStaticPage(PrivacyPolicy, {
  title: 'Privacy Policy',
  description:
    'Review the ZonzocTech privacy policy to understand how we collect, use, and protect personal information across our website and services.',
  path: '/privacy-policy',
});
