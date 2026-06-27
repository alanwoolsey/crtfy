import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTASection, FeatureCard, SectionIntro, StatStrip } from '../components/SiteComponents'
import { homeStats, marketDrivers, problemCards, productCards } from '../data/siteData'
import BrandLogo from '../components/BrandLogo'
import OfferingLockup from '../components/OfferingLockup'

export default function HomePage() {
  return (
    <>
      <section className="hero-section hero-section-platform">
        <div className="container hero-grid">
          <div className="hero-copy">
            <BrandLogo className="hero-brand-logo" />
            <span className="eyebrow">Education-first operating platform</span>
            <h2>Run admissions, AI, and institutional content from one governed platform.</h2>
            <p>
              Crtfy helps institutions replace disconnected CRMs, unmanaged AI tools, shared drives, and legacy ECM workflows with connected applications for enrollment operations, governed AI, and intelligent content management.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Request a demo</a>
              <Link to="/products" className="button button-secondary">Explore platform</Link>
            </div>
            <p className="partner-delivery-note">
              Crtfy is delivered through authorized partners. We will connect your institution with the right implementation team.
            </p>
            <div className="hero-proof-grid">
              <div><CheckCircle2 size={16} /> Replace admissions CRM workflows</div>
              <div><CheckCircle2 size={16} /> Govern institutional AI use</div>
              <div><CheckCircle2 size={16} /> Modernize content management</div>
              <div><CheckCircle2 size={16} /> Preserve source evidence and audit trails</div>
            </div>
          </div>
          <div className="hero-mockup hero-screenshot-panel platform-preview-panel">
            <div className="platform-preview-card platform-preview-card-primary">
              <span>Admissions OS</span>
              <strong>Today’s Work / Student 360</strong>
              <p>Needs attention, close to completion, ready for decision, exceptions.</p>
            </div>
            <div className="platform-preview-card">
              <span>Governed AI</span>
              <strong>Workspace Assistant</strong>
              <p>Approved sources, policy checks, human review, audit history.</p>
            </div>
            <div className="platform-preview-card">
              <span>Intelligent Content</span>
              <strong>Repository + Workflow</strong>
              <p>Intake, metadata, e-forms, signatures, retention, AI search.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-tight">
        <div className="container">
          <StatStrip items={homeStats} />
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Why institutions need this"
            title="Admissions, AI, and content are converging. Most systems still treat them separately."
            description="Crtfy brings the daily work, the source evidence, and the governance model into connected product surfaces built for education."
          />
          <div className="feature-grid three-up">
            {problemCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Platform"
            title="Three connected products. One operating philosophy."
            description="Start where the pain is strongest, then connect the adjacent records, approvals, AI assistance, and audit trails."
          />
          <div className="product-comparison-grid homepage-product-grid">
            {productCards.map((product) => (
              <article key={product.slug} className="feature-card offering-link-card product-comparison-card elevated-card">
                <img className="offering-card-image" src={product.image} alt={`${product.title} screen preview`} />
                <span className="eyebrow eyebrow-inline">{product.eyebrow}</span>
                <OfferingLockup slug={product.slug} name={product.title} className="product-card-logo" />
                <p>{product.description}</p>
                <div className="feature-bullets feature-bullets-plain">
                  {product.proof.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link className="inline-link" to={product.to}>Explore product <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Market story"
              title="Built for institutions modernizing core operations."
              description="Crtfy is positioned for schools evaluating admissions CRM replacement, safe AI adoption, and ECM modernization. No customer logo wall is included until logo permissions are approved."
            />
          </div>
          <div className="workflow-list">
            {marketDrivers.map((driver, index) => (
              <div key={driver.title}>
                <strong>{index + 1}. {driver.title}</strong>
                <span>{driver.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Partner-delivered for education"
              title="Crtfy is product-led, partner-delivered."
              description="Crtfy works with authorized partners to help institutions move from fragmented systems to governed admissions, AI, and content workflows."
            />
            <div className="hero-actions partner-actions">
              <Link to="/partners" className="button button-primary">Connect with a partner</Link>
              <a href="#contact" className="button button-secondary">Request a demo</a>
            </div>
          </div>
          <div className="partner-card-list">
            <article className="partner-feature-card">
              <span className="eyebrow eyebrow-inline">Authorized Partner</span>
              <img className="partner-logo" src="/shamrock-solutions-logo.png" alt="Shamrock Solutions" />
              <p>
                Implementation, integration, workflow configuration, and institutional support for teams adopting Crtfy products.
              </p>
              <a
                className="inline-link"
                href="https://www.shamrocksolutionsllc.com/contact"
                target="_blank"
                rel="noreferrer"
              >
                Visit Shamrock Solutions <ArrowRight size={16} />
              </a>
            </article>
            <article className="partner-feature-card">
              <span className="eyebrow eyebrow-inline">Authorized Partner</span>
              <div className="partner-logo-shell">
                <img className="partner-logo partner-logo-wide" src="/talentus-global-logo.svg" alt="Talentus Global" />
              </div>
              <p>
                AI-enabled business solutions, implementation support, and transformation services for institutions adopting Crtfy products.
              </p>
              <a
                className="inline-link"
                href="https://www.talentusglobal.com/forms/contact-us"
                target="_blank"
                rel="noreferrer"
              >
                Visit Talentus Global <ArrowRight size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow="Start with admissions"
            title="See how Crtfy can replace fragmented admissions workflows and extend into AI and content governance."
            description="Crtfy is available through authorized partners, including Shamrock Solutions and Talentus Global. Request a demo and we will connect your institution with the right team."
            primaryLabel="Request a demo"
            primaryTo="#contact"
            secondaryLabel="Partner with us"
            secondaryTo="/partners"
          />
        </div>
      </section>
    </>
  )
}
