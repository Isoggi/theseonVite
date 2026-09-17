import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { LandingCarousel } from "./Home/LandingCarousel";

export default function Home(): React.JSX.Element {
  useDocumentMeta("theseOn");

  return <LandingCarousel />;
}
