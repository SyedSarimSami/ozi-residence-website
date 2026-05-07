const AboutRefinedIntroSection = ({ content }) => {
  return (
    <section className="about-refined-intro" aria-labelledby="about-refined-intro-heading">
      <div className="container about-refined-intro-layout">
        <div className="about-refined-intro-copy">
          <p className="section-label">{content.label}</p>
          <h1 id="about-refined-intro-heading">{content.headline}</h1>
          {content.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <figure className="about-refined-intro-image">
          <img src={content.image.src} alt={content.image.alt} loading="lazy" />
        </figure>
      </div>
    </section>
  );
};

export default AboutRefinedIntroSection;
