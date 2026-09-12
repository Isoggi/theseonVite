import {
  Link,
  makeStyles,
  Subtitle1,
  Switch,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  navbar: {
    alignItems: "center",
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "10px clamp(12px, 4vw, 32px)",
    rowGap: "8px",
    width: "100%",
  },
  brand: {
    color: tokens.colorNeutralForegroundOnBrand,
  },
  links: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    rowGap: "8px",
  },
  link: {
    color: tokens.colorNeutralForegroundOnBrand,
  },
});
type NavbarProps = {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
};

const Navbar = ({ themeMode, onThemeToggle }: NavbarProps) => {
  const styles = useStyles();

  return (
    <nav className={styles.navbar}>
      <Subtitle1 className={styles.brand}>theseOn</Subtitle1>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/articles">
          Articles
        </Link>
        <Link className={styles.link} href="/portfolio">
          Portfolio
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Switch
          label={themeMode === "dark" ? "🌙" : "☀️"}
          onClick={onThemeToggle}
          checked={themeMode === "dark"}
          aria-checked={themeMode === "dark"}
          aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} theme`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
