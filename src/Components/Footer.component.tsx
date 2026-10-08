import { Link, makeStyles, tokens } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

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

export default function Footer() {
  const styles = useStyles();
  const navigate = useNavigate();

  const navigateTo = (href: string) =>
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      navigate(href);
    };

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
    </footer>
  );
}
