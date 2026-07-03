'use client';
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // Next.js route hook
import Image from "next/image";
import Link from "next/link";
import ExpertPopup from "./ExpertPopup";
import MobileNavDrawer from "./MobileNavDrawer";
import ServicesMegaMenuIcon from "./ServicesMegaMenuIcon";
import { FaHome, FaPaperPlane } from "react-icons/fa";
import { SERVICES_MENU_ITEMS } from "../data/servicesMenuData";
import { NAV_PRIMARY_LINKS } from "../data/navLinks";
import logo from "../assets/logonew.png";

const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;
const CONTACT_EMAIL = "info@vexoweb.lk";
const CONTACT_PHONE = "+94 74 030 9534";
const CONTACT_PHONE_HREF = "tel:+94740309534";
const WHATSAPP_HREF = "https://wa.me/94740309534";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu drawer toggle
  const [mobileDropdown, setMobileDropdown] = useState(null); // Desktop-only legacy (unused on mobile drawer)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop dropdown active state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Proposal popup state
  const [popupService, setPopupService] = useState("");
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const navLinksRef = useRef(null);
  const closeTimerRef = useRef(null);

  // Hook to detect current active route pathname
  const pathname = usePathname(); 
  const isHomePage = pathname === "/"; // True if on home page root

  const isDesktop = () => typeof window !== "undefined" && window.innerWidth > DESKTOP_BREAKPOINT;

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = (id) => {
    if (!isDesktop()) return;
    clearCloseTimer();
    setActiveDropdown(id);
  };

  const scheduleCloseDropdown = () => {
    if (!isDesktop()) return;
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, CLOSE_DELAY_MS);
  };

  const toggleMobileDropdown = (id) => {
    if (isDesktop()) return;
    setMobileDropdown((prev) => (prev === id ? null : id));
  };

  const handleDropdownButtonClick = (id) => {
    if (isDesktop()) {
      clearCloseTimer();
      setActiveDropdown((prev) => (prev === id ? null : id));
    } else {
      toggleMobileDropdown(id);
    }
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  const openMobileMenu = () => {
    setOpen(true);
    setMobileServicesOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      if (navLinksRef.current) {
        navLinksRef.current.scrollTop = 0;
      }
    });
  }, [open]);

  const handleOpenConsultation = () => {
    closeMobileMenu();
    setIsPopupOpen(true);
  };

  useEffect(() => {
    const handleOpenProposal = (event) => {
      const service = event?.detail?.service;
      if (service) {
        setPopupService(service);
      }
      setIsPopupOpen(true);
    };

    window.addEventListener("vexoweb:open-proposal", handleOpenProposal);
    return () => window.removeEventListener("vexoweb:open-proposal", handleOpenProposal);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupService("");
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isDesktop()) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    const handleResize = () => {
      if (isDesktop()) {
        setMobileDropdown(null);
      } else {
        setActiveDropdown(null);
      }
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--mobile-nav-drawer-top",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    // Set initial state on mount to avoid SSR mismatch
    handleResize();

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      clearCloseTimer();
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header || typeof ResizeObserver === "undefined") return undefined;

    const syncDrawerTop = () => {
      document.documentElement.style.setProperty(
        "--mobile-nav-drawer-top",
        `${header.offsetHeight}px`
      );
    };

    syncDrawerTop();
    const observer = new ResizeObserver(syncDrawerTop);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Hover triggers for desktop
  const dropdownHoverProps = (id) => ({
    onMouseEnter: () => openDropdown(id),
    onMouseLeave: scheduleCloseDropdown,
  });

  const dropdownContentHoverProps = {
    onMouseEnter: clearCloseTimer,
    onMouseLeave: scheduleCloseDropdown,
  };

  return (
    <header className="navbar-wrapper" ref={headerRef}>
      
    {/* 1. TOPBAR SECTION (Blue contact strip) */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span className="topbar-left-content">
              <span className="topbar-tagline-row1">
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="topbar-globe-icon"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>

                <span className="topbar-tagline-line1">
                  <span>Webdesign &amp; Software Development in </span>
                  <span className="sky-blue">Eastern Province</span>
                  <span className="topbar-inline-divider" aria-hidden="true">|</span>
                </span>
              </span>
              <span className="topbar-tagline-line2">Eastern Province&apos;s Digital Partner</span>
            </span>
          </div>

          <div className="topbar-right">
            <a href={CONTACT_PHONE_HREF} className="topbar-link topbar-phone" title="Call Us">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{CONTACT_PHONE}</span>
            </a>

            <span className="topbar-divider" aria-hidden="true">|</span>

            <a href={`mailto:${CONTACT_EMAIL}`} className="topbar-link topbar-email" title="Email Us">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{CONTACT_EMAIL}</span>
            </a>

            <span className="topbar-divider" aria-hidden="true">|</span>

            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="topbar-link wa-btn" title="Chat on WhatsApp">
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="wa-icon"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
      {/* 2. NAVIGATION BAR SECTION */}
      <div className="nav-container" ref={navRef}>
        <div className="nav-brand">
         {/* Inside your JSX */}
<div className="nav-logo" onClick={handleLogoClick}>
  <Image
    src={logo}
    alt="Vexoweb Logo"
    width={280}
    height={145}
    className="logo-desktop"
    priority
  />
  <Image
    src={logo}
    alt="Vexoweb Logo"
    width={142}
    height={36}
    className="logo-mobile"
    priority
  />
</div>

          <span className="nav-brand-separator" aria-hidden="true" />

          <div className="nav-tagline">
            <div>Web Intelligences</div>
            <div>That Drives</div>
            <div>Revenue®</div>
          </div>
        </div>

        {/* 3. NAVIGATION MENUS LIST */}
        <div className="nav-actions">
        <nav className={`nav-links ${open ? "open" : ""}`} ref={navLinksRef}>
          <div className="nav-links-desktop">
          {/* 
             Conditional "Home" Button 
             - Renders as an unlinked <span> when on the Home page (/).
             - Renders as a clickable Next.js <Link> when on any other subpage.
             - Includes a responsive inline SVG Home Icon.
          */}
          {isHomePage ? (
            <span className="nav-home-btn active">
              <FaHome className="nav-home-btn__icon" aria-hidden="true" />
              <span className="nav-home-btn__label">Home</span>
            </span>
          ) : (
            <Link href="/" className="nav-home-btn">
              <FaHome className="nav-home-btn__icon" aria-hidden="true" />
              <span className="nav-home-btn__label">Home</span>
            </Link>
          )}
          
          {/* Services mega menu */}
          <div
            className={`dropdown dropdown-services ${mobileDropdown === 'services' ? "open" : ""} ${activeDropdown === 'services' ? "active" : ""}`}
            {...dropdownHoverProps('services')}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick('services')}
              aria-expanded={activeDropdown === 'services' || mobileDropdown === 'services'}
            >
              Services <span className="arrow-indicator">▾</span>
            </button>

            <div className="dropdown-content services-mega-menu" {...dropdownContentHoverProps}>
              {SERVICES_MENU_ITEMS.map((service) => (
                <div key={service.id} className="services-mega-menu__item">
                  <div
                    className="services-mega-menu__icon"
                    style={{ backgroundColor: service.accentBg, color: service.accent }}
                  >
                    <ServicesMegaMenuIcon name={service.icon} />
                  </div>
                  <h4 className="services-mega-menu__title">{service.title}</h4>
                  <p className="services-mega-menu__desc">{service.description}</p>
                  <Link
                    href={service.href}
                    className="services-mega-menu__link"
                    style={{ color: service.accent }}
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {NAV_PRIMARY_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return isActive ? (
              <span key={item.href} className="nav-primary-link active" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link key={item.href} href={item.href} className="nav-primary-link">
                {item.label}
              </Link>
            );
          })}

          </div>

          <MobileNavDrawer
            isOpen={open}
            isHomePage={isHomePage}
            servicesOpen={mobileServicesOpen}
            contactEmail={CONTACT_EMAIL}
            whatsappHref={WHATSAPP_HREF}
            onToggleServices={() => setMobileServicesOpen((prev) => !prev)}
            onClose={closeMobileMenu}
            onOpenConsultation={handleOpenConsultation}
          />
        </nav>
        
        {/* Proposal button */}
        <button className="contact-btn" onClick={() => setIsPopupOpen(true)}>
          <FaPaperPlane className="contact-btn-icon" aria-hidden="true" />
          <span className="contact-btn-label contact-btn-label--full">Get a Proposal</span>
          <span className="contact-btn-label contact-btn-label--short">Free Proposal</span>
        </button>

        {/* Mobile Hamburger toggle */}
        <button
          type="button"
          className={`hamburger ${open ? 'is-open' : ''}`}
          onClick={() => (open ? closeMobileMenu() : openMobileMenu())}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg viewBox="0 0 30 18" width="30" height="18" aria-hidden="true" focusable="false">
            <rect className="hamburger-line hamburger-line--1" x="0" y="0" width="30" height="2.5" rx="1.25" />
            <rect className="hamburger-line hamburger-line--2" x="0" y="7.75" width="30" height="2.5" rx="1.25" />
            <rect className="hamburger-line hamburger-line--3" x="0" y="15.5" width="30" height="2.5" rx="1.25" />
          </svg>
        </button>
        </div>

        {/* Modal Popup Connection */}
        <ExpertPopup
          open={isPopupOpen}
          onClose={handleClosePopup}
          preSelectedService={popupService || undefined}
        />
      </div>
    </header>
  );
};

export default Navbar;