import {
  ChatBubblesIcon,
  FilePencilIcon,
  HammerIcon,
  HouseLineIcon
} from "../icons/LineIcons";

const iconMap = {
  chat: ChatBubblesIcon,
  filePencil: FilePencilIcon,
  hammer: HammerIcon,
  house: HouseLineIcon
};

const AboutRefinedProcessPreviewSection = ({ content }) => {
  return (
    <section className="about-refined-process" aria-labelledby="about-refined-process-heading">
      <div className="container">
        <p className="section-label">{content.label}</p>
        <h2 id="about-refined-process-heading">{content.title}</h2>

        <div className="about-refined-process-grid">
          {content.stages.map((stage) => {
            const Icon = iconMap[stage.icon];

            return (
              <article key={stage.id} className="about-refined-process-item">
                <div className="about-refined-process-icon-wrap" aria-hidden="true">
                  <Icon className="about-refined-process-icon" size={24} />
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            );
          })}
        </div>

        <div className="about-refined-process-strip" aria-label="Process imagery strip">
          {content.imageStrip.map((image) => (
            <figure key={image.src} className="about-refined-process-strip-image">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutRefinedProcessPreviewSection;
