import { createStaticPage } from '../src/lib/createStaticPage';
import HomePage from '../src/pages/HomePage';

export default createStaticPage(HomePage, {
  title: 'Web Design & Software Development in Batticaloa | Vexoweb',
  description:
    "Batticaloa's web design & software agency. Websites, custom software, mobile apps & SEO for businesses across the Eastern Province.",
  path: '/',
});
