import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-image-layer">
        <img
          src="/images/hero/Hero_House.png"
          alt="Modern single-storey Perth home at early evening"
        />
      </div>
      <div className="hero-gradient-overlay" />

      <div className="container hero-content">
        <div className="hero-copy">
          <h1 id="hero-heading">
            Boutique Homes.
            <br />
            Built Around the
            <br />
            Way You Live.
          </h1>

          <div className="hero-actions">
            <Link className="button button--taupe" to="/home-plans">
              Explore Home Designs
            </Link>
            <Link className="button button--outline" to="/get-in-touch">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
