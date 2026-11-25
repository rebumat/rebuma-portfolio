import { Award, Monitor, Network } from 'lucide-react'
import { certifications } from '../data'
import { SectionHeading } from './SectionHeading'

const ICONS = {
  network: Network,
  monitor: Monitor,
  award: Award,
}

export default function Certifications() {
  return (
    <section className="section section-wrap" id="certifications">
      <SectionHeading eyebrow="TRAINING & CERTIFICATIONS" title="Professional learning." />
      <div className="cert-grid">
        {certifications.map((cert) => {
          const Icon = ICONS[cert.icon] || Award
          return (
            <article className="cert-card" key={cert.title}>
              <span className="cert-icon">
                <Icon />
              </span>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.date}</p>
                {cert.tags.length > 0 && (
                  <div className="tag-list">
                    {cert.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
