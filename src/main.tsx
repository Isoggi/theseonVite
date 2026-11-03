import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./ThemeProvider.tsx";

// Configuration
const MINIMUM_DISPLAY_TIME = 800; // Hold the loader for at least 800ms
const TRANSITION_TIME = 400; // Matches your CSS transition duration

const loader = document.getElementById("global-loader");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider />
  </StrictMode>,
);

if (loader) {
  // 1. Calculate how long the loader has been visible
  const startTime = window.__loaderStartTime || Date.now();
  const elapsedTime = Date.now() - startTime;

  // 2. Determine if we need to hold it longer
  const remainingTime = Math.max(0, MINIMUM_DISPLAY_TIME - elapsedTime);

  // 3. Defer the fade-out execution
  setTimeout(() => {
    requestAnimationFrame(() => {
      loader.classList.add("loaded");
    });

    // Remove from DOM structural layer entirely once opacity hits 0
    setTimeout(() => {
      loader.remove();
      delete window.__loaderStartTime; // Clean up global scope
    }, TRANSITION_TIME);
  }, remainingTime);
}
