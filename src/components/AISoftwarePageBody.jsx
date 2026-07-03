import React from 'react';
import Image from 'next/image';
import aiDetailsVisual from '../assets/ai/ai-details-visual.jpg';
import { clientAvatarAlt } from '../lib/imageAlt';
import {
  HiOutlineCpuChip,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineBolt,
  HiOutlineCurrencyDollar,
  HiOutlineLightBulb,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineScale,
  HiOutlineWrenchScrewdriver,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineTruck,
  HiOutlineCog6Tooth,
  HiOutlineQuestionMarkCircle,
  HiOutlineDevicePhoneMobile,
  HiOutlineMagnifyingGlass,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlinePuzzlePiece,
  HiOutlineClipboardDocumentList,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineLifebuoy,
  HiOutlineClock,
  HiOutlineLanguage,
  HiOutlineFaceSmile,
  HiOutlineCalendarDays,
  HiOutlineMegaphone,
  HiOutlinePhoto,
  HiOutlineBookOpen,
} from 'react-icons/hi2';
import { SiOpenai } from 'react-icons/si';
import {
  AI_INTRO,
  AI_WHY_BUSINESS,
  AI_CHATBOT_DETAIL,
  AI_AGENTS_DETAIL,
  AI_AUTOMATION_DETAIL,
  AI_GENERATIVE_DETAIL,
  AI_INTEGRATION_DETAIL,
  AI_CUSTOM_DETAIL,
  AI_INDUSTRIES_SECTION,
  AI_INDUSTRY_TILES,
  AI_TESTIMONIALS,
  AI_FAQ,
  AI_CTA,
} from '../content/aiSoftwarePageContent';
import AISoftwareTransformSection from './ai/AISoftwareTransformSection';
import PageBodyCtaSection from './shared/PageBodyCtaSection';
import ServiceZigzagTimeline from './shared/ServiceZigzagTimeline';
import HorizontalZigzagInfographic from './shared/HorizontalZigzagInfographic';

const whyBusinessIcons = {
  'Automate Repetitive Tasks': HiOutlineCog6Tooth,
  'Improve Customer Support': HiOutlineChatBubbleLeftRight,
  'Generate Business Insights': HiOutlineChartBar,
  'Increase Employee Productivity': HiOutlineArrowTrendingUp,
  'Reduce Operational Expenses': HiOutlineCurrencyDollar,
  'Improve Decision Making': HiOutlineLightBulb,
  'Personalise Customer Experiences': HiOutlineUserGroup,
  'Scale Business Operations': HiOutlineScale,
};

const chatbotBenefitIcons = {
  '24/7 Customer Support': HiOutlineClock,
  'FAQ & Lead Generation': HiOutlineMegaphone,
  'Appointment Booking': HiOutlineCalendarDays,
  'Multilingual Conversations': HiOutlineLanguage,
  'Lower Support Costs': HiOutlineCurrencyDollar,
  'Better Customer Satisfaction': HiOutlineFaceSmile,
};

const chatbotPlatformIcons = {
  'Business Websites': HiOutlineGlobeAlt,
  WhatsApp: HiOutlineChatBubbleLeftRight,
  'Facebook Messenger': HiOutlineChatBubbleLeftRight,
  Telegram: HiOutlineChatBubbleLeftRight,
  'Mobile Applications': HiOutlineDevicePhoneMobile,
  'Internal Systems': HiOutlineBuildingOffice2,
};

const agentIcons = {
  'Customer Support Agents': HiOutlineLifebuoy,
  'Sales AI Agents': HiOutlineMegaphone,
  'Research Agents': HiOutlineMagnifyingGlass,
  'Employee Assistants': HiOutlineUserGroup,
  'Marketing AI Agents': HiOutlineSparkles,
  'Operations AI Agents': HiOutlineCog6Tooth,
};

const automationIcons = {
  'Email Automation': HiOutlineEnvelope,
  'Customer Follow-Up': HiOutlineChatBubbleLeftRight,
  'Invoice Processing': HiOutlineDocumentText,
  'Lead Qualification': HiOutlineMegaphone,
  'Data Entry Automation': HiOutlineClipboardDocumentList,
  'Document Processing': HiOutlineDocumentText,
  'Workflow Automation': HiOutlineCog6Tooth,
  'CRM Automation': HiOutlineUserGroup,
  'Reporting Automation': HiOutlineChartBar,
};

