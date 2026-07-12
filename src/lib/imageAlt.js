/** Descriptive image alt text for SEO and accessibility */

export const SITE_LOGO_ALT =
  'Vexoweb — IT agency and software development company in Batticaloa, Eastern Province, Sri Lanka';

export const HERO_IMAGE_ALT = {
  website:
    'Professional website design and development mockup by Vexoweb in Eastern Province, Sri Lanka',
  seo: 'SEO analytics dashboard showing Google search ranking growth by Vexoweb',
  mobile:
    'Mobile app development mockup showing Android and iOS applications by Vexoweb',
  ai: 'AI software development and business automation solutions illustration by Vexoweb',
};

export function ecommerceProductAlt(productName) {
  return `${productName} product featured in Vexoweb ecommerce store mockup`;
}

export function techStackAlt(techName) {
  return `${techName} technology used by Vexoweb development team`;
}

export function platformLogoAlt(platformName) {
  return `${platformName} platform logo`;
}

export function processStepAlt(stepTitle) {
  return `${stepTitle} step in Vexoweb project delivery process`;
}

export function portfolioProjectAlt(project) {
  return (
    project.imgAlt ||
    `${project.name} — Vexoweb portfolio project case study in Eastern Province, Sri Lanka`
  );
}

export function clientAvatarAlt(name, role) {
  return role ? `${name}, ${role} — Vexoweb client` : `${name} — Vexoweb client testimonial`;
}

export function cityImageAlt(cityName, imageAlt) {
  return imageAlt || `${cityName}, Eastern Province, Sri Lanka — local business area served by Vexoweb`;
}
