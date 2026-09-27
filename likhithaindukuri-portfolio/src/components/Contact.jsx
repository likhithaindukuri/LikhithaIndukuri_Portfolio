function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's connect.</h2>
          <p className="section-description">
            I am interested in software engineering opportunities, internships,
            and projects where I can build and learn.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <p>
              If you would like to discuss an opportunity, a project, or
              anything related to software development, feel free to reach out.
            </p>

            <a
              className="contact-email"
              href="mailto:likhithaindukuri07@gmail.com"
            >
              likhithaindukuri07@gmail.com
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://linkedin.com/in/likhithaindukuri"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/likhithaindukuri"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

            <a href="mailto:likhithaindukuri07@gmail.com">
              Email
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;