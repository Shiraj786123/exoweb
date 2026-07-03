import ServicePage from '../pages/ServicePage';
import { createStaticPage } from './createStaticPage';
import { SERVICE_PAGE_REGISTRY } from '../content/servicePagesRegistry';
import { MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { buildServicePageSchema } from './pageSchema';

export function createServicePage(serviceId) {
  const entry = SERVICE_PAGE_REGISTRY[serviceId];
  const seo = MAIN_SERVICE_SEO[serviceId];
  const breadcrumb = PAGE_BREADCRUMBS[entry.breadcrumbKey];

  function Page() {
    return <ServicePage serviceId={serviceId} />;
  }

  return createStaticPage(Page, {
    title: seo.title,
    description: seo.description,
    path: entry.path,
    breadcrumb,
    schema: buildServicePageSchema({
      breadcrumb,
      serviceName: entry.serviceName,
      description: seo.description,
      path: entry.path,
    }),
  });
}
