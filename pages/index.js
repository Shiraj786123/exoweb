import { createStaticPage } from '../src/lib/createStaticPage';
import HomePage from '../src/pages/HomePage';

export default createStaticPage(HomePage, {
  title: 'AI Web Development, Full-Stack and SEO Experts',
  description:
    'ZonzocTech builds AI-powered websites, full-stack applications, SEO strategies, and automation systems that drive traffic, leads, and revenue.',
  path: '/',
});
