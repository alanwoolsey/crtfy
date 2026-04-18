import { Link } from 'react-router-dom'
import { CTASection, SectionIntro, StatStrip } from '../components/SiteComponents'
import { categoryCards, homeStats, marketDrivers, platformCards, problemCards, productCards, serviceCards } from '../data/siteData'
import BrandLogo from '../components/BrandLogo'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <BrandLogo className="hero-brand-logo" />
            <h1>One platform for SLED security, compliance, and accountable operations.</h1>
            <p>
              Crtfy delivers certified outcomes across data, AI, and operations through software, services, and compliance. Start with the capability you need now and connect the rest as your environment evolves.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="button button-primary">Explore products</Link>
              <Link to="/services" className="button button-secondary">Explore services</Link>
            </div>
            <div className="hero-proof-grid">
              <div>Evaluate, Verify, Certify, Engage, Insight</div>
              <div>Secure, Govern, Operate</div>
              <div>Advisory, Compliance, Risk</div>
              <div>Connect, Orchestrate, Protect</div>
            </div>
          </div>
          <div className="hero-mockup hero-screenshot-panel">
            <img
              className="product-screenshot product-screenshot-hero"
              src="/product-screens/command-center.png"
              alt="Crtfy platform screenshot"
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
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="The market problem"
              title="Most SLED organizations are managing risk across too many systems and too many vendors."
              description="Crtfy brings those disconnected workflows together with one platform for secure operations, compliance, and oversight."
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
              <span className="eyebrow">Platform structure</span>
              <h3>Products, services, advisory, and platform layers under one brand.</h3>
              <p>
                Explore the capabilities that fit your environment today, from secure document workflows to managed governance and protected data operations.
              </p>
              <Link className="inline-link" to="/products">See the product suite</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Platform layer"
            title="The infrastructure layer that connects products, services, and protected operations."
            description="Connect, Orchestrate, and Protect unify systems, workflows, and controls across the broader platform."
            align="center"
          />
          <div className="feature-grid three-up">
            {platformCards.map((pillar) => (
              <article key={pillar.slug} className="feature-card offering-link-card">
                <img className="offering-card-image" src={pillar.image} alt={`${pillar.shortTitle} screenshot`} />
                <div className="feature-icon"><pillar.icon size={22} /></div>
                <h3>{pillar.shortTitle}</h3>
                <p>{pillar.description}</p>
                <Link className="inline-link" to={pillar.to}>Explore platform layer</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Products"
            title="Core software for evaluation, trust, compliance, engagement, analytics, and industry workflows."
            description="Each product is built to solve a specific operational challenge and work cleanly with the rest of the platform."
          />
          <div className="link-card-grid">
            {productCards.map((product) => (
              <article key={product.title} className="link-card link-card-visual">
                <img className="link-card-image" src={product.image} alt={`${product.title} screenshot`} />
                <div>
                  <span className="eyebrow eyebrow-inline">Product</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link className="inline-link" to={product.to}>Open product page</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="Managed services and advisory offerings for governance, optimization, compliance, and risk."
            description="These services extend the platform with operational support, strategic guidance, and ongoing oversight."
          />
          <div className="feature-grid three-up">
            {serviceCards.map((service) => (
              <article key={service.slug} className="feature-card offering-link-card">
                <img className="offering-card-image" src={service.image} alt={`${service.title} screenshot`} />
                <div className="feature-icon"><service.icon size={22} /></div>
                <h3>{service.shortTitle}</h3>
                <p>{service.description}</p>
                <Link className="inline-link" to={service.to}>Explore service</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Structure"
            title="A clear structure for software, services, advisory, and platform capabilities."
            description="The categories below show how Crtfy brings connected capabilities together in one environment."
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

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Why now"
            title="Why unified security, compliance, and operations matter now."
            description="AI, cyber, compliance, and physical security are converging. SLED teams need one framework that can connect those layers."
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
            title="Explore the capability that matches the challenge in front of you."
            description="Crtfy is designed to support secure records, governed AI, protected data, operational workflows, and compliance under one platform."
            primaryLabel="Explore products"
            primaryTo="/products"
            secondaryLabel="See industries"
            secondaryTo="/industries"
          />
        </div>
      </section>
    </>
  )
}
