function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">About</p>

          <h2 className="section-title">
            Building software with a focus on
            <br />
            practical problem solving.
          </h2>
        </div>

        <div className="about-content">
          <div className="about-main">
            <p>
              I am a Computer Science Engineering student currently pursuing my
              M.Tech at Amrita Vishwa Vidyapeetham. I enjoy building reliable
              software and using AI to solve practical problems.
            </p>

            <p>
              My experience includes backend API development, full-stack
              applications, databases, and AI-based systems. I am particularly
              interested in software engineering, backend development, and
              building applications that are practical, scalable, and useful.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <span>Currently</span>
              <strong>M.Tech CSE</strong>
              <p>Amrita Vishwa Vidyapeetham</p>
            </div>

            <div className="about-detail">
              <span>Education</span>
              <strong>B.Tech CSE</strong>
              <p>JNTU Kakinada</p>
            </div>

            <div className="about-detail">
              <span>Focus</span>
              <strong>Software Engineering</strong>
              <p>Backend · AI · Full Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;