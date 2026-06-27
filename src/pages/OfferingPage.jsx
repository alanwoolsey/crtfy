import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { CTASection, FeatureCard, SectionIntro } from '../components/SiteComponents'
import OfferingLockup from '../components/OfferingLockup'

const pageStories = {
  'crtfy-ai': {
    headline: 'Let teams use AI without losing control.',
    body: 'Crtfy AI gives institutions a secure workspace where staff can use approved assistants, prompts, templates, team rooms, and institutional knowledge sources under role-based governance, review rules, and audit controls.',
    problemTitle: 'Your staff are already using AI. Give them a safe, approved place to do it.',
    problemCopy: 'Connect institutional knowledge, define approved prompts, control which teams can access which sources, require review for sensitive work, and preserve an audit trail of AI-assisted activity.',
    flow: [
      ['Connect', 'Approved sources such as handbooks, SharePoint, websites, notes, and knowledge bases.'],
      ['Classify', 'Internal, confidential, restricted, public, and role-scoped content.'],
      ['Prompt', 'Curated work starters, role prompts, templates, and repeatable workflows.'],
      ['Check', 'Access, sensitive data, source permissions, and policy controls.'],
      ['Review', 'Human approval for high-risk or restricted outputs.'],
      ['Audit', 'Prompt, source, output, review, and activity history.'],
    ],
  },
  'crtfy-documents': {
    headline: 'Intelligent content management for education.',
    body: 'Crtfy Content helps institutions replace shared drives, inbox routing, paper forms, and legacy ECM workflows with one governed platform for document intake, repository management, e-forms, signatures, workflow automation, retention, and AI-powered search.',
    problemTitle: 'Modern content management for institutions that have outgrown legacy ECM.',
    problemCopy: 'Bring the full content lifecycle into one education-first system: intake, classify, validate, route, review, sign, retain, and search.',
    flow: [
      ['Intake', 'Uploads, portal submissions, scanners, APIs, integrations, and batch imports.'],
      ['Classify', 'Document type, department, student/person/entity, metadata, and sensitivity.'],
      ['Validate', 'Missing metadata, duplicates, confidence checks, and human review.'],
      ['Route', 'Department queues, approvals, exceptions, and SLA tracking.'],
      ['Sign', 'Signature requests, acknowledgements, and generated packets.'],
      ['Retain', 'Retention schedules, holds, disposition, audit, and governed AI search.'],
    ],
  },
}

export default function OfferingPage({ offering }) {
  const story = pageStories[offering.slug] || {
    headline: offering.title,
    body: offering.description,
    problemTitle: `How ${offering.shortTitle} supports daily work.`,
    problemCopy: 'Each capability is designed around practical operating workflows, clear ownership, and reviewable evidence.',
    flow: [],
  }

  return (
    <>
      <section className="page-hero offering-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">{offering.eyebrow}</span>
            <OfferingLockup slug={offering.slug} name={offering.shortTitle} />
            <h1 className="product-hero-title">{story.headline}</h1>
            <p className="lead-copy">{story.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Request a demo</a>
              <a className="button button-secondary" href="#modules">See modules</a>
            </div>
            <div className="hero-proof-grid">
              {offering.proof.slice(0, 4).map((item) => <div key={item}><CheckCircle2 size={16} /> {item}</div>)}
            </div>
          </div>
          <div className="story-panel visual-panel">
            <img className="product-screenshot product-screenshot-card" src={offering.image} alt={`${offering.title} visual`} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Product story"
              title={story.problemTitle}
              description={story.problemCopy}
            />
          </div>
          <div className="story-panel">
            <h3>{offering.shortTitle} is part of the Crtfy operating model.</h3>
            <p>
              It connects daily work to source evidence, permissions, review queues, policy controls, and activity history so institutions can move faster without losing accountability.
            </p>
          </div>
        </div>
      </section>

      {story.flow.length ? (
        <section className="section-block alt-surface">
          <div className="container">
            <SectionIntro
              eyebrow="Lifecycle"
              title="A governed path from request to evidence."
              description="Each step is designed to preserve context, ownership, reviewability, and control."
            />
            <div className="journey-strip">
              {story.flow.map(([title, description]) => (
                <div key={title} className="journey-step">
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-block" id="modules">
        <div className="container">
          <SectionIntro
            eyebrow="Modules"
            title={`What ${offering.shortTitle} includes.`}
            description="The product is organized around real institutional work, not generic feature checklists."
          />
          <div className="feature-grid three-up">
            {offering.capabilities.map((capability) => <FeatureCard key={capability.title} {...capability} />)}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Who uses it"
              title="Designed for the teams closest to the workflow."
              description="These teams see value because Crtfy maps to the work, controls, and evidence they already manage."
            />
          </div>
          <div className="workflow-list">
            {offering.departments.map((department, index) => (
              <div key={department}>
                <strong>{index + 1}. {department}</strong>
                <span>{offering.outcomes[index] || offering.outcomes[offering.outcomes.length - 1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <CTASection
            eyebrow={offering.eyebrow}
            title={`See how ${offering.shortTitle} fits into your institution.`}
            description="Crtfy is sold and implemented through authorized partners. Request a demo and we will connect your institution with the right team."
            primaryLabel="Request a demo"
            primaryTo="#contact"
            secondaryLabel="Explore platform"
            secondaryTo="/products"
          />
        </div>
      </section>
    </>
  )
}
