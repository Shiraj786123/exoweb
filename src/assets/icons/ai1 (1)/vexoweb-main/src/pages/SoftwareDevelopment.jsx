import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions designed to scale with your business needs.",
    items: [
      "Enterprise Software Solutions",
      "SaaS Product Development",
      "Legacy System Modernization",
      "API Development & Integration",
      "Custom Web Applications",
    ],
  },
  {
    title: "Web & Mobile Experiences",
    desc: "High-performance digital products across web and mobile platforms.",
    items: [
      "Progressive Web Apps (PWA)",
      "Android & iOS App Development",
      "Responsive Web Development",
      "Cross-Platform Apps (Flutter / React Native)",
      "UI/UX Design & Prototyping",
    ],
  },
  {
    title: "Cloud, Backend & DevOps",
    desc: "Robust backend systems and scalable cloud infrastructure.",
    items: [
      "Microservices Architecture",
      "Database Design & Optimization",
      "DevOps & CI/CD Automation",
      "Cloud Infrastructure (AWS, Azure)",
      "Secure Backend Development",
    ],
  },
  {
    title: "Support, QA & Optimization",
    desc: "Ensure performance, reliability, and long-term system health.",
    items: [
      "Bug Fixing & Troubleshooting",
      "System Monitoring & Updates",
      "Performance & Security Testing",
      "Ongoing Maintenance",
    ],
  },
];

const SoftwareDevelopment = () => {
  return (
    <>
    <Navbar />
    <div className="software-page">
       
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>End-to-End Software Development</h1>
          <p>
            We design, build, and scale modern digital solutions that drive
            business growth, performance, and innovation.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get a Proposal</button>
            <button className="secondary-btn">View Our Work</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        {sections.map((section, index) => (
          <div className="card" key={index}>
  <div className="card-icon">💻</div>
  <h2>{section.title}</h2>
            <p className="card-desc">{section.desc}</p>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>→ {item}</li>
              ))}
            </ul>
            <button className="link-btn">Explore More</button>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Development Process</h2>
        <div className="steps">
          <div>1. Discovery & Planning</div>
          <div>2. Design & Prototyping</div>
          <div>3. Development & Integration</div>
          <div>4. Testing & Optimization</div>
          <div>5. Deployment & Support</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Build Your Next Product?</h2>
        <p>Let’s turn your ideas into scalable digital solutions.</p>
        <button>Start Your Project</button>
      </section>

    </div>
    <Footer /></>
  );
};

export default SoftwareDevelopment;
