import React from 'react';

const NAV_ITEMS = [
  { label: 'Dashboard', active: true },
  { label: 'Inventory', active: false },
  { label: 'Sales', active: false },
  { label: 'Reports', active: false },
];

const METRICS = [
  { label: 'Revenue', value: 'LKR 2.4M', color: '#2563eb' },
  { label: 'Orders', value: '1,284', color: '#16a34a' },
  { label: 'Stock Items', value: '3,420', color: '#9333ea' },
];

const CHART_BARS = [40, 65, 45, 80, 55, 90, 70];

const SoftwareHeroVisual = () => (
  <div className="ecd-hero__visual" aria-hidden="true">
    <div className="ecd-hero__laptop">
      <div className="ecd-hero__laptop_bar">
        <span />
        <span />
        <span />
      </div>
      <div className="ecd-hero__store ecd-hero__store--software">
        <div className="ecd-hero__sw_nav">
          {NAV_ITEMS.map((item) => (
            <span
              key={item.label}
              className={`ecd-hero__sw_nav_item${item.active ? ' ecd-hero__sw_nav_item--active' : ''}`}
            >
              {item.label}
            </span>
          ))}
        </div>
        <div className="ecd-hero__sw_main">
          <div className="ecd-hero__sw_header">
            <strong>Business Dashboard</strong>
            <span>ERP · Live</span>
          </div>
          <div className="ecd-hero__sw_metrics">
            {METRICS.map((metric) => (
              <div key={metric.label} className="ecd-hero__sw_metric" style={{ '--metric-color': metric.color }}>
                <small>{metric.label}</small>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
          <div className="ecd-hero__sw_chart">
            <span className="ecd-hero__sw_chart_label">Monthly Performance</span>
            <div className="ecd-hero__sw_bars">
              {CHART_BARS.map((height, i) => (
                <span key={i} className="ecd-hero__sw_bar" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ecd-hero__phone">
      <div className="ecd-hero__phone_notch" />
      <div className="ecd-hero__phone_screen">
        <div className="ecd-hero__phone_header">
          <strong>ERP</strong>
          <span className="ecd-hero__phone_menu" />
        </div>
        <div className="ecd-hero__phone_hero ecd-hero__phone_hero--software">
          <small>Today&apos;s Overview</small>
          <strong>Sales +18%</strong>
        </div>
        <div className="ecd-hero__sw_phone_stats">
          <div className="ecd-hero__sw_phone_stat">
            <small>Orders</small>
            <strong>47</strong>
          </div>
          <div className="ecd-hero__sw_phone_stat">
            <small>Stock</small>
            <strong>OK</strong>
          </div>
        </div>
        <div className="ecd-hero__phone_blocks">
          <div className="ecd-hero__phone_block" />
          <div className="ecd-hero__phone_block ecd-hero__phone_block--short" />
        </div>
      </div>
    </div>
    <div className="ecd-hero__plant" />
  </div>
);

export default SoftwareHeroVisual;