const generativeIcons = {
  'AI Content Generation': HiOutlineDocumentText,
  'Document Summarisation': HiOutlineClipboardDocumentList,
  'Report Generation': HiOutlineChartBar,
  'AI Email Assistants': HiOutlineEnvelope,
  'AI Image Generation': HiOutlinePhoto,
  'AI Code Assistants': HiOutlineCodeBracket,
  'Knowledge Base Systems': HiOutlineBookOpen,
  'Business Intelligence': HiOutlineLightBulb,
};

const integrationIcons = {
  OpenAI: SiOpenai,
  'Google Gemini': HiOutlineSparkles,
  'Anthropic Claude': HiOutlineChatBubbleLeftRight,
  'Meta Llama': HiOutlineCpuChip,
  'DeepSeek AI': HiOutlineCodeBracket,
  'Mistral AI': HiOutlineBolt,
};

const customIcons = {
  'Customer Service AI': HiOutlineLifebuoy,
  'Business Management AI': HiOutlineBuildingOffice2,
  'Data Analysis AI': HiOutlineChartBar,
  'Recommendation Engines': HiOutlineSparkles,
  'Workflow Automation': HiOutlineCog6Tooth,
  'Knowledge Management': HiOutlineBookOpen,
};

const industryIcons = {
  Healthcare: HiOutlineHeart,
  Retail: HiOutlineShoppingBag,
  Hospitality: HiOutlineBuildingOffice2,
  Education: HiOutlineAcademicCap,
  Finance: HiOutlineBanknotes,
  Construction: HiOutlineWrenchScrewdriver,
  Manufacturing: HiOutlineCog6Tooth,
  Logistics: HiOutlineTruck,
};

const showcaseIndustryIcons = {
  health: HiOutlineHeart,
  retail: HiOutlineShoppingBag,
  hotel: HiOutlineBuildingOffice2,
  education: HiOutlineAcademicCap,
  finance: HiOutlineBanknotes,
  construction: HiOutlineWrenchScrewdriver,
  manufacturing: HiOutlineCog6Tooth,
  logistics: HiOutlineTruck,
};

const shipAccents = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#dc2626', '#db2777', '#38bdf8'];

