import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationItems } from "../../data/navigation";

const SiteHeader = ({ overlay = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerNavItems = navigationItems.filter(
    (item) => item.path !== "/home-plans"
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const headerClass = `site-header${overlay ? " site-header--overlay" : ""}`;

  return (
    <header className={headerClass}>
      <div className="header-inner container">
        <Link className="header-logo" to="/" aria-label="OZI Residence Home">
          <img src="/images/logos/primary-dark-cropped.png" alt="OZI Residence" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {headerNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button--taupe desktop-cta" to="/get-in-touch">
          Get in Touch
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu-panel${menuOpen ? " mobile-menu-panel--open" : ""}`}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          {headerNavItems.map((item) => (
            <NavLink
              key={`mobile-${item.path}`}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button--taupe mobile-nav-cta" to="/get-in-touch">
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
