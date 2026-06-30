import React from 'react';
import WhyShowcaseSection from '../showcase/WhyShowcaseSection';
import { WHY_SHOWCASE_IMAGES } from '../../data/whyShowcaseImages';
import { WEB_WHY_SHOWCASE } from '../../content/websitePageContent';

const WebsiteWhyShowcaseSection = () => (
  <WhyShowcaseSection
    content={WEB_WHY_SHOWCASE}
    image={WHY_SHOWCASE_IMAGES.website}
    imageAlt="Website development by Vexoweb"
  />
);

export default WebsiteWhyShowcaseSection;
