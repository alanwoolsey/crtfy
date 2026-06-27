import { ArrowRight, Handshake, Workflow } from 'lucide-react'
import { SectionIntro } from '../components/SiteComponents'

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Crtfy Partner Network</span>
          <h2>Education technology partners helping institutions modernize admissions, AI, and content operations.</h2>
          <p className="lead-copy centered-copy">
            Crtfy is the platform. Authorized partners help institutions evaluate, implement, configure, integrate, and support it.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container feature-grid three-up partner-grid">
          <article className="feature-card">
            <div className="feature-icon"><Workflow size={22} /></div>
            <span className="eyebrow eyebrow-inline">Authorized Partner</span>
            <img className="partner-logo" src="/shamrock-solutions-logo.png" alt="Shamrock Solutions" />
            <p>
              Shamrock Solutions is an authorized Crtfy implementation and reseller partner supporting configuration, integration, and customer success.
            </p>
            <a
              className="inline-link"
              href="https://www.shamrocksolutionsllc.com/contact"
              target="_blank"
              rel="noreferrer"
            >
              Connect with Shamrock Solutions <ArrowRight size={16} />
            </a>
          </article>
          <article className="feature-card">
            <div className="feature-icon"><Workflow size={22} /></div>
            <span className="eyebrow eyebrow-inline">Authorized Partner</span>
            <div className="partner-logo-shell">
              <img className="partner-logo partner-logo-wide" src="/talentus-global-logo.svg" alt="Talentus Global" />
            </div>
            <p>
              Talentus Global is an authorized Crtfy partner supporting AI-enabled business transformation, implementation, and institutional rollout.
            </p>
            <a
              className="inline-link"
              href="https://www.talentusglobal.com/forms/contact-us"
              target="_blank"
              rel="noreferrer"
            >
              Connect with Talentus Global <ArrowRight size={16} />
            </a>
          </article>
          <article className="feature-card">
            <div className="feature-icon"><Handshake size={22} /></div>
            <h3>For future partners</h3>
            <p>
              Crtfy is building a partner ecosystem for education technology consultants, systems integrators, and value-added resellers.
            </p>
            <a className="inline-link" href="/partners/become">Become a partner <ArrowRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="How delivery works"
              title="Crtfy is product-led, partner-delivered."
              description="Institutions should understand that Crtfy is the product platform, while authorized partners help them buy, implement, configure, integrate, and support it."
            />
          </div>
          <div className="workflow-list">
            <div><strong>1. Evaluate the product fit</strong><span>Map the institution's admissions, AI, or content workflow to the right Crtfy starting point.</span></div>
            <div><strong>2. Configure and integrate</strong><span>Connect source systems, permissions, workflows, records, and review paths with implementation support.</span></div>
            <div><strong>3. Support rollout</strong><span>Train users, tune workflows, and support adoption through the partner delivery model.</span></div>
          </div>
        </div>
      </section>
    </>
  )
}
