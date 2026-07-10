import { projects } from '../data/content.js';

export default function ProjectsSection() {
  return (
    <section className="projects section-frame" id="proyectos">
      <span className="section-number">03</span>
      <p className="eyebrow">Proyectos / Trabajo propio</p>
      <h2>Software construido y llevado a producción, no solo prototipos.</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__meta">
              <span>{project.number}</span>
              <span>{project.period}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="project-card__subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
            <div className="project-card__stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-card__links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">Ver en vivo</a>
              )}
              <a href={project.code} target="_blank" rel="noreferrer">Código</a>
              {project.dashboard && (
                <a href={project.dashboard} target="_blank" rel="noreferrer">Dashboard (GitHub)</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
