
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/logo.png";
import siteLogo from "../assets/icons/site_logo_2.svg";
import phoneIcon from "../assets/icons/phone-call-icon.svg";
import ExpertPopup from "./ExpertPopup";
import emailnav from "../assets/icons/navmail.png";


const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

    const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

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


  const dropdownHoverProps = (id) => ({
    onMouseEnter: () => openDropdown(id),
    onMouseLeave: scheduleCloseDropdown,
  });

  const dropdownContentHoverProps = {
    onMouseEnter: clearCloseTimer,
    onMouseLeave: scheduleCloseDropdown,
  };


  return (
    <header className="navbar">
      <div className="top-badge">
        <div className="top-badge-left">
          <span>PROJECTS COMPLETED</span>
          <span className="highlight">150+</span>
        </div>
        
        <div className="top-badge-right">
          <div className="contact-proposal">
            <img src={emailnav} alt="phone" />
            <a href="mailto:Info@zonzoctech.com?subject=New Project Inquiry&body=Hi ZonzocTech Team,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AThanks," className="email-link">
              info@zonzoctech.com
            </a>
          </div>
        </div>
      </div>

      <div className="nav-container" ref={navRef}>
         <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="nav-logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="Zonzoctech Logo" className="logo-desktop" />
            <img src={logo} alt="Zonzoctech Logo" className="logo-mobile" />
          </div>

          <div className="nav-tagline">
            <div>Web Intelligences</div>
            <div>That Drives</div>
            <div>Revenue®</div>
          </div>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {/* Dropdown: AI & Technology (id: 3) */}
          <div
            className={`dropdown ${mobileDropdown === 3 ? "open" : ""} ${
              activeDropdown === 3 ? "active" : ""
            }`}
            {...dropdownHoverProps(3)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(3)}
              aria-expanded={activeDropdown === 3 || mobileDropdown === 3}
            >
              SOFTWARE DEV ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>Custom Software Development</h4>
                <a href="/software-development">Enterprise Software Solutions</a>
                <a href="/ai-software-development">SaaS Product Development</a>
                <a href="/ai-software-development">Legacy System Modernization</a>
                <a href="/ai-software-development">API Development & Integration</a>
                <a href="/full-stack-web-development">Custom Web Application Development</a>
              </div>

              <div className="dropdown-column">
                <h4>Web & Mobile Experiences</h4>
                <a href="/full-stack-web-development">Progressive Web Apps (PWA)</a> 
                <a href="/seo-services">Android & iOS App Development</a>  
                <a href="/ai-software-development">Responsive Website Development</a>
                <a href="/seo-services">Cross-Platform Apps (Flutter / React Native)</a>
                <a href="/seo-services">UI/UX Design & Prototyping</a>
              </div>

              <div className="dropdown-column">
                <h4>Cloud, Backend & DevOps</h4>
                <a href="/full-stack-web-development">Microservices & Scalable Architecture</a>
                <a href="/full-stack-web-development">Database Design & Optimization</a> 
                <a href="/full-stack-web-development">DevOps & Deployment Automation</a>   
                <a href="/ai-software-development">Cloud Solutions</a><br />
                <a href="/seo-services">Backend Development</a><br />
                
              </div>

              <div className="dropdown-column">
                <h4>Support, QA & Optimization</h4>
                <a href="/ai-software-development">Bug Fixing & Troubleshooting</a>
                <a href="/ai-software-development">System Monitoring & Updates</a>
                <a href="/ai-software-development">Performance & Security Testing</a>
                <a href="/ai-software-development">Ongoing Maintenance & Support</a>
                <a href="/ai-software-development">System Monitoring & Updates</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Insights & Resources</span><br />
                <span className="last-column-text3">SEO Marketing Strategies & Growth Tips</span>
                <span className="last-column-text3">Software Development Trends & Best Practices</span>
                <span className="last-column-text3">Website Development Guides & Case Studies</span>
                <span className="last-column-text3">Technology Updates & Industry News</span>
                <span className="last-column-text3">SEO Marketing Strategies & Insights</span>
              </div>
            </div>
          </div>

          {/* Dropdown: UX & Interactive (id: 2) */}
          <div
            className={`dropdown ${mobileDropdown === 2 ? "open" : ""} ${
              activeDropdown === 2 ? "active" : ""
            }`}
            {...dropdownHoverProps(2)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(2)}
              aria-expanded={activeDropdown === 2 || mobileDropdown === 2}
            >
              WEBSITE DEVELOPMENT ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>Business & Corporate Websites</h4>  
                <a href="/seo-services">Landing Page Design</a>           
                <a href="/full-stack-web-development">Website Redesign & Modernization</a>                
                <a href="/full-stack-web-development">Portfolio & Personal Websites</a>
                <a href="/contact-us">Corporate Website Development</a>
                <a href="/full-stack-web-development">Startup & Small Business Websites</a>
              </div>

              <div className="dropdown-column">
                <h4>E-Commerce Development</h4>               
                <a href="/ecommerce-development-optimization">Conversion Optimization</a>
                <a href="/seo-services">Payment Gateway Integration</a>
                <a href="/ecommerce-development-optimization">Shopify & WooCommerce Development</a>
                <a href="/ecommerce-development-optimization">Custom E-Commerce Solutions</a>
                <a href="/full-stack-web-development">Product & Inventory Management</a>  
              </div>

              <div className="dropdown-column">
                <h4>UI Development & Performance</h4>
                <a href="/full-stack-web-development">Responsive Web Design</a>                
                <a href="/ecommerce-development-optimization">React / Next.js Development</a>
                <a href="/ai-software-development">Website Speed Optimization</a>               
                <a href="/full-stack-web-development">HTML, CSS, JavaScript Development</a>
                <a href="/ai-software-development">SEO-Friendly Development</a>
              </div>

              <div className="dropdown-column">
                <h4>CMS & Maintenance</h4><br />
                <a href="/full-stack-web-development">WordPress Development</a>                                
                <a href="/seo-services">Security Updates & Backups</a>
                <a href="/full-stack-web-development">Content Management Setup</a>
                <a href="/full-stack-web-development">Website Maintenance & Support</a>
                <a href="/seo-services">Headless CMS Solutions</a>  
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Problems We Solve</span><br />
                <span className="last-column-text3">Low ROI Marketing</span>  
                <span className="last-column-text3">Poor User Experience & Engagement</span>
                <span className="last-column-text3">Declining Traffic & Search Rankings</span>
                <span className="last-column-text3">Low Website Conversions & Lead Generation Issues</span>
                <span className="last-column-text3">Lack of Visibility on Google & Search Platforms</span>
              </div>
            </div>
          </div>

          {/* Dropdown: SEO & Lead Generation (id: 1) */}
          <div
             className={`dropdown ${mobileDropdown === 1 ? "open" : ""} ${
              activeDropdown === 1 ? "active" : ""
            }`}
            {...dropdownHoverProps(1)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(1)}
              aria-expanded={activeDropdown === 1 || mobileDropdown === 1}
            >
              SEO MARKETING ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>SEO Strategy, Audits & Planning</h4>
                <a href="/seo-services">Competitor Analysis</a>
                <a href="/seo-services">SEO Audit & Website Analysis</a>
                <a href="/seo-services">Keyword Research & Planning</a>               
                <a href="/seo-services">Technical SEO Analysis & Assessment</a>
                <a href="/seo-services">SEO Roadmap & Strategy</a>
              </div>

              <div className="dropdown-column">
                <h4>On-Page Optimization & Technical SEO</h4>
                <a href="/seo-services">On-Page Optimization</a>
                <a href="/seo-services">Technical SEO Enhancements & Fixes</a>
                <a href="/seo-services">Schema Markup Implementation</a>
                <a href="/seo-services">Mobile & Core Web Vitals Optimization</a>
                <a href="/seo-services">Internal Linking Structure</a>
              </div>

              <div className="dropdown-column">
                <h4>Off-Page & Authority Building</h4>
                <a href="/ecommerce-development-optimization">Guest Posting & Outreach</a>
                <a href="/ecommerce-development-optimization">Link Building & Backlink Strategy</a>                
                <a href="/ecommerce-development-optimization">Local SEO & Google Business Optimization</a>
                <a href="/seo-services">Brand Mentions & Citations</a>
                <a href="/seo-services">Reputation Management</a>
              </div>

              <div className="dropdown-column">
                <h4>Analytics & Growth Optimization</h4>
                <a href="/seo-services">Conversion Tracking</a> 
                <a href="/seo-services">Google Analytics & Search Console Setup</a>                
                <a href="/seo-services">Monthly Reporting & Insights</a>
                <a href="/seo-services">Continuous Optimization & Scaling</a>
                <a href="/seo-services">SEO Performance Tracking</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Proof & Insights</span><br />
                <span className="last-column-text3">GEO & Search Trends</span>
                <span className="last-column-text3">SEO Case Studies & Proven Results</span>
                <span className="last-column-text3">Client Success Stories & Outcomes</span>
                <span className="last-column-text3">SEO Experiments & Key Learnings</span>
                <span className="last-column-text3">AI SEO vs Traditional SEO Insights</span>
              </div>
            </div>
          </div>

          {/* Dropdown: Who We Are (id: 4) */}
          <div
            className={`dropdown ${mobileDropdown === 4 ? "open" : ""} ${
              activeDropdown === 4 ? "active" : ""
            }`}
            {...dropdownHoverProps(4)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(4)}
              aria-expanded={activeDropdown === 4 || mobileDropdown === 4}
            >
              WHO WE ARE ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>Who We Are</h4>
                <a href="/about">About Us</a>
                <a href="/contact-us">Careers</a>
                <a href="/contact">Contact Info</a>
              </div>

            </div>
          </div>

          <button className="contact-btn" onClick={() => setIsPopupOpen(true)}>
             Get a Proposal
          </button>
        </nav>
        
        <ExpertPopup 
        open={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>

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
