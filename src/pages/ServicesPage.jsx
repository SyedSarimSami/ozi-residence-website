import { useEffect } from "react";
import PageShell from "../components/layout/PageShell";
import ServicesDifferentiatorSection from "../components/sections/ServicesDifferentiatorSection";
import ServicesEditorialSection from "../components/sections/ServicesEditorialSection";
import {
  services,
  servicesDifferentiator,
  servicesIntro
} from "../data/services";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | OZI Residence";

    const metaDescription =
      "Discover OZI Residence residential services including custom homes, renovations, design and construct, spatial planning and project delivery across Perth.";

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
      <ServicesEditorialSection intro={servicesIntro} items={services} />
      <ServicesDifferentiatorSection {...servicesDifferentiator} />
    </PageShell>
  );
};

export default ServicesPage;
