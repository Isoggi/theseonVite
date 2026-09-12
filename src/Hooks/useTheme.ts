import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
type ThemePreference = ThemeMode | "system";

const systemThemeQuery = "(prefers-color-scheme: dark)";
const themePreferenceStorageKey = "theseon-theme-preference";

function getSystemTheme(): ThemeMode {
  return window.matchMedia(systemThemeQuery).matches ? "dark" : "light";
}

function getSavedThemePreference(): ThemePreference {
  const savedPreference = localStorage.getItem(themePreferenceStorageKey);

  return savedPreference === "light" || savedPreference === "dark"
    ? savedPreference
    : "system";
}

export function useTheme() {
  const [systemTheme, setSystemTheme] = useState<ThemeMode>(getSystemTheme);
  const [themePreference, setThemePreference] = useState<ThemePreference>(
    getSavedThemePreference,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(systemThemeQuery);
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    if (themePreference === "system") {
      localStorage.removeItem(themePreferenceStorageKey);
      return;
    }

    localStorage.setItem(themePreferenceStorageKey, themePreference);
  }, [themePreference]);

  const themeMode =
    themePreference === "system" ? systemTheme : themePreference;

  const toggleTheme = () => {
    setThemePreference(themeMode === "dark" ? "light" : "dark");
  };

  return { themeMode, toggleTheme };
}
