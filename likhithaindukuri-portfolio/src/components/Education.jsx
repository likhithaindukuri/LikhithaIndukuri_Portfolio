function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background.</h2>
        </div>

        <div className="education-list">
          <article className="education-item">
            <div className="education-date">
              <span>2026</span>
              <span>2028</span>
            </div>

            <div className="education-content">
              <h3>M.Tech in Computer Science Engineering</h3>
              <p className="education-institution">
                Amrita Vishwa Vidyapeetham
              </p>
              <p className="education-location">
                Coimbatore, Tamil Nadu
              </p>
            </div>
          </article>

          <article className="education-item">
            <div className="education-date">
              <span>2021</span>
              <span>2025</span>
            </div>

            <div className="education-content">
              <h3>B.Tech in Computer Science Engineering</h3>
              <p className="education-institution">
                Eluru College of Engineering and Technology
              </p>
              <p className="education-location">
                Affiliated to JNTU Kakinada
              </p>
              <p className="education-score">CGPA: 8.75 / 10</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;