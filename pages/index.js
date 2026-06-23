import { createStaticPage } from '../src/lib/createStaticPage';
import HomePage from '../src/pages/HomePage';

export default createStaticPage(HomePage, {
  title: 'Web Design & Software Development in Batticaloa | Vexoweb',
  description:
    "Vexoweb is Batticaloa's trusted web design & software development agency. We build websites, apps & deliver SEO for businesses in Batticaloa, Kattankudy & Eastern Province.",
  path: '/',
});
