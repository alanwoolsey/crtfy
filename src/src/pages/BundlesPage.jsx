import { CTASection, SectionIntro } from '../components/SiteComponents'
import { bundleCards, pathwaySteps } from '../data/siteData'

export default function BundlesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Packaging</span>
          <h1>Choose the combination of capabilities that fits your environment.</h1>
          <p className="lead-copy centered-copy">
            These bundles show how products, services, and platform layers can work together around specific operational needs.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Solution bundles"
            title="Three ways to package Crtfy for regulated environments."
            description="Start with the capability set that best fits your workflows, controls, and operating priorities."
          />
          <div className="suite-grid">
            {bundleCards.map((bundle) => (
              <article key={bundle.title} className="suite-card bundle-card">
                <h3>{bundle.title}</h3>
                <p>{bundle.subtitle}</p>
                <div className="feature-bullets">
                  {bundle.bullets.map((bullet) => (
                    <span key={bullet}>{bullet}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="How bundles work"
            title="A simple path from immediate need to broader platform coverage."
            description="Each bundle can solve a focused challenge now and connect to adjacent capabilities over time."
          />
          <div className="path-grid">
            {pathwaySteps.map((step) => (
              <article key={step.title} className="callout-card">
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
            title="Build the right package around the work your team needs to do."
            description="Crtfy can support secure records, governance, compliance, cyber operations, and connected workflows in one environment."
            primaryLabel="Talk through packaging"
            primaryTo="#contact"
            secondaryLabel="Explore offerings"
            secondaryTo="/offerings"
          />
        </div>
      </section>
    </>
  )
}
