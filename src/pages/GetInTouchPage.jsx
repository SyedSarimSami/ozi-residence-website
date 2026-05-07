import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import PageShell from "../components/layout/PageShell";
import PageIntroSection from "../components/sections/PageIntroSection";

const GetInTouchPage = () => {
  const location = useLocation();
  const initialPlan = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("plan") || "";
  }, [location.search]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    suburb: "",
    plan: initialPlan,
    timeline: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key, value) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  return (
    <PageShell>
      <PageIntroSection
        label="Get in Touch"
        title="Tell us about your project."
        description="Share your block details, preferred plan direction and timeline. Our team will get back to you to discuss next steps."
      />

      <section className="simple-page-section get-in-touch-section">
        <div className="container get-in-touch-grid">
          <article>
            <h2>Project Enquiry</h2>
            <p className="get-in-touch-copy">
              We use this information to prepare a tailored first conversation.
            </p>

            {submitted ? (
              <p className="get-in-touch-success">
                Thanks. Your enquiry has been captured and the OZI Residence team
                will contact you shortly.
              </p>
            ) : (
              <form
                className="get-in-touch-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(event) => onChange("fullName", event.target.value)}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => onChange("email", event.target.value)}
                  required
                />

                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => onChange("phone", event.target.value)}
                  required
                />

                <label htmlFor="suburb">Suburb / Area</label>
                <input
                  id="suburb"
                  type="text"
                  value={formData.suburb}
                  onChange={(event) => onChange("suburb", event.target.value)}
                />

                <label htmlFor="plan">Plan Interest (Optional)</label>
                <input
                  id="plan"
                  type="text"
                  value={formData.plan}
                  onChange={(event) => onChange("plan", event.target.value)}
                  placeholder="e.g. salt-edition-01"
                />

                <label htmlFor="timeline">Build Timeline</label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(event) => onChange("timeline", event.target.value)}
                >
                  <option value="">Select a timeframe</option>
                  <option value="0-3 months">0-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12+ months">12+ months</option>
                </select>

                <label htmlFor="message">Project Notes</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) => onChange("message", event.target.value)}
                  placeholder="Briefly describe your goals, block size, and must-have spaces."
                />

                <button type="submit" className="button button--dark">
                  Submit Enquiry
                </button>
              </form>
            )}
          </article>

          <aside>
            <h2>What happens next</h2>
            <ul className="get-in-touch-steps">
              <li>We review your brief and preferred plan direction.</li>
              <li>We contact you to discuss budget, site and timeline.</li>
              <li>We outline tailored next steps for your project.</li>
            </ul>

            <figure className="get-in-touch-visual">
              <img
                src="/images/about/refined-interior.webp"
                alt="Refined residential interior detail with warm material palette"
                loading="lazy"
              />
            </figure>
          </aside>
        </div>
      </section>
    </PageShell>
  );
};

export default GetInTouchPage;
