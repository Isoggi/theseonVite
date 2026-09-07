import { Stack, Link, Text } from "@fluentui/react";

const Navbar = () => {
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      styles={{
        root: {
          backgroundColor: "#0078d4",
          padding: "10px clamp(12px, 4vw, 32px)",
          color: "white",
          width: "100%",
          flexWrap: "wrap",
          rowGap: 8,
        },
      }}
    >
      <Text variant="xLarge" styles={{ root: { color: "white" } }}>
        theseOn
      </Text>
      <Stack
        horizontal
        wrap
        tokens={{ childrenGap: 20 }}
        styles={{ root: { rowGap: 8 } }}
      >
        <Link styles={{ root: { color: "white" } }} href="/">
          Home
        </Link>
        <Link styles={{ root: { color: "white" } }} href="/articles">
          Articles
        </Link>
        <Link styles={{ root: { color: "white" } }} href="/portfolio">
          Portfolio
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
