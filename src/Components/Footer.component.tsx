import { Link, makeStyles, tokens } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { AppThemeProps } from "../Types";
import { LandingAvatarJson } from "../assets/Data";
import { IAvatarInfo } from "../Interfaces";
import {
  GitHubBlack,
  GitHubWhite,
  LinkedInBlack,
  LinkedInWhite,
  ReactLogo,
  ViteLogo,
} from "../assets/Images";
const useStyles = makeStyles({
  footer: {
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground2,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground2,
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalL,
    justifyContent: "space-between",
    padding: "16px clamp(12px, 4vw, 32px)",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalL,
  },
});

const Footer = ({ themeMode }: AppThemeProps) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const navigateTo =
    (href: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      navigate(href);
    };
  const data = LandingAvatarJson as IAvatarInfo;
  return (
    <footer className={styles.footer}>
      <span>
        © {new Date().getFullYear()} theseOn - Built with{" "}
        {
          <img
            src={ReactLogo}
            alt="React"
            style={{ width: "12px", height: "12px" }}
            aria-label="React"
          />
        }{" "}
        +{" "}
        {
          <img
            src={ViteLogo}
            alt="Vite"
            style={{ width: "12px", height: "12px" }}
            aria-label="Vite"
          />
        }
      </span>
      <nav className={styles.links} aria-label="Footer navigation">
        <Link href="/about" onClick={navigateTo("/about")}>
          About
        </Link>
        <Link href="/privacy" onClick={navigateTo("/privacy")}>
          Privacy policy
        </Link>
      </nav>
      {data.socialLinks && (
        <nav className={styles.links} aria-label="Footer navigation">
          {data.socialLinks.email && (
            <Link href={"mailto:" + data.socialLinks.email}>
              <Mail24Regular />
            </Link>
          )}
          {data.socialLinks.linkedin && (
            <Link
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={themeMode === "dark" ? LinkedInWhite : LinkedInBlack}
                alt="LinkedIn"
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
          )}
          {data.socialLinks.github && (
            <Link
              href={data.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={themeMode === "dark" ? GitHubWhite : GitHubBlack}
                alt="GitHub"
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
          )}
        </nav>
      )}
    </footer>
  );
};

export default Footer;
