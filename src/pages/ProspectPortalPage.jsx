import { ArrowUpRight } from 'lucide-react'

const detailCards = [
  { label: 'Estimated completion', value: '2.1 years' },
  { label: 'Scholarship potential', value: '$8.5k-$11k' },
  { label: 'Risk posture', value: 'Verified' },
  { label: 'Next step', value: 'Apply now' },
]

const supportingCards = [
  {
    title: 'Instant transfer preview',
    copy: 'Prospects upload a transcript and immediately see likely accepted credits, program-fit confidence, and missing requirements.',
  },
  {
    title: 'Microsites by intent',
    copy: 'Every high-intent segment gets a personalized page with program highlights, estimated path to completion, and CTA orchestration.',
  },
  {
    title: 'Guided next step',
    copy: 'The platform turns evaluation into action: apply now, upload one missing item, or meet with an advisor.',
  },
]

export default function ProspectPortalPage() {
  return (
    <div className="page-wrap">
      <div className="section-header">
        <div>
          <p className="eyebrow">Student-Facing Experience</p>
          <h1>Prospect Portal that converts</h1>
          <p className="section-subtitle">
            This is where Crtfy beats traditional CRMs: a transcript-led front door that gives value before the application starts.
          </p>
        </div>
        <div className="section-actions">
          <button type="button" className="primary-button">Preview microsite</button>
        </div>
      </div>

      <section className="panel portal-hero-panel">
        <div className="portal-grid">
          <div className="portal-copy">
            <p className="eyebrow">Prototype Journey</p>
            <h2>Upload transcript. See likely fit. Take the next best step.</h2>
            <p className="muted-copy">
              The product should feel like guided certainty: not "thanks, we&apos;ll get back to you," but "here&apos;s your likely transfer path, confidence, gaps, and fastest route forward."
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-button">Upload transcript</button>
              <button type="button" className="secondary-button">Talk to advisor</button>
            </div>
          </div>
          <div className="portal-details">
            <article className="panel portal-highlight-card">
              <span>Best-fit program</span>
              <strong>BS Nursing Transfer</strong>
              <p>94% fit confidence · 42 likely accepted credits · 1 missing clinical prerequisite</p>
            </article>
            <div className="portal-detail-grid">
              {detailCards.map((card) => (
                <article key={card.label} className="panel portal-detail-card">
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-grid three-up">
        {supportingCards.map((card) => (
          <article key={card.title} className="panel portal-support-card">
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
            <a href="#next" className="text-link">Learn more <ArrowUpRight size={16} /></a>
          </article>
        ))}
      </section>
    </div>
  )
}
