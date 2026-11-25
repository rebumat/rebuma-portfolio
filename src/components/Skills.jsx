import { Database, Headphones, Monitor, Network } from 'lucide-react'
import { skills } from '../data'
import { SectionHeading } from './SectionHeading'

const ICONS = {
  headphones: Headphones,
  network: Network,
  monitor: Monitor,
  database: Database,
}

export default function Skills() {
  return (
    <section className="section section-tint" id="skills">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="TECHNICAL TOOLKIT"
          title="Skills & capabilities."
          description="Technical capabilities developed through academic training, certifications, and practical work experience."
        />
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = ICONS[skill.icon] || Headphones
            return (
              <article className="skill-card" key={skill.title}>
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
                <div className="tag-list">
                  {skill.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
