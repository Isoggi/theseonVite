import {
  Card,
  InteractionTag,
  InteractionTagPrimary,
  Link,
  makeStyles,
  TagGroup,
  Text,
  Title2,
  tokens,
} from "@fluentui/react-components";
import { GitRepositoryProps } from "../Types";

const useStyles = makeStyles({
  section: {
    margin: "0 auto",
    maxWidth: "1100px",
    padding: "clamp(1rem, 3vw, 2rem) 20px",
  },
  heading: {
    marginBottom: tokens.spacingVerticalL,
  },
  container: {
    gap: tokens.spacingHorizontalL,
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    maxWidth: "280px",
    width: "100%",
    height: "fit-content",
  },
});

const GitRepositorySection = ({ repos }: GitRepositoryProps) => {
  const style = useStyles();
  return (
    <section aria-labelledby="repository-heading" className={style.section}>
      <div className={style.heading}>
        <Title2 as="h2" id="repository-heading">
          Repositories
        </Title2>
      </div>
      <div className={style.container}>
        {repos.map((repo, index) => (
          <Card key={index} className={style.card}>
            <header>
              <Link href={repo.url}>{repo.title}</Link>
            </header>
            <Text>{repo.description}</Text>
            <footer>
              <TagGroup aria-label="Tech Stack">
                {repo.stack?.map((stack, index) => (
                  <InteractionTag key={index}>
                    <InteractionTagPrimary>{stack}</InteractionTagPrimary>
                  </InteractionTag>
                ))}
              </TagGroup>
            </footer>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GitRepositorySection;
