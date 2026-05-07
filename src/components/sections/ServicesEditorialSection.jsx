import {
  ClientExperienceIcon,
  CustomHomesIcon,
  DesignConstructIcon,
  ProjectManagementIcon,
  RenovationIcon,
  SpatialPlanningIcon
} from "../icons/LineIcons";

const iconMap = {
  customHomes: CustomHomesIcon,
  renovation: RenovationIcon,
  designConstruct: DesignConstructIcon,
  spatialPlanning: SpatialPlanningIcon,
  projectManagement: ProjectManagementIcon,
  clientExperience: ClientExperienceIcon
};

const ServicesEditorialSection = ({ intro, items }) => {
  return (
    <section className="services-editorial-section" aria-labelledby="services-heading">
      <div className="container">
        <p className="section-label">{intro.eyebrow}</p>
        <h1 id="services-heading">{intro.title}</h1>
        <p className="services-editorial-intro-copy">{intro.description}</p>

        <div className="services-editorial-grid">
          {items.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article key={service.id} className="services-editorial-card">
                <div className="services-editorial-icon-wrap" aria-hidden="true">
                  <Icon className="services-editorial-icon" size={34} />
                </div>

                <h2 className="services-editorial-title">
                  <span>{service.title}</span>
                </h2>

                <p className="services-editorial-description">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesEditorialSection;
