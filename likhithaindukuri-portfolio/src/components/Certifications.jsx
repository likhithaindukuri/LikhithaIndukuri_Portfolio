const certifications = [
  {
    number: "01",
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    description:
      "Completed a web development bootcamp.",
  },
  {
    number: "02",
    title: "Machine Learning Using Python",
    issuer: "Verzeo",
    description:
      "Completed a machine learning course focused on implementing machine learning concepts using Python.",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Courses and certifications.</h2>
          <p className="section-description">
            Courses that supported my learning in web development and machine
            learning.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.number}
            >
              <div className="certification-number">
                {certification.number}
              </div>

              <div className="certification-content">
                <h3>{certification.title}</h3>
                <p className="certification-issuer">
                  {certification.issuer}
                </p>
                <p className="certification-description">
                  {certification.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;