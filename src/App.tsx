import "./styles/App.css";
import "./styles/bubble-animation.css";
import { Navigation } from "./components/nav";
import { Home } from "./components/home";
import { Resume } from "./components/resume";
import { Portfolio } from "./components/portfolio";
import { Bubbles } from "./components/bubbles";
import { Copyright } from "./components/copyright";
import { CoralDecoration } from "./components/coral-decoration";

export const App = () => {
  return (
    <div className="appContainer">
      <header>
        <Navigation />
      </header>
      <main>
        <Bubbles />
        <Home />
        <Resume />
        <Portfolio />
      </main>
      <footer>
        <Copyright />
      </footer>
      <CoralDecoration />
    </div>
  );
};
