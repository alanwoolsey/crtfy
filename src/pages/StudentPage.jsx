import { ClipboardList, FileCheck2, GraduationCap, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, FeatureCard, SectionIntro, StatStrip } from '../components/SiteComponents'
import OfferingLockup from '../components/OfferingLockup'

const productStats = [
  { value: 'Today\'s Work', label: 'Prioritize students who need action, are close to completion, ready for decision, or blocked by exceptions.' },
  { value: 'Student 360', label: 'Keep student context, checklist progress, transcripts, decisions, trust posture, and handoff in one workspace.' },
  { value: 'Decision ready', label: 'Coordinate evidence, recommendations, trust signals, reviewer notes, and release workflows.' },
]

const productFeatures = [
  {
    icon: FileCheck2,
    title: 'Document trust in the workflow',
    description: 'Parse records, protect sensitive data, flag anomalies, and create an audit trail inside the student workflow.',
    bullets: ['OCR and classification', 'Fraud and exception checks', 'Protected storage'],
  },
  {
    icon: GraduationCap,
    title: 'Student-facing value before application',
    description: 'Give prospects a transcript-led front door with likely fit, program direction, and guided next steps.',
    bullets: ['Prospect portal', 'Fit and transfer visibility', 'Microsite-style next actions'],
  },
  {
    icon: ShieldCheck,
    title: 'Explainable internal decisions',
    description: 'Give staff one place to review evidence, confidence, notes, and release actions tied to the student record.',
    bullets: ['Decision workbench', 'Evidence and trust markers', 'Human approval paths'],
  },
  {
    icon: Users,
    title: 'Student record orchestration',
    description: 'Unify transcripts, progress, risk, and outreach so the product becomes a broader institutional system of action.',
    bullets: ['Student 360', 'Task orchestration', 'Advisor visibility'],
  },
  {
    icon: ClipboardList,
    title: 'Connected student workflows',
    description: 'Connect transcript work, document queues, trust review, and decision ownership across the student lifecycle.',
    bullets: ['Compliance handoff', 'Shared policy controls', 'Cross-team coordination'],
  },
]

export default function StudentPage() {
  return (
    <>
      <section className="page-hero page-hero-product">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Product Offering</span>
            <OfferingLockup slug="crtfy-student" name="Student" className="page-brand-logo" />
            <p className="lead-copy">
              Crtfy Student is an enrollment operating system for the work admissions and records teams need to move now: incomplete applications, transcripts, decisions, trust cases, yield, and handoff.
            </p>
            <div className="hero-actions">
              <Link to="/product/prospect-portal" className="button button-primary">Open product view</Link>
              <a href="#capabilities" className="button button-secondary">See capabilities</a>
            </div>
          </div>
          <div className="product-panel visual-panel">
            <img className="product-screenshot product-screenshot-card" src="/product-screens/prospect-portal.png" alt="Crtfy Student product screenshot" />
          </div>
        </div>
      </section>

      <section className="section-block section-tight">
        <div className="container">
          <StatStrip items={productStats} />
        </div>
      </section>

      <section className="section-block" id="capabilities">
        <div className="container">
          <SectionIntro
            eyebrow="Capabilities"
            title="A daily operating surface for enrollment teams."
            description="Use Crtfy Student to coordinate transcript upload, document queues, checklist blockers, student readiness, trust review, and decision workflows."
          />
          <div className="feature-grid three-up">
            {productFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Where it fits"
              title="Designed for the teams moving students from interest to enrollment."
              description="Crtfy Student supports workflows that depend on trusted records, explainable decisions, clear next actions, and coordinated ownership."
            />
            <div className="workflow-list">
              <div><strong>1. Registrar / Admissions</strong><span>Lead with transcript intake, document trust, and early workflow speed.</span></div>
              <div><strong>2. Records / Compliance</strong><span>Track document status, trust cases, review evidence, and auditable updates.</span></div>
              <div><strong>3. Enrollment Leaders</strong><span>Understand bottlenecks, readiness, decision flow, yield signals, and melt risk.</span></div>
              <div><strong>4. IT / Systems</strong><span>Connect student workflows to source systems, document intake, and governed access.</span></div>
            </div>
          </div>
          <div className="image-panel mock-right-panel">
            <div className="product-screen-stack">
              <img className="product-screenshot product-screenshot-card" src="/product-screens/prospect-portal.png" alt="Prospect Portal screenshot" />
              <div className="product-screen-row">
                <img className="product-screenshot product-screenshot-card" src="/product-screens/student-profile.png" alt="Student profile screenshot" />
                <img className="product-screenshot product-screenshot-card" src="/product-screens/decision-studio.png" alt="Decision Studio screenshot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow="Product fit"
            title="See how Crtfy Student fits with the rest of the portfolio."
            description="Compare Crtfy Student with Crtfy.ai and Crtfy Documents to understand the right starting point for your team."
            primaryLabel="Compare products"
            primaryTo="/products"
            secondaryLabel="About Crtfy"
            secondaryTo="/about"
          />
        </div>
      </section>
    </>
  )
}
