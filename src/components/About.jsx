import { GraduationCap, Network } from 'lucide-react'
import { about, profile } from '../data'
import { SectionHeading } from './SectionHeading'

export default function About() {
  return (
    <section className="section section-wrap" id="about">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />
      <div className="about-grid">
        <div className="about-lead">
          <p className="large-copy">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
        <div className="about-highlight">
          <img
            className="about-photo"
            src={profile.photo}
            alt={profile.photoAlt}
            width="800"
            height="1067"
          />
          <div className="highlight-icon">
            <GraduationCap size={22} />
          </div>
          <span className="eyebrow">EDUCATION</span>
          <h3>{about.education.degree}</h3>
          <p>{about.education.school}</p>
          <div className="education-details">
            <span>{about.education.dates}</span>
            <strong>{about.education.gpa}</strong>
          </div>
          <div className="highlight-line" />
          <div className="highlight-icon">
            <Network size={22} />
          </div>
          <span className="eyebrow">PROFESSIONAL FOCUS</span>
          <h3>{about.focus.title}</h3>
          <p>{about.focus.text}</p>
        </div>
      </div>
    </section>
  )
}
