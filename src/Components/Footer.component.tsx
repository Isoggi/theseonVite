import { Link, makeStyles, tokens } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { AppThemeProps } from "../Types";
import LandingAvatar from "../Assets/Data/LandingAvatar.json";
import { IAvatarInfo } from "../Interfaces/avatarinfo.interface";

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
  const data = LandingAvatar as IAvatarInfo;
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} theseOn</span>
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
                src={
                  themeMode === "dark" ? "/InBug-White.png" : "/InBug-Black.png"
                }
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
                src={
                  themeMode === "dark"
                    ? "/GitHub_Invertocat_White.svg"
                    : "/GitHub_Invertocat_Black.svg"
                }
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
