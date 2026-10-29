import { useDocumentMeta } from "../Hooks";
import { CertificateSection } from "../Components";
import repositoryData from "../assets/Data/GitRepositories.json";
import certificateData from "../assets/Data/Certificates.json";
import { Divider, Title1 } from "@fluentui/react-components";
import GitRepositorySection from "../Components/GItRepositorySection.component";

export default function Portfolio() {
  useDocumentMeta("Portfolio | theseOn", {
    description:
      "Explore selected web development projects and professional work featured in the theseOn portfolio.",
  });
  return (
    <div>
      <Title1 as="h1">Portfolio</Title1>
      <Divider className="" />
      <GitRepositorySection repos={repositoryData} />
      <Divider className="" />
      <CertificateSection certificates={certificateData} />
    </div>
  );
}
