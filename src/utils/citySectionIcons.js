import {
  HiOutlineComputerDesktop,
  HiOutlineBuildingOffice2,
  HiOutlineShoppingCart,
  HiOutlineCodeBracket,
  HiOutlineArrowPath,
  HiOutlineMapPin,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentText,
  HiOutlineBuildingStorefront,
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineClipboardDocumentCheck,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCake,
  HiOutlineWrench,
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import { SiWordpress } from 'react-icons/si';

const ICONS = {
  business: HiOutlineComputerDesktop,
  corporate: HiOutlineBuildingOffice2,
  wordpress: SiWordpress,
  cart: HiOutlineShoppingCart,
  code: HiOutlineCodeBracket,
  refresh: HiOutlineArrowPath,
  local: HiOutlineMapPin,
  technical: HiOutlineWrenchScrewdriver,
  onpage: HiOutlineDocumentText,
  gbp: HiOutlineBuildingStorefront,
  keyword: HiOutlineMagnifyingGlass,
  content: HiOutlinePencilSquare,
  audit: HiOutlineClipboardDocumentCheck,
  health: HiOutlineHeart,
  hotel: HiOutlineBuildingOffice2,
  food: HiOutlineCake,
  education: HiOutlineAcademicCap,
  build: HiOutlineWrench,
  retail: HiOutlineShoppingBag,
  agriculture: HiOutlineGlobeAlt,
  services: HiOutlineBriefcase,
  logistics: HiOutlineTruck,
  mobile: HiOutlineDevicePhoneMobile,
  shield: HiOutlineShieldCheck,
  speed: HiOutlineBolt,
  growth: HiOutlineArrowTrendingUp,
  leads: HiOutlineUserGroup,
  chart: HiOutlineChartBar,
  sparkles: HiOutlineSparkles,
};

const SERVICE_RULES = [
  { re: /wordpress/i, icon: 'wordpress', color: '#21759b' },
  { re: /corporate/i, icon: 'corporate', color: '#6366f1' },
  { re: /e-?commerce|online store|woo/i, icon: 'cart', color: '#9333ea' },
  { re: /custom web|web application/i, icon: 'code', color: '#ea580c' },
  { re: /redesign/i, icon: 'refresh', color: '#0891b2' },
  { re: /local seo/i, icon: 'local', color: '#2563eb' },
  { re: /technical seo/i, icon: 'technical', color: '#16a34a' },
  { re: /on-?page/i, icon: 'onpage', color: '#9333ea' },
  { re: /google business/i, icon: 'gbp', color: '#ea580c' },
  { re: /keyword/i, icon: 'keyword', color: '#2563eb' },
  { re: /content optim/i, icon: 'content', color: '#16a34a' },
  { re: /e-?commerce seo/i, icon: 'cart', color: '#9333ea' },
  { re: /audit/i, icon: 'audit', color: '#0891b2' },
  { re: /link building|backlink/i, icon: 'growth', color: '#7c3aed' },
  { re: /business website/i, icon: 'business', color: '#2563eb' },
];

const INDUSTRY_RULES = [
  { re: /health|medical|clinic|pharmacy/i, icon: 'health', color: '#dc2626' },
  { re: /hotel|tourism|hospitality/i, icon: 'hotel', color: '#0891b2' },
  { re: /restaurant|caf/i, icon: 'food', color: '#ea580c' },
  { re: /education|school|tuition|student/i, icon: 'education', color: '#2563eb' },
  { re: /construct|engineering/i, icon: 'build', color: '#64748b' },
  { re: /retail|wholesale|store/i, icon: 'retail', color: '#9333ea' },
  { re: /agricultur|farm/i, icon: 'agriculture', color: '#16a34a' },
  { re: /professional|consult|account|legal/i, icon: 'services', color: '#6366f1' },
  { re: /local business/i, icon: 'local', color: '#2563eb' },
  { re: /logistics|transport/i, icon: 'logistics', color: '#0d9488' },
  { re: /e-?commerce/i, icon: 'cart', color: '#9333ea' },
];

const BENEFIT_RULES = [
  { re: /trust|credib|confidence|reputation/i, icon: 'shield', color: '#c4b5fd' },
  { re: /google|rank|search|visibility|seo|local/i, icon: 'growth', color: '#93c5fd' },
  { re: /enquir|lead|customer|traffic|visitor/i, icon: 'leads', color: '#86efac' },
  { re: /sales|revenue|convert|grow/i, icon: 'chart', color: '#fcd34d' },
  { re: /mobile|responsive|device/i, icon: 'mobile', color: '#fda4af' },
  { re: /fast|speed|performance|loading/i, icon: 'speed', color: '#67e8f9' },
  { re: /secure|security|safe/i, icon: 'shield', color: '#c4b5fd' },
  { re: /design|brand|modern|professional/i, icon: 'sparkles', color: '#f9a8d4' },
  { re: /support|maintenance|ongoing/i, icon: 'services', color: '#a5b4fc' },
  { re: /compet/i, icon: 'growth', color: '#86efac' },
  { re: /content|manage|cms/i, icon: 'content', color: '#fcd34d' },
  { re: /advertis|paid|organic/i, icon: 'chart', color: '#93c5fd' },
];

function matchRule(title, rules, fallback) {
  const t = title || '';
  for (const rule of rules) {
    if (rule.re.test(t)) {
      return { icon: ICONS[rule.icon], iconKey: rule.icon, color: rule.color };
    }
  }
  return fallback;
}

export function getServiceMeta(title) {
  return matchRule(title, SERVICE_RULES, { icon: ICONS.business, iconKey: 'business', color: '#2563eb' });
}

export function getIndustryMeta(title) {
  return matchRule(title, INDUSTRY_RULES, { icon: ICONS.services, iconKey: 'services', color: '#6366f1' });
}

export function getBenefitMeta(text) {
  return matchRule(text, BENEFIT_RULES, { icon: ICONS.sparkles, iconKey: 'sparkles', color: '#c4b5fd' });
}

export const WEB_TECH_STRIP = [
  { name: 'WordPress', icon: SiWordpress, color: '#21759b' },
  { name: 'React', icon: HiOutlineCodeBracket, color: '#61dafb' },
  { name: 'Next.js', icon: HiOutlineBolt, color: '#0f172a' },
  { name: 'PHP', icon: HiOutlineCodeBracket, color: '#777bb4' },
  { name: 'Laravel', icon: HiOutlineShieldCheck, color: '#ff2d20' },
  { name: 'Node.js', icon: HiOutlineGlobeAlt, color: '#339933' },
];

export const SEO_METRICS_STRIP = [
  { value: '+186%', label: 'Avg. Traffic Growth', color: '#2563eb' },
  { value: 'Top 3', label: 'Keyword Rankings', color: '#16a34a' },
  { value: '3–6 mo', label: 'Results Timeline', color: '#9333ea' },
];
