import React from 'react';
import Image from 'next/image';
import webDesignHero from '../../assets/website/web-design-hero.png';

const WebsiteHeroVisual = () => (
  <div className="ecd-hero__visual ecd-hero__visual--website" aria-hidden="true">
    <Image
      src={webDesignHero}
      alt=""
      className="ecd-hero__website_hero_img"
      width={720}
      height={540}
      priority
    />
  </div>
);

export default WebsiteHeroVisual;
