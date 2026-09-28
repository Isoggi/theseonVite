import { useDocumentMeta } from "../Hooks/useDocumentMetadata";

export default function About() {
  useDocumentMeta("About - theseOn");
  return (
    <div>
      <h2>About</h2>
      <p>Welcome to the About page!</p>
    </div>
  );
}
