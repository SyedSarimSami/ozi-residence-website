import { Link } from "react-router-dom";
import { BathShowerIcon, BedIcon, GarageIcon, LivingAreasIcon } from "../icons/LineIcons";
import { architecturalPlans } from "../../data/architecturalPlans";

const facadeFallback = "/images/hero/ozi-hero-main.webp";

const HomePlansCataloguePreviewSection = () => {
  return (
    <section className="plans-section plans-section--architect-preview" aria-labelledby="plans-catalogue-heading">
      <div className="container">
        <div className="plans-header-row">
          <div>
            <p className="section-label">Home Plans Catalogue</p>
            <h2 id="plans-catalogue-heading">Find a home that fits your lifestyle.</h2>
          </div>

          <Link className="button button--outline plans-view-all" to="/home-plans">
            View All Plans <span aria-hidden="true">{"\u2192"}</span>
          </Link>
        </div>

        <div className="architect-preview-grid">
          {architecturalPlans.map((plan) => (
            <article key={plan.slug} className="architect-preview-card">
              <Link className="architect-preview-image" to={`/home-plans#${plan.slug}`}>
                <img
                  src={plan.images?.facade || facadeFallback}
                  alt={`${plan.name} facade concept`}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src.includes(facadeFallback)) {
                      return;
                    }
                    event.currentTarget.src = facadeFallback;
                  }}
                />
                <span>{plan.collection}</span>
              </Link>

              <div className="architect-preview-content">
                <h3>
                  {plan.name} <small>{plan.edition}</small>
                </h3>
                <p>{plan.description}</p>

                <ul className="architect-preview-meta">
                  <li>
                    <BedIcon size={16} />
                    <span>{plan.statistics.bedrooms} Bed</span>
                  </li>
                  <li>
                    <BathShowerIcon size={16} />
                    <span>{plan.statistics.bathrooms} Bath</span>
                  </li>
                  <li>
                    <LivingAreasIcon size={16} />
                    <span>{plan.statistics.livingAreas} Living</span>
                  </li>
                  <li>
                    <GarageIcon size={16} />
                    <span>{plan.statistics.garageSpaces} Car</span>
                  </li>
                </ul>

                <Link className="plan-link" to={`/home-plans#${plan.slug}`}>
                  Discuss This Plan <span aria-hidden="true">{"\u2192"}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePlansCataloguePreviewSection;
