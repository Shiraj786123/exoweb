import { createStaticPage } from '../src/lib/createStaticPage';
import ContactPage from '../src/pages/ContactPage';

export default createStaticPage(ContactPage, {
  title: 'Get in Touch',
  description:
    'Reach out to Vexoweb for project discussions, consultations, and questions about AI applications, websites, SEO, and software development.',
  path: '/contact',
});
