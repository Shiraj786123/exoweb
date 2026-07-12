import { SERVICES_MENU_ITEMS } from './servicesMenuData';

/** Mobile services drawer — 6 main services, View Details only. */
export const MOBILE_SERVICE_CATEGORIES = SERVICES_MENU_ITEMS.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  href: item.href,
}));

export const MOBILE_TRUST_ITEMS = [
  {
    title: 'AI-Powered Solutions',
    description: 'Smart. Scalable. Strategic.',
  },
  {
    title: 'Eastern Province Clients',
    description: 'Serving businesses across Sri Lanka.',
  },
  {
    title: 'Fast Response',
    description: 'We usually reply in 1–3 hours.',
  },
  {
    title: 'Satisfaction Focused',
    description: 'Quality work. Long-term results.',
  },
];
