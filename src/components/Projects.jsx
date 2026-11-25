import {
  CheckCircle2,
  Database,
  ExternalLink,
  Monitor,
  Network,
  Wrench,
} from 'lucide-react'
import { projects } from '../data'
import { SectionHeading } from './SectionHeading'

const ICONS = {
  wrench: Wrench,
  monitor: Monitor,
  database: Database,
  network: Network,
}

export default function Projects() {
  return (
    <section className="section section-tint" id="projects">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="PRACTICAL EXPERIENCE"
          title="Selected projects & work areas."
          description="Examples drawn from my IT support, networking, business analysis, and front-end development experience."
        />
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = ICONS[project.icon] || Monitor
            return (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">
                    <Icon size={23} />
                  </span>
                </div>
                <span className="eyebrow">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel} <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="project-placeholder">Professional experience</span>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
