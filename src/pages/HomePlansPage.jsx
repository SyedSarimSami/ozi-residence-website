import { useEffect } from "react";
import PageShell from "../components/layout/PageShell";
import HomePlansShowcaseSection from "../components/sections/HomePlansShowcaseSection";

const HomePlansPage = () => {
  useEffect(() => {
    document.title = "Home Plans | OZI Residence";

    const metaDescription =
      "Explore OZI Residence home plans including SALT, RIDGE, TERRA and SHADE \u2014 curated architectural concepts designed for modern Australian living.";

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", metaDescription);
  }, []);

  return (
    <PageShell>
      <HomePlansShowcaseSection />
    </PageShell>
  );
};

export default HomePlansPage;
