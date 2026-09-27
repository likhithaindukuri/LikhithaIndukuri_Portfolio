const achievements = [
  {
    number: "01",
    title: "DataPros",
    description:
      "Published a Python package on PyPI that automates machine learning data preprocessing workflows.",
    link: "https://pypi.org/project/dataPros/",
    linkText: "View on PyPI →",
  },
  {
    number: "02",
    title: "NASA International Space Apps Challenge",
    description:
      "Ranked 10th among participating teams in the NASA International Space Apps Challenge.",
    link: "https://drive.google.com/file/d/1RV_AQcw57ztEEeQgsQGNDKkdtlDOJ-8v/view?usp=drive_link",
    linkText: "Certificate →",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Achievements</p>

          <h2 className="section-title">
            Beyond the projects.
          </h2>

          <p className="section-description">
            Highlights from software development, open-source work, and
            technical competitions.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.number}
            >
              <div className="achievement-card-header">
                <span className="achievement-number">
                  {achievement.number}
                </span>
              </div>

              <div className="achievement-content">
                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>

                {achievement.link !== "#" && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {achievement.linkText}
                  </a>
                )}

                {achievement.link === "#" && (
                  <span className="achievement-placeholder">
                    {achievement.linkText}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;