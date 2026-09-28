import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Navbar from "./Components/Navbar.component";

type AppProps = {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
};

function App({ themeMode, onThemeToggle }: AppProps) {
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
