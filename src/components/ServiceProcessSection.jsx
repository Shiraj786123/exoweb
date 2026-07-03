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

const splitProcessTitle = (titleText, titleAccent) => {
  if (titleAccent) {
    return { prefix: titleText, accent: titleAccent };
  }
  if (typeof titleText !== 'string') {
    return { prefix: titleText, accent: null };
  }
  const trimmed = titleText.trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace === -1) {
    return { prefix: trimmed, accent: null };
  }
  return {
    prefix: trimmed.slice(0, lastSpace),
    accent: trimmed.slice(lastSpace + 1),
  };
};

const ServiceProcessSection = ({
  title,
  titleAccent,
  subtitle,
  steps,
  alt = false,
  variant = 'grid',
  titleClassName = 'svc-process__title',
  titleTag: TitleTag = 'h2',
}) => {
  const { prefix, accent } = splitProcessTitle(title, titleAccent);
  const titleContent =
    variant === 'grid' && accent ? (
      <>
        {prefix}{' '}
        <span className="svc-process__title-accent">{accent}</span>
      </>
    ) : (
      title
    );

  return (
  <section
    className={[
      'svc-process',
      alt && 'svc-process--alt',
      variant === 'grid' && 'svc-process--grid',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <div className="svc-process__container">
      <div className="svc-process__header">
        <TitleTag className={titleClassName}>{titleContent}</TitleTag>
        {subtitle && <p className="svc-process__subtitle">{subtitle}</p>}
      </div>

      {variant === 'grid' ? (
        <div
          className="svc-process__grid"
          style={{ '--process-cols': steps.length }}
        >
          {steps.map((step) => {
            const Icon = PROCESS_STEP_ICONS[step.icon];
            const stepNumber = String(step.step).padStart(2, '0');
            return (
              <article key={step.step} className="svc-process__grid-card">
                <div className="svc-process__grid-top">
                  <div
                    className="svc-process__grid-icon"
                    style={{ backgroundColor: step.color }}
                  >
                    {Icon ? <Icon aria-hidden="true" /> : step.step}
                  </div>
                  <span className="svc-process__grid-num" aria-hidden="true">
                    {stepNumber}
                  </span>
                </div>
                <h5 className="ecd-h5 svc-process__grid-title">{step.title}</h5>
                <p className="svc-process__grid-desc">
                  {step.description || step.lines?.join(' ')}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
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
                <h5 className="ecd-h5 svc-process__heading">{step.title}</h5>
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
      )}
    </div>
  </section>
  );
};

export default ServiceProcessSection;
