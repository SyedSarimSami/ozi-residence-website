const filterConfig = [
  { key: "bedrooms", label: "Bedrooms" },
  { key: "bathrooms", label: "Bathrooms" },
  { key: "garage", label: "Garage" },
  { key: "lotWidth", label: "Min. Lot Width" },
  { key: "size", label: "Home Size" }
];

const PlanFilters = ({ filters, options, onFilterChange, onApply }) => {
  return (
    <form
      className="plans-filter-row"
      onSubmit={(event) => {
        event.preventDefault();
        onApply();
      }}
      aria-label="Plan filters"
    >
      {filterConfig.map((filter) => (
        <label key={filter.key} className="visually-hidden" htmlFor={filter.key}>
          {filter.label}
        </label>
      ))}

      <select
        id="bedrooms"
        value={filters.bedrooms}
        onChange={(event) => onFilterChange("bedrooms", event.target.value)}
      >
        <option value="">Bedrooms</option>
        {options.bedrooms.map((value) => (
          <option key={`bedroom-${value}`} value={String(value)}>
            {value}
          </option>
        ))}
      </select>

      <select
        id="bathrooms"
        value={filters.bathrooms}
        onChange={(event) => onFilterChange("bathrooms", event.target.value)}
      >
        <option value="">Bathrooms</option>
        {options.bathrooms.map((value) => (
          <option key={`bathroom-${value}`} value={String(value)}>
            {value}
          </option>
        ))}
      </select>

      <select
        id="garage"
        value={filters.garage}
        onChange={(event) => onFilterChange("garage", event.target.value)}
      >
        <option value="">Garage</option>
        {options.garage.map((value) => (
          <option key={`garage-${value}`} value={String(value)}>
            {value}
          </option>
        ))}
      </select>

      <select
        id="lotWidth"
        value={filters.lotWidth}
        onChange={(event) => onFilterChange("lotWidth", event.target.value)}
      >
        <option value="">Min. Lot Width</option>
        {options.lotWidth.map((value) => (
          <option key={`lot-${value}`} value={value}>
            {value}
          </option>
        ))}
      </select>

      <select
        id="size"
        value={filters.size}
        onChange={(event) => onFilterChange("size", event.target.value)}
      >
        <option value="">Home Size</option>
        {options.size.map((value) => (
          <option key={`size-${value}`} value={value}>
            {value}
          </option>
        ))}
      </select>

      <button type="submit" className="button button--dark">
        Apply Filters
      </button>
    </form>
  );
};

export default PlanFilters;
