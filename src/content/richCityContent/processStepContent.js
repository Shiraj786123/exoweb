/** Shared process steps — short single-line titles, meaningful 5-line descriptions */

const web = (title, description) => ({ title, description });
const seo = (title, description) => ({ title, description });
const step = (n, title, icon, color, description) => ({
  step: n,
  title,
  icon,
  color,
  description,
});

export const WEB_DEV_PROCESS = [
  web('Discovery', 'We learn your business, goals, audience and website requirements through a detailed discovery phase.'),
  web('Planning', 'We create site structure, sitemap, content plan and page flows aligned with your business goals.'),
  web('Design', 'We craft modern layouts, responsive design, brand styling and user flows that engage every visitor.'),
  web('Development', 'We build with clean code, modern frameworks, secure standards and proven development practices.'),
  web('Testing', 'We test speed, security, responsiveness, browser support and mobile display before every launch.'),
  web('Go Live', 'We launch your website and provide ongoing updates, maintenance and dedicated support.'),
];

export const SEO_PROCESS = [
  seo('Audit', 'We audit your website, analyse pages, find SEO issues and uncover content gaps that limit visibility.'),
  seo('Competitors', 'We study competitors, analyse rankings, review keywords and find opportunities to improve your rankings.'),
  seo('Keywords', 'We research keywords, match search intent, analyse trends and align targets with your business goals.'),
  seo('Optimisation', 'We fix technical SEO, improve content, strengthen links and optimise your overall website structure.'),
  seo('Content', 'We plan targeted content, build authority, create pages and attract qualified visitors to your website.'),
  seo('Monitoring', 'We track rankings, monitor traffic, analyse reports and refine your SEO strategy for lasting growth.'),
];

export const BATTICALOA_WEB_PROCESS = [
  web('Discovery', 'We learn your business, goals, local audience and website requirements through a detailed discovery phase.'),
  web('Planning', 'We create site structure, sitemap, content plan and page flows aligned with your business goals.'),
  web('Design', 'We craft modern layouts, responsive design, brand styling and user flows that engage local visitors.'),
  web('Development', 'We build with clean code, modern frameworks, secure standards and proven development practices.'),
  web('Testing', 'We test speed, security, responsiveness, browser support and mobile display before every launch.'),
  web('Go Live', 'We launch your website and provide ongoing updates, maintenance and dedicated support.'),
];

export const KATTANKUDY_WEB_PROCESS = [
  web('Discovery', 'We learn your business, goals, target customers and website requirements through a detailed discovery phase.'),
  web('Planning', 'We create site structure, sitemap, content plan and page flows aligned with your business goals.'),
  web('Design', 'We craft modern layouts, responsive design, brand styling and user flows that engage every visitor.'),
  web('Development', 'We build with clean code, modern frameworks, secure standards and proven development practices.'),
  web('Testing', 'We test speed, security, responsiveness, browser support and mobile display before every launch.'),
  web('Go Live', 'We launch your website and provide ongoing updates, maintenance and dedicated support.'),
];

export const KALMUNAI_WEB_PROCESS = [
  web('Discovery', 'We learn your business, goals, audience and website requirements through a detailed discovery phase.'),
  web('Planning', 'We create site structure, sitemap, content plan and page flows aligned with your business goals.'),
  web('Design', 'We craft modern layouts, responsive design, brand styling and user flows that engage every visitor.'),
  web('Development', 'We build with clean code, modern frameworks, secure standards and proven development practices.'),
  web('Testing', 'We test speed, security, responsiveness, browser support and mobile display before every launch.'),
  web('Go Live', 'We launch your website and provide ongoing updates, maintenance and dedicated support.'),
];

export const TRINCOMALEE_WEB_PROCESS = [
  web('Discovery', 'We learn your business, goals, audience and website requirements through a detailed discovery phase.'),
  web('Planning', 'We create site structure, sitemap, local SEO plan and page flows aligned with your business goals.'),
  web('Design', 'We craft modern layouts, responsive design, brand styling and user flows that engage every visitor.'),
  web('Development', 'We build with clean code, modern frameworks, secure standards and proven development practices.'),
  web('Testing', 'We test speed, security, responsiveness, browser support and mobile display before every launch.'),
  web('Go Live', 'We launch your website and provide ongoing updates, maintenance and dedicated support.'),
];

