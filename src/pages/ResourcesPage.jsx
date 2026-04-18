import { BookOpenText, FileStack, LayoutPanelTop } from 'lucide-react'
import { SectionIntro } from '../components/SiteComponents'
import { resourceCards } from '../data/siteData'

const icons = [BookOpenText, FileStack, LayoutPanelTop]

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero page-hero-resources">
        <div className="container narrow-hero">
          <span className="eyebrow">Resources</span>
          <h1>Use this section to publish the category story around crtfy.</h1>
          <p className="lead-copy centered-copy">
            The goal is to make the company look thoughtful, credible, and inevitable — even before every feature is fully shipped.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Suggested content"
            title="Foundational pieces for the site and future demand generation."
            description="These are starter placeholders, but they make the prototype feel like a real company site instead of only a product shell."
          />
          <div className="feature-grid three-up">
            {resourceCards.map((card, index) => {
              const Icon = icons[index]
              return (
                <article key={card.title} className="feature-card resource-card">
                  <div className="feature-icon"><Icon size={22} /></div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="resource-tag">Coming soon</span>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
