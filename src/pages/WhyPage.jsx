import { ArrowRight, Bot, Database, MessagesSquare, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, MiniQuote, SectionIntro } from '../components/SiteComponents'

export default function WhyPage() {
  return (
    <>
      <section className="page-hero page-hero-why">
        <div className="container narrow-hero">
          <span className="eyebrow">Why crtfy</span>
          <h1>Positioned to compete on outcomes, not just records or engagement.</h1>
          <p className="lead-copy centered-copy">
            Legacy platforms organize data. Newer AI-first platforms engage students. crtfy should compete by helping
            institutions understand fit, trust the result, and operationalize next steps sooner.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container comparison-grid">
          <article className="comparison-card muted-compare">
            <Database size={24} />
            <h3>Legacy CRM story</h3>
            <p>
              Strong systems of record, deep workflow configuration, and broad adoption — but often centered on data
              management more than decision intelligence.
            </p>
          </article>
          <article className="comparison-card bright-compare">
            <MessagesSquare size={24} />
            <h3>Engagement AI story</h3>
            <p>
              Better multi-channel engagement and AI teammates — but still centered on communication and workflow
              acceleration more than evidence-backed outcomes.
            </p>
          </article>
          <article className="comparison-card primary-compare">
            <ShieldCheck size={24} />
            <h3>crtfy story</h3>
            <p>
              Evaluate earlier, decide more confidently, explain the result, and move it into action. That is the wedge,
              and it is where the site should feel strongest.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Core narrative"
              title="The site should make three things obvious in under a minute."
              description="This page sharpens the strategic story so every product page, CTA, and visual hierarchy supports it."
            />
            <div className="story-list">
              <div>
                <Bot size={18} />
                <div>
                  <strong>We are not selling generic AI.</strong>
                  <p>We are selling trusted operational intelligence with human-supervised AI inside it.</p>
                </div>
              </div>
              <div>
                <ShieldCheck size={18} />
                <div>
                  <strong>We are not just another admissions front end.</strong>
                  <p>We are creating a defensible layer for evaluation, decision packets, and next-step clarity.</p>
                </div>
              </div>
              <div>
                <Database size={18} />
                <div>
                  <strong>We can still fit into the existing stack.</strong>
                  <p>Connectors, release workflows, and structured output make the platform easier to adopt over time.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MiniQuote
              quote="The winning story is not better recordkeeping. It is helping institutions make and trust decisions sooner."
              source="crtfy positioning principle"
            />
            <div className="callout-card">
              <span className="eyebrow">Recommended CTA path</span>
              <h3>Lead with crtfy Student. Support it with platform proof.</h3>
              <p>
                That gives the market a clear entry point while still showing enterprise buyers that the company can scale.
              </p>
              <Link className="inline-link" to="/student">Open product story <ArrowRight size={16} /></Link>
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
