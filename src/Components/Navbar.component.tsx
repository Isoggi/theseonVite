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
    flexWrap: "nowrap",
    gap: "clamp(12px, 2vw, 24px)",
    padding: "10px clamp(12px, 4vw, 32px)",
    position: "sticky",
    rowGap: "8px",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
  brand: {
    alignItems: "center",
    color: tokens.colorNeutralForegroundOnBrand,
    display: "flex",
    flex: "0 0 40px",
    height: "40px",
    overflow: "hidden",
    position: "relative",
    textDecorationLine: "none",
    transition: "flex-basis 250ms ease",
    width: "40px",
    ":hover": {
      flexBasis: "120px",
      textDecorationLine: "none",
      "& .brandIcon": {
        opacity: 0,
        transform: "scale(0.8)",
      },
      "& .brandText": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
    ":focus-visible": {
      flexBasis: "120px",
      outline: `2px solid ${tokens.colorNeutralForegroundOnBrand}`,
      outlineOffset: "2px",
      "& .brandIcon": {
        opacity: 0,
        transform: "scale(0.8)",
      },
      "& .brandText": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
  desktopSearch: {
    alignItems: "center",
    display: "flex",
    flex: "1 1 0",
    justifyContent: "center",
    minWidth: 0,
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  desktopNav: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    flexShrink: 0,
    gap: "20px",
    rowGap: "8px",
    justifyContent: "flex-end",
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
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    left: 0,
    opacity: 1,
    position: "absolute",
    top: 0,
    transition: "opacity 200ms ease, transform 200ms ease",
    transform: "scale(1)",
    width: "40px",
  },
  textWrapper: {
    color: tokens.colorNeutralForegroundOnBrand,
    opacity: 0,
    left: "40px",
    position: "absolute",
    top: 0,
    whiteSpace: "nowrap",
    transition: "opacity 200ms ease, transform 200ms ease",
    transform: "translateX(-6px)",
    height: "40px",
    display: "flex",
    alignItems: "center",
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
  const [isSearchCompact, setIsSearchCompact] = React.useState(false);
  const searchSlotRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";

  React.useEffect(() => {
    const searchSlot = searchSlotRef.current;
    if (!searchSlot) {
      return;
    }

    const updateSearchMode = () => {
      setIsSearchCompact(searchSlot.clientWidth < 320);
    };
    const observer = new ResizeObserver(updateSearchMode);
    observer.observe(searchSlot);
    updateSearchMode();

    return () => observer.disconnect();
  }, []);

  const themeLabel = (
    <span className={styles.themeLabel}>
      {themeMode === "dark" ? (
        <WeatherMoonRegular aria-hidden="true" />
      ) : (
        <WeatherSunnyRegular aria-hidden="true" />
      )}
      {/* {themeMode === "dark" ? "Dark mode" : "Light mode"} */}
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
        <div className={`brandIcon ${styles.iconWrapper}`}>
          <img
            src="/theseon.Logo.svg"
            alt=""
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
            }}
          />
        </div>

        <div className={`brandText ${styles.textWrapper}`}>
          <Subtitle1>theseOn</Subtitle1>
        </div>
      </Link>
      <div className={styles.desktopSearch} ref={searchSlotRef}>
        <SearchBar onSearch={() => {}} startAsButton={isSearchCompact} />
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
                onClick={(event) => handleRouteClick(event, item.href, true)}
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
