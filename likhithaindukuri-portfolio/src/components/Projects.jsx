const projects = [
  {
    number: "01",
    title: "Nexus",
    subtitle: "Multi-Tenant AI Knowledge Platform",
    description:
      "A multi-tenant platform that allows organizations to upload documents and deploy embeddable RAG-powered chatbots for document-based question answering.",
    technologies: [
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "ChromaDB",
      "Groq AI",
    ],
    points: [
      "Developed REST APIs for authentication, document management, chatbot generation, and conversational queries.",
      "Built a document processing pipeline for PDF extraction, chunking, embeddings, and semantic indexing.",
      "Implemented citation-aware RAG responses with confidence scores using Groq AI.",
      "Designed PostgreSQL data models for organizations, users, documents, chat history, and multi-tenant isolation.",
    ],
    status: "Completed",
    github: "https://github.com/likhithaindukuri/Nexus",
    featured: true,
  },
  {
    number: "02",
    title: "AI-Based Identity and Travel Document Fraud Screening",
    subtitle: "AI Document Verification System",
    description:
      "An AI-based system for screening identity and travel documents for potential fraud using OCR, document validation, image analysis, and face verification.",
    technologies: [
      "Python",
      "OCR",
      "OpenCV",
      "Machine Learning",
    ],
    points: [
      "Building an OCR pipeline to extract identity fields and validate document-specific formats and rules.",
      "Developing image-based tampering detection to identify potential text modification and photo replacement.",
      "Implementing face verification to compare document photographs with a presented face.",
      "Combining validation, tampering, and face verification results to generate a risk indication for manual review.",
    ],
    status: "In Progress",
    github: "https://github.com/likhithaindukuri/AI-Document-Verification-System",
  },
  {
    number: "03",
    title: "Wisher",
    subtitle: "Automated Greeting Platform",
    description:
      "A full-stack event scheduling platform that automatically delivers personalized greetings based on user-defined schedules.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    points: [
      "Implemented server-side scheduling to automatically trigger and send personalized greetings.",
      "Developed REST APIs for authentication, scheduling, and message delivery workflows.",
      "Implemented Passport.js authentication for secure login sessions.",
      "Designed MongoDB collections for users, messages, and schedules.",
    ],
    status: "Completed",
    github: "https://github.com/likhithaindukuri/Wisher",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projects</p>

          <h2 className="section-title">
            Things I've built.
          </h2>

          <p className="section-description">
            Selected software and AI projects focused on practical applications,
            backend development, and full-stack engineering.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.title}
            >
              <div className="project-card-header">
                <span className="project-number">
                  {project.number}
                </span>

                <span
                  className={`project-status ${
                    project.status === "In Progress"
                      ? "status-progress"
                      : ""
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-subtitle">
                  {project.subtitle}
                </p>

                <p className="project-description">
                  {project.description}
                </p>

                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-bottom">
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;