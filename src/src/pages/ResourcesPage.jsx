import { CTASection, SectionIntro } from '../components/SiteComponents'
import { resourceCards } from '../data/siteData'

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero page-hero-resources">
        <div className="container narrow-hero">
          <span className="eyebrow">Resources</span>
          <h1>Resources for teams evaluating the Crtfy SaaS portfolio.</h1>
          <p className="lead-copy centered-copy">
            A short guide to the products, where each one fits, and how customers can start with the workflow that matters most.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Resource overview"
            title="A concise view of what Crtfy covers."
            description="These summaries highlight the portfolio, the customer problems it solves, and the way products can connect over time."
          />
          <div className="link-card-grid">
            {resourceCards.map((card) => (
              <article key={card.title} className="feature-card resource-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow="Resources"
            title="Explore the product that matches the current workflow."
            description="Start with governed AI, student operations, or document management, then map the adjacent records and review flows."
            primaryLabel="See products"
            primaryTo="/products"
            secondaryLabel="About Crtfy"
            secondaryTo="/about"
          />
        </div>
      </section>
    </>
  )
}
