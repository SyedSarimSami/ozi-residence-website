import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell";
import { LocationMarkerCircleIcon, MailIcon, PhoneIcon } from "../components/icons/LineIcons";
import PageIntroSection from "../components/sections/PageIntroSection";

const ContactPage = () => {
  return (
    <PageShell>
      <PageIntroSection
        label="Contact"
        title="Let's discuss your future home."
        description="Reach out to start a conversation about your block, budget and vision."
      />

      <section className="simple-page-section contact-panel">
        <div className="container contact-grid">
          <article>
            <h2>Get in touch</h2>
            <ul className="contact-list">
              <li>
                <PhoneIcon />
                <a href="tel:0481132686">0481 132 686</a>
              </li>
              <li>
                <MailIcon />
                <a href="mailto:hello@oziresidence.com.au">
                  hello@oziresidence.com.au
                </a>
              </li>
              <li>
                <LocationMarkerCircleIcon size={18} />
                <span>Perth, Western Australia</span>
              </li>
            </ul>
          </article>

          <aside>
            <h2>Ready to build your future?</h2>
            <p>
              Tell us about your project and we will guide you through next
              steps.
            </p>
            <Link className="button button--taupe" to="/home-plans">
              Explore Home Designs
            </Link>
          </aside>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
