import {
  makeStyles,
  tokens,
  Title1,
  Text,
  Button,
  Badge,
} from "@fluentui/react-components";
import { ArrowLeftRegular } from "@fluentui/react-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDocumentMeta } from "../../Hooks";
import { IArticle } from "../../Interfaces";
import articlesData from "../../assets/Data/Articles.json";

const useStyles = makeStyles({
  page: {
    margin: "0 auto",
    maxWidth: "800px",
    padding: "clamp(1rem, 3vw, 2rem) 20px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  meta: {
    color: tokens.colorNeutralForeground3,
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "center",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "8px",
  },
  content: {
    lineHeight: "1.7",
    whiteSpace: "pre-line",
    fontSize: tokens.fontSizeBase400,
  },
  backButton: {
    alignSelf: "flex-start",
  },
});

export default function ArticleDetail() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string; title?: string }>();

  const articles = articlesData as IArticle[];
  const article = articles.find((a) => a.id === id);

  useDocumentMeta(
    article ? `${article.title} | theseOn` : "Article Not Found | theseOn",
    {
      description: article?.description || "Article not found.",
    },
  );

  if (!article) {
    return (
      <div className={styles.page}>
        <Button
          icon={<ArrowLeftRegular />}
          appearance="subtle"
          className={styles.backButton}
          onClick={() => navigate("/articles")}
        >
          Back to Articles
        </Button>
        <Title1 as="h1">Article Not Found</Title1>
        <Text as="p">The requested article could not be found.</Text>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Button
        icon={<ArrowLeftRegular />}
        appearance="subtle"
        className={styles.backButton}
        onClick={() => navigate("/articles")}
      >
        Back to Articles
      </Button>
      <article>
        <header className={styles.header}>
          <Title1 as="h1">{article.title}</Title1>
          <div className={styles.meta}>
            {article.author && <Text size={300}>By {article.author}</Text>}
            {article.date && <Text size={300}>• {article.date}</Text>}
          </div>
          {article.tags && article.tags.length > 0 && (
            <div className={styles.tags}>
              {article.tags.map((tag) => (
                <Badge key={tag} appearance="tint" color="brand">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <section>
          <Text as="p" block className={styles.content}>
            {article.content || article.description}
          </Text>
        </section>
      </article>
    </div>
  );
}
