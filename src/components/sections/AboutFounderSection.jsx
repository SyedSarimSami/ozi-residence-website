const AboutFounderSection = ({ content }) => {
  return (
    <section className="about-founder-section" aria-labelledby="about-founder-heading">
      <div className="container about-founder-layout">
        <div className="about-founder-copy">
          <p className="section-label">{content.eyebrow}</p>
          <h2 id="about-founder-heading">{content.title}</h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-founder-images" aria-label="Founder and team imagery">
          {content.imagery.map((image, index) => (
            <figure key={image.src} className={`about-founder-image about-founder-image--${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;
