import React from 'react';
import Link from 'next/link';
import {
  FaChevronDown,
  FaEnvelope,
  FaHome,
  FaLock,
  FaCalendarAlt,
  FaShieldAlt,
  FaStar,
  FaWhatsapp,
  FaGlobeAsia,
  FaClock,
  FaCode,
  FaChevronRight,
} from 'react-icons/fa';
import { MOBILE_SERVICE_CATEGORIES, MOBILE_TRUST_ITEMS } from '../data/mobileMenuData';
import { NAV_PRIMARY_LINKS } from '../data/navLinks';
import ServicesMegaMenuIcon from './ServicesMegaMenuIcon';
import { SERVICES_MENU_ITEMS } from '../data/servicesMenuData';

const TRUST_ICONS = [FaStar, FaGlobeAsia, FaClock, FaShieldAlt];

const MobileNavDrawer = ({
  isOpen,
  isHomePage,
  servicesOpen,
  contactEmail,
  whatsappHref,
  onToggleServices,
  onClose,
  onOpenConsultation,
}) => {
  const handleNavClick = () => {
    onClose();
  };

  return (
    <nav className={`mobile-nav-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
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
              const meta = SERVICES_MENU_ITEMS.find((s) => s.id === category.id);
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="mobile-service-card mobile-service-card--link"
                  onClick={handleNavClick}
                >
                  <span
                    className="mobile-service-card__icon-wrap"
                    style={meta ? { backgroundColor: meta.accentBg, color: meta.accent } : undefined}
                  >
                    <ServicesMegaMenuIcon name={meta?.icon || 'code'} />
                  </span>
                  <span className="mobile-service-card__text">
                    <strong>{category.title}</strong>
                    <span>{category.description}</span>
                  </span>
                  <FaChevronRight className="mobile-service-card__arrow" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        ) : null}

        {NAV_PRIMARY_LINKS.map((item) => (
          <Link key={item.href} href={item.href} className="mobile-nav-item" onClick={handleNavClick}>
            <span>{item.label}</span>
          </Link>
        ))}
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
    </nav>
  );
};

export default MobileNavDrawer;
