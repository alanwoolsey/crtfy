import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CTASection, SectionIntro } from '../components/SiteComponents'
import { pathwaySteps, productCards } from '../data/siteData'
import OfferingLockup from '../components/OfferingLockup'

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Products</span>
          <h1>The Crtfy SaaS portfolio.</h1>
          <p className="lead-copy centered-copy">
            Three Education-First products for governed AI, student lifecycle operations, and intelligent document management.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="product-comparison-grid">
            {productCards.map((product) => (
              <article key={product.slug} className="feature-card offering-link-card product-comparison-card">
                <img className="offering-card-image" src={product.image} alt={`${product.title} dashboard screenshot`} />
                <div className="feature-icon"><product.icon size={22} /></div>
                <span className="eyebrow eyebrow-inline">{product.eyebrow}</span>
                <OfferingLockup slug={product.slug} name={product.title} className="product-card-logo" />
                <p>{product.description}</p>
                <div className="feature-bullets">
                  {product.proof.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link className="inline-link" to={product.to}>
                  Open product <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="How customers adopt"
            title="Start with one operating surface, then connect adjacent workflows."
            description="The products are focused enough to deploy around a clear need and broad enough to support the next workflow when the customer is ready."
          />
          <div className="path-grid">
            {pathwaySteps.map((step) => (
              <article key={step.title} className="suite-card">
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
            eyebrow="Product fit"
            title="Find the right Crtfy starting point."
            description="We can help map whether Crtfy.ai, Crtfy Student, or Crtfy Documents is the best first product for your team."
            primaryLabel="Talk to Crtfy"
            primaryTo="#contact"
            secondaryLabel="About Crtfy"
            secondaryTo="/about"
          />
        </div>
      </section>
    </>
  )
}
