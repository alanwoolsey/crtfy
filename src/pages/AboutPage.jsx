import { Bot, FileStack, GraduationCap, ShieldCheck, Workflow } from 'lucide-react'
import { CTASection, SectionIntro } from '../components/SiteComponents'

const principles = [
  {
    icon: Workflow,
    title: 'Workflow before dashboards',
    description: 'Crtfy products are built around the work staff need to move: queues, routing, review, decisions, approvals, and handoffs.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance by default',
    description: 'Sensitive records, AI activity, access, retention, and decision evidence should be part of the product experience, not an afterthought.',
  },
  {
    icon: Bot,
    title: 'AI with accountability',
    description: 'AI should help teams work faster while staying tied to approved knowledge, citations, policies, and human review.',
  },
]

const focusAreas = [
  { icon: Bot, title: 'Crtfy AI', description: 'Governed AI workspaces for prompts, sources, teams, role twins, guardrails, and review.' },
  { icon: GraduationCap, title: 'Crtfy Student', description: 'Enrollment operations for today\'s work, Student 360, decisions, trust, yield, and handoff.' },
  { icon: FileStack, title: 'Crtfy Content', description: 'Intelligent content management for intake, repository workflows, e-forms, signatures, retention, and governed AI search.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">About Crtfy</span>
          <h1>A product company for governed education-first software.</h1>
          <p className="lead-copy centered-copy">
            Crtfy builds SaaS products for institutions modernizing admissions, AI-assisted work, intelligent content management, and reviewable operational workflows.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="What we believe"
              title="The next generation of operational software needs evidence, review, and AI controls built in."
              description="Crtfy focuses on practical products that help staff move daily work while giving leaders confidence in the underlying controls."
            />
          </div>
          <div className="story-panel">
            <div className="callout-card">
              <h3>Our direction</h3>
              <p>
                The Crtfy portfolio is intentionally centered on SaaS products. We are narrowing the brand around Crtfy AI, Crtfy Student, and Crtfy Content so customers can quickly understand what each product does and where it fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Principles"
            title="Simple ideas that shape the products."
            description="These principles show up across the portfolio, whether the user is launching an AI workflow, moving an applicant forward, or routing a document for review."
          />
          <div className="feature-grid three-up">
            {principles.map((principle) => (
              <article key={principle.title} className="feature-card">
                <div className="feature-icon"><principle.icon size={22} /></div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Portfolio focus"
            title="Three products for specific customer problems."
            description="The portfolio is built to stay clear for customers while leaving room for the products to connect where workflows overlap."
          />
          <div className="feature-grid three-up">
            {focusAreas.map((area) => (
              <article key={area.title} className="feature-card">
                <div className="feature-icon"><area.icon size={22} /></div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow="Contact"
            title="Request a demo for the product surface your team needs first."
            description="Crtfy is sold and implemented through authorized partners. We can map the immediate workflow and connect your institution with the right team."
            primaryLabel="Request a demo"
            primaryTo="#contact"
            secondaryLabel="View products"
            secondaryTo="/products"
          />
        </div>
      </section>
    </>
  )
}
