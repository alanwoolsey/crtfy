import { CTASection, SectionIntro } from '../components/SiteComponents'
import { serviceCards } from '../data/siteData'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Services</span>
          <h1>Managed services and advisory offerings that turn Crtfy into an operating partner, not just a software vendor.</h1>
          <p className="lead-copy centered-copy">
            Security operations, governance, optimization, strategy, compliance, and risk support for regulated environments.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Managed + advisory"
            title="Services for ongoing operations, governance, advisory support, compliance readiness, and risk management."
            description="Use these offerings to extend the platform with expert support, oversight, and continuous improvement."
          />
          <div className="feature-grid three-up">
            {serviceCards.map((service) => (
              <article key={service.slug} className="feature-card offering-link-card">
                <img className="offering-card-image" src={service.image} alt={`${service.title} screenshot`} />
                <div className="feature-icon"><service.icon size={22} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="inline-link" href={service.to}>Open service</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            title="Add services where ongoing support and oversight matter most."
            description="Crtfy services help organizations strengthen governance, streamline operations, improve audit readiness, and manage risk over time."
            primaryLabel="See industries"
            primaryTo="/industries"
            secondaryLabel="See platform"
            secondaryTo="/platform"
          />
        </div>
      </section>
    </>
  )
}
