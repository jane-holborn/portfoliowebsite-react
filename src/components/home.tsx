import { GitHubIcon, LinkedInIcon, ArtStationIcon } from "./icons";

export const Home = () => {
  return (
    <section id="home">
      <h1 className="homePageIntroduction">
        Hello! <br /> My name is Jane.
      </h1>
      <p className="homePageIntroduction">
        I am Perth-based artist and 3D developer with 10 years of experience in
        the resource and energy sector as a production technician. I hold dual
        qualifications in game art and programming with a focus on industrial 3D
        modelling.
      </p>
      <div className="socialMediaGrid">
        <a
          href="https://www.artstation.com/jlartstation"
          target="_blank"
          aria-label="ArtStation Profile"
        >
          <ArtStationIcon />
        </a>
        <a
          href="https://github.com/jane-holborn"
          target="_blank"
          aria-label="GitHub Profile"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/jane-h-891a4a334"
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
};
