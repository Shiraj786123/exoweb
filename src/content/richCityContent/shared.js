/** Shared blocks for rich city / sub-service pages */

import { WEB_DEV_PROCESS, SEO_PROCESS } from './processStepContent';

export { WEB_DEV_PROCESS, SEO_PROCESS };

export const WEB_DEV_SERVICE_ITEMS = [
  {
    title: 'Business Website Development',
    description:
      'Professional websites that showcase your business, services and expertise while helping convert visitors into customers.',
  },
  {
    title: 'Corporate Website Development',
    description:
      'Scalable corporate websites designed for growing organisations with multiple services, departments and locations.',
  },
  {
    title: 'WordPress Website Development',
    description:
      'Flexible and user-friendly WordPress websites built using clean coding practices and SEO best practices.',
  },
  {
    title: 'Ecommerce Website Development',
    description:
      'Launch a secure online store with WooCommerce or custom eCommerce solutions that help your business sell products online.',
  },
  {
    title: 'Custom Web Application Development',
    description:
      'Need a specialised business solution? We develop custom web applications tailored to your workflows and operational needs.',
  },
  {
    title: 'Website Redesign Services',
    description:
      'Transform your outdated website with a modern design, improved speed and enhanced functionality.',
  },
];

export const WEB_DEV_FAQ = [
  { q: 'How long does it take to develop a website?', a: 'Most business websites are completed within 2 to 6 weeks depending on the size and complexity of the project.' },
  { q: 'Will my website work on mobile devices?', a: 'Yes. Every website we develop is fully responsive and performs seamlessly on desktops, tablets and smartphones.' },
  { q: 'Is SEO included?', a: 'Yes. Every website is built using SEO best practices, including fast loading speed, clean URLs, proper heading structure and technical optimisation.' },
  { q: 'Can I manage my website myself?', a: 'Absolutely. We build websites using user-friendly content management systems, allowing you to easily update content and images.' },
  { q: 'Do you provide website maintenance?', a: 'Yes. We offer ongoing maintenance, software updates, security monitoring, backups and technical support after your website is launched.' },
];

export const WEB_DEV_WHY_BULLETS = [
  'Custom Website Design',
  'Mobile Responsive Development',
  'SEO-Friendly Website Structure',
  'Fast Loading Performance',
  'Secure Website Development',
  'Conversion-Focused Design',
];

export const WEB_DEV_TRUST_BULLETS = [
  'Experienced Website Development Team',
  'Tailor-Made Website Solutions',
  'SEO-Ready Development',
  'Mobile-First Design',
  'Fast & Secure Websites',
  'Reliable Technical Support',
];

export const SEO_SERVICE_ITEMS = [
  { title: 'Local SEO', description: 'Improve your visibility in Google Search and Google Maps so customers in your area can easily find your business.' },
  { title: 'Technical SEO', description: "We identify and fix technical issues that affect your website's indexing, performance and search engine rankings." },
  { title: 'On-Page SEO', description: 'Optimising titles, headings, content, images, metadata and internal links to maximise search visibility.' },
  { title: 'Google Business Profile Optimisation', description: 'Increase your visibility in local search results with a fully optimised Google Business Profile.' },
  { title: 'Keyword Research', description: 'Identify high-value keywords that your customers are searching for and build an effective SEO strategy around them.' },
  { title: 'Content Optimisation', description: 'Improve your existing content and develop valuable pages that increase authority and attract organic traffic.' },
  { title: 'eCommerce SEO', description: 'Grow your online store with SEO strategies tailored for WooCommerce, Shopify and custom eCommerce platforms.' },
  { title: 'SEO Audits', description: 'Comprehensive SEO audits that identify technical issues, content gaps and opportunities for improvement.' },
  { title: 'Link Building', description: 'Build high-quality backlinks and domain authority to strengthen your rankings and online credibility.' },
];

export const SEO_FAQ = [
  { q: 'How long does SEO take?', a: 'Most businesses begin seeing measurable improvements within 3 to 6 months depending on competition, website condition and target keywords.' },
  { q: 'Do you guarantee first-page rankings?', a: 'No reputable SEO agency can guarantee first-page rankings. We focus on ethical SEO practices that deliver sustainable, long-term results.' },
  { q: 'Is Google Business Profile optimisation included?', a: 'Yes. We optimise your Google Business Profile to improve your local visibility in Google Search and Google Maps.' },
  { q: 'Will I receive monthly SEO reports?', a: "Absolutely. You'll receive detailed monthly reports covering keyword rankings, traffic growth, completed work and future recommendations." },
  { q: 'Can you optimise my existing website?', a: 'Yes. We provide SEO services for WordPress, WooCommerce, Shopify and custom-built websites.' },
];

