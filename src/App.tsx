import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import NotFound from "./Pages/NotFound";
import { Footer, Navbar } from "./Components";
import { AppThemeProps } from "./Types";

function App({ themeMode, onThemeToggle }: AppThemeProps) {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar themeMode={themeMode} onThemeToggle={onThemeToggle} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
