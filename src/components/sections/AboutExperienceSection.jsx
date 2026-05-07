const AboutExperienceSection = ({ content }) => {
  return (
    <section className="about-experience-section" aria-labelledby="about-experience-heading">
      <div className="container about-experience-layout">
        <div className="about-experience-content">
          <p className="section-label">{content.label}</p>
          <h2 id="about-experience-heading">{content.title}</h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-experience-stat-grid" aria-label="Experience highlights">
          {content.stats.map((stat) => (
            <article key={stat} className="about-stat-card">
              <p>{stat}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="container about-experience-image-grid">
        {content.imagery.map((image, index) => (
          <figure key={image.src} className={`about-experience-image about-experience-image--${index + 1}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default AboutExperienceSection;
