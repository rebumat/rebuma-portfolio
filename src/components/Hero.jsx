import {
  ArrowRight,
  Check,
  Headphones,
  MapPin,
  ShieldCheck,
  Wifi,
  Wrench,
} from 'lucide-react'
import { hero, profile, stats } from '../data'

export default function Hero() {
  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            {` ${profile.shortRole}`}
          </div>
          <p className="hero-kicker">
            {hero.kicker} {profile.name.toUpperCase()}
          </p>
          <h1>
            {hero.titleLine1}
            <br />
            <span>{hero.titleLine2}</span>
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View my experience <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} /> {profile.location}
            </span>
            <span className="meta-divider" />
            <span>{hero.metaTags}</span>
          </div>
        </div>

        <div className="hero-art" aria-label="IT support illustration">
          <div className="art-grid" />
          <div className="art-card-main support-card">
            <div className="code-window-top">
              <i />
              <i />
              <i />
              <span>IT Support Desk</span>
            </div>
            <div className="support-status">
              <span className="status-check">
                <Check size={20} />
              </span>
              <div>
                <strong>System status</strong>
                <small>Monitoring &amp; support</small>
              </div>
              <b>Active</b>
            </div>
            <div className="support-row">
              <span>
                <Wrench size={17} /> Hardware &amp; software
              </span>
              <Check size={16} />
            </div>
            <div className="support-row">
              <span>
                <Wifi size={17} /> Network connectivity
              </span>
              <Check size={16} />
            </div>
            <div className="support-row">
              <span>
                <Headphones size={17} /> IT user support
              </span>
              <Check size={16} />
            </div>
            <div className="support-footer">
              <span>Resolve · Maintain · Support</span>
              <span className="support-pulse" />
            </div>
          </div>
          <div className="floating-chip chip-design">
            <ShieldCheck size={17} /> Reliability
          </div>
          <div className="floating-chip chip-code">
            <Headphones size={17} /> User Support
          </div>
          <div className="art-orbit" />
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
