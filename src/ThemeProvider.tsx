import {
  FluentProvider,
  Theme,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import App from "./App";
import { useTheme } from "./Hooks/useTheme";

function ThemeProvider() {
  const { themeMode, toggleTheme } = useTheme();
  const theme: Theme = themeMode === "dark" ? webDarkTheme : webLightTheme;

  return (
    <FluentProvider theme={theme}>
      <App themeMode={themeMode} onThemeToggle={toggleTheme} />
    </FluentProvider>
  );
}

export default ThemeProvider;
