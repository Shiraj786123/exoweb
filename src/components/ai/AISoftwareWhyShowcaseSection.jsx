import React from 'react';
import WhyShowcaseSection from '../showcase/WhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../../data/whyShowcaseImages';
import { AI_WHY_SHOWCASE } from '../../content/aiSoftwarePageContent';

const AISoftwareWhyShowcaseSection = () => (
  <WhyShowcaseSection
    content={AI_WHY_SHOWCASE}
    image={WHY_SHOWCASE_IMAGES.ai}
    imageAlt="AI software development and automation solutions by Vexoweb in Sri Lanka"
  />
);

export default AISoftwareWhyShowcaseSection;
