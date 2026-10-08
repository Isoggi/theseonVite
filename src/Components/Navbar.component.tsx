import {
  Link,
  makeStyles,
  mergeClasses,
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
import { WeatherMoonRegular, WeatherSunnyRegular } from "@fluentui/react-icons";
import { AppThemeProps } from "../Types";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    textDecorationLine: "none",
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
  activeNavItem: {
    fontWeight: tokens.fontWeightSemibold,
    textDecorationLine: "underline",
    textUnderlineOffset: "5px",
  },
  mobileMenu: {
    alignItems: "center",
    display: "none",
    flexShrink: 0,
    gap: "8px",
    justifyContent: "flex-end",
    marginLeft: "auto",
    "@media (max-width: 600px)": {
      display: "flex",
    },
  },
  drawer: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  drawerBody: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalL,
  },
  drawerThemeSwitch: {
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground2,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    display: "flex",
    minHeight: "56px",
    padding: `0 ${tokens.spacingHorizontalM}`,
  },
  themeSwitch: {
    justifyContent: "space-between",
    width: "100%",
  },
  themeLabel: {
    alignItems: "center",
    columnGap: tokens.spacingHorizontalS,
    display: "inline-flex",
  },
  drawerNav: {
    width: "100%",
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
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";
  const themeLabel = (
    <span className={styles.themeLabel}>
      {themeMode === "dark" ? (
        <WeatherMoonRegular aria-hidden="true" />
      ) : (
        <WeatherSunnyRegular aria-hidden="true" />
      )}
      {themeMode === "dark" ? "Dark mode" : "Light mode"}
    </span>
  );

  const handleRouteClick = (
    event: React.MouseEvent<HTMLElement>,
    href: string,
    closeDrawer = false,
  ) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
    if (closeDrawer) {
      setIsDrawerOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link
        aria-label="theseOn home"
        className={styles.brand}
        href="/"
        onClick={(event) => handleRouteClick(event, "/")}
      >
        <Subtitle1>theseOn</Subtitle1>
      </Link>
      <div className={styles.desktopNav}>
        <SearchBar onSearch={() => {}} />
      </div>
      <div className={styles.desktopNav}>
        {navigationItems.map((item) => (
          <Link
            aria-current={currentPath === item.href ? "page" : undefined}
            className={mergeClasses(
              styles.navItem,
              currentPath === item.href && styles.activeNavItem,
            )}
            href={item.href}
            key={item.href}
            onClick={(event) => handleRouteClick(event, item.href)}
            value={item.href}
          >
            {item.label}
          </Link>
        ))}
        <Switch
          label={themeLabel}
          labelPosition="before"
          onClick={onThemeToggle}
          checked={themeMode === "dark"}
          aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
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
        <NavDrawerBody className={styles.drawerBody}>
          <div className={styles.drawerThemeSwitch}>
            <Switch
              className={styles.themeSwitch}
              label={themeLabel}
              labelPosition="before"
              onClick={onThemeToggle}
              checked={themeMode === "dark"}
              aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            />
          </div>
          <Nav
            aria-label="Mobile navigation"
            className={styles.drawerNav}
            selectedValue={currentPath}
          >
            {navigationItems.map((item) => (
              <NavItem
                href={item.href}
                key={item.href}
                onClick={(event) =>
                  handleRouteClick(event, item.href, true)
                }
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
