import { CITY_PAGE_SLUGS, getCityPageBySlug, getCityPageTitle, getCityBreadcrumb } from '../src/content/cityPagesContent';
import PageSeo from '../src/components/PageSeo';
import JsonLd from '../src/components/JsonLd';
import CityServicePage from '../src/pages/CityServicePage';
import { buildCityPageSchema } from '../src/lib/pageSchema';

export default function CityRoutePage({ config }) {
  const breadcrumb = getCityBreadcrumb(config);

  return (
    <>
      <PageSeo
        title={getCityPageTitle(config)}
        description={config.description}
        path={config.path}
      />
      <JsonLd data={buildCityPageSchema(config, breadcrumb)} />
      <CityServicePage config={config} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: CITY_PAGE_SLUGS.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const config = getCityPageBySlug(params.slug);

  if (!config) {
    return { notFound: true };
  }

  return { props: { config } };
}
