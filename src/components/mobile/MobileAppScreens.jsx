import React from 'react';
import catAll from '../../assets/mobile/shop/cat-all.jpg';
import catFashion from '../../assets/mobile/shop/cat-fashion.jpg';
import catTech from '../../assets/mobile/shop/cat-tech.jpg';
import catHome from '../../assets/mobile/shop/cat-home.jpg';
import productWatch from '../../assets/mobile/shop/product-watch.jpg';
import productSneakers from '../../assets/mobile/shop/product-sneakers.jpg';
import productBackpack from '../../assets/mobile/shop/product-backpack.jpg';
import productPerfume from '../../assets/mobile/shop/product-perfume.jpg';
import bizAvatar from '../../assets/mobile/biz/avatar-alex.jpg';
import bizIconSales from '../../assets/mobile/biz/icon-sales.jpg';
import bizIconOrders from '../../assets/mobile/biz/icon-orders.jpg';
import bizTaskOrders from '../../assets/mobile/biz/task-orders.jpg';
import bizTaskInventory from '../../assets/mobile/biz/task-inventory.jpg';
import bizTaskShipping from '../../assets/mobile/biz/task-shipping.jpg';
import secureLogo from '../../assets/mobile/secure/logo-shield.jpg';
import secureLogin from '../../assets/mobile/secure/feat-login.jpg';
import secureEncrypt from '../../assets/mobile/secure/feat-encrypt.jpg';
import secureCloud from '../../assets/mobile/secure/feat-cloud.jpg';
import secureProfile from '../../assets/mobile/secure/user-profile.jpg';

const imgSrc = (img) => img?.src || img;

const SHOP_CATEGORIES = [
  { name: 'All', image: catAll },
  { name: 'Fashion', image: catFashion },
  { name: 'Tech', image: catTech },
  { name: 'Home', image: catHome },
];

const SHOP_PRODUCTS = [
  { name: 'Smart Watch', price: '$199', image: productWatch },
  { name: 'Sneakers', price: '$79', image: productSneakers },
  { name: 'Backpack', price: '$59', image: productBackpack },
  { name: 'Perfume', price: '$49', image: productPerfume },
];

const BIZ_METRICS = [
  { label: 'Sales', value: '$24.5k', image: bizIconSales },
  { label: 'Orders', value: '320', image: bizIconOrders },
];

const BIZ_TASKS = [
  { text: 'Review purchase orders', image: bizTaskOrders },
  { text: 'Low stock alert', image: bizTaskInventory },
  { text: 'Confirm shipments', image: bizTaskShipping },
];

const SECURE_FEATURES = [
  { label: 'Secure Login', image: secureLogin },
  { label: 'Encrypted', image: secureEncrypt },
  { label: 'Cloud Sync', image: secureCloud },
];

const StatusBar = ({ dark }) => (
  <div className={`mob-screen__status${dark ? ' mob-screen__status--dark' : ''}`}>
    <span>9:41</span>
    <span className="mob-screen__status_icons">●●● ▮</span>
  </div>
);

const BottomNav = ({ items, active = 0, theme = 'light' }) => (
  <div className={`mob-screen__nav mob-screen__nav--${theme}`}>
    {items.map((item, i) => (
      <span key={item} className={i === active ? 'is-active' : ''}>{item}</span>
    ))}
  </div>
);

export const ShopAppScreen = () => (
  <div className="mob-screen mob-screen--shop">
    <StatusBar />
    <div className="mob-screen__shop_header">
      <strong>ShopEase</strong>
      <span className="mob-screen__cart" aria-hidden="true" />
    </div>
    <div className="mob-screen__search">Search products, brands and more</div>
    <div className="mob-screen__cats">
      {SHOP_CATEGORIES.map((c, i) => (
        <div key={c.name} className={i === 0 ? 'is-active' : ''}>
          <i
            style={{ backgroundImage: `url(${imgSrc(c.image)})` }}
            role="img"
            aria-label={`${c.name} shopping category`}
          />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
    <div className="mob-screen__banner">
      <div>
        <small>Summer Sale</small>
        <strong>Up to 50% OFF</strong>
      </div>
    </div>
    <div className="mob-screen__products">
      {SHOP_PRODUCTS.map((p) => (
        <div key={p.name} className="mob-screen__product">
          <div className="mob-screen__product_img">
            <img src={imgSrc(p.image)} alt={`${p.name} product in mobile shopping app mockup`} />
          </div>
          <span>{p.name}</span>
          <strong>{p.price}</strong>
        </div>
      ))}
    </div>
    <BottomNav items={['Home', 'Shop', 'Deals', 'Cart', 'Account']} />
  </div>
);

export const BizAppScreen = () => (
  <div className="mob-screen mob-screen--biz">
    <StatusBar dark />
    <div className="mob-screen__biz_header">
      <div>
        <strong>Good morning, Alex</strong>
        <small>Here&apos;s your business today</small>
      </div>
      <img className="mob-screen__biz_avatar" src={imgSrc(bizAvatar)} alt="Business owner profile in Vexoweb mobile app mockup" />
    </div>
    <div className="mob-screen__biz_body">
      <div className="mob-screen__metrics">
        {BIZ_METRICS.map((m) => (
          <div key={m.label}>
            <img className="mob-screen__metric_icon" src={imgSrc(m.image)} alt={`${m.label} business metric icon`} />
            <small>{m.label}</small>
            <strong>{m.value}</strong>
          </div>
        ))}
      </div>
      <div className="mob-screen__chart">
        <p className="mob-screen__chart_label">Weekly Revenue</p>
        <div className="mob-screen__chart_bars">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="mob-screen__tasks">
        <p className="mob-screen__label">Tasks</p>
        {BIZ_TASKS.map((t) => (
          <div key={t.text} className="mob-screen__task">
            <img src={imgSrc(t.image)} alt={`${t.text} task icon`} />
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
    <BottomNav items={['Dashboard', 'Stock', 'Orders', 'Reports', 'More']} theme="light" />
  </div>
);

export const SecureAppScreen = () => (
  <div className="mob-screen mob-screen--secure">
    <StatusBar dark />
    <div className="mob-screen__secure_hero">
      <img className="mob-screen__secure_logo" src={imgSrc(secureLogo)} alt="SecureHub enterprise security app logo" />
      <strong>SecureHub</strong>
      <small>Enterprise Protection</small>
    </div>
    <div className="mob-screen__secure_features">
      {SECURE_FEATURES.map((f) => (
        <div key={f.label} className="mob-screen__secure_feat">
          <img src={imgSrc(f.image)} alt={`${f.label} security feature icon`} />
          <span>{f.label}</span>
        </div>
      ))}
    </div>
    <div className="mob-screen__secure_form">
      <div className="mob-screen__secure_welcome">
        <img src={imgSrc(secureProfile)} alt="User profile in secure mobile app login mockup" />
        <p>Welcome back</p>
      </div>
      <div className="mob-screen__input">you@company.com</div>
      <div className="mob-screen__input">••••••••</div>
      <button type="button">Sign In</button>
    </div>
    <div className="mob-screen__secure_note">Protected with enterprise-grade security</div>
    <BottomNav items={['Home', 'Vault', 'Keys', 'Audit', 'Settings']} theme="dark" />
  </div>
);

export const APP_SCREENS = {
  customers: ShopAppScreen,
  business: BizAppScreen,
  secure: SecureAppScreen,
};
