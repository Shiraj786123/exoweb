import React from 'react';
import productWatch from '../../assets/mobile/shop/product-watch.jpg';
import productSneakers from '../../assets/mobile/shop/product-sneakers.jpg';
import productBackpack from '../../assets/mobile/shop/product-backpack.jpg';

const imgSrc = (img) => img?.src || img;

const FEATURES = [
  { title: 'Shop', color: '#2563eb' },
  { title: 'Book', color: '#16a34a' },
  { title: 'Track', color: '#9333ea' },
];

const PRODUCTS = [
  { name: 'Smart Watch', price: 'LKR 24,900', image: productWatch },
  { name: 'Sneakers', price: 'LKR 8,900', image: productSneakers },
  { name: 'Backpack', price: 'LKR 5,900', image: productBackpack },
];

const MobileHeroVisual = () => (
  <div className="ecd-hero__visual ecd-hero__visual--mobile-app" aria-hidden="true">
    <div className="ecd-hero__phone ecd-hero__phone--hero-app">
      <div className="ecd-hero__phone_notch" />
      <div className="ecd-hero__phone_screen ecd-hero__phone_screen--app">
        <div className="ecd-hero__phone_header">
          <strong>VEXO APP</strong>
          <span className="ecd-hero__phone_cart" />
        </div>
        <div className="ecd-hero__phone_hero ecd-hero__phone_hero--mobile">
          <small>Your Business</small>
          <strong>On Every Device</strong>
        </div>
        <div className="ecd-hero__mob_features">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="ecd-hero__mob_feature" style={{ '--feat-color': feature.color }}>
              <span className="ecd-hero__mob_feature_dot" />
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
        <div className="ecd-hero__phone_products ecd-hero__phone_products--mobile">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="ecd-hero__phone_product">
              <img src={imgSrc(product.image)} alt="" />
              <span>{product.name}</span>
              <strong>{product.price}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="ecd-hero__plant" />
  </div>
);

export default MobileHeroVisual;
