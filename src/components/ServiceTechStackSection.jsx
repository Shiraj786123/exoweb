import React from 'react';
import TechnologyStackSection from './TechnologyStackSection';
import { SERVICE_TECH_STACK } from '../content/serviceTechStackContent';

const ServiceTechStackSection = ({
  service,
  titleClassName = 'ecd-h4',
  titleTag = 'h4',
}) => {
  const config = SERVICE_TECH_STACK[service];
  if (!config) return null;

  return (
    <TechnologyStackSection
      {...config}
      variant="service"
      id={`${service}-technology-stack`}
      titleClassName={titleClassName}
      titleTag={titleTag}
    />
  );
};

export default ServiceTechStackSection;
