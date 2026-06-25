import React from 'react';
import Link from 'next/link';
import {
  FaBriefcase,
  FaChartBar,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaEnvelope,
  FaHome,
  FaLock,
  FaCalendarAlt,
  FaShieldAlt,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaWhatsapp,
  FaGlobeAsia,
  FaClock,
} from 'react-icons/fa';
import { MOBILE_SERVICE_CATEGORIES, MOBILE_TRUST_ITEMS } from '../data/mobileMenuData';

const CATEGORY_ICONS = {
  software: FaCode,
  website: FaBriefcase,
  seo: FaChartBar,
  ecommerce: FaShoppingCart,
};

const TRUST_ICONS = [FaStar, FaGlobeAsia, FaClock, FaShieldAlt];

const MobileNavDrawer = ({
  isOpen,
  isHomePage,
  servicesOpen,
  activeCategoryId,
  contactEmail,
  whatsappHref,
  onToggleServices,
  onSelectCategory,
  onBackFromCategory,
  onClose,
  onOpenConsultation,
}) => {
  const activeCategory = MOBILE_SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId);

  const handleNavClick = () => {
    onClose();
    onBackFromCategory();
  };

  return (
    <nav className={`mobile-nav-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      {!activeCategoryId ? (
        <>
          <div className="mobile-nav-drawer__primary">
            {isHomePage ? (
              <span className="mobile-nav-item mobile-nav-item--active">
                <FaHome className="mobile-nav-item__icon" aria-hidden="true" />
                <span>Home</span>
              </span>
            ) : (
              <Link href="/" className="mobile-nav-item" onClick={handleNavClick}>
                <FaHome className="mobile-nav-item__icon" aria-hidden="true" />
                <span>Home</span>
              </Link>
            )}

            <button
              type="button"
              className={`mobile-nav-item mobile-nav-item--toggle ${servicesOpen ? 'is-expanded' : ''}`}
              onClick={onToggleServices}
              aria-expanded={servicesOpen}
            >
              <span className="mobile-nav-item__left">
                <FaCode className="mobile-nav-item__icon" aria-hidden="true" />
                <span>Services</span>
              </span>
              <FaChevronDown className="mobile-nav-item__chevron" aria-hidden="true" />
            </button>

            {servicesOpen ? (
              <div className="mobile-service-cards">
                {MOBILE_SERVICE_CATEGORIES.map((category) => {
                  const Icon = CATEGORY_ICONS[category.id] || FaCode;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      className="mobile-service-card"
                      onClick={() => onSelectCategory(category.id)}
                    >
                      <span className="mobile-service-card__icon-wrap">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="mobile-service-card__text">
                        <strong>{category.title}</strong>
                        <span>{category.description}</span>
                      </span>
                      <FaChevronRight className="mobile-service-card__arrow" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            ) : null}

            <Link href="/about" className="mobile-nav-item" onClick={handleNavClick}>
              <FaUser className="mobile-nav-item__icon" aria-hidden="true" />
              <span>About Us</span>
            </Link>

            <Link href="/contact" className="mobile-nav-item" onClick={handleNavClick}>
              <FaEnvelope className="mobile-nav-item__icon" aria-hidden="true" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="mobile-nav-drawer__scroll">
          <div className="mobile-nav-drawer__contact-box">
            <a href={`mailto:${contactEmail}`} className="mobile-contact-row" onClick={handleNavClick}>
              <FaEnvelope aria-hidden="true" />
              <span>{contactEmail}</span>
            </a>
            <a
              href={whatsappHref}
              className="mobile-contact-row"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              <FaWhatsapp aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mobile-nav-drawer__trust-box">
            {MOBILE_TRUST_ITEMS.map((item, index) => {
              const TrustIcon = TRUST_ICONS[index] || FaStar;
              return (
                <div key={item.title} className="mobile-trust-item">
                  <span className="mobile-trust-item__icon">
                    <TrustIcon aria-hidden="true" />
                  </span>
                  <span className="mobile-trust-item__text">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mobile-nav-drawer__footer">
            <button type="button" className="mobile-consultation-btn" onClick={onOpenConsultation}>
              <span className="mobile-consultation-btn__icon" aria-hidden="true">
                <FaCalendarAlt />
              </span>
              <span>Get Free Consultation</span>
              <FaChevronRight aria-hidden="true" />
            </button>
            <p className="mobile-consultation-note">
              <FaLock aria-hidden="true" />
              <span>Your information is 100% secure</span>
            </p>
          </div>
          </div>
        </>
      ) : (
        <div className="mobile-nav-drawer__submenu">
          <button type="button" className="mobile-submenu-back" onClick={onBackFromCategory}>
            <FaChevronLeft aria-hidden="true" />
            <span>Back to Services</span>
          </button>

          <h3 className="mobile-submenu-title">{activeCategory?.title}</h3>

          <div className="mobile-submenu-scroll">
            {activeCategory?.sections.map((section) => (
              <div key={section.heading} className="mobile-submenu-section">
                <h4>{section.heading}</h4>
                {section.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="mobile-submenu-link"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavDrawer;
