import PageShell from "../components/layout/PageShell";
import BrandValuesSection from "../components/sections/BrandValuesSection";
import HeroSection from "../components/sections/HeroSection";
import HomePlansCataloguePreviewSection from "../components/sections/HomePlansCataloguePreviewSection";
import ProcessSection from "../components/sections/ProcessSection";

const HomePage = () => {
  return (
    <PageShell headerOverlay>
      <HeroSection />
      <BrandValuesSection />
      <HomePlansCataloguePreviewSection />
      <ProcessSection />
    </PageShell>
  );
};

export default HomePage;
