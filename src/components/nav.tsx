import { useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
type NavigationProps = {
  toggleTheme: () => void;
  theme: "light" | "dark";
};

export const Navigation = ({ toggleTheme, theme }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleLinkClick = () => setMenuOpen(false);
  return (
    <nav>
      <button
        className={`hamburgerIcon ${menuOpen ? "active" : ""}`}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#resume" onClick={handleLinkClick}>
            Resume
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={handleLinkClick}>
            Portfolio
          </a>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="themeToggle themeIcon"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </nav>
  );
};
