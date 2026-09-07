import {
  makeStyles,
  Title1,
} from "@fluentui/react-components";
import CardComponent from "../Components/Card.component";

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
  const styles = useStyles();
  const articles = [
    {
      title: "Understanding React Hooks",
      description: "A deep dive into React hooks.",
    },
    {
      title: "Fluent UI for React Developers",
      description: "How to use Fluent UI in your React apps.",
    },
    {
      title: "Building a Portfolio with Vite",
      description: "Learn how to build fast web apps with Vite.",
    },
  ];

  return (
    <div className={styles.page}>
      <Title1>My Articles</Title1>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <CardComponent
            key={index}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
