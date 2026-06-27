import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTASection, FeatureCard, SectionIntro, StatStrip } from '../components/SiteComponents'
import { productOfferings } from '../data/siteData'
import OfferingLockup from '../components/OfferingLockup'

const student = productOfferings.find((product) => product.slug === 'crtfy-student')

const lifecycle = [
  ['Recruit', 'Inquiries, campaigns, outreach, events, and portals.'],
  ['Apply', 'Applications, checklists, missing items, and communications.'],
  ['Complete', 'Documents, transcripts, forms, and required evidence.'],
  ['Review', 'Academic signal, transfer review, trust checks, and exceptions.'],
  ['Decide', 'Decision Studio, AI recommendations, and human approval.'],
  ['Yield', 'Deposit likelihood, melt risk, and next-best action.'],
  ['Handoff', 'Clean transition to enrolled student workflows.'],
]

const stats = [
  { value: 'Today’s Work', label: 'Prioritize incomplete applications, decision-ready records, exceptions, and follow-ups.' },
  { value: 'Student 360', label: 'Create one canonical student record for documents, signals, decisions, trust, and next steps.' },
  { value: 'Decision Studio', label: 'Make admissions decisions with evidence, confidence, governed AI, and human review.' },
]

export default function StudentPage() {
  return (
    <>
      <section className="page-hero page-hero-product">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Admissions Operating System</span>
            <OfferingLockup slug="crtfy-student" name="Crtfy Student" className="page-brand-logo" />
            <h1 className="product-hero-title">The admissions operating system for institutions that need more than a CRM.</h1>
            <p className="lead-copy">
              Replace disconnected admissions workflows with one governed workspace for recruitment, applications, transcript intake, student records, review queues, decisions, yield, and handoff.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Book a demo</a>
              <a href="#capabilities" className="button button-secondary">See modules</a>
            </div>
          </div>
          <div className="product-panel visual-panel product-demo-panel">
            <img className="product-screenshot product-screenshot-card" src="/product-screens/student-360.png" alt="Crtfy Student 360 screen" />
          </div>
        </div>
      </section>

      <section className="section-block section-tight">
        <div className="container">
          <StatStrip items={stats} />
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="The full admissions journey"
            title="One workspace from inquiry to enrolled."
            description="Crtfy Student is built around the path admissions teams actually manage every day."
          />
          <div className="journey-strip">
            {lifecycle.map(([title, description]) => (
              <div key={title} className="journey-step">
                <strong>{title}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface" id="capabilities">
        <div className="container">
          <SectionIntro
            eyebrow="Core modules"
            title="Built around how admissions teams actually work."
            description="Crtfy Student turns scattered records, documents, recommendations, and handoffs into reviewable operating workflows."
          />
          <div className="feature-grid three-up">
            {student.capabilities.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Why replace the CRM"
              title="More than prospect tracking. More than a document queue."
              description="Traditional admissions CRMs track interactions. Crtfy Student is designed to run the operation: readiness, transcript evidence, decisions, trust, yield, and handoff."
            />
            <div className="comparison-list">
              <div><span>Traditional CRM</span><strong>Tracks prospects and communications</strong></div>
              <div><span>Crtfy Student</span><strong>Runs the daily admissions operation</strong></div>
              <div><span>Traditional CRM</span><strong>Leaves documents in another system</strong></div>
              <div><span>Crtfy Student</span><strong>Connects documents directly to decisions</strong></div>
              <div><span>Traditional CRM</span><strong>Adds AI as a chatbot</strong></div>
              <div><span>Crtfy Student</span><strong>Embeds governed AI into review and workflow</strong></div>
            </div>
          </div>
          <div className="story-panel">
            <h3>One workspace for every student, document, decision, and next step.</h3>
            <p>
              Student records, transcripts, course equivalencies, checklists, fit signals, trust posture, recommendations, and human approvals are connected in the same operating model.
            </p>
            <div className="feature-bullets feature-bullets-plain">
              {student.proof.map((item) => <span key={item}><CheckCircle2 size={14} /> {item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow="Admissions modernization"
            title="Replace fragmented admissions work with a governed enrollment operating system."
            description="Start with Today’s Work and Student 360, then connect transcript intelligence, Decision Studio, trust, yield, and handoff."
            primaryLabel="Book a demo"
            primaryTo="#contact"
            secondaryLabel="Compare products"
            secondaryTo="/products"
          />
        </div>
      </section>
    </>
  )
}
