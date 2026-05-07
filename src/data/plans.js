export const planFallbackImage = "/images/hero/ozi-hero-main.webp";

export const plans = [
  {
    slug: "the-byford",
    name: "The Byford",
    image: "/images/plans/the-byford.webp",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    lotWidth: "12.5m+",
    size: "210m\u00B2",
    description: "Spacious family home with open plan living and alfresco."
  },
  {
    slug: "the-hammond",
    name: "The Hammond",
    image: "/images/plans/the-hammond.webp",
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    lotWidth: "10.5m+",
    size: "178m\u00B2",
    description: "Perfect for narrow lots with smart, functional design."
  },
  {
    slug: "the-southern",
    name: "The Southern",
    image: "/images/plans/the-southern.webp",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    lotWidth: "14m+",
    size: "228m\u00B2",
    description: "Designed for growing families who love to entertain."
  },
  {
    slug: "the-ashby",
    name: "The Ashby",
    image: "/images/plans/the-ashby.webp",
    bedrooms: 5,
    bathrooms: 3,
    garage: 2,
    lotWidth: "15m+",
    size: "260m\u00B2",
    description: "Two-storey living with space for the whole family."
  }
];

export const getPlanBySlug = (slug) => plans.find((plan) => plan.slug === slug);
