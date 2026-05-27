import React from "react";
import DiscoverIcon from "../assets/icons/discover.svg";
import StrategyIcon from "../assets/icons/strategy.svg";
import DevelopmentIcon from "../assets/icons/launch.svg";
import LaunchIcon from "../assets/icons/launch4.svg";
import SupportIcon from "../assets/icons/support.svg";

// CSS import is removed from here to prevent Next.js resolution errors

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We listen to your goals and gather key requirements.",
      icon: DiscoverIcon,
      color: "#38bdf8", // Sky blue
    },
    {
      number: "02",
      title: "Design",
      description: "UI/UX designs and system architecture tailored to your needs.",
      icon: StrategyIcon,
      color: "#f97316", // Orange
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development of web, mobile, and desktop solutions.",
      icon: DevelopmentIcon,
      color: "#10b981", // Teal
    },
    {
      number: "04",
      title: "Launch",
      description: "Final testing, deployment, and go-live across platforms.",
      icon: LaunchIcon,
      color: "#a855f7", // Purple
    },
    {
      number: "05",
      title: "Support",
      description: "Continuous maintenance and updates to ensure success.",
      icon: SupportIcon,
      color: "#ec4899", // Pink
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Proven Process – How It Works</h2>
        <p className="process-subtitle">Our 5-Step Success Blueprint</p>

        <div className="steps-grid">
          {/* Background Connecting Wave (Only visible on Desktop) */}
          <div className="process-wave-wrapper">
            <svg className="process-wave-svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path 
                d="M 0,50 C 50,0 150,0 200,50 C 250,100 350,100 400,50 C 450,0 550,0 600,50 C 650,100 750,100 800,50 C 850,0 950,0 1000,50" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.15)" 
                strokeWidth="3" 
                strokeDasharray="6,6" 
              />
            </svg>
          </div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const colClass = `col-pos-${index + 1}`;
            
            return (
              <React.Fragment key={index}>
                {/* Circle Row (Concentric outer loop & inner white core) */}
                <div className={`step-circle-container ${colClass}`}>
                  <div className="step-circle-outer" style={{ "--step-color": step.color }}>
                    <div className="step-circle-inner">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="step-icon"
                      />
                    </div>
                    {/* Floating Step Number */}
                    <div className="step-circle-number" style={{ backgroundColor: step.color }}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content Row (Alternates top/bottom on desktop to form the timeline) */}
                <div className={`step-content-container ${isEven ? 'row-pos-bottom' : 'row-pos-top'} ${colClass}`}>
                  <div className="step-text-card">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;