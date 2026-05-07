import { Link } from "react-router-dom";
import { planFallbackImage } from "../../data/plans";
import { BathShowerIcon, BedIcon, GarageIcon } from "../icons/LineIcons";

const PlanCard = ({ plan }) => {
  return (
    <article className="plan-card">
      <Link
        to={`/home-plans/${plan.slug}`}
        className="plan-card-image-wrap"
        aria-label={`View details for ${plan.name}`}
      >
        <img
          src={plan.image}
          alt={`${plan.name} facade design`}
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src.includes(planFallbackImage)) {
              return;
            }
            event.currentTarget.src = planFallbackImage;
          }}
        />
      </Link>

      <div className="plan-card-body">
        <h3>{plan.name}</h3>

        <ul className="plan-stats">
          <li>
            <BedIcon />
            <span>{plan.bedrooms}</span>
          </li>
          <li>
            <BathShowerIcon />
            <span>{plan.bathrooms}</span>
          </li>
          <li>
            <GarageIcon />
            <span>{plan.garage}</span>
          </li>
        </ul>

        <p className="plan-dimensions">
          {plan.lotWidth} Lot Width <span>|</span> {plan.size}
        </p>

        <p className="plan-description">{plan.description}</p>

        <Link className="plan-link" to={`/home-plans/${plan.slug}`}>
          View Plan <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </div>
    </article>
  );
};

export default PlanCard;
