import {
  BadgeRibbonCheckIcon,
  LocationMarkerCircleIcon,
  NotepadPencilIcon,
  RenovationIcon
} from "../icons/LineIcons";

const iconMap = {
  experience: NotepadPencilIcon,
  background: RenovationIcon,
  boutique: BadgeRibbonCheckIcon,
  location: LocationMarkerCircleIcon
};

const AboutRefinedSnapshotSection = ({ content }) => {
  return (
    <section className="about-refined-snapshot" aria-labelledby="about-refined-snapshot-heading">
      <div className="container">
        <p className="section-label">{content.label}</p>
        <h2 id="about-refined-snapshot-heading">{content.title}</h2>

        <div className="about-refined-stat-row" aria-label="Experience stats">
          {content.stats.map((stat) => {
            const item = typeof stat === "string" ? { label: stat, icon: "experience" } : stat;
            const Icon = iconMap[item.icon] ?? NotepadPencilIcon;

            return (
              <article key={item.label} className="about-refined-stat-item">
                <Icon className="about-refined-stat-icon" size={34} />
                <p>{item.label}</p>
              </article>
            );
          })}
        </div>

        <div className="about-refined-snapshot-images" aria-label="Supporting imagery">
          {content.images.map((image) => (
            <figure key={image.src} className="about-refined-snapshot-image">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutRefinedSnapshotSection;
