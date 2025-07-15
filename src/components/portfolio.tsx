import librarySystem from "../assets/library-system.png";
import portfolioWebsite from "../assets/portfolio-website.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolioGrid">
        <div className="portfolioCardContainer">
          <a
            href="https://github.com/jane-holborn/portfoliowebsite-react"
            target="_blank"
          >
            <div className="cardImage">
              <img src={portfolioWebsite} alt="Portfolio Website Image" />
            </div>
            <div className="cardDescription">
              <h2>Portfolio Website</h2>
              <p className="portfolioDescription">
                I built this portfolio website to showcase my development
                skills, projects, and to document my coding journey. The focus
                of this website is mobile-first design, accessibility and
                performance.
              </p>
              <div className="technology">
                Technology: HTML, CSS, TypeScript, React, Vite
              </div>
            </div>
          </a>
        </div>
        <div className="portfolioCardContainer">
          <a
            href="https://github.com/jane-holborn/librarysystem-fullstack"
            target="_blank"
          >
            <div className="cardImage">
              <img src={librarySystem} alt="Library Management System Image" />
            </div>
            <div className="cardDescription">
              <h2>Library Management System</h2>
              <p className="portfolioDescription">
                Currently under construction, this is version 2 of my original
                Library System. V2 is a full-stack application that follows the
                MVVM design pattern. The core architecture has been scaffolded,
                the API is connected, and data can be successfully retrieved
                from the SQLite database to the frontend. I plan to continue
                developing this project in my spare time.
              </p>
              <div className="technology">
                Technology: WPF, C#, XAML, NUnit, ASP.NET Web API, EF Core,
                SQLite
              </div>
            </div>
          </a>
        </div>
        <div className="portfolioCardContainer">
          <a href="#portfolio" target="_self">
            <div className="cardDescription">
              <h2>Comment System</h2>
              <p className="portfolioDescription">
                Collaboratively built a full-stack, in-house comment system with
                an experienced developer. Built for seamless integration into
                internal products with full control over styling, performance
                and functionality. This project is for an organisation, so the
                repo is currently private.
              </p>
              <div className="technology">
                Technology: TypeScript, Next.js, Node.js, Express.js,
                PostgreSQL, Docker, AWS RDS, AWS ECS
              </div>
            </div>
          </a>
        </div>
        <div className="portfolioCardContainer">
          <a href="#portfolio" target="_self">
            <div className="cardDescription">
              <h2>Coming Soon!</h2>
              <p className="portfolioDescription">
                Stay tuned for a new project!
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
