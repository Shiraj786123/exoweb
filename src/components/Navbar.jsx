'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ExpertPopup from "./ExpertPopup";
import logo from "../assets/navbarimg.png";

const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu drawer toggle
  const [mobileDropdown, setMobileDropdown] = useState(null); // Mobile accordion toggle
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop dropdown active state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Proposal popup state
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

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
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      clearCloseTimer();
    };
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
    <header className="navbar-wrapper">
      
      {/* 1. TOPBAR SECTION (Blue contact strip) */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Serving Businesses in <span className="sky-blue">UK & USA</span> | 150+ Projects Delivered
            </span>
          </div>
          <div className="topbar-right">
            <a href="mailto:info@zonzoctech.com" className="topbar-link" title="Email Us">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            <a href="https://wa.me/94740309534" target="_blank" rel="noopener noreferrer" className="topbar-link wa-btn" title="Chat on WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="wa-icon">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR SECTION */}
      <div className="nav-container" ref={navRef}>
        <div className="nav-brand">
          <div className="nav-logo" onClick={handleLogoClick}>
            <Image
              src={logo}
              alt="Zonzoctech Logo"
              width={160}
              height={80}
              className="logo-desktop"
              priority
            />
            <Image
              src={logo}
              alt="Zonzoctech Logo"
              width={120}
              height={60}
              className="logo-mobile"
              priority
            />
          </div>

          <div className="nav-tagline">
            <div>Web Intelligences</div>
            <div>That Drives</div>
            <div>Revenue®</div>
          </div>
        </div>

        {/* 3. NAVIGATION MENUS LIST */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          
          {/* Dropdown 1: SOFTWARE DEV (id: 3 - WIDE) */}
          <div
            className={`dropdown dropdown-wide ${mobileDropdown === 3 ? "open" : ""} ${activeDropdown === 3 ? "active" : ""}`}
            {...dropdownHoverProps(3)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(3)}
              aria-expanded={activeDropdown === 3 || mobileDropdown === 3}
            >
              SOFTWARE DEV <span className="arrow-indicator">▾</span>
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>Custom Software Development</h4>
                <Link href="/software-development">Enterprise Software Solutions</Link>
                <Link href="/full-stack-web-development">Custom Web Application Development</Link>
              </div>

              <div className="dropdown-column">
                <h4>Web &amp; Mobile Experiences</h4>
                <Link href="/seo-services">Android &amp; iOS App Development</Link>  
                <Link href="/ai-software-development">Responsive Website Development</Link>
              </div>

              <div className="dropdown-column">
                <h4>Cloud, Backend &amp; DevOps</h4> 
                <Link href="/full-stack-web-development">DevOps &amp; Deployment Automation</Link>   
                <Link href="/ai-software-development">Cloud Solutions</Link>
              </div>
            </div>
          </div>

          {/* Dropdown 2: WEBSITE DEVELOPMENT (id: 2 - WIDE) */}
          <div
            className={`dropdown dropdown-wide ${mobileDropdown === 2 ? "open" : ""} ${activeDropdown === 2 ? "active" : ""}`}
            {...dropdownHoverProps(2)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(2)}
              aria-expanded={activeDropdown === 2 || mobileDropdown === 2}
            >
              WEBSITE DEVELOPMENT <span className="arrow-indicator">▾</span>
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>Business &amp; Corporate Websites</h4>  
                <Link href="/seo-services">Landing Page Design</Link>           
                <Link href="/contact-us">Corporate Website Development</Link>
                <Link href="/full-stack-web-development">Startup &amp; Small Business Websites</Link>
              </div>

              <div className="dropdown-column">
                <h4>E-Commerce Development</h4>               
                <Link href="/seo-services">Payment Gateway Integration</Link>
                <Link href="/full-stack-web-development">Product &amp; Inventory Management</Link>  
              </div>

              <div className="dropdown-column">
                <h4>UI Development &amp; Performance</h4>
                <Link href="/ai-software-development">Website Speed Optimization</Link>               
                <Link href="/full-stack-web-development">HTML, CSS, JavaScript Development</Link>
              </div>
            </div>
          </div>

          {/* Dropdown 3: SEO MARKETING (id: 1 - COMPACT) */}
          <div
            className={`dropdown dropdown-compact ${mobileDropdown === 1 ? "open" : ""} ${activeDropdown === 1 ? "active" : ""}`}
            {...dropdownHoverProps(1)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(1)}
              aria-expanded={activeDropdown === 1 || mobileDropdown === 1}
            >
              SEO MARKETING <span className="arrow-indicator">▾</span>
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <Link href="/ecommerce-development-optimization">Local SEO &amp; Google Business Optimization</Link>
                <Link href="/seo-services">Brand Mentions &amp; Citations</Link>
              </div> 
            </div>
          </div>

          {/* Dropdown 4: WHO WE ARE (id: 4 - COMPACT) */}
          <div
            className={`dropdown dropdown-compact ${mobileDropdown === 4 ? "open" : ""} ${activeDropdown === 4 ? "active" : ""}`}
            {...dropdownHoverProps(4)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(4)}
              aria-expanded={activeDropdown === 4 || mobileDropdown === 4}
            >
              WHO WE ARE <span className="arrow-indicator">▾</span>
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <Link href="/about">About Us</Link>
                <Link href="/contact-us">Careers</Link>
                <Link href="/contact">Contact Info</Link>
              </div>
            </div>
          </div>

          {/* New Mail Contact Button (visible only in mobile drawer instead of Proposal) */}
          <a href="mailto:info@zonzoctech.com" className="mobile-mail-btn">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Mail Us
          </a>
        </nav>
        
        {/* Proposal button (staying directly in the navbar container now) */}
        <button className="contact-btn" onClick={() => setIsPopupOpen(true)}>
          Get a Proposal
        </button>

        {/* Modal Popup Connection */}
        <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>

        {/* Mobile Hamburger toggle bars */}
        <div className="hamburger" onClick={() => setOpen((s) => !s)}>
          <span className={open ? "bar rotate1" : "bar"}></span>
          <span className={open ? "bar hide" : "bar"}></span>
          <span className={open ? "bar rotate2" : "bar"}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;