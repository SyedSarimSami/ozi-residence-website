import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const PageShell = ({ children, headerOverlay = false, hideFooter = false }) => {
  return (
    <div className="site-shell">
      <SiteHeader overlay={headerOverlay} />
      <main>{children}</main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
};

export default PageShell;
