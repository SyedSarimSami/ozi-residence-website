import { Link } from "react-router-dom";
import ArchitecturalPlanCard from "../plans/ArchitecturalPlanCard";
import { architecturalPlans } from "../../data/architecturalPlans";

const HomePlansShowcaseSection = () => {
  return (
    <>
      <section className="home-plans-hero">
        <div className="container home-plans-hero-inner">
          <p className="section-label">Home Plans</p>
          <h1>Home Plans</h1>
          <p className="home-plans-subtitle">
            Curated architectural concepts designed for modern Australian living.
          </p>
          <p className="home-plans-support-copy">
            Explore a considered collection of home plan concepts shaped around
            light, space, lifestyle and materiality. Each edition is designed as
            a starting point for a more personalised OZI Residence experience.
          </p>
          <Link className="button button--outline home-plans-hero-cta" to="/get-in-touch">
            Enquire About a Plan
          </Link>
        </div>
      </section>

      <section className="home-plans-collection">
        <div className="container">
          <div className="architect-plan-list">
            {architecturalPlans.map((plan) => (
              <ArchitecturalPlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-plans-bottom-cta">
        <div className="container home-plans-bottom-cta-inner">
          <h2>Start with a plan. Make it yours.</h2>
          <p>
            Our home plans are designed as refined starting points. From layout
            adjustments to facade selections and finishes, OZI Residence works
            with you to shape a home that feels considered, personal and
            beautifully built.
          </p>
          <Link className="button button--dark" to="/get-in-touch">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePlansShowcaseSection;
