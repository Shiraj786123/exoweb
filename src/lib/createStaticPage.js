import PageSeo from '../components/PageSeo';
import { BreadcrumbSchema } from '../components/Breadcrumb';

export function createStaticPage(Component, seo) {
  function StaticPage() {
    return (
      <>
        <PageSeo {...seo} />
        {seo.breadcrumb ? <BreadcrumbSchema items={seo.breadcrumb} /> : null}
        <Component />
      </>
    );
  }

  StaticPage.displayName = `StaticPage(${Component.displayName || Component.name || 'Page'})`;

  return StaticPage;
}
