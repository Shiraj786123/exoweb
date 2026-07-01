const ShowcaseServicePanelIntro = ({ intro, closing, classPrefix = 'ecd-show' }) => (
  <div className={`${classPrefix}__service_panel_intro`}>
    <p className={`${classPrefix}__service_intro_lead`}>{intro}</p>
    <p className={`${classPrefix}__service_closing`}>{closing}</p>
  </div>
);

export default ShowcaseServicePanelIntro;
