import React from 'react';
import Image from 'next/image';
import webDesignHero from '../../assets/website/web-design-hero.png';
import { HERO_IMAGE_ALT } from '../../lib/imageAlt';

const WebsiteHeroVisual = () => (
  <div className="ecd-hero__visual ecd-hero__visual--website">
    <Image
      src={webDesignHero}
      alt={HERO_IMAGE_ALT.website}
      className="ecd-hero__website_hero_img"
      width={720}
      height={540}
      priority
    />
  </div>
);

export default WebsiteHeroVisual;
