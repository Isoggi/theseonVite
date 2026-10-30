import { useDocumentMeta } from "../Hooks";
// import LandingExperience from "./Home/LandingExperience";
// import LandingHeader from "./Home/LandingHeader";
// import LandingCarousel from "./Home/LandingCarousel";
import { getPageModules } from "../Utils/getPageModules";
import { LandingPageStructureJson } from "../assets/Data";
import { IPageStructure } from "../Interfaces";

export default function Home() {
  useDocumentMeta("theseOn | Personal portfolio", {
    description:
      "Explore theseOn, the personal portfolio of a web developer, featuring professional experience, selected projects, and articles.",
  });

  const pageStructure = LandingPageStructureJson as IPageStructure[];
  const renderedSections = getPageModules("Home", pageStructure);
  return (
    <div>
      {/* <LandingHeader />
      <LandingCarousel />
      <LandingExperience /> */}
      {renderedSections}
    </div>
  );
}
