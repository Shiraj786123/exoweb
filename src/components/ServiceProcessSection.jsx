import React from 'react';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
  HiOutlineMagnifyingGlass,
  HiOutlineUserGroup,
  HiOutlineTag,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineDevicePhoneMobile,
  HiOutlineLifebuoy,
} from 'react-icons/hi2';

export const PROCESS_STEP_ICONS = {
  discovery: HiOutlineChatBubbleLeftRight,
  chat: HiOutlineChatBubbleLeftRight,
  plan: HiOutlineClipboardDocumentCheck,
  design: HiOutlinePaintBrush,
  code: HiOutlineCodeBracket,
  test: HiOutlineBeaker,
  deploy: HiOutlineRocketLaunch,
  rocket: HiOutlineRocketLaunch,
  audit: HiOutlineMagnifyingGlass,
  competitor: HiOutlineUserGroup,
  keyword: HiOutlineTag,
  optimise: HiOutlineAdjustmentsHorizontal,
  content: HiOutlineDocumentText,
  monitor: HiOutlineChartBar,
  device: HiOutlineDevicePhoneMobile,
  support: HiOutlineLifebuoy,
};

const ServiceProcessSection = ({ title, subtitle, steps, alt = false }) => (
  <section className={`svc-process${alt ? ' svc-process--alt' : ''}`}>
    <div className="svc-process__container">
      <div className="svc-process__header">
        <h2 className="svc-process__title">{title}</h2>
        {subtitle && <p className="svc-process__subtitle">{subtitle}</p>}
      </div>
      <div className="svc-process__row">
        {steps.map((step, index) => {
          const Icon = PROCESS_STEP_ICONS[step.icon];
          return (
            <div key={step.step} className="svc-process__step">
              <div className="svc-process__circle" style={{ backgroundColor: step.color }}>
                {Icon ? <Icon /> : step.step}
              </div>
              {index < steps.length - 1 && (
                <span className="svc-process__arrow" aria-hidden="true">→</span>
              )}
              <p className="svc-process__label">Step {step.step}</p>
              <h3 className="svc-process__heading">{step.title}</h3>
              <div className="svc-process__desc">
                {step.lines ? (
                  step.lines.map((line) => (
                    <span key={line} className="svc-process__desc-line">{line}</span>
                  ))
                ) : (
                  <p>{step.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServiceProcessSection;
