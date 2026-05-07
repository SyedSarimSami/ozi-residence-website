import PageShell from "../components/layout/PageShell";
import PageIntroSection from "../components/sections/PageIntroSection";
import ProcessSection from "../components/sections/ProcessSection";

const ProcessPage = () => {
  return (
    <PageShell>
      <PageIntroSection
        label="Our Process"
        title="A simple, transparent path from first conversation to handover."
        description="Each step is guided by collaboration, care and clear communication."
      />
      <ProcessSection />
    </PageShell>
  );
};

export default ProcessPage;
