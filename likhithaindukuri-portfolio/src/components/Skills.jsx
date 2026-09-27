const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Backend Development",
    skills: ["Java", "Spring Boot", "FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "ChromaDB"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "RAG",
      "OCR",
      "OpenCV",
      "Embeddings",
      "Vector Search",
    ],
  },
  {
    title: "Tools & CS Fundamentals",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Skills</p>

          <h2 className="section-title">
            Technologies I work with.
          </h2>

          <p className="section-description">
            A combination of programming, software engineering, backend
            development, databases, AI, and computer science fundamentals.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;