const ServicesDifferentiatorSection = ({ title, paragraphs }) => {
  return (
    <section className="services-differentiator-section" aria-labelledby="services-differentiator-title">
      <div className="container services-differentiator-grid">
        <h2 id="services-differentiator-title">{title}</h2>
        <div className="services-differentiator-copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDifferentiatorSection;