export const SEO_WHY_BULLETS = [
  'Experienced SEO Specialists',
  'Local SEO Expertise',
  'Ethical White Hat SEO',
  'Technical SEO Professionals',
  'AI Search Optimisation',
  'Transparent Monthly Reporting',
  'Data-Driven SEO Strategies',
  'Long-Term Growth Focus',
];

export const SEO_NEED_BULLETS = [
  'Improve Google rankings',
  'Increase organic website traffic',
  'Generate more enquiries and leads',
  'Build customer trust and credibility',
  'Strengthen your online presence',
  'Attract more local customers',
];

export const LOCAL_SEO_CHANNELS = [
  'Google Search',
  'Google Maps',
  'Local Search Results',
  'Mobile Search',
];

export function buildWebDevRichPage(city, copy) {
  return [
    {
      type: 'intro',
      title: copy.introTitle,
      paragraphs: copy.introParagraphs,
      cta: copy.cta || 'Request a Free Quote',
    },
    {
      type: 'why',
      title: copy.whyTitle,
      subtitle: copy.whySubtitle,
      listLabel: copy.whyListLabel || 'What You Get',
      bullets: copy.whyBullets || WEB_DEV_WHY_BULLETS,
    },
    {
      type: 'services',
      title: copy.servicesTitle || 'Our Website Development Services',
      items: WEB_DEV_SERVICE_ITEMS,
    },
    {
      type: 'benefits',
      title: copy.benefitsTitle,
      subtitle: copy.benefitsSubtitle,
      paragraphs: copy.benefitsParagraphs,
      bullets: copy.benefitsBullets,
    },
    {
      type: 'industries',
      title: copy.industriesTitle,
      subtitle: copy.industriesSubtitle,
      items: copy.industries,
    },
    {
      type: 'process',
      variant: 'web',
      title: copy.processTitle || 'Our Website Development Process',
      subtitle: copy.processSubtitle || 'A proven process from concept to launch.',
      steps: copy.processSteps || WEB_DEV_PROCESS,
    },
    {
      type: 'trust',
      title: copy.trustTitle,
      subtitle: copy.trustSubtitle,
      paragraphs: copy.trustParagraphs,
      listLabel: copy.trustListLabel || 'Why Partner With Us?',
      bullets: copy.trustBullets || WEB_DEV_TRUST_BULLETS,
    },
    {
      type: 'serving',
      title: copy.servingTitle,
      paragraphs: copy.servingParagraphs,
    },
    { type: 'faq', items: copy.faq || WEB_DEV_FAQ },
    {
      type: 'cta',
      title: copy.ctaTitle,
      paragraphs: copy.ctaParagraphs,
      cta: copy.ctaButton || 'Contact Us Today',
    },
  ];
}

export function buildSeoRichPage(city, copy) {
  const sections = [
    {
      type: 'intro',
      title: copy.introTitle,
      paragraphs: copy.introParagraphs,
      cta: copy.cta || 'Request a Free SEO Audit',
    },
    {
      type: 'benefits',
      title: copy.needTitle || 'Why Your Business Needs SEO',
      subtitle: copy.needSubtitle,
      paragraphs: copy.needParagraphs,
      bullets: copy.needBullets || SEO_NEED_BULLETS,
    },
    {
      type: 'services',
      title: copy.servicesTitle || 'Our SEO Services',
      items: SEO_SERVICE_ITEMS.map((item) => ({
        ...item,
        description: item.description.replace('your area', city).replace('in your area', `in ${city}`),
      })),
    },
    {
      type: 'why',
      title: copy.whyTitle,
      subtitle: copy.whySubtitle,
      listLabel: copy.whyListLabel || 'Why Work With Us?',
      bullets: copy.whyBullets || SEO_WHY_BULLETS,
    },
    {
      type: 'industries',
      title: copy.industriesTitle,
      subtitle: copy.industriesSubtitle,
      items: copy.industries,
    },
    {
      type: 'process',
      variant: 'seo',
      title: copy.processTitle || 'Our SEO Process',
      subtitle: copy.processSubtitle || 'A systematic approach to improving your search visibility.',
      steps: copy.processSteps || SEO_PROCESS,
    },
    {
      type: 'localSeo',
      city,
      title: copy.localSeoTitle || `Local SEO for Businesses in ${city}`,
      paragraphs: copy.localSeoParagraphs,
      listLabel: copy.localSeoListLabel || 'We optimise your visibility across:',
      bullets: LOCAL_SEO_CHANNELS,
      footer: copy.localSeoFooter,
    },
    { type: 'faq', items: copy.faq || SEO_FAQ },
    {
      type: 'cta',
      title: copy.ctaTitle,
      paragraphs: copy.ctaParagraphs,
      cta: copy.ctaButton || 'Get a Free SEO Consultation',
    },
  ];
  return sections;
}
