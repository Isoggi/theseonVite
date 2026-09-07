import {
  Link,
  makeStyles,
  Subtitle1,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  navbar: {
    alignItems: "center",
    backgroundColor: "#0078d4",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "10px clamp(12px, 4vw, 32px)",
    rowGap: "8px",
    width: "100%",
  },
  brand: {
    color: "white",
  },
  links: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    rowGap: "8px",
  },
  link: {
    color: "white",
  },
});

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
