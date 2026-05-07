import { processSteps } from "../../data/processSteps";
import {
  ChatBubblesIcon,
  ChecklistIcon,
  FilePencilIcon,
  HammerIcon,
  HouseLineIcon,
  MagnifierIcon
} from "../icons/LineIcons";

const iconMap = {
  chat: ChatBubblesIcon,
  filePencil: FilePencilIcon,
  checklist: ChecklistIcon,
  hammer: HammerIcon,
  review: MagnifierIcon,
  house: HouseLineIcon
};

const ProcessSection = ({ label = "Our Process" }) => {
  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="container">
        <h2 id="process-heading">{label}</h2>
        <div className="process-grid">
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon];

            return (
              <article key={step.number} className="process-item">
                <p className="process-step-number">{step.number}</p>
                <div className="process-icon-wrap">
                  <Icon className="process-icon" size={44} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
