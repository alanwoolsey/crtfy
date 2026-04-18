import { CTASection, SectionIntro, StatStrip } from '../components/SiteComponents'
import { partnerCards, platformCards, platformProof } from '../data/siteData'

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero page-hero-platform">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Unified Platform</span>
            <h1>Security, compliance, and operational accountability under one framework.</h1>
            <p className="lead-copy">
              Connect, Orchestrate, and Protect are the infrastructure layers that tie products, services, and protected operations together.
            </p>
          </div>
          <div className="diagram-card visual-panel">
            <img className="product-screenshot product-screenshot-card" src="/product-screens/command-center.png" alt="Crtfy platform command center" />
          </div>
        </div>
      </section>

      <section className="section-block section-tight">
        <div className="container">
          <StatStrip items={platformProof} />
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Platform offerings"
            title="Infrastructure that connects systems, automates workflows, and protects sensitive data."
            description="These are the infrastructure offerings that connect systems, automate workflows, and protect sensitive data across the rest of the portfolio."
          />
          <div className="feature-grid three-up">
            {platformCards.map((pillar) => (
              <article key={pillar.slug} className="feature-card">
                <div className="feature-icon"><pillar.icon size={22} /></div>
                <h3>{pillar.shortTitle}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Partner layer"
            title="Crtfy works with proven tools and technologies already trusted in the field."
            description="The platform brings systems, partners, and controls together so organizations can manage outcomes through one framework."
          />
          <div className="link-card-grid">
            {partnerCards.map((partner) => (
              <article key={partner.title} className="architecture-card">
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            title="Bring systems, workflows, and controls together under one platform."
            description="The platform layer helps organizations coordinate data, approvals, integrations, and protection across the full operating environment."
            primaryLabel="Explore products"
            primaryTo="/products"
            secondaryLabel="Explore services"
            secondaryTo="/services"
          />
        </div>
      </section>
    </>
  )
}
