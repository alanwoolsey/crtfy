import { CTASection, SectionIntro } from '../components/SiteComponents'
import { marketDrivers, partnerCards, sledSegments } from '../data/siteData'

export default function SledPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">SLED Focus</span>
          <h1>Built for the compliance, budget, and coordination reality of SLED organizations.</h1>
          <p className="lead-copy centered-copy">
            Crtfy is designed for teams that need one partner across records, cyber, AI, facilities, and audit readiness instead of ten disconnected vendors.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Demand drivers"
            title="Why a unified platform matters in SLED."
            description="Security, compliance, records, AI, and operational workflows are increasingly connected across departments."
          />
          <div className="feature-grid four-up">
            {marketDrivers.map((driver) => (
              <article key={driver.title} className="feature-card">
                <h3>{driver.title}</h3>
                <p>{driver.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Where it fits"
              title="Designed for organizations with complex data, compliance, and operational environments."
              description="These institutions and agencies often need stronger coordination across departments, systems, and policy obligations."
            />
            <div className="story-list">
              {sledSegments.map((segment) => (
                <div key={segment.title}>
                  <div />
                  <div>
                    <strong>{segment.title}</strong>
                    <p>{segment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="story-panel">
            <div className="callout-card">
              <span className="eyebrow">Partner ecosystem</span>
              <h3>Crtfy works alongside proven partners where specialized tools are already in place.</h3>
              <p>
                That lets organizations keep trusted technologies while gaining one platform for workflow coordination, integration, and compliance outcomes.
              </p>
            </div>
            <div className="partner-wall">
              {partnerCards.map((partner) => (
                <article key={partner.title} className="partner-pill">
                  <strong>{partner.title}</strong>
                  <span>{partner.description}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            title="See how Crtfy fits regulated SLED environments."
            description="Explore the products, services, and platform layers built for complex records, compliance, and operational workflows."
            primaryLabel="Talk to Crtfy"
            primaryTo="#contact"
            secondaryLabel="Explore bundles"
            secondaryTo="/bundles"
          />
        </div>
      </section>
    </>
  )
}
