import profileImage from "../assets/Better.jpeg";

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Likhitha
            <br />
            Indukuri
          </h1>

          <h2>Software Engineer | Backend & AI</h2>

          <p className="hero-description">
            M.Tech Computer Science student focused on software engineering,
            backend development, and building practical AI-driven applications.
          </p>

          <div className="hero-actions">
            <button
              className="hero-button hero-button-primary"
              onClick={scrollToProjects}
            >
              View Projects
            </button>

            <button
              className="hero-button hero-button-secondary"
              onClick={scrollToContact}
            >
              Contact Me
            </button>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/likhithaindukuri"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>·</span>

            <a
              href="https://linkedin.com/in/likhithaindukuri"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={profileImage}
            alt="Likhitha Indukuri"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;