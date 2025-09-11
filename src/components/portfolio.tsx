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
                I built this portfolio website to showcase my projects, and to
                document my development journey. The focus of this website is
                mobile-first design, accessibility and performance.
              </p>
              <div className="technology">
                Technology: HTML, CSS, TypeScript, React, Vite
              </div>
            </div>
          </a>
        </div>
        <div className="portfolioCardContainer">
          <a
            href="https://github.com/jane-holborn/librarysystem"
            target="_blank"
          >
            <div className="cardImage">
              <img src={librarySystem} alt="Library Management System Image" />
            </div>
            <div className="cardDescription">
              <h2>Library Management System</h2>
              <p className="portfolioDescription">
                A WPF application designed to manage a library system which
                includes functionality for both users and librarians. It is a
                basic application with no persistent data storage.
              </p>
              <div className="technology">
                Technology: WPF, C#, XAML, NUnit Testing Framework
              </div>
            </div>
          </a>
        </div>
        <div className="portfolioCardContainer">
          <a href="#portfolio" target="_self">
            <div className="cardDescription">
              <h2>Comment System</h2>
              <p className="portfolioDescription">
                Collaboratively built a comment system with an experienced
                developer. My contributions included the database schema design,
                UI design and the components for the moderation dashboard. This
                project is for an organisation, so the repo is currently
                private.
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
