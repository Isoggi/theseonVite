import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { Text, Title1 } from "@fluentui/react-components";

type Props = { urls?: string[] };

export default function Portfolio({ urls }: Props) {
  useDocumentMeta("Portfolio | theseOn", {
    description:
      "Explore selected web development projects and professional work featured in the theseOn portfolio.",
  });
  return (
    <div>
      <Title1 as="h1">Portfolio</Title1>
      <div>
        {urls?.map((url) => (
          <Text as="p" key={url}>
            {url}
          </Text>
        ))}
      </div>
    </div>
  );
}
