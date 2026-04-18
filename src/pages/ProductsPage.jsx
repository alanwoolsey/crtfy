import { CTASection, SectionIntro } from '../components/SiteComponents'
import { pathwaySteps, productCards } from '../data/siteData'

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Products</span>
          <h1>Software products for evaluation, trust, compliance, engagement, analytics, and industry workflows.</h1>
          <p className="lead-copy centered-copy">
            Each product addresses a clear operational need and connects into the broader Crtfy platform.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Core software"
            title="Products built for evaluation, trust, compliance, engagement, analytics, and industry-specific delivery."
            description="Explore the applications that support sensitive records, governed decisions, communication, and operational visibility."
          />
          <div className="feature-grid three-up">
            {productCards.map((product) => (
              <article key={product.slug} className="feature-card offering-link-card">
                <img className="offering-card-image" src={product.image} alt={`${product.title} screenshot`} />
                <div className="feature-icon"><product.icon size={22} /></div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a className="inline-link" href={product.to}>Open product</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="How teams adopt"
            title="Organizations often begin with one workflow and then connect adjacent capabilities."
            description="Crtfy products are designed to solve a focused problem today and fit naturally into a broader operating environment over time."
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
          <CTASection
            title="Start with the product that solves the most urgent problem first."
            description="Then connect services, governance, and platform infrastructure as your needs expand."
            primaryLabel="See services"
            primaryTo="/services"
            secondaryLabel="See platform"
            secondaryTo="/platform"
          />
        </div>
      </section>
    </>
  )
}
