import React from 'react';
import WhyShowcaseSection from '../showcase/WhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../../data/whyShowcaseImages';
import { ECOMMERCE_WHY_SHOWCASE } from '../../content/ecommercePageContent';

const EcommerceWhyShowcaseSection = () => (
  <WhyShowcaseSection
    content={ECOMMERCE_WHY_SHOWCASE}
    image={WHY_SHOWCASE_IMAGES.ecommerce}
    imageAlt="Ecommerce website and online store development by Vexoweb in Eastern Province, Sri Lanka"
  />
);

export default EcommerceWhyShowcaseSection;
