import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTASection, SectionIntro, StatStrip } from '../components/SiteComponents'
import { categoryCards, homeStats, marketDrivers, problemCards, productCards } from '../data/siteData'
import BrandLogo from '../components/BrandLogo'
import OfferingLockup from '../components/OfferingLockup'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <BrandLogo className="hero-brand-logo" />
            <h2>Governed SaaS Education-Firstproducts for AI, students, and documents.</h2>
            <p>
              Crtfy is focused applications for institutions that need operational AI, student lifecycle workflows, and education-first document management with governance built in.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="button button-primary">Explore products</Link>
              <Link to="/about" className="button button-secondary">About Crtfy</Link>
            </div>
            <div className="hero-proof-grid">
              <div><CheckCircle2 size={16} /> Governed AI workspaces</div>
              <div><CheckCircle2 size={16} /> Enrollment operations</div>
              <div><CheckCircle2 size={16} /> Document lifecycle workflows</div>
              <div><CheckCircle2 size={16} /> Audit-ready activity trails</div>
            </div>
          </div>
          <div className="hero-mockup hero-screenshot-panel">
            <img
              className="product-screenshot product-screenshot-hero"
              src="/product-screens/command-center.png"
              alt="Crtfy.ai dashboard screenshot"
            />
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
            eyebrow="Products"
            title="Three SaaS applications, one product philosophy."
            description="Each product solves a specific operational problem, while sharing the same emphasis on workflow, governance, source evidence, and human review."
          />
          <div className="feature-grid three-up">
            {productCards.map((product) => (
              <article key={product.slug} className="feature-card offering-link-card product-feature-card">
                <img className="offering-card-image" src={product.image} alt={`${product.title} dashboard screenshot`} />
                <div className="feature-icon"><product.icon size={22} /></div>
                <span className="eyebrow eyebrow-inline">{product.eyebrow}</span>
                <OfferingLockup slug={product.slug} name={product.title} className="product-card-logo" />
                <p>{product.description}</p>
                <Link className="inline-link" to={product.to}>
                  View product <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Why Crtfy"
              title="Built for teams where records, decisions, and AI all need accountability."
              description="The portfolio is intentionally focused on work that cannot be left to generic tools: sensitive records, institution-specific workflows, AI governance, and reviewable decisions."
            />
            <div className="story-list">
              {problemCards.map((card) => (
                <div key={card.title}>
                  <card.icon size={18} />
                  <div>
                    <strong>{card.title}</strong>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="story-panel">
            <div className="callout-card">
              <span className="eyebrow">About us</span>
              <h3>Crtfy is a product company focused on governed operational software.</h3>
              <p>
                We design SaaS products for education and operations teams that need more than another dashboard. The work has to be routed, reviewed, audited, and grounded in the records that support it.
              </p>
              <Link className="inline-link" to="/about">
                Learn about Crtfy <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Portfolio"
            title="A clean product map for potential customers."
            description="Use this structure to understand where each product starts and how it can expand with adjacent workflows."
          />
          <div className="suite-grid">
            {categoryCards.map((category) => (
              <article key={category.title} className="suite-card">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="What customers care about"
            title="The products are built around daily work, not abstract transformation."
            description="Crtfy focuses on operating surfaces that staff can use every day while preserving the governance leadership needs."
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

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow="Next step"
            title="Talk through the product that matches your current workflow."
            description="Start with governed AI, student operations, or document management. We can map the right starting point and the adjacent workflows that should connect next."
            primaryLabel="Talk to Crtfy"
            primaryTo="#contact"
            secondaryLabel="Compare products"
            secondaryTo="/products"
          />
        </div>
      </section>
    </>
  )
}
