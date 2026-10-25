import {
  FluentProvider,
  Theme,
  // webDarkTheme,
  // webLightTheme,
  BrandVariants,
  createLightTheme,
  createDarkTheme,
} from "@fluentui/react-components";
import App from "./App";
import { useTheme } from "./Hooks";

const theseOnTheme: BrandVariants = {
  10: "#030204",
  20: "#18151F",
  30: "#272136",
  40: "#332B4A",
  50: "#40365F",
  60: "#4D4175",
  70: "#5B4C8B",
  80: "#6958A2",
  90: "#7763B9",
  100: "#866FD1",
  110: "#957DE5",
  120: "#A48DE9",
  130: "#B29DED",
  140: "#C0AEF0",
  150: "#CEBFF4",
  160: "#DCD0F7",
};

const theseOnLightTheme: Theme = {
  ...createLightTheme(theseOnTheme),
};

const theseOnDarkTheme: Theme = {
  ...createDarkTheme(theseOnTheme),
};

theseOnDarkTheme.colorBrandForeground1 = theseOnTheme[110];
theseOnDarkTheme.colorBrandForeground2 = theseOnTheme[120];

function ThemeProvider() {
  const { themeMode, toggleTheme } = useTheme();
  // const theme: Theme = themeMode === "dark" ? webDarkTheme : webLightTheme;
  const theme: Theme =
    themeMode === "dark" ? theseOnDarkTheme : theseOnLightTheme;
  return (
    <FluentProvider theme={theme}>
      <App themeMode={themeMode} onThemeToggle={toggleTheme} />
    </FluentProvider>
  );
}

export default ThemeProvider;
