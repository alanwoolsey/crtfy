import { ArrowRight, CheckCircle2, FileCheck2, Gauge, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const walkthroughSteps = [
  {
    icon: FileCheck2,
    title: '1. Upload and parse',
    copy: 'A student or staff member uploads a transcript. crtfy extracts structure and establishes institution context.',
  },
  {
    icon: Gauge,
    title: '2. Score and evaluate',
    copy: 'The system produces fit, transferability, confidence, and decision recommendations with supporting evidence.',
  },
  {
    icon: ShieldCheck,
    title: '3. Review and trust',
    copy: 'Staff inspect trust markers, flags, lineage, and exceptions before approving or escalating the outcome.',
  },
  {
    icon: CheckCircle2,
    title: '4. Release and guide',
    copy: 'The outcome becomes a decision packet for staff, connectors, or the student-facing experience with next-step guidance.',
  },
]

export default function DemoPage() {
  return (
    <>
      <section className="page-hero page-hero-demo">
        <div className="container narrow-hero">
          <span className="eyebrow">Walkthrough</span>
          <h1>A concise site demo path for crtfy.net.</h1>
          <p className="lead-copy centered-copy">
            This page gives you a clean prototype narrative for how a demo or self-guided product tour could work.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container walkthrough-grid">
          {walkthroughSteps.map((step) => (
            <article key={step.title} className="walkthrough-card">
              <div className="feature-icon"><step.icon size={22} /></div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container centered-cta-block">
          <h2>Use this as the bridge from marketing site to future product demo.</h2>
          <p>
            It keeps the story tight, visual, and buyer-focused without requiring full product parity on day one.
          </p>
          <div className="hero-actions centered-actions">
            <Link to="/student" className="button button-primary">Back to product story</Link>
            <Link to="/platform" className="button button-secondary">See platform proof <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
