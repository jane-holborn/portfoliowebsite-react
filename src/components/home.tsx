import {
  GitHubIcon,
  LinkedInIcon,
  CodeWarsIcon,
  LeetCodeIcon,
  ArtStationIcon,
} from "./icons";

export const Home = () => {
  return (
    <section id="home">
      <h1 className="homePageIntroduction">
        Hello! <br /> My name is Jane.
      </h1>
      <p className="homePageIntroduction">
        I am Perth-based software engineer with 10 years of experience in the
        resource and energy sector. I love coding and creating industrial 3D
        props, and when I am not doing these I like to go on road trips, game
        with friends or read a good book.
      </p>
      <div className="socialMediaGrid">
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
        <a
          href="https://www.codewars.com/users/codebyjane"
          target="_blank"
          aria-label="CodeWars Profile"
        >
          <CodeWarsIcon />
        </a>
        <a
          href="https://leetcode.com/u/codebyjane/"
          target="_blank"
          aria-label="LeetCode Profile"
        >
          <LeetCodeIcon />
        </a>
        <a
          href="https://www.artstation.com/jlartstation"
          target="_blank"
          aria-label="ArtStation Profile"
        >
          <ArtStationIcon />
        </a>
      </div>
    </section>
  );
};
