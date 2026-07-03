import React from "react";
import DiscoverIcon from "../assets/icons/discover.svg";
import StrategyIcon from "../assets/icons/strategy.svg";
import DevelopmentIcon from "../assets/icons/launch.svg";
import LaunchIcon from "../assets/icons/launch4.svg";
import SupportIcon from "../assets/icons/support.svg";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We listen to your goals, audience, and requirements to map the right solution.",
      icon: DiscoverIcon,
      color: "#38bdf8",
    },
    {
      number: "02",
      title: "Design",
      description: "UI/UX wireframes and system architecture tailored to your brand and users.",
      icon: StrategyIcon,
      color: "#6366f1",
    },
    {
      number: "03",
      title: "Development",
      description: "Agile builds for web, mobile, and custom software with regular updates.",
      icon: DevelopmentIcon,
      color: "#10b981",
    },
    {
      number: "04",
      title: "Launch",
      description: "Rigorous testing, deployment, and go-live across all platforms.",
      icon: LaunchIcon,
      color: "#f59e0b",
    },
    {
      number: "05",
      title: "Support",
      description: "Ongoing maintenance, updates, and optimization for lasting success.",
      icon: SupportIcon,
      color: "#ec4899",
    },
  ];

  return (
    <section className="home-process" aria-labelledby="home-process-title">
      <div className="home-process__glow home-process__glow--left" aria-hidden="true" />
      <div className="home-process__glow home-process__glow--right" aria-hidden="true" />

      <div className="home-process__container">
        <header className="home-process__header">
          <span className="home-process__tag">Proven Process</span>
          <h2 id="home-process-title" className="home-process__title">
            <span className="home-process__title-main">How We Deliver Your</span>{' '}
            <span className="home-process__title-accent">Project</span>
          </h2>
          <p className="home-process__subtitle">
            A transparent 5-step blueprint — from first conversation to long-term growth.
          </p>
        </header>

        <ol className="home-process__track">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="home-process__card"
              style={{ "--step-color": step.color }}
            >
              <div className="home-process__card-inner">
                <div className="home-process__card-head">
                  <span className="home-process__step-num">{step.number}</span>
                  <span className="home-process__step-label">Step {index + 1}</span>
                </div>

                <div className="home-process__icon-ring">
                  <div className="home-process__icon-core">
                    <img src={step.icon} alt="" className="home-process__icon" aria-hidden="true" />
                  </div>
                </div>

                <div className="home-process__card-body">
                  <h3 className="home-process__card-title">{step.title}</h3>
                  <p className="home-process__card-desc">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <span className="home-process__connector" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="home-process__connector-icon">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
