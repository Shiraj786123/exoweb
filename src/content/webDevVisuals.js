import introBatticaloa from '../assets/icons/ecd-ai-robot.png';
import introAmpara from '../assets/icons/web-dev-robo-ampara.png';
import introKattankudy from '../assets/icons/web-dev-robo-kattankudy.png';
import introKalmunai from '../assets/icons/web-dev-robo-kalmunai.png';
import introTrincomalee from '../assets/icons/web-dev-robo-trincomalee.png';
import trustVisual from '../assets/icons/web-dev-trust-visual.png';

export const WEB_DEV_INTRO_ROBO_BY_CITY = {
  Ampara: {
    src: introAmpara,
    alt: 'AI-powered website development for businesses in Ampara',
    theme: 'intro',
  },
  Batticaloa: {
    src: introBatticaloa,
    alt: 'AI-powered website development for businesses in Batticaloa',
    theme: 'intro',
  },
  Kattankudy: {
    src: introKattankudy,
    alt: 'AI-powered website development for businesses in Kattankudy',
    theme: 'intro',
  },
  Kalmunai: {
    src: introKalmunai,
    alt: 'AI-powered website development for businesses in Kalmunai',
    theme: 'intro',
  },
  Trincomalee: {
    src: introTrincomalee,
    alt: 'AI-powered website development for businesses in Trincomalee',
    theme: 'intro',
  },
};

export function getWebDevIntroRobo(cityName) {
  return WEB_DEV_INTRO_ROBO_BY_CITY[cityName] || WEB_DEV_INTRO_ROBO_BY_CITY.Batticaloa;
}

/** @deprecated Use getWebDevIntroRobo(cityName) for per-city intro visuals */
export const WEB_DEV_ROBO = {
  intro: WEB_DEV_INTRO_ROBO_BY_CITY.Batticaloa,
};

export const WEB_DEV_TRUST_VISUAL = {
  src: trustVisual,
  alt: 'Professional website development and responsive design by Vexoweb',
};
