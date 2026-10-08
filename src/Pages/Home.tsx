import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { LandingExperience } from "./Home/LandingExperience";
import { LandingCarousel } from "./Home/LandingCarousel";
import { makeStyles, Text, Title1, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  introduction: {
    margin: "0 auto",
    maxWidth: "900px",
    padding: `${tokens.spacingVerticalXL} 0`,
  },
  description: {
    color: tokens.colorNeutralForeground2,
    marginTop: tokens.spacingVerticalS,
  },
});

export default function Home() {
  useDocumentMeta("theseOn | Personal portfolio", {
    description:
      "Explore theseOn, the personal portfolio of a web developer, featuring professional experience, selected projects, and articles.",
  });
  const styles = useStyles();

  return (
    <div>
      <section aria-labelledby="home-title" className={styles.introduction}>
        <Title1 as="h1" id="home-title">
          Web developer portfolio and writing
        </Title1>
        <Text as="p" className={styles.description}>
          Explore professional experience, selected projects, and articles
          about building for the web.
        </Text>
      </section>
      <LandingCarousel />

      <LandingExperience />
    </div>
  );
}
