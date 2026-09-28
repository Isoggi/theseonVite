import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { LandingCarousel } from "./Home/LandingCarousel";

export default function Home() {
  useDocumentMeta("theseOn");

  return <LandingCarousel />;
}
