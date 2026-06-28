import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HeroTrustText from '../components/HeroTrustText';
import Breadcrumb from '../components/Breadcrumb';
import ServiceSubLocations from '../components/ServiceSubLocations';
import TechnologyStackSection from '../components/TechnologyStackSection';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';
import { SERVICE_SUB_LOCATIONS, MAIN_SERVICE_SEO } from '../content/servicePagesConfig';
import { SERVICE_CONTACT } from '../content/serviceContactContent';
import { SERVICE_TECH_STACK } from '../content/serviceTechStackContent';
import { HERO_TRUST_TEXT } from '../content/heroTrustContent';

const sections = [
  {
    tag: "Core Engineering",
    title: "Custom Software Development",
    desc: "Tailored software solutions designed to scale with your business needs.",
    labels: ["SaaS Architecture", "Legacy Code Rewrite", "Custom APIs"],
    items: [
      "Enterprise Software Solutions",
      "SaaS Product Development",
      "Legacy System Modernization",
      "API Development & Integration",
      "Custom Web Applications",
    ],
    mockup: (
      <svg className="card-mockup" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="130" height="90" rx="6" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="1.2" />
        <rect x="5" y="5" width="130" height="20" rx="6" fill="var(--color-soft-bg)" stroke="var(--color-purple)" strokeWidth="1.2" />
        <circle cx="15" cy="15" r="3" fill="var(--color-purple)" />
        <circle cx="25" cy="15" r="3" fill="var(--color-sky-blue)" />
        <circle cx="35" cy="15" r="3" fill="var(--color-lavender-light)" />
        <rect x="15" y="35" width="45" height="48" rx="4" fill="var(--color-soft-bg)" stroke="var(--color-purple)" strokeWidth="0.8" />
        <line x1="22" y1="46" x2="45" y2="46" stroke="var(--color-purple)" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="54" x2="50" y2="54" stroke="var(--color-sky-blue)" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="62" x2="38" y2="62" stroke="var(--color-lavender-light)" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="70" x2="42" y2="70" stroke="var(--color-purple)" strokeWidth="2" strokeLinecap="round" />
        <rect x="70" y="35" width="55" height="22" rx="4" fill="var(--color-soft-bg)" stroke="var(--color-purple)" strokeWidth="0.8" />
        <circle cx="82" cy="46" r="5" fill="var(--color-purple)" />
        <line x1="94" y1="46" x2="115" y2="46" stroke="var(--color-sky-blue)" strokeWidth="2.5" />
        <rect x="70" y="61" width="55" height="22" rx="4" fill="var(--color-soft-bg)" stroke="var(--color-purple)" strokeWidth="0.8" />
        <line x1="78" y1="72" x2="112" y2="72" stroke="var(--color-purple)" strokeWidth="2" />
      </svg>
    )
  },
  {
    tag: "Visual & Mobile",
    title: "Web & Mobile Experiences",
    desc: "High-performance digital products across web and mobile platforms.",
    labels: ["React Native", "UI/UX Systems", "PWA Standard"],
    items: [
      "Progressive Web Apps (PWA)",
      "Android & iOS App Development",
      "Responsive Web Development",
      "Cross-Platform Apps",
      "UI/UX Design & Prototyping",
    ],
    mockup: (
      <svg className="card-mockup" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="45" y="8" width="50" height="84" rx="8" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="1.5" />
        <rect x="50" y="14" width="40" height="66" rx="4" fill="var(--color-soft-bg)" stroke="var(--color-purple)" strokeWidth="0.8" />
        <circle cx="70" cy="84" r="2.5" fill="var(--color-purple)" stroke="var(--color-purple)" strokeWidth="0.5" />
        <rect x="56" y="20" width="28" height="15" rx="3" fill="#ffffff" stroke="var(--color-lavender-light)" />
        <circle cx="70" cy="27.5" r="4" fill="var(--color-purple)" />
        <line x1="56" y1="42" x2="84" y2="42" stroke="var(--color-sky-blue)" strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="48" x2="74" y2="48" stroke="var(--color-lavender-light)" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="20" x2="30" y2="20" stroke="var(--color-sky-blue)" strokeWidth="1.5" />
        <line x1="12" y1="28" x2="25" y2="28" stroke="var(--color-sky-blue)" strokeWidth="1.5" />
        <circle cx="114" cy="50" r="6" fill="var(--color-lavender-light)" />
        <circle cx="114" cy="50" r="2" fill="var(--color-purple)" />
      </svg>
    )
  },
  {
    tag: "DevOps & Infrastructure",
    title: "Cloud, Backend & DevOps",
    desc: "Robust backend systems and scalable cloud infrastructure.",
    labels: ["AWS / Azure", "Microservices", "CI/CD Orchestration"],
    items: [
      "Microservices Architecture",
      "Database Design & Optimization",
      "DevOps & CI/CD Automation",
      "Cloud Infrastructure (AWS, Azure)",
      "Secure Backend Development",
    ],
    mockup: (
      <svg className="card-mockup" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="30" height="20" rx="4" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="1" />
        <text x="22" y="28" fill="var(--color-purple)" fontSize="8" fontWeight="700">API</text>
        <rect x="95" y="15" width="30" height="20" rx="4" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="1" />
        <text x="100" y="28" fill="var(--color-purple)" fontSize="8" fontWeight="700">AUTH</text>
        <rect x="55" y="60" width="30" height="20" rx="4" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="1" />
        <text x="61" y="73" fill="var(--color-purple)" fontSize="8" fontWeight="700">DB</text>
        <path d="M45 25 H 95" stroke="var(--color-sky-blue)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M30 35 L 55 70" stroke="var(--color-sky-blue)" strokeWidth="1" />
        <path d="M110 35 L 85 70" stroke="var(--color-purple)" strokeWidth="1" />
        <circle cx="30" cy="35" r="2" fill="var(--color-sky-blue)" />
        <circle cx="110" cy="35" r="2" fill="var(--color-purple)" />
        <circle cx="55" cy="70" r="2" fill="var(--color-lavender-light)" />
        <circle cx="85" cy="70" r="2" fill="var(--color-sky-blue)" />
      </svg>
    )
  },
  {
    tag: "Stability & Support",
    title: "Support, QA & Optimization",
    desc: "Ensure performance, reliability, and long-term system health.",
    labels: ["SLA Monitoring", "Automated QA", "Threat Detection"],
    items: [
      "Bug Fixing & Troubleshooting",
      "System Monitoring & Updates",
      "Performance & Security Testing",
      "Ongoing Maintenance",
    ],
    mockup: (
      <svg className="card-mockup" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="120" height="70" rx="5" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="1.2" />
        <path d="M20 70 L 40 45 L 60 55 L 80 30 L 100 40 L 120 25" stroke="var(--color-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 70 L 40 45 L 60 55 L 80 30 L 100 40 L 120 25 V 75 H 20 Z" fill="rgba(132, 91, 179, 0.08)" />
        <circle cx="80" cy="30" r="4.5" fill="var(--color-lavender-light)" stroke="var(--color-purple)" strokeWidth="1" />
        <circle cx="120" cy="25" r="3" fill="var(--color-sky-blue)" />
        <line x1="10" y1="75" x2="130" y2="75" stroke="var(--color-sky-blue)" strokeWidth="1" />
      </svg>
    )
  },
];

