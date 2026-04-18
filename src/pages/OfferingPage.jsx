import { Link } from 'react-router-dom'
import { CTASection, FeatureCard, MiniQuote, SectionIntro } from '../components/SiteComponents'
import OfferingLockup from '../components/OfferingLockup'

export default function OfferingPage({ offering }) {
  return (
    <>
      <section className="page-hero offering-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">{offering.eyebrow}</span>
            <OfferingLockup slug={offering.slug} name={offering.shortTitle} />
            <p className="lead-copy">{offering.description}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/platform">See platform</Link>
              <Link className="button button-secondary" to="/industries">See industries</Link>
            </div>
            <div className="hero-proof-grid">
              {offering.proof.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
          <div className="story-panel visual-panel">
            <img className="product-screenshot product-screenshot-card" src={offering.image} alt={`${offering.title} visual`} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="What it covers"
            title={`How Crtfy delivers ${offering.shortTitle.toLowerCase()} without another point solution.`}
            description="Each capability can operate independently and connect cleanly into the larger Crtfy platform."
          />
          <div className="feature-grid three-up">
            {offering.capabilities.map((capability) => (
              <FeatureCard key={capability.title} {...capability} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Where it fits"
              title="Designed for the teams closest to this workflow."
              description="These groups typically see the fastest value from this capability while staying connected to the broader operating environment."
            />
            <div className="workflow-list">
              {offering.departments.map((department, index) => (
                <div key={department}>
                  <strong>{index + 1}. {department}</strong>
                  <span>{offering.outcomes[index] || offering.outcomes[offering.outcomes.length - 1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="story-panel">
            <MiniQuote
              quote="We need a clearer way to connect evidence, policy, and action across the environment."
              source="Common SLED operating challenge"
            />
            <div className="callout-card">
              <span className="eyebrow">Why it matters</span>
              <h3>{offering.shortTitle} becomes stronger inside the unified platform.</h3>
              <p>
                Connect this capability to encryption, compliance evidence, cyber operations, and broader workflow controls as your environment matures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow={offering.eyebrow}
            title={`Talk through how ${offering.shortTitle.toLowerCase()} fits into your environment.`}
            description="Start with the workflow in front of you, then map the related teams, controls, and systems around it."
            primaryLabel="Request a working session"
            primaryTo="#contact"
            secondaryLabel="Explore platform"
            secondaryTo="/platform"
          />
        </div>
      </section>
    </>
  )
}
