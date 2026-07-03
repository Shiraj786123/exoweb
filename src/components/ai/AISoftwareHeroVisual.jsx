import React from 'react';
import Image from 'next/image';
import aiSoftwareHero from '../../assets/ai/ai-software-hero.png';

const AISoftwareHeroVisual = () => (
  <div className="aiss-hero__visual" aria-hidden="true">
    <Image
      src={aiSoftwareHero}
      alt=""
      className="aiss-hero__img"
      width={520}
      height={640}
      priority
    />
  </div>
);

export default AISoftwareHeroVisual;
