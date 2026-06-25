import { CITY_PAGE_SLUGS, getCityPageBySlug, getCityPageTitle } from '../src/content/cityPagesContent';
import PageSeo from '../src/components/PageSeo';
import CityServicePage from '../src/pages/CityServicePage';

export default function CityRoutePage({ config }) {
  return (
    <>
      <PageSeo
        title={getCityPageTitle(config)}
        description={config.description}
        path={config.path}
      />
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
