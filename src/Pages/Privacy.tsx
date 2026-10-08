import {
  makeStyles,
  Text,
  Title1,
  Title2,
  tokens,
} from "@fluentui/react-components";
import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    margin: "0 auto",
    maxWidth: "800px",
    padding: "clamp(1rem, 3vw, 2rem) 0",
  },
  section: {
    marginTop: "24px",
  },
  notice: {
    backgroundColor: tokens.colorNeutralBackground2,
    borderLeft: `4px solid ${tokens.colorBrandBackground}`,
    marginTop: "16px",
    padding: "12px 16px",
  },
});

export default function Privacy() {
  useDocumentMeta("Privacy policy - theseOn");
  const styles = useStyles();

  return (
    <article className={styles.page}>
      <Title1>Privacy policy</Title1>
      <Text as="p" block>
        Last updated: 7 October 2026
      </Text>
      <Text as="p" block>
        This policy explains how the theseOn website handles personal data and
        describes the rights available under the General Data Protection
        Regulation (GDPR). It covers this website only.
      </Text>

      <section aria-labelledby="controller" className={styles.section}>
        <Title2 as="h2" id="controller">
          Who is responsible for your data?
        </Title2>
        <Text as="p" block>
          The controller is the site owner and operator of theseOn. Before
          publishing this policy, the owner should provide a monitored contact
          address for privacy requests.
        </Text>
        <Text as="p" block className={styles.notice}>
          Privacy contact: [Kristanto Saptadi Nugraha. Mail:{" "}
          <Link to="mailto:kristantonugraha@theseon.my.id">
            kristantonugraha@theseon.my.id
          </Link>
          ]
        </Text>
      </section>

      <section aria-labelledby="data-collected" className={styles.section}>
        <Title2 as="h2" id="data-collected">
          What data is processed?
        </Title2>
        <Text as="p" block>
          This website does not currently offer accounts or forms for submitting
          personal information, and it does not use the site to build marketing
          profiles. The hosting provider may automatically process technical
          request data to deliver and protect the website, such as an IP
          address, request time, requested page, browser information, and
          response status. The exact data and retention period depend on the
          hosting provider&apos;s configuration and policies.
        </Text>
      </section>

      <section aria-labelledby="purposes" className={styles.section}>
        <Title2 as="h2" id="purposes">
          Why and on what legal basis?
        </Title2>
        <Text as="p" block>
          Technical data is used to deliver the pages you request, maintain the
          website, and investigate abuse or service problems. Where applicable,
          the legal basis is the site owner&apos;s legitimate interest in
          operating a secure and reliable website (GDPR Article 6(1)(f)).
          Information may also be retained where necessary to meet a legal
          obligation (Article 6(1)(c)). If optional analytics or other
          non-essential cookies are introduced, they should only be used with
          valid consent where required by law.
        </Text>
      </section>

      <section aria-labelledby="sharing" className={styles.section}>
        <Title2 as="h2" id="sharing">
          Service providers and international transfers
        </Title2>
        <Text as="p" block>
          The hosting provider may process technical data on the site
          owner&apos;s behalf. The owner should identify the provider and check
          its applicable privacy and retention terms. Data is not sold. If a
          provider processes data outside the European Economic Area, the owner
          should ensure an appropriate GDPR transfer safeguard is in place.
        </Text>
      </section>

      <section aria-labelledby="cookies" className={styles.section}>
        <Title2 as="h2" id="cookies">
          Cookies and similar technologies
        </Title2>
        <Text as="p" block>
          The site application does not intentionally set advertising or
          analytics cookies. Hosting or infrastructure services may use strictly
          necessary technologies to provide or secure the service. This should
          be reviewed if analytics, embedded third-party content, or other
          optional technologies are added; any required consent will be
          requested before those technologies are used.
        </Text>
      </section>

      <section aria-labelledby="retention" className={styles.section}>
        <Title2 as="h2" id="retention">
          How long is data kept?
        </Title2>
        <Text as="p" block>
          Technical logs are retained only for as long as needed for security,
          troubleshooting, and operational purposes, according to the hosting
          provider&apos;s configured retention period. The site owner should
          confirm that period with the provider.
        </Text>
      </section>

      <section aria-labelledby="rights" className={styles.section}>
        <Title2 as="h2" id="rights">
          Your GDPR rights
        </Title2>
        <Text as="p" block>
          Depending on the circumstances, you may have the right to access your
          personal data, correct it, request erasure or restriction, object to
          processing based on legitimate interests, and receive data you
          provided in a portable format. Where processing is based on consent,
          you may withdraw it at any time; withdrawal does not affect earlier
          lawful processing. You also have the right to complain to your local
          data protection supervisory authority.
        </Text>
        <Text as="p" block>
          To exercise a right, contact the site owner using the privacy contact
          above. The owner may need to verify your identity and will respond
          within the time required by applicable law.
        </Text>
      </section>

      <section aria-labelledby="security-changes" className={styles.section}>
        <Title2 as="h2" id="security-changes">
          Security and changes to this policy
        </Title2>
        <Text as="p" block>
          Reasonable measures are used to protect data handled by the site, but
          no internet transmission or storage method can be guaranteed
          completely secure. This policy may be updated as the site or its
          services change. The latest version and update date will be published
          on this page.
        </Text>
      </section>
    </article>
  );
}
