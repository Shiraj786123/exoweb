import React from 'react';

const CUBE_PALETTE = [
  { front: '#2563eb', top: '#60a5fa', side: '#1d4ed8' },
  { front: '#9333ea', top: '#c084fc', side: '#7e22ce' },
  { front: '#0891b2', top: '#22d3ee', side: '#0e7490' },
  { front: '#1e3a8a', top: '#3b82f6', side: '#172554' },
  { front: '#16a34a', top: '#4ade80', side: '#15803d' },
  { front: '#ea580c', top: '#fb923c', side: '#c2410c' },
  { front: '#db2777', top: '#f472b6', side: '#be185d' },
  { front: '#6366f1', top: '#a5b4fc', side: '#4338ca' },
];

const getTitle = (item) => item.title || item.label || '';

const getDescription = (item) => {
  if (item.description) return item.description;
  if (item.points?.length) return item.points[0];
  return '';
};

const resolveIcon = (item, iconMap, fallbackIcon) => {
  const title = getTitle(item);
  if (item.icon && iconMap[item.icon]) return iconMap[item.icon];
  if (title && iconMap[title]) return iconMap[title];
  return fallbackIcon;
};

const IsometricStaircaseFeatures = ({
  items,
  iconMap = {},
  fallbackIcon: FallbackIcon,
  perRow,
  straight = false,
}) => {
  if (!items?.length) return null;

  const rowSize = perRow ?? (straight ? items.length : 5);
  const rows = [];
  for (let i = 0; i < items.length; i += rowSize) {
    rows.push(items.slice(i, i + rowSize));
  }

  return (
    <div className={`iso-staircase${straight ? ' iso-staircase--straight' : ''}`}>
      {rows.map((rowItems, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={`iso-staircase__row iso-staircase__row--cols-${rowItems.length}`}
          style={{ '--iso-cols': rowItems.length }}
        >
          {rowItems.map((item, indexInRow) => {
            const globalIndex = rowIndex * rowSize + indexInRow;
            const colors = CUBE_PALETTE[globalIndex % CUBE_PALETTE.length];
            const Icon = resolveIcon(item, iconMap, FallbackIcon);
            const title = getTitle(item);
            const description = getDescription(item);
            const stepOffset = straight ? 0 : indexInRow;

            return (
              <article
                key={title || globalIndex}
                className="iso-staircase__step"
                style={{
                  '--iso-front': colors.front,
                  '--iso-top': colors.top,
                  '--iso-side': colors.side,
                  '--iso-step': stepOffset,
                }}
              >
                <div className="iso-staircase__cube_wrap" aria-hidden="true">
                  <div className="iso-cube">
                    <div className="iso-cube__top" />
                    <div className="iso-cube__side" />
                    <div className="iso-cube__front">
                      {Icon ? <Icon /> : null}
                    </div>
                  </div>
                </div>
                <div className="iso-staircase__copy">
                  <p className="iso-staircase__step_label">Step {globalIndex + 1}</p>
                  <h5 className="ecd-h5 iso-staircase__step_title">{title}</h5>
                  {description ? <p className="iso-staircase__step_desc">{description}</p> : null}
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default IsometricStaircaseFeatures;
