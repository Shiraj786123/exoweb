import React from 'react';

const SKY_BLUE_GRADIENT = 'linear-gradient(145deg, #0284c7 0%, #38bdf8 100%)';
const SKY_BLUE_ACCENT = '#38bdf8';

const getTitle = (item) => item.title || item.label || '';

const getDescription = (item) => {
  if (item.description) return item.description;
  if (item.points?.length) return item.points.join('. ') + '.';
  return '';
};

const resolveIcon = (item, iconMap, fallbackIcon) => {
  if (item.icon && iconMap[item.icon]) return iconMap[item.icon];
  const title = getTitle(item);
  if (title && iconMap[title]) return iconMap[title];
  return fallbackIcon;
};

const InfographicCard = ({ item, index, iconMap, fallbackIcon }) => {
  const Icon = resolveIcon(item, iconMap, fallbackIcon);
  const title = getTitle(item);
  const description = getDescription(item);

  return (
    <article
      className="hzigzag__card"
      style={{ '--hzigzag-gradient': SKY_BLUE_GRADIENT, '--hzigzag-accent': SKY_BLUE_ACCENT }}
    >
      <div className="hzigzag__card_icon" aria-hidden="true">
        {Icon ? <Icon /> : null}
      </div>
      <div className="hzigzag__card_body">
        <h5 className="ecd-h5 hzigzag__card_title">{title}</h5>
        {description ? <p className="hzigzag__card_desc">{description}</p> : null}
      </div>
      <div className="hzigzag__card_accent" aria-hidden="true" />
    </article>
  );
};

const HorizontalZigzagInfographic = ({ items, iconMap = {}, fallbackIcon: FallbackIcon }) => {
  if (!items?.length) return null;

  return (
    <div className="hzigzag">
      <div className="hzigzag__track" aria-hidden="true">
        <span className="hzigzag__track_start" />
        {items.map((_, index) => {
          if (index >= items.length - 1) return null;
          const peak = index % 2 === 0;
          return (
            <span
              key={`seg-${index}`}
              className={`hzigzag__track_seg${peak ? ' hzigzag__track_seg--down' : ' hzigzag__track_seg--up'}`}
            />
          );
        })}
        <span className="hzigzag__track_arrow" />
      </div>

      <div className="hzigzag__stations" style={{ '--hzigzag-count': items.length }}>
        {items.map((item, index) => {
          const isTop = index % 2 === 0;
          const title = getTitle(item);
          return (
            <div
              key={title || index}
              className={`hzigzag__station${isTop ? ' hzigzag__station--top' : ' hzigzag__station--bottom'}`}
            >
              <div className="hzigzag__slot hzigzag__slot--top">
                {isTop ? (
                  <InfographicCard
                    item={item}
                    index={index}
                    iconMap={iconMap}
                    fallbackIcon={FallbackIcon}
                  />
                ) : null}
              </div>

              <div className="hzigzag__node_wrap">
                <span className="hzigzag__stem" />
                <span className="hzigzag__node" />
              </div>

              <div className="hzigzag__slot hzigzag__slot--bottom">
                {!isTop ? (
                  <InfographicCard
                    item={item}
                    index={index}
                    iconMap={iconMap}
                    fallbackIcon={FallbackIcon}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalZigzagInfographic;
