import { Text, Stack } from "@fluentui/react";
import CardComponent from "../Components/Card.component";

const Articles = () => {
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
    <Stack tokens={{ childrenGap: 20 }} styles={{ root: { padding: 20 } }}>
      <Text variant="xxLarge">My Articles</Text>
      <Stack tokens={{ childrenGap: 20 }}>
        {articles.map((article, index) => (
          <CardComponent
            key={index}
            title={article.title}
            description={article.description}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Articles;
