import * as React from "react";
import {
  makeStyles,
  Link,
  Text,
  Title1,
  tokens,
} from "@fluentui/react-components";
import {
  Home24Regular,
  Mail24Regular,
  Globe24Regular,
} from "@fluentui/react-icons";
import { AvatarComponent } from "../../Components";
import { IAvatarInfo } from "../../Interfaces";
import AvatarInfo from "../../Assets/Data/LandingAvatar.json";
import { AvatarSizes } from "../../Types";

const useStyles = makeStyles({
  introduction: {
    margin: "0 auto",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column", // Stacks the items vertically
    alignItems: "center", // Centers items horizontally
    justifyContent: "center", // Centers items vertically if the container has height
    textAlign: "center",
    padding: `${tokens.spacingVerticalXL} 0`,
  },
  description: {
    color: tokens.colorNeutralForeground2,
    marginTop: tokens.spacingVerticalS,
  },
  span: {
    display: "inline-flex",
    alignItems: "center",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalXL}`,
    gap: tokens.spacingHorizontalS,
  },
});

export default function LandingHeader(): React.JSX.Element {
  const styles = useStyles();
  const data = AvatarInfo as IAvatarInfo;

  return (
    <section aria-labelledby="home-title" className={styles.introduction}>
      <Text as="p" className={styles.description}>
        {data.description
          ? data.description
          : "Welcome to my personal portfolio!"}
      </Text>
      <AvatarComponent
        name={data.name}
        image={data.avatar}
        size={AvatarSizes.landingpage}
      />
      <Title1 as="h1" id="home-title">
        {data.name ? data.name : "Welcome to theseOn's Portfolio"}
      </Title1>

      <Text as="p" className={styles.description}>
        {data.location && (
          <span className={styles.span}>
            <Home24Regular /> {data.location}
          </span>
        )}
        {data.socialLinks?.alternateEmail && (
          <span className={styles.span}>
            <Mail24Regular />
            <Link
              href={"mailto:" + data.socialLinks.alternateEmail}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.socialLinks.alternateEmail}
            </Link>
          </span>
        )}
        <span className={styles.span}>
          <Globe24Regular />
          <Link
            href={"https://theseon.my.id"}
            target="_blank"
            rel="noopener noreferrer"
          >
            theseon.my.id
          </Link>
        </span>
      </Text>
    </section>
  );
}
