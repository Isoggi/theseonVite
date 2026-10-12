import {
  Link,
  makeStyles,
  Text,
  Title2,
  tokens,
} from "@fluentui/react-components";
import { ICertificate } from "../Interfaces";
import CardComponent from "./Card.component";

const useStyles = makeStyles({
  section: {
    margin: "0 auto",
    maxWidth: "1100px",
    padding: "clamp(1rem, 3vw, 2rem) 20px",
  },
  heading: {
    marginBottom: tokens.spacingVerticalL,
  },
  grid: {
    display: "grid",
    gap: tokens.spacingHorizontalL,
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  },
  cardBody: {
    color: tokens.colorNeutralForeground2,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
});

type CertificateSectionProps = {
  certificates: ICertificate[];
};

export default function CertificateSection({
  certificates,
}: CertificateSectionProps): React.JSX.Element {
  const styles = useStyles();

  return (
    <section aria-labelledby="certificates-heading" className={styles.section}>
      <div className={styles.heading}>
        <Title2 as="h2" id="certificates-heading">
          Certificates
        </Title2>
      </div>
      {certificates.length > 0 ? (
        <div className={styles.grid}>
          {certificates.map((certificate) => (
            <CardComponent
              key={certificate.id}
              title={certificate.title}
              description={certificate.issuer}
              image={certificate.image}
              body={
                <div className={styles.cardBody}>
                  {certificate.issueDate && (
                    <Text size={300}>Issued {certificate.issueDate}</Text>
                  )}
                  {certificate.credentialId && (
                    <Text size={300}>
                      Credential ID: {certificate.credentialId}
                    </Text>
                  )}
                  {certificate.description && (
                    <Text size={300}>{certificate.description}</Text>
                  )}
                </div>
              }
              footer={
                certificate.credentialUrl ? (
                  <Link
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate
                  </Link>
                ) : null
              }
            />
          ))}
        </div>
      ) : (
        <Text as="p" block>
          Certificates will be added soon.
        </Text>
      )}
    </section>
  );
}
