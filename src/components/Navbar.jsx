'use client';
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // Next.js route hook
import Image from "next/image";
import Link from "next/link";
import ExpertPopup from "./ExpertPopup";
import logo from "../assets/logonew.png";

const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu drawer toggle
  const [mobileDropdown, setMobileDropdown] = useState(null); // Mobile accordion toggle
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop dropdown active state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Proposal popup state
  const [isMobileView, setIsMobileView] = useState(false); // Track mobile view for inline styles
  const navRef = useRef(null);
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
      setIsMobileView(window.innerWidth <= DESKTOP_BREAKPOINT);
      if (isDesktop()) {
        setMobileDropdown(null);
      } else {
        setActiveDropdown(null);
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
              
              Webdesign & Software Development in{" "}
              <span className="sky-blue">Batticaloa</span>
              {" | "}Eastern Province's Digital Partner
            </span>
          </div>

          <div className="topbar-right">
            {/* Phone link positioned on the right side next to the email icon */}
            <a href="tel:0740309534" className="topbar-phone" title="Call Us">
              074 030 9534
            </a>

            <a href="mailto:info@zonzoctech.com" className="topbar-link" title="Email Us">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            {/* Official WhatsApp Brand Icon */}
            <a href="https://wa.me/94740309534" target="_blank" rel="noopener noreferrer" className="topbar-link wa-btn" title="Chat on WhatsApp">
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="wa-icon"
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
    alt="Zonzoctech Logo"
    width={210} // Increased from 160
    height={110} // Increased from 80
    className="logo-desktop"
    priority
  />
  <Image
    src={logo}
    alt="Zonzoctech Logo"
    width={160} // Increased from 120
    height={80} // Increased from 60
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
        <nav 
          className={`nav-links ${open ? "open" : ""}`}
          style={
            isMobileView && open 
              ? { 
                  top: "160px", // or "100%"
                  height: "auto", // Automatically shrinks to fit the content
                  maxHeight: "calc(100vh - 160px)", // Prevents it from going off-screen
                  position: "fixed", // or "absolute"
                  overflowY: "auto", // Allows scrolling if sub-menus are expanded
                  paddingBottom: "24px" // Clean spacing right below the "Mail Us" button
                } 
              : {}
          }
        >
          {/* 
             Conditional "Home" Button 
             - Renders as an unlinked <span> when on the Home page (/).
             - Renders as a clickable Next.js <Link> when on any other subpage.
             - Includes a responsive inline SVG Home Icon.
          */}
          {isHomePage ? (
            <span className="nav-home-btn active">
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </span>
          ) : (
            <Link href="/" className="nav-home-btn">
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </Link>
          )}
          
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
        
        {/* Proposal button */}
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