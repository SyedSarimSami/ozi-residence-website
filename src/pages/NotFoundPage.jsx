import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell";

const NotFoundPage = () => {
  return (
    <PageShell>
      <section className="page-intro">
        <div className="container">
          <p className="section-label">404</p>
          <h1>Page not found.</h1>
          <p className="page-intro-copy">
            The page you requested does not exist.
          </p>
          <Link className="button button--outline" to="/">
            Return Home
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFoundPage;
