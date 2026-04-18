import { ClipboardList, FileCheck2, GraduationCap, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, FeatureCard, SectionIntro, StatStrip } from '../components/SiteComponents'
import OfferingLockup from '../components/OfferingLockup'

const productStats = [
  { value: 'Higher education', label: 'Built for transcript, records, admissions, and student workflow operations.' },
  { value: 'Secure records', label: 'Combines document trust, evaluation, and guided next steps around sensitive student data.' },
  { value: 'Connected platform', label: 'Links student workflows to compliance, governance, and protected data operations.' },
]

const productFeatures = [
  {
    icon: FileCheck2,
    title: 'Document trust in the workflow',
    description: 'Use the same platform to parse records, protect sensitive data, flag anomalies, and create an audit trail.',
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
    title: 'Connected platform workflows',
    description: 'Crtfy Student connects into document security, AI governance, encryption, and broader operational controls.',
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
              Crtfy Student brings document trust, workflow, compliance, and guided experiences together for higher education teams managing sensitive student records.
            </p>
            <div className="hero-actions">
              <Link to="/product/prospect-portal" className="button button-primary">Open product view</Link>
              <a href="#capabilities" className="button button-secondary">See how it fits the platform</a>
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
            title="A higher education offering built on the broader Crtfy platform."
            description="Use Crtfy Student to coordinate transcript intake, document trust, review workflows, and student-facing next steps."
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
              title="Designed for records, admissions, compliance, and IT teams working together."
              description="Crtfy Student supports higher education workflows that depend on trusted records, explainable review, and clear next steps."
            />
            <div className="workflow-list">
              <div><strong>1. Registrar / Admissions</strong><span>Lead with transcript intake, document trust, and early workflow speed.</span></div>
              <div><strong>2. Records / Compliance</strong><span>Extend into audit trails, redaction, policy controls, and data handling.</span></div>
              <div><strong>3. IT / Security</strong><span>Connect the product to encryption, cyber operations, and broader governance.</span></div>
              <div><strong>4. Connected workflows</strong><span>Extend the same controls and workflow logic into other records-heavy or compliance-heavy environments.</span></div>
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
            title="See how Crtfy Student connects into the broader platform."
            description="Explore the products and services that support student records, secure operations, governance, and compliance."
            primaryLabel="See the platform"
            primaryTo="/platform"
            secondaryLabel="See Verify"
            secondaryTo="/products/verify"
          />
        </div>
      </section>
    </>
  )
}
