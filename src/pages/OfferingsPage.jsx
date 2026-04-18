import { Link } from 'react-router-dom'
import { CTASection, LinkCard, SectionIntro } from '../components/SiteComponents'
import { pathwaySteps, platformPillars, productCards } from '../data/siteData'

export default function OfferingsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Integrated Offerings</span>
          <h1>Five platform pillars for secure operations, compliance, and connected oversight.</h1>
          <p className="lead-copy centered-copy">
            Crtfy orchestrates the layers most SLED organizations buy separately: AI governance, document trust, data protection, cybersecurity, and physical security.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Platform pillars"
            title="Every page here stands alone, but each one is designed to connect to the same operating model."
            description="Together, these capabilities support a connected platform for secure operations, compliance, and oversight."
          />
          <div className="feature-grid three-up">
            {platformPillars.map((pillar) => (
              <article key={pillar.slug} className="feature-card offering-link-card">
                <img className="offering-card-image" src={pillar.image} alt={`${pillar.shortTitle} screenshot`} />
                <div className="feature-icon"><pillar.icon size={22} /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <Link className="inline-link" to={pillar.to}>Open offering</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="How capabilities connect"
            title="A practical path from immediate need to broader platform coverage."
            description="Start with the workflow or control challenge in front of you, then connect adjacent capabilities as needed."
          />
          <div className="path-grid">
            {pathwaySteps.map((step) => (
              <article key={step.title} className="suite-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Product offerings"
            title="Products that give the platform an immediate entry point."
            description="Crtfy Student is one offering within the broader platform, alongside evaluation, trust, compliance, engagement, and analytics."
          />
          <div className="link-card-grid">
            {productCards.map((product) => (
              <LinkCard key={product.title} to={product.to} title={product.title} description={product.description} eyebrow="Product" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            title="See how the platform maps into concrete solution bundles."
            description="Explore combinations of products, services, and platform layers built for regulated environments."
            primaryLabel="View bundles"
            primaryTo="/bundles"
            secondaryLabel="See SLED strategy"
            secondaryTo="/sled"
          />
        </div>
      </section>
    </>
  )
}
