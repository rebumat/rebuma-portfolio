import { ArrowRight, Github, Headphones, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { contact, profile } from '../data'

export default function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-panel">
        <div className="contact-content">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p>{contact.text}</p>
          <a className="button button-white" href={`mailto:${profile.email}`}>
            {contact.buttonLabel} <ArrowRight size={17} />
          </a>
        </div>
        <div className="contact-decoration">
          <Headphones size={112} strokeWidth={0.8} />
        </div>
      </div>
      <div className="contact-details">
        <span>
          <MapPin size={16} /> {profile.location}
        </span>
        <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
          <Phone size={16} /> {profile.phone}
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail size={16} /> {profile.email}
        </a>
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
        )}
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}
