import { useDocumentMeta } from "../Hooks";
import { CertificateSection, GitRepositorySection } from "../Components";
import { GitRepositoriesJson, CertificatesJson } from "../assets/Data";
import { Divider, Title1 } from "@fluentui/react-components";

export default function Portfolio() {
  useDocumentMeta("Portfolio | theseOn", {
    description:
      "Explore selected web development projects and professional work featured in the theseOn portfolio.",
  });
  return (
    <div>
      <Title1 as="h1">Portfolio</Title1>
      <Divider className="" />
      <GitRepositorySection repos={GitRepositoriesJson} />
      <Divider className="" />
      <CertificateSection certificates={CertificatesJson} />
    </div>
  );
}
