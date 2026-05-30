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
        { text: "Boostrap", Background: "#ff7300ff" },
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
        { text: "Java(Android Studio)", Background: "#ff7300ff" },
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
      name: "Website Maintenance and Web Security",
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
      <div className="success-header">
        <span className="success-tag">See </span>
        <span className="tag2"> Our Success in Action</span>

        <h2 className="success-title">
          <span className="highlight">Real Results</span>, Not Just Promises
        </h2>

        <p className="success-subtitle">
          Our recent projects highlight our expertise in delivering tailored
          <br />
          solutions that meet the unique needs and objectives of our clients.
        </p>
      </div>

      <div className="projects-slider">
        <div className="projects-track">
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.img}
                alt={project.name}
                className="project-img"
              />

              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>

                <div className="project-extra">
                  {project.extra.map((item, idx) => (
                    <span
                      key={idx}
                      style={{ background: item.Background }}
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
    </section>
  );
};

export default SuccessSection;
