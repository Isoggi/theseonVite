import { useDocumentMeta } from "../Hooks";
import LandingExperience from "./Home/LandingExperience";
import LandingHeader from "./Home/LandingHeader";
// import LandingCarousel from "./Home/LandingCarousel";
// import { LandingPageStructureJson } from "../assets/Data";
// import { IPageStructure } from "../Interfaces";

export default function Home() {
  useDocumentMeta("theseOn | Personal portfolio", {
    description:
      "theseOn, personal portfolio of Kristanto Saptadi Nugraha, Full-Stack Developer, NET, C#, and React.",
  });

  // const pageStructure = LandingPageStructureJson as IPageStructure[];

  return (
    <div>
      <LandingHeader />
      {/* <LandingCarousel /> */}
      <LandingExperience />
    </div>
  );
}
