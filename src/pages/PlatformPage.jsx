import { Cable, DatabaseZap, LockKeyhole, Network, Radar, ShieldCheck, Workflow } from 'lucide-react'
import { CTASection, FeatureCard, SectionIntro } from '../components/SiteComponents'
import { platformFeatures } from '../data/siteData'

const architecturePoints = [
  { icon: Cable, title: 'Certified connectors', copy: 'Deliver decisions into SIS, CRM, and workflow systems without hand-keying the same outcome in multiple tools.' },
  { icon: ShieldCheck, title: 'Explainability layer', copy: 'Make source data, rule lineage, AI recommendations, and final decisions visible in one trust model.' },
  { icon: Workflow, title: 'Operational orchestration', copy: 'Trigger queues, notifications, reviews, and downstream release events from trusted states.' },
  { icon: Radar, title: 'Signals engine', copy: 'Promote the highest-priority work based on readiness, risk, confidence, and completion.' },
  { icon: DatabaseZap, title: 'Structured intelligence', copy: 'Normalize transcript and catalog data so it can be reused across decisioning, analytics, and student experiences.' },
  { icon: LockKeyhole, title: 'Governance-ready foundation', copy: 'Build for access control, auditability, and human supervision from the start instead of bolting it on later.' },
]

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero page-hero-platform">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Platform</span>
            <h1>The trust and delivery layer behind crtfy Student.</h1>
            <p className="lead-copy">
              The product story matters, but the platform story closes the gap between a compelling demo and a real
              institutional system. crtfy needs both.
            </p>
          </div>
          <div className="diagram-card">
            <div className="diagram-pill">Intake</div>
            <div className="diagram-line" />
            <div className="diagram-pill">Decision Intelligence</div>
            <div className="diagram-line" />
            <div className="diagram-pill">Trust Fabric</div>
            <div className="diagram-line" />
            <div className="diagram-pill">Connectors + Experiences</div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Platform capabilities"
            title="What makes the experience defensible, extensible, and ready for institutional adoption."
            description="This is the layer that separates a flashy front end from a platform buyers can actually trust and integrate."
          />
          <div className="feature-grid three-up">
            {platformFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Architecture story"
            title="Show buyers that the product was designed for real data, real review, and real operational flow."
            description="Even in prototype form, the website should signal that the platform can become a serious enterprise layer over time."
          />
          <div className="architecture-grid">
            {architecturePoints.map((item) => (
              <article key={item.title} className="architecture-card">
                <div className="feature-icon"><item.icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </>
  )
}
