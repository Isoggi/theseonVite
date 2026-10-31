import * as React from "react";
import {
  makeStyles,
  Link,
  Text,
  Title1,
  tokens,
  Persona,
} from "@fluentui/react-components";
import {
  Home24Regular,
  Mail24Regular,
  Globe24Regular,
} from "@fluentui/react-icons";
import { AvatarComponent } from "../../Components";
import { IAvatarInfo } from "../../Interfaces";
import { LandingAvatarJson } from "../../assets/Data";
import { AvatarSizes } from "../../Types";
import { MyAvatar } from "../../assets/Images";

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
  desktopView: {
    display: "block",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  mobileView: {
    display: "none",
    "@media (max-width: 600px)": {
      // flexDirection: "column",
      display: "block",
    },
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
    "@media (max-width: 600px)": {
      // flexDirection: "column",
      padding: `${tokens.spacingVerticalS} 0`,
      gap: "0",
    },
  },
});

export default function LandingHeader(): React.JSX.Element {
  const styles = useStyles();
  const data = LandingAvatarJson as IAvatarInfo;

  return (
    <header aria-labelledby="home-title" className={styles.introduction}>
      <div className={`${styles.mobileView} ${styles.introduction}`}>
        <Text as="p" className={styles.description}>
          {data.description
            ? data.description
            : "Welcome to my personal portfolio!"}
        </Text>
        <Persona
          textAlignment="center"
          name={data.name}
          secondaryText={
            data.location && (
              <span className={styles.span}>
                <Home24Regular />
                {data.location}
              </span>
            )
          }
          tertiaryText={
            data.socialLinks?.alternateEmail && (
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
            )
          }
          quaternaryText={
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
          }
          textPosition="after"
          avatar={{
            image: { src: MyAvatar || data.avatar || "", alt: data.name },
            size: AvatarSizes.landingpage,
          }}
          size="huge"
        />
      </div>
      <div className={`${styles.desktopView} ${styles.introduction}`}>
        <Text as="p" className={styles.description}>
          {data.description
            ? data.description
            : "Welcome to my personal portfolio!"}
        </Text>
        <AvatarComponent
          name={data.name}
          image={MyAvatar || data.avatar}
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
      </div>
    </header>
  );
}
