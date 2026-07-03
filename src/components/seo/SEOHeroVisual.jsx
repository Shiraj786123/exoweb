import React from 'react';
import Image from 'next/image';
import seoServicesHero from '../../assets/seo/seo-services-hero.png';
import { HERO_IMAGE_ALT } from '../../lib/imageAlt';

const SEOHeroVisual = () => (
  <div className="ecd-hero__visual ecd-hero__visual--seo">
    <Image
      src={seoServicesHero}
      alt={HERO_IMAGE_ALT.seo}
      className="ecd-hero__seo_hero_img"
      width={720}
      height={540}
      priority
    />
  </div>
);

export default SEOHeroVisual;
