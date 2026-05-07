import { useEffect } from "react";
import PageShell from "../components/layout/PageShell";
import AboutRefinedIntroSection from "../components/sections/AboutRefinedIntroSection";
import AboutRefinedSnapshotSection from "../components/sections/AboutRefinedSnapshotSection";
import {
  aboutMeta,
  aboutRefinedIntro,
  aboutRefinedSnapshot
} from "../data/aboutContent";

const AboutPage = () => {
  useEffect(() => {
    document.title = aboutMeta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", aboutMeta.description);
  }, []);

  return (
    <PageShell>
      <AboutRefinedIntroSection content={aboutRefinedIntro} />
      <AboutRefinedSnapshotSection content={aboutRefinedSnapshot} />
    </PageShell>
  );
};

export default AboutPage;
