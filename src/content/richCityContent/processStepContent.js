/** Shared process steps — short one-line titles, 3-row descriptions */

const web = (title, l1, l2, l3) => ({ title, lines: [l1, l2, l3] });
const seo = (title, l1, l2, l3) => ({ title, lines: [l1, l2, l3] });
const step = (n, title, icon, color, l1, l2, l3) => ({
  step: n,
  title,
  icon,
  color,
  lines: [l1, l2, l3],
});

export const WEB_DEV_PROCESS = [
  web('Discovery', 'We learn your goals.', 'We define your audience.', 'We set clear objectives.'),
  web('Planning', 'We map site structure.', 'We plan navigation.', 'We build a roadmap.'),
  web('Design', 'We create layouts.', 'We match your brand.', 'We design for easy use.'),
  web('Development', 'We build secure sites.', 'We use modern tech.', 'We ensure responsiveness.'),
  web('Testing', 'We test speed.', 'We check all devices.', 'We fix before launch.'),
  web('Launch & Support', 'We launch your site.', 'We provide updates.', 'We offer support.'),
];

export const SEO_PROCESS = [
  seo('Website Audit', 'We audit your site.', 'We find SEO issues.', 'We spot content gaps.'),
  seo('Competitor Research', 'We study competitors.', 'We analyse rankings.', 'We find your edge.'),
  seo('Keyword Strategy', 'We research keywords.', 'We match search intent.', 'We align with goals.'),
  seo('Optimisation', 'We fix technical SEO.', 'We improve content.', 'We strengthen links.'),
  seo('Content Strategy', 'We plan content.', 'We build authority.', 'We attract visitors.'),
  seo('Monitoring', 'We track rankings.', 'We monitor traffic.', 'We refine strategy.'),
];

export const BATTICALOA_WEB_PROCESS = [
  web('Discovery', 'We learn your business.', 'We study your audience.', 'We define your goals.'),
  web('Planning', 'We plan site structure.', 'We organise navigation.', 'We shape user experience.'),
  web('Design', 'We create layouts.', 'We reflect your brand.', 'We engage visitors.'),
  web('Development', 'We use modern tech.', 'We build secure sites.', 'We ensure performance.'),
  web('Testing', 'We test speed.', 'We check mobile view.', 'We verify compatibility.'),
  web('Launch & Support', 'We launch your site.', 'We handle maintenance.', 'We provide support.'),
];

export const KATTANKUDY_WEB_PROCESS = [
  web('Discovery', 'We learn your business.', 'We study customers.', 'We define objectives.'),
  web('Planning', 'We plan structure.', 'We focus on UX.', 'We plan conversions.'),
  web('Design', 'We create designs.', 'We reflect your brand.', 'We build layouts.'),
  web('Development', 'We build responsive sites.', 'We use latest tech.', 'We ensure performance.'),
  web('Testing', 'We test speed.', 'We check mobile view.', 'We verify compatibility.'),
  web('Launch & Support', 'We launch your site.', 'We provide maintenance.', 'We offer support.'),
];

export const KALMUNAI_WEB_PROCESS = [
  web('Discovery', 'We learn your goals.', 'We define audience.', 'We clarify requirements.'),
  web('Planning', 'We plan structure.', 'We focus on UX.', 'We align with goals.'),
  web('Design', 'We design interfaces.', 'We reflect your brand.', 'We keep layouts simple.'),
  web('Development', 'We use clean code.', 'We build secure sites.', 'We ensure responsiveness.'),
  web('Testing', 'We test speed.', 'We check browsers.', 'We verify before launch.'),
  web('Launch & Support', 'We launch your site.', 'We provide maintenance.', 'We offer assistance.'),
];

export const TRINCOMALEE_WEB_PROCESS = [
  web('Discovery', 'We learn your goals.', 'We study audience.', 'We define requirements.'),
  web('Planning', 'We plan structure.', 'We focus on SEO.', 'We improve UX.'),
  web('Design', 'We design modern sites.', 'We represent your brand.', 'We create appeal.'),
  web('Development', 'We use latest tech.', 'We build secure sites.', 'We ensure performance.'),
  web('Testing', 'We test speed.', 'We check mobile view.', 'We verify before launch.'),
  web('Launch & Support', 'We launch your site.', 'We provide maintenance.', 'We offer assistance.'),
];

