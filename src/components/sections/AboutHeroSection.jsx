const AboutHeroSection = ({ content }) => {
  return (
    <section className="about-hero-section" aria-labelledby="about-hero-heading">
      <div className="container about-hero-grid">
        <div className="about-hero-copy">
          <p className="section-label">About</p>
          <h1 id="about-hero-heading">{content.headline}</h1>
        </div>

        <div className="about-hero-support">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="container about-hero-media-grid" aria-label="About imagery">
        {content.imagery.map((image) => (
          <figure key={image.src} className={`about-hero-image ${image.style}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default AboutHeroSection;
