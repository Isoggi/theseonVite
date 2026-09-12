import { useDocumentMeta } from "../Hooks/useDocumentMetadata";

type Props = {
  theme?: string;
};

export default function Home({ theme }: Props): React.JSX.Element {
  useDocumentMeta("theseOn");

  return <div>Home {theme ? `: ${theme}` : ""}</div>;
}
