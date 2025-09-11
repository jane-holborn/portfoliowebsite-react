import { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/bubble-animation.css";
import { Navigation } from "./components/nav";
import { Home } from "./components/home";
import { Portfolio } from "./components/portfolio";
import { Bubbles } from "./components/bubbles";
import { Copyright } from "./components/copyright";
import { CoralDecoration } from "./components/coral-decoration";

export const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "light" ? "#c8daff" : "#2178f4"
      );
    }
  }, [theme]);

  return (
    <div className="appContainer" data-theme={theme}>
      <header>
        <Navigation toggleTheme={toggleTheme} theme={theme} />
      </header>
      <main>
        <Bubbles />
        <Home />
        <Portfolio />
      </main>
      <footer>
        <Copyright />
      </footer>
      <CoralDecoration />
    </div>
  );
};
