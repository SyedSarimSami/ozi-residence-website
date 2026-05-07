const PageIntroSection = ({ label, title, description }) => {
  return (
    <section className="page-intro">
      <div className="container">
        {label && <p className="section-label">{label}</p>}
        <h1>{title}</h1>
        {description && <p className="page-intro-copy">{description}</p>}
      </div>
    </section>
  );
};

export default PageIntroSection;
