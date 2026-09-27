import resume from "../assets/Likhitha_Indukuri_Resume.pdf";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <button
          className="navbar-logo"
          onClick={() => handleScroll("hero")}
        >
          LIKHITHA
        </button>

        <nav className="navbar-links">
          <button onClick={() => handleScroll("about")}>About</button>

          <button onClick={() => handleScroll("skills")}>Skills</button>

          <button onClick={() => handleScroll("experience")}>
            Experience
          </button>

          <button onClick={() => handleScroll("projects")}>
            Projects
          </button>

          <button onClick={() => handleScroll("contact")}>
            Contact
          </button>
        </nav>

        <a
          className="navbar-resume"
          href={resume}
          download="Likhitha_Indukuri_Resume.pdf"
        >
          View Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;