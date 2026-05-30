import PageSeo from '../components/PageSeo';

export function createStaticPage(Component, seo) {
  function StaticPage() {
    return (
      <>
        <PageSeo {...seo} />
        <Component />
      </>
    );
  }

  StaticPage.displayName = `StaticPage(${Component.displayName || Component.name || 'Page'})`;

  return StaticPage;
}
