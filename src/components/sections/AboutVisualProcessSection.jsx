import {
  ChatBubblesIcon,
  ChecklistIcon,
  FilePencilIcon,
  HammerIcon,
  HouseLineIcon
} from "../icons/LineIcons";

const iconMap = {
  chat: ChatBubblesIcon,
  filePencil: FilePencilIcon,
  checklist: ChecklistIcon,
  hammer: HammerIcon,
  house: HouseLineIcon
};

const AboutVisualProcessSection = ({ stages }) => {
  return (
    <section className="about-process-section" aria-labelledby="about-process-heading">
      <div className="container">
        <p className="section-label">Our Process</p>
        <h2 id="about-process-heading">A clear path from briefing to handover.</h2>

        <div className="about-process-track">
          {stages.map((stage, index) => {
            const Icon = iconMap[stage.icon];

            return (
              <article
                key={stage.id}
                className={`about-process-card${stage.gallery?.length ? " about-process-card--with-gallery" : ""}`}
              >
                <header className="about-process-card-header">
                  <p className="about-process-number">{index + 1}</p>
                  <div className="about-process-icon-wrap" aria-hidden="true">
                    <Icon className="about-process-icon" size={28} />
                  </div>
                </header>

                <h3>{stage.title}</h3>
                <p>{stage.description}</p>

                <figure className="about-process-image">
                  <img src={stage.image.src} alt={stage.image.alt} loading="lazy" />
                </figure>

                {stage.gallery?.length ? (
                  <div className="about-process-gallery" aria-label={`${stage.title} imagery`}>
                    {stage.gallery.map((galleryImage) => (
                      <figure key={galleryImage.src} className="about-process-gallery-item">
                        <img src={galleryImage.src} alt={galleryImage.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutVisualProcessSection;
