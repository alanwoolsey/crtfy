import { ArrowRight, Check, ChevronRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

function ActionLink({ className, to, children }) {
  if (!to) {
    return null
  }

  if (to.startsWith('#')) {
    return <a className={className} href={to}>{children}</a>
  }

  return <Link className={className} to={to}>{children}</Link>
}

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
          {item.logo ? (
            <img className="stat-item-logo" src={item.logo} alt={`Crtfy ${item.value}`} />
          ) : (
            <strong>{item.value}</strong>
          )}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function CTASection({
  eyebrow = 'Built for SLED',
  title = 'Reduce risk, pass audits, and replace vendor sprawl with one accountable platform.',
  description = 'Crtfy helps agencies and institutions secure records, govern AI, protect data, harden cyber operations, and coordinate physical security under one framework.',
  primaryLabel = 'Request a demo',
  primaryTo = '#contact',
  secondaryLabel = 'Explore platform',
  secondaryTo = '/products',
}) {
  return (
    <section className="cta-panel">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <ActionLink className="button button-primary" to={primaryTo}>{primaryLabel}</ActionLink>
        <ActionLink className="button button-secondary" to={secondaryTo}>{secondaryLabel}</ActionLink>
      </div>
    </section>
  )
}

export function MiniQuote({ quote, source }) {
  return (
    <div className="mini-quote">
      <ShieldCheck size={18} />
      <div>
        <p>"{quote}"</p>
        <span>{source}</span>
      </div>
    </div>
  )
}

export function LinkCard({ title, description, to, eyebrow }) {
  return (
    <Link className="link-card" to={to}>
      <div>
        {eyebrow ? <span className="eyebrow eyebrow-inline">{eyebrow}</span> : null}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ChevronRight size={18} />
    </Link>
  )
}

export function InlineAction({ to, children }) {
  return (
    <ActionLink className="inline-link" to={to}>
      {children}
      <ArrowRight size={16} />
    </ActionLink>
  )
}
