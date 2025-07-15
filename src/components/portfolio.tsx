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
            href="https://github.com/jane-holborn/LibrarySystem"
            target="_blank"
          >
            <div className="cardImage">
              <img src={librarySystem} alt="Library Management System Image" />
            </div>
            <div className="cardDescription">
              <h2>Library Management System</h2>
              <p className="portfolioDescription">
                This desktop application is designed to manage the operations of
                a library, allowing both librarians and users to interact with
                the system. The focus of this application is multi-window
                navigation, basic user verification, dynamic data interaction
                within the application while it is running, and data
                presentation using custom data templates. Future iterations will
                include a backend for persistant data management.
              </p>
              <div className="technology">Technology: WPF, C#, XAML, NUnit</div>
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
