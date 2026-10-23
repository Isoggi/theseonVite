import { makeStyles, Title1 } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import CardComponent from "../Components/Card.component";
import { useDocumentMeta } from "../Hooks";
import { IArticle } from "../Interfaces";
import { slugify } from "../Utils/slugify";
import articlesData from "../assets/Data/Articles.json";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
  },
  articles: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
});

const Articles = () => {
  useDocumentMeta("Articles | theseOn", {
    description:
      "Read articles and notes from theseOn on React, Fluent UI, web development, and building modern web applications.",
  });
  const styles = useStyles();
  const navigate = useNavigate();
  const articles = articlesData as IArticle[];

  return (
    <div className={styles.page}>
      <Title1 as="h1">My Articles</Title1>
      <div className={styles.articles}>
        {articles.map((article) => (
          <CardComponent
            key={article.id}
            title={article.title}
            description={article.description}
            onClick={() =>
              navigate(`/articles/${article.id}/${slugify(article.title)}`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
