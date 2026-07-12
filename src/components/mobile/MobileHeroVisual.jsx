import React from 'react';
import Image from 'next/image';
import mobileAppHero from '../../assets/mobile/mobile-app-hero.png';
import { HERO_IMAGE_ALT } from '../../lib/imageAlt';

const MobileHeroVisual = () => (
  <div className="ecd-hero__visual ecd-hero__visual--mobile-app">
    <Image
      src={mobileAppHero}
      alt={HERO_IMAGE_ALT.mobile}
      className="ecd-hero__mobile_hero_img"
      width={720}
      height={540}
      priority
    />
  </div>
);

export default MobileHeroVisual;
