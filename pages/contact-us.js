import { createStaticPage } from '../src/lib/createStaticPage';
import ContactUs from '../src/pages/ContactUs';

export default createStaticPage(ContactUs, {
  title: 'Contact ZonzocTech',
  description:
    'Start a conversation with ZonzocTech about AI development, websites, software, SEO, and growth-focused digital solutions for your business.',
  path: '/contact-us',
});
