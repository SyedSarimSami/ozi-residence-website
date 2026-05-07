import { Link, useParams } from "react-router-dom";
import PageShell from "../components/layout/PageShell";
import { BathShowerIcon, BedIcon, GarageIcon } from "../components/icons/LineIcons";
import { getPlanBySlug, planFallbackImage } from "../data/plans";

const HomePlanDetailPage = () => {
  const { slug } = useParams();
  const plan = getPlanBySlug(slug);

  if (!plan) {
    return (
      <PageShell>
        <section className="page-intro">
          <div className="container">
            <p className="section-label">Home Plan</p>
            <h1>Plan not found.</h1>
            <p className="page-intro-copy">
              The plan you are looking for is unavailable right now.
            </p>
            <Link className="button button--outline" to="/home-plans">
              Back to Home Plans
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="plan-detail-page">
        <div className="container">
          <p className="section-label">Home Plans</p>
          <h1>{plan.name}</h1>

          <div className="plan-detail-layout">
            <img
              src={plan.image}
              alt={`${plan.name} front elevation`}
              onError={(event) => {
                if (event.currentTarget.src.includes(planFallbackImage)) {
                  return;
                }
                event.currentTarget.src = planFallbackImage;
              }}
            />

            <aside>
              <ul className="plan-stats detail-stats">
                <li>
                  <BedIcon />
                  <span>{plan.bedrooms} bedrooms</span>
                </li>
                <li>
                  <BathShowerIcon />
                  <span>{plan.bathrooms} bathrooms</span>
                </li>
                <li>
                  <GarageIcon />
                  <span>{plan.garage} garage</span>
                </li>
              </ul>

              <p className="plan-detail-meta">
                <strong>Min. Lot Width:</strong> {plan.lotWidth}
              </p>
              <p className="plan-detail-meta">
                <strong>Home Size:</strong> {plan.size}
              </p>
              <p className="plan-detail-description">{plan.description}</p>
              <Link className="button button--taupe" to="/get-in-touch">
                Get in Touch
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default HomePlanDetailPage;
