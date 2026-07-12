import React from 'react';
import Image from 'next/image';
import aiSoftwareHero from '../../assets/ai/ai-software-hero.png';
import { HERO_IMAGE_ALT } from '../../lib/imageAlt';

const AISoftwareHeroVisual = () => (
  <div className="aiss-hero__visual">
    <Image
      src={aiSoftwareHero}
      alt={HERO_IMAGE_ALT.ai}
      className="aiss-hero__img"
      width={520}
      height={640}
      priority
    />
  </div>
);

export default AISoftwareHeroVisual;
