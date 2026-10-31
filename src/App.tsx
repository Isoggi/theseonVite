import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import ArticleDetail from "./Pages/Articles/ArticleDetail";
// import Portfolio from "./Pages/Portfolio";
// import About from "./Pages/About";
// import Privacy from "./Pages/Privacy";
// import NotFound from "./Pages/NotFound";
import { Footer, Navbar } from "./Components";
import { AppThemeProps } from "./Types";
import { lazy, Suspense } from "react";
import { Spinner } from "@fluentui/react-components";

// LazyLoadPage
const About = lazy(() => import("./Pages/About"));
// const Articles = lazy(() => import("./Pages/Articles"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Privacy = lazy(() => import("./Pages/Privacy"));
// const ArticleDetail = lazy(() => import("./Pages/Articles/ArticleDetail"));

function App({ themeMode, onThemeToggle }: AppThemeProps) {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar themeMode={themeMode} onThemeToggle={onThemeToggle} />
        <main className="page-content">
          <Suspense fallback={<Spinner size="huge" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id/:title?" element={<ArticleDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer themeMode={themeMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
