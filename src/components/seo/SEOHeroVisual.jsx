import React from 'react';
import Image from 'next/image';
import seoServicesHero from '../../assets/seo/seo-services-hero.png';

const SEOHeroVisual = () => (
  <div className="ecd-hero__visual ecd-hero__visual--seo" aria-hidden="true">
    <Image
      src={seoServicesHero}
      alt=""
      className="ecd-hero__seo_hero_img"
      width={720}
      height={540}
      priority
    />
  </div>
);

export default SEOHeroVisual;
