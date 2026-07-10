import React from 'react';

export const SKY_BLUE_ACCENT = '#38bdf8';

const padStep = (index) => String(index + 1).padStart(2, '0');

const getTitle = (item) => item.title || item.label || '';

const getDescription = (item) => {
  if (item.description) return item.description;
  if (item.points?.length) return item.points.join('. ') + (item.points.length ? '.' : '');
  return '';
};

const resolveIcon = (item, iconMap, fallbackIcon) => {
  if (item.icon && iconMap[item.icon]) return iconMap[item.icon];
  const title = getTitle(item);
  if (title && iconMap[title]) return iconMap[title];
  return fallbackIcon;
};

const ServiceZigzagTimeline = ({ items, iconMap = {}, fallbackIcon: FallbackIcon }) => {
  if (!items?.length) return null;

  return (
    <div className="svc-zigzag">
      {items.map((item, index) => {
        const Icon = resolveIcon(item, iconMap, FallbackIcon);
        const title = getTitle(item);
        const description = getDescription(item);
        const isLeft = index % 2 === 0;

        return (
          <div
            key={title || index}
            className={`svc-zigzag__row${isLeft ? ' svc-zigzag__row--left' : ' svc-zigzag__row--right'}`}
            style={{ '--zigzag-accent': SKY_BLUE_ACCENT }}
          >
            {isLeft ? (
              <>
                <div className="svc-zigzag__panel svc-zigzag__panel--text">
                  <h5 className="ecd-h5 svc-zigzag__panel_head">{title}</h5>
                  {description ? <p className="svc-zigzag__panel_body">{description}</p> : null}
                </div>
                <div className="svc-zigzag__spine" aria-hidden="true">
                  <span className="svc-zigzag__connector svc-zigzag__connector--to-num" />
                  <span className="svc-zigzag__diamond">
                    {Icon ? <Icon /> : null}
                  </span>
                  <span className="svc-zigzag__connector svc-zigzag__connector--to-text" />
                </div>
                <div className="svc-zigzag__step_num">{padStep(index)}</div>
              </>
            ) : (
              <>
                <div className="svc-zigzag__step_num">{padStep(index)}</div>
                <div className="svc-zigzag__spine" aria-hidden="true">
                  <span className="svc-zigzag__connector svc-zigzag__connector--to-num" />
                  <span className="svc-zigzag__diamond">
                    {Icon ? <Icon /> : null}
                  </span>
                  <span className="svc-zigzag__connector svc-zigzag__connector--to-text" />
                </div>
                <div className="svc-zigzag__panel svc-zigzag__panel--text">
                  <h5 className="ecd-h5 svc-zigzag__panel_head">{title}</h5>
                  {description ? <p className="svc-zigzag__panel_body">{description}</p> : null}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceZigzagTimeline;
