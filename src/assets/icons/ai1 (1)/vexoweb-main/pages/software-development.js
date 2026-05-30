import { createStaticPage } from '../src/lib/createStaticPage';
import SoftwareDevelopment from '../src/pages/SoftwareDevelopment';

export default createStaticPage(SoftwareDevelopment, {
  title: 'Software Development Services',
  description:
    'ZonzocTech provides custom software development services for internal tools, business platforms, integrations, and modern digital product delivery.',
  path: '/software-development',
});
