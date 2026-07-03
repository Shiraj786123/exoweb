import React from 'react';
import { importTechIcon } from '../../data/technologyStack';
import { platformLogoAlt } from '../../lib/imageAlt';
import { getPlatformBrandIcon } from '../../data/platformBrandIcons';
import PlatformBrandIcon, { hasPlatformBrand } from './PlatformBrandIcon';

const PlatformItemVisual = ({ item, getIcon }) => {
  let brandVisual = null;
  if (item.brand) {
    if (hasPlatformBrand(item.brand)) {
      brandVisual = <PlatformBrandIcon brand={item.brand} />;
    } else {
      const src = getPlatformBrandIcon(item.brand);
      if (src) {
        brandVisual = (
          <img
            className="ecd-show__platform_brand"
            src={src}
            alt={platformLogoAlt(item.name)}
          />
        );
      }
    }
  }

  const Icon = !brandVisual ? getIcon?.(item) : null;
  const iconSrc = !brandVisual && !Icon && item.icon ? importTechIcon(item.icon) : null;

  return (
    <>
      {brandVisual || (iconSrc ? (
        <img
          className="ecd-show__platform_brand"
          src={iconSrc.src || iconSrc}
          alt={platformLogoAlt(item.name)}
        />
      ) : Icon ? (
        <span className="ecd-show__platform_icon" aria-hidden="true">
          <Icon />
        </span>
      ) : null)}
      <span className="ecd-show__platform_label">{item.name}</span>
    </>
  );
};

const ShowcasePlatformStrip = ({ label, items, getIcon }) => (
  <section className="ecd-show__platforms">
    <div className="ecd-show__container">
      <p className="ecd-show__platforms_label">{label}</p>
      <div className="ecd-show__platforms_row">
        {items.map((item) => {
          if (!item.href) {
            return (
              <div key={item.name} className="ecd-show__platform_item ecd-show__platform_item--static">
                <PlatformItemVisual item={item} getIcon={getIcon} />
              </div>
            );
          }

          const isExternal = item.href.startsWith('http');

          return (
            <a
              key={item.name}
              href={item.href}
              className="ecd-show__platform_item"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              <PlatformItemVisual item={item} getIcon={getIcon} />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default ShowcasePlatformStrip;
