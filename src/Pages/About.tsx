import { makeStyles, Text, Title1, Title2 } from "@fluentui/react-components";
import { useDocumentMeta } from "../Hooks/useDocumentMetadata";

const useStyles = makeStyles({
  page: {
    margin: "0 auto",
    maxWidth: "800px",
    padding: "clamp(1rem, 3vw, 2rem) 0",
  },
  section: {
    marginTop: "24px",
  },
});

export default function About() {
  useDocumentMeta("About | theseOn", {
    description:
      "Learn about theseOn, a personal portfolio and writing space sharing professional experience, selected projects, and technology articles.",
  });
  const styles = useStyles();

  return (
    <article className={styles.page}>
      <Title1 as="h1">About theseOn</Title1>
      <section className={styles.section}>
        <Text as="p" block>
          theseOn is a personal portfolio and writing space for sharing
          professional experience, selected projects, and articles about
          technology and building for the web.
        </Text>
        <Text as="p" block>
          This site brings those different parts together in one place. Browse
          the portfolio to explore featured work, visit the articles section
          for notes and ideas, or return to the home page for an overview.
        </Text>
      </section>
      <section aria-labelledby="about-purpose" className={styles.section}>
        <Title2 as="h2" id="about-purpose">
          The purpose of this site
        </Title2>
        <Text as="p" block>
          The goal is to make it easy to learn about the work and interests
          represented here. Content may evolve over time as projects and
          professional experience change.
        </Text>
      </section>
    </article>
  );
}
