import Head from 'next/head';

const SITE_NAME = 'Vexoweb';
const SITE_URL = 'https://zonzoctech.com';
const DEFAULT_IMAGE = `${SITE_URL}/favicon1.png`;

export default function PageSeo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  noindex = false,
}) {
  const canonicalPath = path === '/' ? '' : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const fullTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : SITE_NAME;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
    </Head>
  );
}