const SectionShell = ({
  icon: Icon,
  title,
  titleAccent,
  subtitle,
  children,
  variant = 'default',
  extraClass = '',
  titleClassName = 'ecd-h4',
  TitleTag = 'h4',
}) => (
  <section
    className={[
      'aiss-v2__section',
      variant === 'alt' && 'aiss-v2__section--alt',
      variant === 'hero' && 'aiss-v2__section--hero',
      extraClass,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <div className="aiss-v2__container">
      <div className="aiss-v2__section_head">
        {Icon && (
          <div className="aiss-v2__section_icon_wrap" aria-hidden="true">
            <Icon />
          </div>
        )}
        <div>
          <TitleTag className={titleClassName}>
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="aiss-v2__title_accent">{titleAccent}</span>
              </>
            )}
          </TitleTag>
          {subtitle && <p className="aiss-v2__subtitle">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  </section>
);

const SectionVisual = ({ src, alt, className = '', width = 420, height = 340 }) => (
  <div className={`ecd-v2__section_visual${className ? ` ${className}` : ''}`}>
    <Image src={src} alt={alt} width={width} height={height} className="ecd-v2__section_visual_img" />
  </div>
);

const Prose = ({ paragraphs, className = '' }) => (
  <div className={`aiss-v2__prose${className ? ` ${className}` : ''}`}>
    {paragraphs.map((p) => (
      <p key={p.slice(0, 48)}>{p}</p>
    ))}
  </div>
);

const IconPointsCard = ({ item, index, iconMap, fallbackIcon, accents = shipAccents }) => {
  const Icon = iconMap[item.title] || fallbackIcon;
  const accent = item.color || accents[index % accents.length];
  return (
    <article className="aiss-v2__ship_card" style={{ '--ship-accent': accent }}>
      <span className="aiss-v2__ship_num" style={{ background: accent }}>{index + 1}</span>
      <div className="aiss-v2__ship_icon" style={{ color: accent }}>
        <Icon />
      </div>
      <h5 className="ecd-h5">{item.title}</h5>
      {item.description ? (
        <p className="aiss-v2__ship_desc">{item.description}</p>
      ) : null}
      {item.points ? (
        <ul className="aiss-v2__ship_points">
          {item.points.map((point) => (
            <li key={point}>
              <HiOutlineCheckCircle aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};

const IconPointsRow = ({ items, iconMap, fallbackIcon, cols }) => (
  <div
    className={`aiss-v2__ship_row${cols ? ` aiss-v2__ship_row--cols-${cols}` : ''}`}
    style={cols ? { '--ship-cols': cols } : { '--ship-cols': items.length }}
  >
    {items.map((item, index) => (
      <IconPointsCard
        key={item.title}
        item={item}
        index={index}
        iconMap={iconMap}
        fallbackIcon={fallbackIcon}
      />
    ))}
  </div>
);

const AISoftwarePageBody = () => (
  <div className="aiss-v2 aiss-v2--details">
    <section className="aiss-v2__intro_combined">
      <div className="aiss-v2__details_label">
        <div className="aiss-v2__container">
          <div className="ecd-v2__details_label_inner">
            <div className="ecd-v2__details_label_copy">
              <span>In-Depth AI Solutions</span>
              <h4 className="ecd-h4">Everything You Need to Build Intelligent Software</h4>
              <p>Explore our complete AI development capabilities, integrations, industry solutions and long-term support.</p>
            </div>
            <SectionVisual
              src={aiDetailsVisual}
              alt="AI software development and automation services by Vexoweb in Sri Lanka"
              className="ecd-v2__section_visual--website-details"
              width={1024}
              height={769}
            />
          </div>
        </div>
      </div>
      <PageBodyCtaSection
        cta={AI_CTA}
        classPrefix="ecd-v2"
        service="AI Solutions"
        intro={{
          icon: <HiOutlineCpuChip />,
          text: AI_INTRO.summary,
        }}
      />
    </section>

    <SectionShell icon={HiOutlineLightBulb} title={AI_WHY_BUSINESS.title} variant="alt">
      <Prose paragraphs={AI_WHY_BUSINESS.intro} className="aiss-v2__prose--center" />
      <IconPointsRow
        items={AI_WHY_BUSINESS.items}
        iconMap={whyBusinessIcons}
        fallbackIcon={HiOutlineLightBulb}
        cols={4}
      />
      <Prose paragraphs={AI_WHY_BUSINESS.closing} className="aiss-v2__prose--center aiss-v2__prose--closing" />
    </SectionShell>

    <AISoftwareTransformSection />

    <SectionShell icon={HiOutlineChatBubbleLeftRight} title={AI_CHATBOT_DETAIL.title} titleAccent={AI_CHATBOT_DETAIL.titleAccent}>
      <p className="aiss-v2__center_lead">{AI_CHATBOT_DETAIL.intro}</p>
      <p className="aiss-v2__label aiss-v2__label--center">{AI_CHATBOT_DETAIL.benefitsLabel}</p>
      <ServiceZigzagTimeline
        items={AI_CHATBOT_DETAIL.benefits}
        iconMap={chatbotBenefitIcons}
        fallbackIcon={HiOutlineChatBubbleLeftRight}
      />
    </SectionShell>

    <SectionShell
      icon={HiOutlineGlobeAlt}
      title="Chatbot"
      titleAccent="Platforms"
      subtitle={AI_CHATBOT_DETAIL.platformsLabel}
      variant="hero"
      extraClass="aiss-v2__section--platforms_break"
    >
      <IconPointsRow
        items={AI_CHATBOT_DETAIL.platforms}
        iconMap={chatbotPlatformIcons}
        fallbackIcon={HiOutlineGlobeAlt}
        cols={3}
      />
      <p className="aiss-v2__closing aiss-v2__closing--center aiss-v2__closing--light">{AI_CHATBOT_DETAIL.closing}</p>
    </SectionShell>

    <SectionShell icon={HiOutlineRocketLaunch} title={AI_AGENTS_DETAIL.title} titleAccent={AI_AGENTS_DETAIL.titleAccent} variant="alt">
      <p className="aiss-v2__center_lead">{AI_AGENTS_DETAIL.intro}</p>
      <HorizontalZigzagInfographic
        items={AI_AGENTS_DETAIL.items}
        iconMap={agentIcons}
        fallbackIcon={HiOutlineRocketLaunch}
      />
      <p className="aiss-v2__closing aiss-v2__closing--center">{AI_AGENTS_DETAIL.closing}</p>
    </SectionShell>

    <SectionShell icon={HiOutlineCog6Tooth} title={AI_AUTOMATION_DETAIL.title} titleAccent={AI_AUTOMATION_DETAIL.titleAccent}>
      <p className="aiss-v2__center_lead">{AI_AUTOMATION_DETAIL.intro}</p>
      <p className="aiss-v2__label aiss-v2__label--center">{AI_AUTOMATION_DETAIL.solutionsLabel}</p>
      <ServiceZigzagTimeline
        items={AI_AUTOMATION_DETAIL.solutions}
        iconMap={automationIcons}
        fallbackIcon={HiOutlineCog6Tooth}
      />
      <p className="aiss-v2__closing aiss-v2__closing--center">{AI_AUTOMATION_DETAIL.closing}</p>
    </SectionShell>

    <SectionShell icon={HiOutlineSparkles} title={AI_GENERATIVE_DETAIL.title} titleAccent={AI_GENERATIVE_DETAIL.titleAccent} variant="alt">
      <IconPointsRow
        items={AI_GENERATIVE_DETAIL.services}
        iconMap={generativeIcons}
        fallbackIcon={HiOutlineSparkles}
        cols={4}
      />
    </SectionShell>

    <SectionShell icon={HiOutlinePuzzlePiece} title={AI_INTEGRATION_DETAIL.title} titleAccent={AI_INTEGRATION_DETAIL.titleAccent} variant="hero">
      <p className="aiss-v2__center_lead aiss-v2__center_lead--light">{AI_INTEGRATION_DETAIL.intro}</p>
      <HorizontalZigzagInfographic
        items={AI_INTEGRATION_DETAIL.platforms}
        iconMap={integrationIcons}
        fallbackIcon={HiOutlinePuzzlePiece}
      />
      <p className="aiss-v2__closing aiss-v2__closing--center aiss-v2__closing--light">{AI_INTEGRATION_DETAIL.closing}</p>
    </SectionShell>

    <SectionShell icon={HiOutlineCodeBracket} title={AI_CUSTOM_DETAIL.title} titleAccent={AI_CUSTOM_DETAIL.titleAccent}>
      <p className="aiss-v2__center_lead">{AI_CUSTOM_DETAIL.intro}</p>
      <IconPointsRow
        items={AI_CUSTOM_DETAIL.items}
        iconMap={customIcons}
        fallbackIcon={HiOutlineCodeBracket}
        cols={3}
      />
    </SectionShell>

    <SectionShell
      icon={HiOutlineBuildingOffice2}
      title={AI_INDUSTRIES_SECTION.title}
      titleAccent={AI_INDUSTRIES_SECTION.titleAccent}
      variant="hero"
    >
      <p className="aiss-v2__center_lead aiss-v2__center_lead--light">{AI_INDUSTRIES_SECTION.intro}</p>
      <div className="aiss-show__mini_grid aiss-show__mini_grid--cols-4 aiss-show__mini_grid--full-labels">
        {AI_INDUSTRY_TILES.map((industry) => {
          const Icon = showcaseIndustryIcons[industry.icon];
          return (
            <div key={industry.title} className="aiss-show__mini_card">
              <div className="aiss-show__mini_icon" style={{ color: industry.color }}>
                <Icon />
              </div>
              <span>{industry.title}</span>
            </div>
          );
        })}
      </div>
      <IconPointsRow
        items={AI_INDUSTRIES_SECTION.items}
        iconMap={industryIcons}
        fallbackIcon={HiOutlineBuildingOffice2}
        cols={4}
      />
    </SectionShell>

    <SectionShell icon={HiOutlineChatBubbleLeftRight} title={AI_TESTIMONIALS.title}>
      <div className="aiss-v2__testimonial_grid">
        {AI_TESTIMONIALS.items.map((item) => (
          <blockquote key={item.name} className="aiss-v2__testimonial_card">
            <p>&ldquo;{item.text}&rdquo;</p>
            <footer className="aiss-v2__testimonial_author">
              <Image
                src={item.avatar}
                alt={clientAvatarAlt(item.name, item.role)}
                width={56}
                height={56}
                className="aiss-v2__testimonial_avatar"
              />
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </SectionShell>

    <SectionShell
      icon={HiOutlineQuestionMarkCircle}
      title="Frequently Asked Questions"
      variant="alt"
      titleClassName="ecd-h6"
      TitleTag="h6"
    >
      <div className="aiss-v2__faq aiss-v2__faq--cols">
        <div className="aiss-v2__faq_col">
          {AI_FAQ.slice(0, 5).map((item) => (
            <details key={item.q} className="aiss-v2__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <div className="aiss-v2__faq_col">
          {AI_FAQ.slice(5).map((item) => (
            <details key={item.q} className="aiss-v2__faq_item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  </div>
);

export default AISoftwarePageBody;
