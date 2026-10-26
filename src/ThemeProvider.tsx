import {
  FluentProvider,
  Theme,
  // webDarkTheme,
  // webLightTheme,,
  BrandVariants,
  createLightTheme,
  createDarkTheme,
} from "@fluentui/react-components";
import App from "./App";
import BrandThemePallete from "./assets/Data/BrandThemePallete.json";
import { IBrandThemePallete } from "./Interfaces";
import { useTheme } from "./Hooks";

// const theseOnTheme: BrandVariants = {
//   10: "#060200",
//   20: "#251206",
//   30: "#3E1C0B",
//   40: "#52230D",
//   50: "#68290E",
//   60: "#7E300E",
//   70: "#95370E",
//   80: "#AD3E0C",
//   90: "#C5450A",
//   100: "#DE4C06",
//   110: "#F75301",
//   120: "#FF6C2C",
//   130: "#FF8853",
//   140: "#FFA076",
//   150: "#FFB797",
//   160: "#FFCCB6",
// };

const brandThemeData = BrandThemePallete as IBrandThemePallete;
const brandTheme: BrandVariants = brandThemeData as BrandVariants;
// () => {
//   const result = {} as BrandVariants;
//   for (const key of Brands) {
//     if (!(key in brandThemeData)) {
//       throw new Error(`Missing required configuration key: ${key}`);
//     }
//     result[key] = String(brandThemeData[key]);
//   }
//   return result;
// };

const brandLightTheme: Theme = {
  ...createLightTheme(brandTheme),
};

const brandDarkTheme: Theme = {
  ...createDarkTheme(brandTheme),
};

brandLightTheme.colorBrandForeground1 = brandTheme[110];
brandDarkTheme.colorBrandForeground2 = brandTheme[120];

function ThemeProvider() {
  const { themeMode, toggleTheme } = useTheme();
  // const theme: Theme = themeMode === "dark" ? webDarkTheme : webLightTheme;
  const theme: Theme = themeMode === "dark" ? brandDarkTheme : brandLightTheme;
  return (
    <FluentProvider theme={theme}>
      <App themeMode={themeMode} onThemeToggle={toggleTheme} />
    </FluentProvider>
  );
}

export default ThemeProvider;
