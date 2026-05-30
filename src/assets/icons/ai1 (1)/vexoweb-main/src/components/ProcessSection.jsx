import React from "react";
import DiscoverIcon from "../assets/icons/discover.svg";
import StrategyIcon from "../assets/icons/strategy.svg";
import DevelopmentIcon from "../assets/icons/launch.svg";
import LaunchIcon from "../assets/icons/launch4.svg";
import SupportIcon from "../assets/icons/support.svg";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "We listen to your goals and gather key requirements",
      icon: DiscoverIcon,
    },
    {
      number: "2",
      title: "Design",
      description:
        "UI/UX designs and system architecture tailored to your needs.",
      icon: StrategyIcon,
    },
    {
      number: "3",
      title: "Development",
      description:
        "Agile development of web, mobile, and desktop solutions.",
      icon: DevelopmentIcon,
    },
    {
      number: "4",
      title: "Launch",
      description:
        "Final testing, deployment, and go-live across platforms.",
      icon: LaunchIcon,
    },
    {
      number: "5",
      title: "Support",
      description:
        "Continuous maintenance and updates to ensure success.",
      icon: SupportIcon,
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Proven Process – How It Works</h2>
        <p className="process-subtitle">Our 5-Step Success Blueprint</p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                {/* Icon box */}
                <div className="step-icon-wrapper">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="step-icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>

                {/* Step number */}
                <div className="step-number" style={{color:"white", borderColor:"rgba(255, 255, 255, 0.15)"}}>{step.number}</div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
