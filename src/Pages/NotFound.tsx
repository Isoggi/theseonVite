import {
  Link as FluentLink,
  makeStyles,
  Text,
  Title1,
  tokens,
} from "@fluentui/react-components";
import { useDocumentMeta } from "../Hooks/useDocumentMetadata";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    margin: "0 auto",
    maxWidth: "800px",
    padding: "clamp(2rem, 8vw, 5rem) 0",
  },
  link: {
    color: tokens.colorBrandForegroundLink,
  },
});

export default function NotFound() {
  useDocumentMeta("Page not found | theseOn", {
    description: "The page you requested could not be found on theseOn.",
    noIndex: true,
  });
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <section aria-labelledby="not-found-heading" className={styles.page}>
      <Title1 as="h1" id="not-found-heading">
        Page not found
      </Title1>
      <Text as="p">
        The page may have moved, or the address may be incorrect.
      </Text>
      <FluentLink
        className={styles.link}
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
        }}
      >
        Return to the home page
      </FluentLink>
    </section>
  );
}