const faqs = [
  {
    question: "How do you estimate timelines and project scope?",
    answer: "We begin with a detailed system mapping and software specifications stage during discovery. This collaborative process allows us to establish highly accurate sprint timelines and scope estimates, mitigating potential deployment blockages."
  },
  {
    question: "What modern tech stacks and systems do you specialize in?",
    answer: "Our core engineering leverages React and Next.js for high-fidelity web experiences, React Native for cross-platform mobile apps, and structured Node.js / Python architectures on AWS or Azure for scalable cloud performance."
  },
  {
    question: "How do you manage ongoing maintenance and security checks?",
    answer: "We establish clear SLA structures with continuous system monitoring, automated regression testing, and periodic security scans. Our ongoing assistance maintains system reliability with zero operational downtime."
  },
  {
    question: "Can you design custom API integration architectures?",
    answer: "Yes, we customize system components to securely connect legacy architectures with modern third-party services, providing high-speed database configurations and reliable API endpoints tailored to your operations."
  },
  {
    question: "Who retains ownership of the source code and IP?",
    answer: "You maintain full intellectual property ownership of all application assets, codebase design models, and production source files immediately upon milestone completion, delivered via secure private repositories."
  }
];

const SoftwareDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="software-page">
        
        {/* HERO SECTION */}
        <section 
          className="hero" 
          style={{ 
            paddingTop: "190px" // Pushes the container down to clear the fixed mobile header
          }}
        >
          <div className="hero-container">
            <Breadcrumb
              items={PAGE_BREADCRUMBS.softwareDevelopment}
              className="breadcrumb--centered breadcrumb--on-dark"
            />
            <ServiceSubLocations links={SERVICE_SUB_LOCATIONS.softwareDevelopment} />
            <span className="hero-badge">
              <span className="badge-dot">●</span>
              <span className="hero-badge-text">
                <span className="hero-badge-accent">Custom Software Development</span>
                <span className="hero-badge-light"> — Eastern Province, Sri Lanka</span>
              </span>
            </span>
            <h1 className="software__h1">
              {MAIN_SERVICE_SEO.softwareDevelopment.h1}
            </h1>
            <p className="hero-desc">
              Business POS, billing apps, inventory tools — we build software that solves
              real problems for businesses across Eastern Province.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="primary-btn">Get Free Consultation</a>
              <a href="/#results" className="secondary-btn">
                View Portfolio <span className="arrow">→</span>
              </a>
            </div>
            <HeroTrustText text={HERO_TRUST_TEXT.software} />
          </div>
        </section>

        {/* SERVICES SECTION (Row-Wise Connected Timeline Theme) */}
        <section className="services-section-row-theme" id="services">
          <div className="section-header-row-theme">
            <span className="section-label-row-theme">Capabilities</span>
            <h2 className="software__h2">Premium Engineering Architectures</h2>
          </div>
          
          <div className="services-timeline-container">
            {sections.map((section, index) => {
              // Dynamic colors for the row timelines
              const rowColors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e'];
              const currentAccent = rowColors[index % rowColors.length];

              return (
                <div 
                  className="timeline-row" 
                  key={index} 
                  style={{ '--row-accent': currentAccent }}
                >
                  {/* Vertical Connecting Node */}
                  <div className="timeline-node">
                    <span className="timeline-dot"></span>
                  </div>

                  {/* Symmetrical Row Card */}
                  <div className="row-card">
                    <div className="card-text-col">
                      <div className="card-meta">
                        <span className="classic-badge-row" style={{ borderColor: currentAccent, color: currentAccent, background: `${currentAccent}10` }}>
                          {section.tag}
                        </span>
                      </div>
                      <h2 className="software__h3">{section.title}</h2>
                      <p className="card-desc">{section.desc}</p>
                      
                      <ul className="card-list">
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <span className="arrow-bullet" style={{ background: `${currentAccent}20`, color: currentAccent }}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="tech-tags">
                        {section.labels.map((label, idx) => (
                          <span key={idx} className="tech-tag">{label}</span>
                        ))}
                      </div>
                    </div>

                    <div className="card-mockup-col">
                      <div className="mockup-frame" style={{ borderColor: `${currentAccent}60` }}>
                        {section.mockup}
                      </div>
                      <a href="#contact" className="link-btn" style={{ '--btn-accent-color': currentAccent }}>
                        Explore Details
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="process-section">
          <div className="process-container">
            <div className="process-intro">
              <span className="section-label">Methodology</span>
              <h2 className="software__h2">A Classic, High-Fidelity Development Process</h2>
              <p>
                We execute system engineering with complete predictability. By removing overhead spacing and aligning timelines, each sprint directly translates to business metrics.
              </p>
            </div>

            <div className="circular-process-flow">
              <div className="flow-connecting-line"></div>
              <div className="process-steps-row">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    desc: "System mapping, software specification sheets, and threat modeling.",
                    color: "#3B82F6",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                      </svg>
                    )
                  },
                  {
                    step: "02",
                    title: "Interactive Design",
                    desc: "High fidelity prototypes custom-fitted with design systems.",
                    color: "#F59E0B",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                        <path d="M7.5 10.5C8.32843 10.5 9 9.82843 9 9C9 8.17157 8.32843 7.5 7.5 7.5C6.67157 7.5 6 8.17157 6 9C6 9.82843 6.67157 10.5 7.5 10.5Z" />
                        <path d="M11.5 7.5C12.3284 7.5 13 6.82843 13 6C13 5.17157 12.3284 4.5 11.5 4.5C10.6716 4.5 10 5.17157 10 6C10 6.82843 10.6716 7.5 11.5 7.5Z" />
                        <path d="M16.5 9.5C17.3284 9.5 18 8.82843 18 8C18 7.17157 17.3284 6.5 16.5 6.5C15.6716 6.5 15 7.17157 15 8C15 8.82843 15.6716 9.5 16.5 9.5Z" />
                      </svg>
                    )
                  },
                  {
                    step: "03",
                    title: "Clean-Code Engineering",
                    desc: "Component structures styled with responsive, premium architectures.",
                    color: "#10B981",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )
                  },
                  {
                    step: "04",
                    title: "QA Orchestration",
                    desc: "Continuous validation, regression tests, and security scanning.",
                    color: "#8B5CF6",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                    )
                  },
                  {
                    step: "05",
                    title: "Continuous Delivery",
                    desc: "Secure pipeline deployments backed by monitoring Service Level Agreements.",
                    color: "#EC4899",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
                        <path d="M12 12l9-9-3 12-3-3-3 3-3-3z" />
                        <path d="M9 15l-3 3" />
                      </svg>
                    )
                  }
                ].map((step, idx) => (
                  <div className="process-step-node" key={idx} style={{ "--step-color": step.color }}>
                    <div className="circle-outer-ring">
                      <div className="circle-inner">
                        <span className="step-num-bubble">{step.step}</span>
                        <div className="step-icon">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <div className="step-text-block">
                      <h3 className="software__h4">{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Q&A / FAQ SECTION */}
        <section className="faq-section">
          <div className="faq-intro">
            <span className="section-label">Common Queries</span>
            <h2 className="software__h2">Frequently Asked Questions</h2>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-bar ${isOpen ? 'active' : ''}`}>
                  <button className="faq-header" onClick={() => toggleAccordion(index)}>
                    <h3 className="software__h3">{faq.question}</h3>
                    <div className="faq-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </button>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <TechnologyStackSection {...SERVICE_TECH_STACK.software} />

      <ContactSection {...SERVICE_CONTACT.software} variant="service" />

      <Footer />
    </>
  );
};

export default SoftwareDevelopment;