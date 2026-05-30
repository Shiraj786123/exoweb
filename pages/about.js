import { createStaticPage } from '../src/lib/createStaticPage';
import AboutUs from '../src/pages/AboutUs';

export default createStaticPage(AboutUs, {
  title: 'About ZonzocTech',
  description:
    'Learn how ZonzocTech combines AI, engineering, SEO, and business strategy to build scalable digital systems that support long-term growth.',
  path: '/about',
});
