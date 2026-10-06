import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { LandingExperience } from "./Home/LandingExperience";
import { LandingCarousel } from "./Home/LandingCarousel";
export default function Home() {
  useDocumentMeta("theseOn");

  return (
    <div>
      <LandingCarousel />

      <LandingExperience />
    </div>
  );
}
