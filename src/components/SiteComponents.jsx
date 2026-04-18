import { ArrowRight, Check, ChevronRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-intro ${align === 'center' ? 'center' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export function FeatureCard({ icon: Icon, title, description, bullets }) {
  return (
    <article className="feature-card">
      <div className="feature-icon"><Icon size={22} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      {bullets ? (
        <div className="feature-bullets">
          {bullets.map((bullet) => (
            <span key={bullet}><Check size={14} /> {bullet}</span>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function StatStrip({ items }) {
  return (
    <div className="stat-strip">
      {items.map((item) => (
        <div key={item.label} className="stat-item">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function CTASection() {
  return (
    <section className="cta-panel">
      <div>
        <span className="eyebrow">Ready to compete differently</span>
        <h2>Move beyond CRM management and into certified enrollment intelligence.</h2>
        <p>
          Give your team a product that can evaluate transcripts, explain outcomes, orchestrate action,
          and create student-ready experiences before an application ever stalls.
        </p>
      </div>
      <div className="cta-actions">
        <Link className="button button-primary" to="/demo">Explore the walkthrough</Link>
        <a className="button button-secondary" href="#contact">Talk to us</a>
      </div>
    </section>
  )
}

export function MiniQuote({ quote, source }) {
  return (
    <div className="mini-quote">
      <ShieldCheck size={18} />
      <div>
        <p>“{quote}”</p>
        <span>{source}</span>
      </div>
    </div>
  )
}

export function LinkCard({ title, description, to }) {
  return (
    <Link className="link-card" to={to}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ChevronRight size={18} />
    </Link>
  )
}
