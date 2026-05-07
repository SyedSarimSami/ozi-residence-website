import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BathShowerIcon,
  BedIcon,
  GarageIcon,
  LivingAreasIcon
} from "../icons/LineIcons";

const facadeFallback = "/images/hero/ozi-hero-main.webp";
const floorPlanFallback = "/images/home-plans/placeholders/floorplan-placeholder.svg";

const DetailSection = ({ title, children }) => (
  <section className="architect-detail-section">
    <h3>{title}</h3>
    {children}
  </section>
);

const PlanDetails = ({ plan, compact = false }) => (
  <>
    <DetailSection title="Key Features">
      <ul className={`architect-key-feature-list${compact ? " compact" : ""}`}>
        {plan.keyFeatures.map((feature) => (
          <li key={`${plan.slug}-feature-${feature}`}>{feature}</li>
        ))}
      </ul>
    </DetailSection>

    <DetailSection title="Floor Plan Highlights">
      <div className={`architect-floor-zones${compact ? " compact" : ""}`}>
        {plan.floorPlanHighlights.map((zone) => (
          <article key={`${plan.slug}-${zone.zone}`} className="architect-floor-zone">
            <h4>{zone.zone}</h4>
            <ul>
              {zone.points.map((point) => (
                <li key={`${plan.slug}-${zone.zone}-${point}`}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </DetailSection>

    <DetailSection title="Facade Features">
      <ul className={`architect-facade-feature-list${compact ? " compact" : ""}`}>
        {plan.facadeFeatures.map((feature) => (
          <li key={`${plan.slug}-facade-${feature}`}>{feature}</li>
        ))}
      </ul>
    </DetailSection>
  </>
);

const ArchitecturalPlanCard = ({ plan }) => {
  const [imageView, setImageView] = useState("facade");
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    if (!detailOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setDetailOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [detailOpen]);

  return (
    <>
      <article id={plan.slug} className="architect-plan-card">
        <div className={`architect-plan-media view-${imageView}`}>
          <img
            className="architect-plan-image architect-plan-image--facade"
            src={plan.images?.facade || facadeFallback}
            alt={`${plan.name} ${plan.edition} facade`}
            loading="lazy"
            onError={(event) => {
              if (event.currentTarget.src.includes(facadeFallback)) {
                return;
              }
              event.currentTarget.src = facadeFallback;
            }}
          />

          <img
            className="architect-plan-image architect-plan-image--floor"
            src={plan.images?.floorPlan || floorPlanFallback}
            alt={`${plan.name} ${plan.edition} floor plan`}
            loading="lazy"
            onError={(event) => {
              if (event.currentTarget.src.includes(floorPlanFallback)) {
                return;
              }
              event.currentTarget.src = floorPlanFallback;
            }}
          />

          <button
            type="button"
            className="architect-plan-media-trigger"
            onClick={() => setDetailOpen(true)}
            aria-label={`Open ${plan.name} details`}
          />
        </div>

        <div className="architect-plan-segmented">
          <button
            type="button"
            className={imageView === "facade" ? "active" : ""}
            onClick={() => setImageView("facade")}
            aria-pressed={imageView === "facade"}
          >
            Facade
          </button>
          <button
            type="button"
            className={imageView === "floor" ? "active" : ""}
            onClick={() => setImageView("floor")}
            aria-pressed={imageView === "floor"}
          >
            Floor Plan
          </button>
        </div>

        <div className="architect-plan-content">
          <p className="architect-plan-content-label">{plan.collection}</p>
          <h2>
            <button
              type="button"
              className="architect-title-trigger"
              onClick={() => setDetailOpen(true)}
            >
              {plan.name} <span>- {plan.edition}</span>
            </button>
          </h2>
          <p className="architect-plan-description">{plan.description}</p>

          <div className="architect-plan-tags">
            {plan.propertyTags.map((tag) => (
              <span key={`${plan.slug}-${tag}`}>{tag}</span>
            ))}
          </div>

          <ul className="architect-plan-meta" aria-label={`${plan.name} statistics`}>
            <li>
              <BedIcon size={18} />
              <div>
                <small>Bedrooms</small>
                <span>{plan.statistics.bedrooms}</span>
              </div>
            </li>
            <li>
              <BathShowerIcon size={18} />
              <div>
                <small>Bathrooms</small>
                <span>{plan.statistics.bathrooms}</span>
              </div>
            </li>
            <li>
              <LivingAreasIcon size={18} />
              <div>
                <small>Living Areas</small>
                <span>{plan.statistics.livingAreas}</span>
              </div>
            </li>
            <li>
              <GarageIcon size={18} />
              <div>
                <small>Garage</small>
                <span>{plan.statistics.garageSpaces} Car</span>
              </div>
            </li>
          </ul>

          <div className="architect-plan-detail-stack">
            <PlanDetails plan={plan} />
          </div>

          <div className="architect-plan-accordion">
            <details>
              <summary>Key Features</summary>
              <DetailSection title="Key Features">
                <ul className="architect-key-feature-list compact">
                  {plan.keyFeatures.map((feature) => (
                    <li key={`${plan.slug}-mobile-feature-${feature}`}>{feature}</li>
                  ))}
                </ul>
              </DetailSection>
            </details>

            <details>
              <summary>Floor Plan Highlights</summary>
              <DetailSection title="Floor Plan Highlights">
                <div className="architect-floor-zones compact">
                  {plan.floorPlanHighlights.map((zone) => (
                    <article
                      key={`${plan.slug}-mobile-${zone.zone}`}
                      className="architect-floor-zone"
                    >
                      <h4>{zone.zone}</h4>
                      <ul>
                        {zone.points.map((point) => (
                          <li key={`${plan.slug}-mobile-${zone.zone}-${point}`}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </DetailSection>
            </details>

            <details>
              <summary>Facade Features</summary>
              <DetailSection title="Facade Features">
                <ul className="architect-facade-feature-list compact">
                  {plan.facadeFeatures.map((feature) => (
                    <li key={`${plan.slug}-mobile-facade-${feature}`}>{feature}</li>
                  ))}
                </ul>
              </DetailSection>
            </details>
          </div>

          <Link className="button button--dark architect-plan-cta" to={`/get-in-touch?plan=${plan.slug}`}>
            Discuss This Plan
          </Link>
        </div>
      </article>

      {detailOpen && (
        <div
          className="architect-plan-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${plan.name} details`}
          onClick={() => setDetailOpen(false)}
        >
          <article className="architect-plan-modal" onClick={(event) => event.stopPropagation()}>
            <header className="architect-plan-modal-header">
              <div>
                <p>{plan.collection}</p>
                <h3>
                  {plan.name} <span>- {plan.edition}</span>
                </h3>
              </div>
              <button
                type="button"
                className="architect-plan-modal-close"
                onClick={() => setDetailOpen(false)}
                aria-label="Close plan details"
              >
                x
              </button>
            </header>

            <div className={`architect-plan-modal-media view-${imageView}`}>
              <img
                className="architect-plan-image architect-plan-image--facade"
                src={plan.images?.facade || facadeFallback}
                alt={`${plan.name} facade`}
              />
              <img
                className="architect-plan-image architect-plan-image--floor"
                src={plan.images?.floorPlan || floorPlanFallback}
                alt={`${plan.name} floor plan`}
              />
            </div>

            <div className="architect-plan-segmented modal">
              <button
                type="button"
                className={imageView === "facade" ? "active" : ""}
                onClick={() => setImageView("facade")}
                aria-pressed={imageView === "facade"}
              >
                Facade
              </button>
              <button
                type="button"
                className={imageView === "floor" ? "active" : ""}
                onClick={() => setImageView("floor")}
                aria-pressed={imageView === "floor"}
              >
                Floor Plan
              </button>
            </div>

            <p className="architect-plan-description modal">{plan.description}</p>

            <div className="architect-plan-detail-stack modal">
              <PlanDetails plan={plan} compact />
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default ArchitecturalPlanCard;
