import item1 from '../assets/icons/healthyfit.png';
import item2 from '../assets/icons/aviation.png';
import item3 from '../assets/icons/fleet-management.png';
import item4 from '../assets/icons/lvita.jpg';
import item5 from '../assets/icons/searchengine.jpeg';
import item6 from '../assets/icons/websitemaintence.jpeg';
import item7 from '../assets/icons/webdevelopment.jpeg';

export const FEATURED_PORTFOLIO_PROJECT = {
  id: 0,
  name: 'Belfiore Jewellery',
  desc: 'Luxury e-commerce website for bespoke engagement rings and fine jewellery in Hatton Garden, London — GIA-certified collections, appointment booking, and a seamless shopping experience.',
  href: 'https://www.belfiorejewellery.co.uk/',
  imgAlt:
    'Belfiore Jewellery Bel Fiore London logo with luxury sapphire engagement ring — bespoke jewellery e-commerce website built by Vexoweb',
  extra: [
    { text: 'WordPress', Background: '#0047ab' },
    { text: 'WooCommerce', Background: '#7f54b3' },
    { text: 'Elementor', Background: '#ff6b91' },
    { text: 'PHP', Background: '#00bfc1' },
    { text: 'SEO', Background: '#1e8449' },
  ],
  img: '/images/portfolio/belfiore-jewellery.png',
};

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: 'E-Commerce Website',
    desc: 'Shopify-based platform for healthy products with seamless API integration.',
    extra: [
      { text: 'Shopify', Background: '#0047ab' },
      { text: 'Shopify APIs', Background: '#ff6b91' },
      { text: 'Laravel', Background: '#00bfc1' },
      { text: 'Bootstrap', Background: '#ff7300ff' },
    ],
    img: item1,
  },
  {
    id: 2,
    name: 'Aviation Management System',
    desc: 'Comprehensive aviation management platform with real-time flight tracking, task management, and crew scheduling.',
    extra: [
      { text: 'Angular', Background: '#0047ab' },
      { text: 'Firebase', Background: '#ff6b91' },
      { text: 'Flightaware APIs', Background: '#1e8449' },
      { text: 'MongoDB', Background: '#00bfc1' },
      { text: 'Node.js', Background: '#ff7300ff' },
    ],
    img: item2,
  },
  {
    id: 3,
    name: 'Fleet Management System',
    desc: 'Comprehensive platform for real-time fleet tracking, rider management, and performance analytics.',
    extra: [
      { text: 'React', Background: '#0047ab' },
      { text: 'Java', Background: '#ff6b91' },
      { text: 'Spring Boot', Background: '#00bfc1' },
      { text: 'Next.js', Background: '#ff7300ff' },
      { text: 'Google Maps APIs', Background: '#1e8449' },
    ],
    img: item3,
  },
  {
    id: 4,
    name: 'E-Commerce System',
    desc: 'Developed the admin portal, vendor portal, user mobile app, and vendor mobile app to manage the system.',
    extra: [
      { text: 'Angular', Background: '#0047ab' },
      { text: 'Java(Android)', Background: '#ff7300ff' },
      { text: 'Swift', Background: '#ff6b91' },
      { text: 'Node.js', Background: '#00bfc1' },
      { text: 'MongoDB', Background: '#1e8449' },
      { text: 'Firebase', Background: '#d90e0eff' },
    ],
    img: item4,
  },
  {
    id: 5,
    name: 'Search Engine Optimization',
    desc: "Through comprehensive on-page, technical, and content SEO, we enhanced CookerAndLooker's search presence and authority, driving sustainable organic growth.",
    extra: [
      { text: 'React', Background: '#0047ab' },
      { text: 'Java', Background: '#ff6b91' },
      { text: 'Spring Boot', Background: '#00bfc1' },
      { text: 'Next.js', Background: '#ff7300ff' },
      { text: 'MongoDB', Background: '#1e8449' },
    ],
    img: item5,
  },
  {
    id: 6,
    name: 'Website Maintenance & Web Security',
    desc: 'We executed end-to-end website development for frau-rauchfrei.de, implementing strong security protocols, performance optimization, and ongoing protection against vulnerabilities.',
    extra: [
      { text: 'React', Background: '#0047ab' },
      { text: 'Java', Background: '#ff6b91' },
      { text: 'Spring Boot', Background: '#00bfc1' },
      { text: 'Next.js', Background: '#ff7300ff' },
    ],
    img: item6,
  },
  {
    id: 7,
    name: 'Website Development',
    desc: 'We completely redesigned and developed koningbamboe.nl with advanced features, enhanced functionality, and significantly improved performance—delivering a faster, smarter, and more scalable digital experience.',
    extra: [
      { text: 'React', Background: '#0047ab' },
      { text: 'Java', Background: '#ff6b91' },
      { text: 'Spring Boot', Background: '#00bfc1' },
      { text: 'Next.js', Background: '#ff7300ff' },
    ],
    img: item7,
  },
];

/** Six projects for the portfolio grid (excludes featured Belfiore). */
export const PORTFOLIO_GRID_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6);
