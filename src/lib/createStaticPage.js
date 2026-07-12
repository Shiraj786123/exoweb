import PageSeo from '../components/PageSeo';
import JsonLd from '../components/JsonLd';
import { BreadcrumbSchema } from '../components/Breadcrumb';

export function createStaticPage(Component, seo) {
  function StaticPage() {
    return (
      <>
        <PageSeo {...seo} />
        {seo.schema ? (
          <JsonLd data={seo.schema} />
        ) : seo.breadcrumb ? (
          <BreadcrumbSchema items={seo.breadcrumb} />
        ) : null}
        <Component />
      </>
    );
  }

  StaticPage.displayName = `StaticPage(${Component.displayName || Component.name || 'Page'})`;

  return StaticPage;
}
