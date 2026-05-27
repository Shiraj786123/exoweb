import React from "react";
import item1 from "../assets/icons/healthyfit.png";
import item2 from "../assets/icons/aviation.png";
import item3 from "../assets/icons/fleet-management.png";
import item4 from "../assets/icons/lvita.jpg";
import item5 from "../assets/icons/searchengine.jpeg";
import item6 from "../assets/icons/websitemaintence.jpeg";
import item7 from "../assets/icons/webdevelopment.jpeg";

const SuccessSection = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      desc: "Shopify-based platform for healthy products with seamless API integration.",
      extra: [
        { text: "Shopify", Background: "#0047ab" },
        { text: "Shopify APIs", Background: "#ff6b91" },
        { text: "Laravel", Background: "#00bfc1" },
        { text: "Bootstrap", Background: "#ff7300ff" },
      ],
      img: item1,
    },
    {
      id: 2,
      name: "Aviation Management System",
      desc: "Comprehensive aviation management platform with real-time flight tracking, task management, and crew scheduling.",
      extra: [
        { text: "Angular", Background: "#0047ab" },
        { text: "Firebase", Background: "#ff6b91" },
        { text: "Flightaware APIs", Background: "#1e8449" },
        { text: "MongoDB", Background: "#00bfc1" },
        { text: "Node.js", Background: "#ff7300ff" },
      ],
      img: item2,
    },
    {
      id: 3,
      name: "Fleet Management System",
      desc: "Comprehensive platform for real-time fleet tracking, rider management, and performance analytics.",
      extra: [
        { text: "React", Background: "#0047ab" },
        { text: "Java", Background: "#ff6b91" },
        { text: "Spring Boot", Background: "#00bfc1" },
        { text: "Next.js", Background: "#ff7300ff" },
        { text: "Google Maps APIs", Background: "#1e8449" },
      ],
      img: item3,
    },
    {
      id: 4,
      name: "E-Commerce System",
      desc: "Developed the admin portal, vendor portal, user mobile app, and vendor mobile app to manage the system.",
      extra: [
        { text: "Angular", Background: "#0047ab" },
        { text: "Java(Android)", Background: "#ff7300ff" },
        { text: "Swift", Background: "#ff6b91" },
        { text: "Node.js", Background: "#00bfc1" },
        { text: "MongoDB", Background: "#1e8449" },
        { text: "Firebase", Background: "#d90e0eff" },
      ],
      img: item4,
    },
    {
      id: 5,
      name: "Search Engine Optimization",
      desc: "Through comprehensive on-page, technical, and content SEO, we enhanced CookerAndLooker’s search presence and authority, driving sustainable organic growth.",
      extra: [
        { text: "React", Background: "#0047ab" },
        { text: "Java", Background: "#ff6b91" },
        { text: "Spring Boot", Background: "#00bfc1" },
        { text: "Next.js", Background: "#ff7300ff" },
        { text: "MongoDB", Background: "#1e8449" },
      ],
      img: item5,
    },
    {
      id: 6,
      name: "Website Maintenance & Web Security",
      desc: "We executed end-to-end website development for frau-rauchfrei.de, implementing strong security protocols, performance optimization, and ongoing protection against vulnerabilities.",
      extra: [
        { text: "React", Background: "#0047ab" },
        { text: "Java", Background: "#ff6b91" },
        { text: "Spring Boot", Background: "#00bfc1" },
        { text: "Next.js", Background: "#ff7300ff" },
      ],
      img: item6,
    },
    {
      id: 7,
      name: "Website Development",
      desc: "We completely redesigned and developed koningbamboe.nl with advanced features, enhanced functionality, and significantly improved performance—delivering a faster, smarter, and more scalable digital experience.",
      extra: [
        { text: "React", Background: "#0047ab" },
        { text: "Java", Background: "#ff6b91" },
        { text: "Spring Boot", Background: "#00bfc1" },
        { text: "Next.js", Background: "#ff7300ff" },
      ],
      img: item7,
    },
  ];

  return (
    <section className="success-section">
      <div className="success-container">
        
        {/* 1st Line: Main Center Headings with Premium Styling Modifications */}
        <div className="success-header">
          {/* ✅ Lovable Technical Label Added Perfectly on Top */}
          <span className="success-tag">PROVEN EXPERTISE</span>
          
          <h2 className="success-title">
            Real Results, Engineered For Ultimate Performance
          </h2>
          <p className="success-subtitle">
            Our recent portfolio highlights our engineering expertise in delivering tailored digital solutions that meet unique global objectives.
          </p>
        </div>

        {/* 2nd Line: Infinite Auto-Scrolling Tracks */}
        <div className="projects-slider">
          <div className="projects-track">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-img-wrapper">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="project-img"
                  />
                </div>

                <div className="project-info">
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-desc">{project.desc}</p>

                  <div className="project-extra">
                    {project.extra.map((item, idx) => (
                      <span
                        key={idx}
                        style={{ background: item.Background }}
                        className="tech-badge"
                      >
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessSection;