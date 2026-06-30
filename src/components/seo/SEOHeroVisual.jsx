import React from 'react';

const CHART_HEIGHTS = [32, 48, 58, 72, 88, 100];

const RANKINGS = [
  { position: '#3', keyword: 'SEO Services Batticaloa', change: '+5' },
  { position: '#5', keyword: 'Local SEO Eastern Province', change: '+3' },
  { position: '#8', keyword: 'Digital Marketing Ampara', change: '+2' },
];

const SEOHeroVisual = () => (
  <div className="ecd-hero__visual" aria-hidden="true">
    <div className="ecd-hero__laptop">
      <div className="ecd-hero__laptop_bar">
        <span />
        <span />
        <span />
      </div>
      <div className="ecd-hero__store ecd-hero__store--seo">
        <div className="ecd-hero__store_header">
          <strong>SEO DASHBOARD</strong>
          <span>Rankings · Traffic · Analytics</span>
        </div>
        <div className="ecd-hero__seo_metrics">
          <div className="ecd-hero__seo_metric">
            <small>Organic Traffic</small>
            <strong style={{ color: '#16a34a' }}>+186%</strong>
          </div>
          <div className="ecd-hero__seo_metric">
            <small>Keywords Top 10</small>
            <strong style={{ color: '#2563eb' }}>47</strong>
          </div>
          <div className="ecd-hero__seo_metric">
            <small>Monthly Enquiries</small>
            <strong style={{ color: '#9333ea' }}>2×</strong>
          </div>
        </div>
        <div className="ecd-hero__seo_chart">
          <div className="ecd-hero__seo_chart_header">
            <span>Organic Traffic Growth</span>
            <strong>+186%</strong>
          </div>
          <div className="ecd-hero__seo_chart_bars">
            {CHART_HEIGHTS.map((height, index) => (
              <div
                key={index}
                className="ecd-hero__seo_chart_bar"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="ecd-hero__seo_chart_labels">
            <span>M1</span>
            <span>M2</span>
            <span>M3</span>
            <span>M4</span>
            <span>M5</span>
            <span>M6</span>
          </div>
        </div>
        <div className="ecd-hero__seo_rankings">
          {RANKINGS.map((item) => (
            <div key={item.keyword} className="ecd-hero__seo_ranking">
              <span className="ecd-hero__seo_ranking_pos">{item.position}</span>
              <span className="ecd-hero__seo_ranking_kw">{item.keyword}</span>
              <span className="ecd-hero__seo_ranking_chg">{item.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="ecd-hero__phone">
      <div className="ecd-hero__phone_notch" />
      <div className="ecd-hero__phone_screen">
        <div className="ecd-hero__phone_header">
          <strong>Google</strong>
          <span className="ecd-hero__phone_search" />
        </div>
        <div className="ecd-hero__phone_hero ecd-hero__phone_hero--seo">
          <small>Search Results</small>
          <strong>SEO Services</strong>
        </div>
        <div className="ecd-hero__seo_phone_results">
          {RANKINGS.slice(0, 2).map((item) => (
            <div key={item.keyword} className="ecd-hero__seo_phone_result">
              <span className="ecd-hero__seo_phone_pos">{item.position}</span>
              <div>
                <strong>vexoweb.com</strong>
                <span>{item.keyword}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="ecd-hero__plant" />
  </div>
);

export default SEOHeroVisual;
