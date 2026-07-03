'use client';

import ProposalCtaButton from './ProposalCtaButton';
import { CONTACT_PHONE_HREF } from '../../lib/contactInfo';

const PageBodyCtaSection = ({
  cta,
  classPrefix = 'ecd-v2',
  intro,
  service,
  primaryOpensProposal = true,
  primaryHref = '/contact',
  secondaryHref = CONTACT_PHONE_HREF,
}) => {
  if (!cta) return null;

  const description =
    cta.description ||
    (Array.isArray(cta.paragraphs) ? cta.paragraphs.join(' ') : '');

  const ctaBanner = (
    <div className={`${classPrefix}__cta_compact vexoweb-cta-banner`}>
      <div className={`${classPrefix}__cta_compact_text`}>
        <h5 className={`ecd-h5 ${classPrefix}__cta_compact_title`}>{cta.title}</h5>
        {description ? <p>{description}</p> : null}
      </div>
      <div className={`${classPrefix}__cta_compact_actions`}>
        {cta.primaryCta ? (
          primaryOpensProposal ? (
            <ProposalCtaButton
              className={`${classPrefix}__cta_btn_primary`}
              service={service}
            >
              {cta.primaryCta} <span aria-hidden="true">→</span>
            </ProposalCtaButton>
          ) : (
            <a href={primaryHref} className={`${classPrefix}__cta_btn_primary`}>
              {cta.primaryCta} <span aria-hidden="true">→</span>
            </a>
          )
        ) : null}
        {cta.secondaryCta ? (
          <a href={secondaryHref} className={`${classPrefix}__cta_btn_secondary`}>
            {cta.secondaryCta}
          </a>
        ) : null}
      </div>
    </div>
  );

  if (intro) {
    return (
      <section className={`${classPrefix}__intro_cta_section`}>
        <div className={`${classPrefix}__container`}>
          <div className={`${classPrefix}__intro_cta_grid`}>
            <div className={`${classPrefix}__intro_brief ${classPrefix}__intro_brief--paired`}>
              {intro.icon ? (
                <div className={`${classPrefix}__intro_icon`} aria-hidden="true">
                  {intro.icon}
                </div>
              ) : null}
              <div className={`${classPrefix}__intro_brief_copy`}>
                {intro.children ?? (intro.text ? <p>{intro.text}</p> : null)}
              </div>
            </div>
            {ctaBanner}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${classPrefix}__cta_section`}>
      <div className={`${classPrefix}__container`}>{ctaBanner}</div>
    </section>
  );
};

export default PageBodyCtaSection;
