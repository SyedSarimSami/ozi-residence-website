import { brandValues } from "../../data/brandValues";
import {
  BadgeRibbonCheckIcon,
  HomeOutlineIcon,
  LocationMarkerCircleIcon,
  NotepadPencilIcon
} from "../icons/LineIcons";

const iconMap = {
  badge: BadgeRibbonCheckIcon,
  notepad: NotepadPencilIcon,
  home: HomeOutlineIcon,
  location: LocationMarkerCircleIcon
};

const BrandValuesSection = () => {
  return (
    <section className="value-strip" aria-label="OZI Residence values">
      <div className="container value-grid">
        {brandValues.map((value) => {
          const Icon = iconMap[value.icon];

          return (
            <article key={value.key} className="value-item">
              <div className="value-title-row">
                <Icon className="value-icon" />
                <h3>{value.title}</h3>
              </div>
              <p>{value.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BrandValuesSection;
