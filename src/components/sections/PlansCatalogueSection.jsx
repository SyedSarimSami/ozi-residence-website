import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { plans } from "../../data/plans";
import PlanCard from "../plans/PlanCard";
import PlanFilters from "../plans/PlanFilters";

const defaultFilters = {
  bedrooms: "",
  bathrooms: "",
  garage: "",
  lotWidth: "",
  size: ""
};

const uniqueValues = (list) => [...new Set(list)];

const matchesFilter = (plan, filterState) => {
  if (filterState.bedrooms && String(plan.bedrooms) !== filterState.bedrooms) {
    return false;
  }
  if (filterState.bathrooms && String(plan.bathrooms) !== filterState.bathrooms) {
    return false;
  }
  if (filterState.garage && String(plan.garage) !== filterState.garage) {
    return false;
  }
  if (filterState.lotWidth && plan.lotWidth !== filterState.lotWidth) {
    return false;
  }
  if (filterState.size && plan.size !== filterState.size) {
    return false;
  }

  return true;
};

const PlansCatalogueSection = ({
  label = "Home Plans Catalogue",
  heading = "Find a home that fits your lifestyle.",
  showViewAllButton = true,
  maxCards = 4
}) => {
  const [filters, setFilters] = useState(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters);

  const options = useMemo(
    () => ({
      bedrooms: uniqueValues(plans.map((plan) => plan.bedrooms)).sort((a, b) => a - b),
      bathrooms: uniqueValues(plans.map((plan) => plan.bathrooms)).sort((a, b) => a - b),
      garage: uniqueValues(plans.map((plan) => plan.garage)).sort((a, b) => a - b),
      lotWidth: uniqueValues(plans.map((plan) => plan.lotWidth)),
      size: uniqueValues(plans.map((plan) => plan.size))
    }),
    []
  );

  const filteredPlans = useMemo(
    () => plans.filter((plan) => matchesFilter(plan, appliedFilters)),
    [appliedFilters]
  );

  const visiblePlans = maxCards ? filteredPlans.slice(0, maxCards) : filteredPlans;

  return (
    <section className="plans-section" aria-labelledby="plans-catalogue-heading">
      <div className="container">
        <div className="plans-header-row">
          <div>
            <p className="section-label">{label}</p>
            <h2 id="plans-catalogue-heading">{heading}</h2>
          </div>

          {showViewAllButton && (
            <Link className="button button--outline plans-view-all" to="/home-plans">
              View All Plans <span aria-hidden="true">{"\u2192"}</span>
            </Link>
          )}
        </div>

        <PlanFilters
          filters={filters}
          options={options}
          onFilterChange={(key, value) =>
            setFilters((current) => ({ ...current, [key]: value }))
          }
          onApply={() => setAppliedFilters(filters)}
        />

        {visiblePlans.length > 0 ? (
          <div className="plans-grid">
            {visiblePlans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No plans match the selected filters yet. Try adjusting your selections.
          </p>
        )}
      </div>
    </section>
  );
};

export default PlansCatalogueSection;
