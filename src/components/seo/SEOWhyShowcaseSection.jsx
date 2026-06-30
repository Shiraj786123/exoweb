import React from 'react';
import WhyShowcaseSection from '../showcase/WhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../../data/whyShowcaseImages';
import { SEO_WHY_SHOWCASE } from '../../content/seoPageContent';

const SEOWhyShowcaseSection = () => (
  <WhyShowcaseSection
    content={SEO_WHY_SHOWCASE}
    image={WHY_SHOWCASE_IMAGES.seo}
    imageAlt="SEO services by Vexoweb"
  />
);

export default SEOWhyShowcaseSection;
