import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, FeatureCard, SectionIntro, StatStrip } from '../components/SiteComponents'

const productStats = [
  { value: 'Upload to insight', label: 'Turn raw transcript intake into a usable fit and transferability view' },
  { value: 'Review with confidence', label: 'Pair recommendations with evidence, trust markers, and exceptions' },
  { value: 'Guide the student', label: 'Translate the result into next steps, requirements, and readiness signals' },
]

const productFeatures = [
  {
    icon: FileCheck2,
    title: 'Smart transcript intake',
    description: 'Capture PDF and image-based transcripts, extract structure, identify institutions, and normalize course and grade data.',
    bullets: ['Heuristic-first extraction', 'AI fallback and summarization', 'Institution and catalog context'],
  },
  {
    icon: GraduationCap,
    title: 'Program-fit and transfer views',
    description: 'Show likely match, accepted credit patterns, gaps, and areas requiring staff review before a student disappears from the funnel.',
    bullets: ['Pre-admit evaluations', 'Transferability estimates', 'Gap and readiness indicators'],
  },
  {
    icon: ShieldCheck,
    title: 'Certified decision packets',
    description: 'Wrap every output in supporting evidence, provenance, notes, exception handling, and staff signoff paths.',
    bullets: ['Evidence panel', 'Rule lineage', 'Exportable summaries'],
  },
  {
    icon: Users,
    title: 'Student-facing next steps',
    description: 'Present outcomes in clear language with a guided path for application, document completion, and enrollment readiness.',
    bullets: ['Prospect portal', 'Action checklists', 'Personalized recommendations'],
  },
  {
    icon: ClipboardList,
    title: 'Workflow and release controls',
    description: 'Move cases through intake, review, hold, release, and connector delivery with clear ownership and queue health visibility.',
    bullets: ['Review queue', 'Escalations', 'Connector-triggered delivery'],
  },
  {
    icon: Sparkles,
    title: 'Future-state AI teammates',
    description: 'Add AI where it accelerates summarization, classification, and communication without replacing trust, evidence, or oversight.',
    bullets: ['Summary generation', 'Recommended actions', 'Human-supervised automation'],
  },
]

export default function StudentPage() {
  return (
    <>
      <section className="page-hero page-hero-product">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Product</span>
            <h1>crtfy Student</h1>
            <p className="lead-copy">
              The flagship experience for transcript-aware intake, pre-admit intelligence, explainable decisioning,
              and student-ready next steps.
            </p>
            <div className="hero-actions">
              <Link to="/demo" className="button button-primary">View walkthrough</Link>
              <a href="#capabilities" className="button button-secondary">Explore capabilities</a>
            </div>
          </div>
          <div className="product-panel">
            <div className="product-stack-card">
              <div className="stack-top"><Landmark size={18} /> Incoming Transcript</div>
              <div className="stack-arrow" />
              <div className="stack-middle"><BookOpen size={18} /> Program + Catalog Context</div>
              <div className="stack-arrow" />
              <div className="stack-bottom"><CheckCircle2 size={18} /> Certified Decision Packet</div>
            </div>
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
            title="A complete story for what the product does today and what it will do next."
            description="This page should feel strong enough for buyers now, while leaving room for the roadmap to mature into the complete vision."
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
              eyebrow="Key workflows"
              title="Tell the buyer exactly how the experience fits into their world."
              description="The website should show that the product is not abstract AI. It is operational software for teams who need throughput, consistency, and trust."
            />
            <div className="workflow-list">
              <div><strong>1. Intake</strong><span>Receive transcript, classify source, parse structure, and identify institution context.</span></div>
              <div><strong>2. Evaluate</strong><span>Apply heuristics, compare catalog patterns, generate recommendations, and surface confidence.</span></div>
              <div><strong>3. Review</strong><span>Inspect evidence, resolve flags, add notes, and approve or escalate the packet.</span></div>
              <div><strong>4. Release</strong><span>Deliver results to staff, connector targets, or the student-facing experience with complete audit history.</span></div>
            </div>
          </div>
          <div className="image-panel mock-right-panel">
            <div className="case-card">
              <span className="eyebrow">Example student</span>
              <h3>Transfer readiness summary</h3>
              <div className="summary-grid">
                <div><span>Likely fit</span><strong>High</strong></div>
                <div><span>Accepted credits</span><strong>28</strong></div>
                <div><span>Review flags</span><strong>1</strong></div>
                <div><span>Confidence</span><strong>92%</strong></div>
              </div>
              <p>
                The result is not just a score. It includes why the result happened, what remains uncertain, and what the
                student or staff member should do next.
              </p>
            </div>
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