export const SOFT_PROCESS = [
  step(1, 'Discovery', 'discovery', '#2563eb', 'We learn your objectives, workflows, team processes and operational challenges during discovery.'),
  step(2, 'Planning', 'plan', '#16a34a', 'We design architecture, feature scope, integrations and a roadmap aligned with your business goals.'),
  step(3, 'UI/UX Design', 'design', '#9333ea', 'We create intuitive interfaces, clear workflows and dashboards that your team can use every day.'),
  step(4, 'Development', 'code', '#ea580c', 'We build secure, scalable software with modern technology, APIs and proven development practices.'),
  step(5, 'Testing', 'test', '#2563eb', 'We run quality checks, security testing, performance audits and fixes before your software goes live.'),
  step(6, 'Go Live', 'deploy', '#16a34a', 'We launch your software and provide ongoing maintenance, updates and dedicated technical support.'),
];

export const MOB_PROCESS = [
  step(1, 'Discovery', 'discovery', '#2563eb', 'We learn your business goals, target audience, app scope and requirements during discovery.'),
  step(2, 'UI/UX Design', 'design', '#9333ea', 'Our designers craft intuitive layouts, smooth flows and polished interfaces for your mobile app.'),
  step(3, 'Development', 'code', '#ea580c', 'We build secure, scalable apps with modern frameworks, APIs and proven development practices.'),
  step(4, 'Testing', 'test', '#16a34a', 'We test speed, usability, security, compatibility and performance thoroughly before launch.'),
  step(5, 'Deployment', 'device', '#2563eb', 'We publish your app to Google Play and the Apple App Store with full listing and launch support.'),
  step(6, 'Support', 'support', '#0891b2', 'We provide ongoing updates, performance improvements and technical support after launch.'),
];

export const ECOMMERCE_PROCESS = [
  { step: 1, title: 'Consultation', icon: 'chat', color: '#2563eb', description: 'We learn your business goals, target market, product range and store requirements during consultation.' },
  { step: 2, title: 'Planning', icon: 'plan', color: '#16a34a', description: 'We plan store structure, key features, checkout flows and user journeys for a smooth shopping experience.' },
  { step: 3, title: 'Design', icon: 'design', color: '#9333ea', description: 'We create attractive designs, product layouts, brand styling and pages that focus on driving conversions.' },
  { step: 4, title: 'Development', icon: 'code', color: '#ea580c', description: 'We build fast, secure online stores with modern technology, payment gateways and reliable integrations.' },
  { step: 5, title: 'Testing', icon: 'test', color: '#2563eb', description: 'We test payments, checkout, mobile layout, page speed and performance before your store goes live.' },
  { step: 6, title: 'Go Live', icon: 'rocket', color: '#16a34a', description: 'We launch your store and provide ongoing updates, optimisation, maintenance and dedicated support.' },
];

export const SEO_SERVICE_PROCESS = [
  step(1, 'Audit', 'audit', '#2563eb', 'We audit your website, analyse pages, find SEO issues and uncover content gaps that limit visibility.'),
  step(2, 'Competitors', 'competitor', '#16a34a', 'We study competitors, analyse rankings, review keywords and find opportunities to improve your rankings.'),
  step(3, 'Keywords', 'keyword', '#9333ea', 'We research keywords, match search intent, analyse trends and align targets with your business goals.'),
  step(4, 'Optimisation', 'optimise', '#ea580c', 'We fix technical SEO, improve content, strengthen links and optimise your overall website structure.'),
  step(5, 'Content', 'content', '#2563eb', 'We plan targeted content, build authority, create pages and attract qualified visitors to your website.'),
  step(6, 'Monitoring', 'monitor', '#16a34a', 'We track rankings, monitor traffic, analyse reports and refine your SEO strategy for lasting growth.'),
];

export const MOBILE_CITY_PROCESS = [
  web('Discovery', 'We learn your business goals, target audience, app scope and requirements during discovery.'),
  web('Planning', 'We plan app structure, key features, user journeys and milestones for a smooth development process.'),
  web('UI/UX Design', 'Our designers craft intuitive layouts, smooth flows and polished interfaces for your mobile app.'),
  web('Development', 'We build secure, scalable apps with modern frameworks, APIs and proven development practices.'),
  web('Testing', 'We test speed, usability, security, compatibility and performance thoroughly before launch.'),
  web('Go Live', 'We publish to app stores and provide ongoing updates, maintenance and dedicated support.'),
];

export const SOFTWARE_CITY_PROCESS = [
  web('Discovery', 'We learn your objectives, workflows, team processes and operational challenges during discovery.'),
  web('Planning', 'We design architecture, feature scope, integrations and a roadmap aligned with your business goals.'),
  web('UI/UX Design', 'We create intuitive interfaces, clear workflows and dashboards that your team can use every day.'),
  web('Development', 'We build secure, scalable software with modern technology, APIs and proven development practices.'),
  web('Testing', 'We run quality checks, security testing, performance audits and fixes before your software goes live.'),
  web('Go Live', 'We launch your software and provide ongoing maintenance, updates and dedicated technical support.'),
];
