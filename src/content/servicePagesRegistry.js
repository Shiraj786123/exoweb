import WebsiteShowcase from '../components/website/WebsiteShowcase';
import WebsitePageBody from '../components/WebsitePageBody';
import WebsiteHeroVisual from '../components/website/WebsiteHeroVisual';
import SEOShowcase from '../components/seo/SEOShowcase';
import SEOPageBody from '../components/SEOPageBody';
import SEOHeroVisual from '../components/seo/SEOHeroVisual';
import SoftwareShowcase from '../components/software/SoftwareShowcase';
import SoftwarePageBody from '../components/SoftwarePageBody';
import SoftwareHeroVisual from '../components/software/SoftwareHeroVisual';
import MobileShowcase from '../components/mobile/MobileShowcase';
import MobilePageBody from '../components/MobilePageBody';
import MobileHeroVisual from '../components/mobile/MobileHeroVisual';
import EcommerceShowcase from '../components/ecommerce/EcommerceShowcase';
import EcommercePageBody from '../components/EcommercePageBody';
import EcommerceHeroVisual from '../components/ecommerce/EcommerceHeroVisual';
import AISoftwareShowcase from '../components/ai/AISoftwareShowcase';
import AISoftwarePageBody from '../components/AISoftwarePageBody';
import AISoftwareHeroVisual from '../components/ai/AISoftwareHeroVisual';

import { WEB_HERO } from './websitePageContent';
import { SEO_HERO } from './seoPageContent';
import { SOFT_HERO } from './softwarePageContent';
import { MOB_HERO } from './mobilePageContent';
import { ECOMMERCE_HERO } from './ecommercePageContent';
import { AI_HERO } from './aiSoftwarePageContent';

import {
  HiOutlineArrowTrendingUp,
  HiOutlineBolt,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCloud,
  HiOutlineCog6Tooth,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineDeviceTablet,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';

/** Single registry for all parent service pages. */
export const SERVICE_PAGE_REGISTRY = {
  websiteDevelopment: {
    path: '/website-development',
    breadcrumbKey: 'websiteDevelopment',
    theme: 'ecd',
    hero: WEB_HERO,
    heroIcons: {
      cog: HiOutlineCog6Tooth,
      shield: HiOutlineShieldCheck,
      device: HiOutlineDevicePhoneMobile,
    },
    HeroVisual: WebsiteHeroVisual,
    Showcase: WebsiteShowcase,
    PageBody: WebsitePageBody,
    techStackKey: 'website',
    proposalService: 'Website Development',
    serviceName: 'Website Development',
  },
  seoServices: {
    path: '/seo-services',
    breadcrumbKey: 'seoServices',
    theme: 'ecd',
    hero: SEO_HERO,
    heroIcons: {
      rank: HiOutlineArrowTrendingUp,
      traffic: HiOutlineGlobeAlt,
      local: HiOutlineMapPin,
    },
    HeroVisual: SEOHeroVisual,
    Showcase: SEOShowcase,
    PageBody: SEOPageBody,
    techStackKey: 'seo',
    proposalService: 'SEO Services',
    serviceName: 'SEO Services',
  },
  softwareDevelopment: {
    path: '/software-development',
    breadcrumbKey: 'softwareDevelopment',
    theme: 'ecd',
    hero: SOFT_HERO,
    heroIcons: {
      cog: HiOutlineCog6Tooth,
      shield: HiOutlineShieldCheck,
      cloud: HiOutlineCloud,
    },
    HeroVisual: SoftwareHeroVisual,
    Showcase: SoftwareShowcase,
    PageBody: SoftwarePageBody,
    techStackKey: 'software',
    proposalService: 'Software Development',
    serviceName: 'Software Development',
  },
  mobileAppDevelopment: {
    path: '/mobile-app-development',
    breadcrumbKey: 'mobileAppDevelopment',
    theme: 'ecd',
    hero: MOB_HERO,
    heroIcons: {
      device: HiOutlineDevicePhoneMobile,
      tablet: HiOutlineDeviceTablet,
      shield: HiOutlineShieldCheck,
    },
    HeroVisual: MobileHeroVisual,
    Showcase: MobileShowcase,
    PageBody: MobilePageBody,
    techStackKey: 'mobileApp',
    proposalService: 'Mobile App Development',
    serviceName: 'Mobile App Development',
  },
  ecommerceDevelopment: {
    path: '/ecommerce-development',
    breadcrumbKey: 'ecommerceDevelopment',
    theme: 'ecd',
    hero: ECOMMERCE_HERO,
    heroIcons: {
      cog: HiOutlineCog6Tooth,
      shield: HiOutlineShieldCheck,
      device: HiOutlineDevicePhoneMobile,
    },
    HeroVisual: EcommerceHeroVisual,
    Showcase: EcommerceShowcase,
    PageBody: EcommercePageBody,
    techStackKey: 'ecommerce',
    proposalService: 'Ecommerce Development',
    serviceName: 'E-Commerce Development',
  },
  aiSoftwareDevelopment: {
    path: '/ai-software-development',
    breadcrumbKey: 'aiSoftwareDevelopment',
    theme: 'aiss',
    hero: AI_HERO,
    heroIcons: {
      chat: HiOutlineChatBubbleLeftRight,
      cpu: HiOutlineCpuChip,
      bolt: HiOutlineBolt,
    },
    HeroVisual: AISoftwareHeroVisual,
    Showcase: AISoftwareShowcase,
    PageBody: AISoftwarePageBody,
    techStackKey: 'aiSoftware',
    proposalService: 'AI Solutions',
    serviceName: 'AI Software Development',
  },
};

export function getServicePageConfig(serviceId) {
  return SERVICE_PAGE_REGISTRY[serviceId] || null;
}