export const SOFT_PROCESS = [
  step(1, 'Discovery', 'discovery', '#2563eb', 'We learn your goals.', 'We map key challenges.', 'We define objectives.'),
  step(2, 'Planning', 'plan', '#16a34a', 'We design architecture.', 'We plan the roadmap.', 'We scope features.'),
  step(3, 'UI/UX Design', 'design', '#9333ea', 'We sketch interfaces.', 'We plan navigation.', 'We design for your team.'),
  step(4, 'Development', 'code', '#ea580c', 'We build secure code.', 'We use modern tech.', 'We ensure scalability.'),
  step(5, 'Testing', 'test', '#2563eb', 'We check every feature.', 'We test speed and security.', 'We fix before launch.'),
  step(6, 'Deployment', 'deploy', '#16a34a', 'We launch your software.', 'We configure servers.', 'We provide support.'),
];

export const MOB_PROCESS = [
  step(1, 'Discovery', 'discovery', '#2563eb', 'We learn your goals.', 'We study your audience.', 'We define app needs.'),
  step(2, 'UI/UX Design', 'design', '#9333ea', 'We design interfaces.', 'We plan user flows.', 'We refine experience.'),
  step(3, 'Development', 'code', '#ea580c', 'We build your app.', 'We use modern tech.', 'We ensure performance.'),
  step(4, 'Testing', 'test', '#16a34a', 'We test performance.', 'We check security.', 'We verify compatibility.'),
  step(5, 'App Store Launch', 'device', '#2563eb', 'We prepare listings.', 'We submit to stores.', 'We handle approvals.'),
  step(6, 'Support', 'support', '#0891b2', 'We release updates.', 'We improve app speed.', 'We provide support.'),
];

export const ECOMMERCE_PROCESS = [
  { step: 1, title: 'Consultation', icon: 'chat', color: '#2563eb', description: 'We understand your business goals and requirements.' },
  { step: 2, title: 'Planning', icon: 'plan', color: '#16a34a', description: 'We plan the store structure, features and user experience.' },
  { step: 3, title: 'Design', icon: 'design', color: '#9333ea', description: 'We create attractive and conversion-focused store design.' },
  { step: 4, title: 'Development', icon: 'code', color: '#ea580c', description: 'We build a fast, secure and scalable ecommerce website.' },
  { step: 5, title: 'Testing', icon: 'test', color: '#2563eb', description: 'We test everything thoroughly for a bug-free launch.' },
  { step: 6, title: 'Launch & Support', icon: 'rocket', color: '#16a34a', description: 'We launch your store and provide ongoing support.' },
];

export const SEO_SERVICE_PROCESS = [
  step(1, 'Website Audit', 'audit', '#2563eb', 'We audit your site.', 'We find SEO issues.', 'We spot content gaps.'),
  step(2, 'Competitor Research', 'competitor', '#16a34a', 'We study competitors.', 'We analyse rankings.', 'We find your edge.'),
  step(3, 'Keyword Strategy', 'keyword', '#9333ea', 'We research keywords.', 'We match search intent.', 'We align with goals.'),
  step(4, 'Optimisation', 'optimise', '#ea580c', 'We fix technical SEO.', 'We improve content.', 'We strengthen links.'),
  step(5, 'Content Strategy', 'content', '#2563eb', 'We plan content.', 'We build authority.', 'We attract visitors.'),
  step(6, 'Monitoring', 'monitor', '#16a34a', 'We track rankings.', 'We monitor traffic.', 'We refine strategy.'),
];

export const MOBILE_CITY_PROCESS = [
  web('Discovery', 'We learn your business.', 'We study your audience.', 'We define app requirements.'),
  web('Planning', 'We plan app structure.', 'We map user journeys.', 'We build a roadmap.'),
  web('UI/UX Design', 'We design interfaces.', 'We plan for Android and iOS.', 'We refine experience.'),
  web('Development', 'We build secure apps.', 'We use modern tech.', 'We ensure performance.'),
  web('Testing', 'We test functionality.', 'We check security.', 'We verify performance.'),
  web('Launch & Support', 'We publish to stores.', 'We provide maintenance.', 'We offer support.'),
];

export const SOFTWARE_CITY_PROCESS = [
  web('Discovery', 'We analyse requirements.', 'We find automation gaps.', 'We define objectives.'),
  web('Planning', 'We design architecture.', 'We align with workflows.', 'We plan for growth.'),
  web('UI/UX Design', 'We design interfaces.', 'We keep them intuitive.', 'We match your team.'),
  web('Development', 'We use modern tech.', 'We build secure software.', 'We ensure performance.'),
  web('Testing', 'We test reliability.', 'We check security.', 'We verify performance.'),
  web('Deployment', 'We deploy your software.', 'We provide updates.', 'We offer support.'),
];
