import { CTASection, SectionIntro } from '../components/SiteComponents'
import { resourceCards } from '../data/siteData'

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero page-hero-resources">
        <div className="container narrow-hero">
          <span className="eyebrow">Resources</span>
          <h1>Resources for teams evaluating secure operations, compliance, and connected workflows.</h1>
          <p className="lead-copy centered-copy">
            Explore how Crtfy supports evaluation, verification, compliance, governance, and protected data operations across regulated environments.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Resource overview"
            title="A concise view of what Crtfy covers and how the platform fits together."
            description="These summaries highlight the platform, the problem it solves, and the capabilities organizations can bring together over time."
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
            title="Explore the products and services behind the platform."
            description="Start with the area that matters most to your team and see how it connects to the broader Crtfy environment."
            primaryLabel="See products"
            primaryTo="/products"
            secondaryLabel="See services"
            secondaryTo="/services"
          />
        </div>
      </section>
    </>
  )
}
