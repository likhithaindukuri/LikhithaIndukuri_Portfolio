function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experience</p>

          <h2 className="section-title">
            Industry experience.
          </h2>
        </div>

        <div className="experience-item">
          <div className="experience-date">
            <span>Sep 2025</span>
            <span>Nov 2025</span>
          </div>

          <div className="experience-content">
            <div className="experience-heading">
              <div>
                <h3>Associate Software Engineer Intern</h3>
                <p className="experience-company">Better Software</p>
              </div>

              <span className="experience-type">Internship</span>
            </div>

            <p className="experience-summary">
              Worked on React Native application development and backend API
              integration, collaborating with backend engineers to implement,
              test, and troubleshoot application features.
            </p>

            <ul className="experience-points">
              <li>
                Integrated REST API endpoints between React Native applications
                and Java-based backend services.
              </li>

              <li>
                Collaborated with backend engineers on API contracts,
                request/response structures, and integration requirements.
              </li>

              <li>
                Tested 20+ API scenarios using Postman, including edge cases
                and failure conditions.
              </li>

              <li>
                Investigated API inconsistencies using application logs and
                debugging, and resolved runtime issues during development.
              </li>

              <li>
                Developed React Native screens using TypeScript and connected
                them with backend APIs for application workflows.
              </li>
            </ul>

            <div className="experience-tech">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>Java</span>
              <span>REST APIs</span>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;