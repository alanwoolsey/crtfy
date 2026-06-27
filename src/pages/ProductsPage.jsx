import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTASection, SectionIntro } from '../components/SiteComponents'
import { pathwaySteps, productCards } from '../data/siteData'
import OfferingLockup from '../components/OfferingLockup'

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Crtfy Platform</span>
          <h1>Modernize admissions first. Govern AI and content everywhere.</h1>
          <p className="lead-copy centered-copy">
            Crtfy Student replaces fragmented admissions CRM workflows. Crtfy AI governs the assistants and institutional knowledge behind the work. Crtfy Content manages the records, forms, packets, and evidence that make the work trustworthy.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container product-comparison-grid">
          {productCards.map((product) => (
            <article key={product.slug} className="feature-card offering-link-card product-comparison-card product-story-card">
              <img className="offering-card-image" src={product.image} alt={`${product.title} screen preview`} />
              <span className="eyebrow eyebrow-inline">{product.eyebrow}</span>
              <OfferingLockup slug={product.slug} name={product.title} className="product-card-logo" />
              <p>{product.description}</p>
              <div className="feature-bullets feature-bullets-plain">
                {product.proof.map((item) => <span key={item}><CheckCircle2 size={14} /> {item}</span>)}
              </div>
              <Link className="inline-link" to={product.to}>Explore {product.shortTitle} <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Adoption path"
            title="Start with one product surface, then connect the operating layer."
            description="The products are clear enough to sell independently and connected enough to become the governed platform for institutional operations."
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
            description="Most institutions should start with the workflow that already has budget pressure. Crtfy is sold and implemented through authorized partners, and we will connect your institution with the right team."
            primaryLabel="Request a demo"
            primaryTo="#contact"
            secondaryLabel="Find a partner"
            secondaryTo="/partners"
          />
        </div>
      </section>
    </>
  )
}
