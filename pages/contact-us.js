import { createStaticPage } from '../src/lib/createStaticPage';
import ContactUs from '../src/pages/ContactUs';

export default createStaticPage(ContactUs, {
  title: 'Contact',
  description:
    'Start a conversation with Vexoweb about AI development, websites, software, SEO, and growth-focused digital solutions for your business.',
  path: '/contact-us',
});
