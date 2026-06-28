import { createStaticPage } from '../src/lib/createStaticPage';
import HomePage from '../src/pages/HomePage';
import { MAIN_SERVICE_SEO } from '../src/content/servicePagesConfig';

export default createStaticPage(HomePage, {
  title: MAIN_SERVICE_SEO.home.title,
  description: MAIN_SERVICE_SEO.home.description,
  path: '/',
});
