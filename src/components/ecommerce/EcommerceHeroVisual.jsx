import React from 'react';
import productWatch from '../../assets/mobile/shop/product-watch.jpg';
import productSneakers from '../../assets/mobile/shop/product-sneakers.jpg';
import productBackpack from '../../assets/mobile/shop/product-backpack.jpg';
import productPerfume from '../../assets/mobile/shop/product-perfume.jpg';

const imgSrc = (img) => img?.src || img;

const PRODUCTS = [
  { name: 'Wireless Headphones', price: 'LKR 12,900', image: productWatch },
  { name: 'Running Shoes', price: 'LKR 8,900', image: productSneakers },
  { name: 'Leather Backpack', price: 'LKR 5,900', image: productBackpack },
  { name: 'Luxury Perfume', price: 'LKR 4,900', image: productPerfume },
];

const EcommerceHeroVisual = () => (
  <div className="ecd-hero__visual" aria-hidden="true">
    <div className="ecd-hero__laptop">
      <div className="ecd-hero__laptop_bar">
        <span />
        <span />
        <span />
      </div>
      <div className="ecd-hero__store">
        <div className="ecd-hero__store_header">
          <strong>VEXO STORE</strong>
          <span>Shop · Cart · Account</span>
        </div>
        <div className="ecd-hero__store_banner">
          <small>New Arrivals</small>
          <strong>Premium Collection 2026</strong>
        </div>
        <div className="ecd-hero__store_grid">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="ecd-hero__store_item">
              <div className="ecd-hero__store_img">
                <img src={imgSrc(product.image)} alt="" />
              </div>
              <span>{product.name}</span>
              <strong>{product.price}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="ecd-hero__phone">
      <div className="ecd-hero__phone_notch" />
      <div className="ecd-hero__phone_screen">
        <div className="ecd-hero__phone_header">
          <strong>VEXO</strong>
          <span className="ecd-hero__phone_cart" />
        </div>
        <div className="ecd-hero__phone_hero">
          <small>Featured</small>
          <strong>Shop the Latest</strong>
        </div>
        <div className="ecd-hero__phone_products">
          {PRODUCTS.slice(0, 2).map((product) => (
            <div key={product.name} className="ecd-hero__phone_product">
              <img src={imgSrc(product.image)} alt="" />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="ecd-hero__plant" />
  </div>
);

export default EcommerceHeroVisual;
