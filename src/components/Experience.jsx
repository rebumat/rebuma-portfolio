import { experience } from '../data'
import { SectionHeading } from './SectionHeading'

export default function Experience() {
  return (
    <section className="section section-wrap" id="experience">
      <SectionHeading eyebrow="CAREER HISTORY" title="Professional experience." />
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={job.title}>
            <div className="timeline-marker" />
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-content">
              <span className="eyebrow">{job.badge}</span>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p>{job.text}</p>
              <div className="tag-list">
                {job.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
