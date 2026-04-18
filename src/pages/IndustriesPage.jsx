import { CTASection, SectionIntro } from '../components/SiteComponents'
import { marketDrivers, sledSegments } from '../data/siteData'

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Industries</span>
          <h1>Built for higher education, agencies, municipalities, and other regulated SLED environments.</h1>
          <p className="lead-copy centered-copy">
            Crtfy helps organizations manage sensitive data, compliance obligations, AI adoption, and operational coordination under one framework.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Why SLED"
            title="SLED is where fragmented systems, rising compliance pressure, and operational complexity collide."
            description="That is why organizations need connected workflows, clear controls, and stronger operational visibility."
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
        <div className="container">
          <SectionIntro
            eyebrow="Priority segments"
            title="Where Crtfy is built to deliver the most value."
            description="These environments combine sensitive data, complex coordination, and compliance pressure across multiple teams."
          />
          <div className="suite-grid">
            {sledSegments.map((segment) => (
              <article key={segment.title} className="suite-card">
                <h3>{segment.title}</h3>
                <p>{segment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            title="Find the capabilities that match your environment."
            description="Explore products, services, and platform layers built for regulated organizations managing security, records, AI, and compliance."
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
