import React from 'react';
import WhyShowcaseSection from '../showcase/WhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../../data/whyShowcaseImages';
import { SOFT_WHY_SHOWCASE } from '../../content/softwarePageContent';

const SoftwareWhyShowcaseSection = () => (
  <WhyShowcaseSection
    content={SOFT_WHY_SHOWCASE}
    image={WHY_SHOWCASE_IMAGES.software}
    imageAlt="Custom software development solutions by Vexoweb in Eastern Province, Sri Lanka"
  />
);

export default SoftwareWhyShowcaseSection;
