import React from 'react';

const HeroTrustText = ({ text, variant = 'centered' }) => {
  if (!text) return null;

  if (variant === 'contact') {
    return <div className="cp__hero_trust">{text}</div>;
  }

  if (variant === 'bordered') {
    return <p className="hero-trust-text">{text}</p>;
  }

  return (
    <p className="hero-trust-text hero-trust-text--centered ecd__hero_trust_text_centered">
      {text}
    </p>
  );
};

export default HeroTrustText;
