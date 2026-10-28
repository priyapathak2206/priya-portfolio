export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-container">
        <h2 id="projects-heading" className="section-title">
          Projects
        </h2>

        <div className="projects-list">
          {/* Project 1: React Learning Hub & Developer Portfolio */}
          <article className="project-item">
            <div className="project-item-header">
              <h3 className="project-item-title">
                React Learning Hub &amp; Developer Portfolio
              </h3>
              <a
                href="https://github.com/priyapathak2206/priya-portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="project-github-link"
                aria-label="React Learning Hub & Developer Portfolio on GitHub (opens in new tab)"
              >
                GitHub &rarr;
              </a>
            </div>

            <p className="project-item-desc">
              A responsive single-page student developer portfolio and practical
              lab application built with React and Vite for the Advanced Web
              Development Frameworks (AWDF) coursework.
            </p>

            <div className="project-tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">CSS3</span>
            </div>
          </article>

          {/* Project 2: Task Manager API */}
          <article className="project-item" id="project-task-manager-api">
            <div className="project-item-header">
              <h3 className="project-item-title">Task Manager API</h3>
              <a
                href="https://github.com/priyapathak2206/task-manager-api"
                target="_blank"
                rel="noreferrer noopener"
                className="project-github-link"
                aria-label="Task Manager API on GitHub (opens in new tab)"
              >
                GitHub &rarr;
              </a>
            </div>

            <p className="project-item-desc">
              A REST API for managing tasks, with CRUD operations, authentication,
              middleware, error handling, automated tests, and event-driven
              notifications.
            </p>

            <div className="project-tech-tags">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">REST API</span>
              <span className="tech-tag">Jest</span>
            </div>
          </article>

          {/* Project 3: AWDF Practical Coursework Series */}
          <article className="project-item">
            <div className="project-item-header">
              <h3 className="project-item-title">
                AWDF Practical Coursework Series
              </h3>
              <a
                href="https://github.com/priyapathak2206"
                target="_blank"
                rel="noreferrer noopener"
                className="project-github-link"
                aria-label="AWDF Practical Coursework Series on GitHub (opens in new tab)"
              >
                GitHub &rarr;
              </a>
            </div>

            <p className="project-item-desc">
              Practical lab implementations, component experiments, and
              coursework assignments developed throughout the Advanced Web
              Development Frameworks curriculum.
            </p>

            <div className="project-tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">Git</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
