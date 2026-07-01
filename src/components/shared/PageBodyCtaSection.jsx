const PageBodyCtaSection = ({
  cta,
  classPrefix = 'ecd-v2',
  primaryHref = '#contact',
  secondaryHref = '#contact',
}) => {
  if (!cta) return null;

  const description =
    cta.description ||
    (Array.isArray(cta.paragraphs) ? cta.paragraphs.join(' ') : '');

  return (
    <section className={`${classPrefix}__cta_section`}>
      <div className={`${classPrefix}__container`}>
        <div className={`${classPrefix}__cta_compact vexoweb-cta-banner`}>
          <div className={`${classPrefix}__cta_compact_text`}>
            <h2 className={`${classPrefix}__cta_compact_title`}>{cta.title}</h2>
            {description ? <p>{description}</p> : null}
          </div>
          <div className={`${classPrefix}__cta_compact_actions`}>
            {cta.primaryCta ? (
              <a href={primaryHref} className={`${classPrefix}__cta_btn_primary`}>
                {cta.primaryCta} <span aria-hidden="true">→</span>
              </a>
            ) : null}
            {cta.secondaryCta ? (
              <a href={secondaryHref} className={`${classPrefix}__cta_btn_secondary`}>
                {cta.secondaryCta}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBodyCtaSection;
