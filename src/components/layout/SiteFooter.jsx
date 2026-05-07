import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LocationMarkerCircleIcon,
  MailIcon,
  PhoneIcon
} from "../icons/LineIcons";
import { footerServices, navigationItems } from "../../data/navigation";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="OZI Residence Home">
            <img src="/images/logos/primary-white-cropped.png" alt="OZI Residence" />
          </Link>
          <p>Architectural homes for modern Perth living.</p>

          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-list">
            {navigationItems.map((item) => (
              <li key={`footer-nav-${item.path}`}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-list">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-list footer-contact-list">
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
        </div>

        <aside className="footer-cta-box">
          <p>Ready to build your future?</p>
          <Link className="button button--taupe footer-cta-button" to="/get-in-touch">
            Get in Touch
          </Link>
        </aside>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 OZI Reisdence Pty Ltd</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
