import React from 'react';
import { importTechIcon } from '../../data/technologyStack';
import { getPlatformBrandIcon } from '../../data/platformBrandIcons';
import PlatformBrandIcon, { hasPlatformBrand } from './PlatformBrandIcon';

const ShowcasePlatformStrip = ({ label, items, getIcon }) => (
  <section className="ecd-show__platforms">
    <div className="ecd-show__container">
      <p className="ecd-show__platforms_label">{label}</p>
      <div className="ecd-show__platforms_row">
        {items.map((item) => {
          let brandVisual = null;
          if (item.brand) {
            if (hasPlatformBrand(item.brand)) {
              brandVisual = <PlatformBrandIcon brand={item.brand} />;
            } else {
              const src = getPlatformBrandIcon(item.brand);
              if (src) {
                brandVisual = <img className="ecd-show__platform_brand" src={src} alt="" aria-hidden="true" />;
              }
            }
          }

          const Icon = !brandVisual ? getIcon?.(item) : null;
          const iconSrc = !brandVisual && !Icon && item.icon ? importTechIcon(item.icon) : null;

          return (
            <div key={item.name} className="ecd-show__platform_item">
              {brandVisual || (iconSrc ? (
                <img className="ecd-show__platform_brand" src={iconSrc.src || iconSrc} alt="" aria-hidden="true" />
              ) : Icon ? (
                <span className="ecd-show__platform_icon" aria-hidden="true">
                  <Icon />
                </span>
              ) : null)}
              <span className="ecd-show__platform_label">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ShowcasePlatformStrip;
