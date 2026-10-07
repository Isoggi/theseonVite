import {
  Link,
  makeStyles,
  Subtitle1,
  Switch,
  tokens,
} from "@fluentui/react-components";
import {
  Hamburger,
  Nav,
  NavDrawer,
  NavDrawerBody,
  NavItem,
} from "@fluentui/react-nav";
import { AppThemeProps } from "../Types";
import * as React from "react";
import { SearchBar } from "./";

const useStyles = makeStyles({
  navbar: {
    alignItems: "center",
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "10px clamp(12px, 4vw, 32px)",
    position: "sticky",
    rowGap: "8px",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
  brand: {
    color: tokens.colorNeutralForegroundOnBrand,
  },
  desktopNav: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    rowGap: "8px",
    // marginLeft: "auto",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  navItem: {
    color: tokens.colorNeutralForegroundOnBrand,
  },
  mobileMenu: {
    alignItems: "end",
    display: "none",
    gap: "8px",
    justifyContent: "end",
    marginLeft: "auto",
    "@media (max-width: 600px)": {
      display: "block",
    },
  },
  drawer: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  drawerThemeSwitch: {
    textAlign: "end",
    padding: tokens.spacingVerticalM,
  },
  drawerNavItem: {
    textAlign: "end",
    color: tokens.colorNeutralForeground1,
  },
});

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

const Navbar = ({ themeMode, onThemeToggle }: AppThemeProps) => {
  const styles = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <Subtitle1 className={styles.brand}>theseOn</Subtitle1>
      <div className={styles.desktopNav}>
        <SearchBar onSearch={() => {}} />
      </div>
      <div className={styles.desktopNav}>
        {navigationItems.map((item) => (
          <Link
            className={styles.navItem}
            href={item.href}
            key={item.href}
            value={item.href}
          >
            {item.label}
          </Link>
        ))}
        {/* <Link className={styles.desktopNav} href="/">
          Home
        </Link>
        <Link className={styles.desktopNav} href="/articles">
          Articles
        </Link>
        <Link className={styles.desktopNav} href="/portfolio">
          Portfolio
        </Link>
        <Link className={styles.desktopNav} href="/about">
          About
        </Link> */}
        <Switch
          label={themeMode === "dark" ? "🌙" : "☀️"}
          onClick={onThemeToggle}
          checked={themeMode === "dark"}
          aria-checked={themeMode === "dark"}
          aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} theme`}
        />
      </div>
      <div className={styles.mobileMenu}>
        <SearchBar onSearch={() => {}} startAsButton={true} />
        <Hamburger
          aria-label="Open navigation menu"
          onClick={() => setIsDrawerOpen(true)}
        />
      </div>

      <NavDrawer
        position="end"
        className={styles.drawer}
        open={isDrawerOpen}
        onOpenChange={(_, data) => setIsDrawerOpen(data.open)}
        type="overlay"
      >
        <NavDrawerBody className={styles.drawerThemeSwitch}>
          <div className={styles.drawerNavItem}>
            <Switch
              label={themeMode === "dark" ? "🌙 Dark mode" : "☀️ Light mode"}
              onClick={onThemeToggle}
              checked={themeMode === "dark"}
              aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} theme`}
            />
          </div>
          <Nav aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <NavItem
                className={styles.drawerNavItem}
                href={item.href}
                key={item.href}
                value={item.href}
              >
                {item.label}
              </NavItem>
            ))}
          </Nav>
        </NavDrawerBody>
      </NavDrawer>
    </nav>
  );
};

export default Navbar;
