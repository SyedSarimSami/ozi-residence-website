const AboutWhySection = ({ content }) => {
  return (
    <section className="about-why-section" aria-labelledby="about-why-heading">
      <div className="container about-why-layout">
        <div className="about-why-images" aria-label="Project imagery">
          {content.imagery.map((image, index) => (
            <figure key={image.src} className={`about-why-image about-why-image--${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="about-why-copy">
          <p className="section-label">Why OZI Residence</p>
          <h2 id="about-why-heading">{content.title}</h2>
          <p>{content.intro}</p>

          <ul className="about-why-points">
            {content.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutWhySection;
