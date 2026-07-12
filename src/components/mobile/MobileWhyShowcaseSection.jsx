import React from 'react';
import WhyShowcaseSection from '../showcase/WhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../../data/whyShowcaseImages';
import { MOB_WHY_SHOWCASE } from '../../content/mobilePageContent';

const MobileWhyShowcaseSection = () => (
  <WhyShowcaseSection
    content={MOB_WHY_SHOWCASE}
    image={WHY_SHOWCASE_IMAGES.mobile}
    imageAlt="Android and iOS mobile app development by Vexoweb in Eastern Province, Sri Lanka"
  />
);

export default MobileWhyShowcaseSection;
