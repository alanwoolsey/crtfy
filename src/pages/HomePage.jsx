import {
  ArrowRight,
  BadgeCheck,
  Binary,
  BookCheck,
  Bot,
  Cable,
  CheckCircle2,
  Files,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, FeatureCard, LinkCard, MiniQuote, SectionIntro, StatStrip } from '../components/SiteComponents'
import { coreFeatures, homeStats, suiteCards } from '../data/siteData'

function HeroMockup() {
  return (
    <div className="hero-mockup">
      <div className="mock-window">
        <div className="mock-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="mock-layout">
          <aside>
            <div className="mock-badge active">Command Center</div>
            <div className="mock-badge">Prospect Portal</div>
            <div className="mock-badge">Decision Studio</div>
            <div className="mock-badge">Trust Center</div>
          </aside>
          <section>
            <div className="mock-panel tall">
              <div className="mock-panel-heading">
                <strong>Transfer Evaluation Ready</strong>
                <span>92% confidence</span>
              </div>
              <div className="mock-grid two">
                <div className="mock-card dark">
                  <span>Program fit</span>
                  <strong>BS Health Informatics</strong>
                  <small>Strong alignment with 28 accepted credits</small>
                </div>
                <div className="mock-card accent">
                  <span>Trust status</span>
                  <strong>Verified with review flags</strong>
                  <small>1 course mismatch, 0 fraud blocks</small>
                </div>
              </div>
              <div className="mock-timeline">
                <div className="timeline-row done">Transcript parsed</div>
                <div className="timeline-row done">Institution mapped</div>
                <div className="timeline-row current">Decision packet generated</div>
              </div>
            </div>
            <div className="mock-grid two">
              <div className="mock-panel">
                <div className="mini-chart">
                  <span style={{ height: '55%' }} />
                  <span style={{ height: '80%' }} />
                  <span style={{ height: '68%' }} />
                  <span style={{ height: '92%' }} />
                  <span style={{ height: '74%' }} />
                </div>
                <p>Decision throughput</p>
              </div>
              <div className="mock-panel">
                <div className="score-ring">89</div>
                <p>Outcome confidence</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="floating-chip chip-one"><ShieldCheck size={14} /> Evidence-backed</div>
      <div className="floating-chip chip-two"><Bot size={14} /> AI + rules</div>
      <div className="floating-chip chip-three"><GraduationCap size={14} /> Student-ready</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">crtfy.net</span>
            <h1>The intelligent front door for modern student decisioning.</h1>
            <p>
              crtfy Student helps institutions evaluate transcripts, understand fit, generate explainable decision
              packets, and guide students forward with confidence. Built for teams that want more than a CRM and more
              than chat-based AI.
            </p>
            <div className="hero-actions">
              <Link to="/student" className="button button-primary">Explore crtfy Student</Link>
              <Link to="/demo" className="button button-secondary">View walkthrough</Link>
            </div>
            <div className="hero-proof-grid">
              <div><CheckCircle2 size={18} /> Pre-admit intelligence</div>
              <div><BookCheck size={18} /> Explainable decision packets</div>
              <div><BadgeCheck size={18} /> Audit and trust built in</div>
              <div><Cable size={18} /> Connector-ready delivery</div>
            </div>
          </div>
          <HeroMockup />
        </div>
      </section>

      <section className="section-block section-tight">
        <div className="container">
          <StatStrip items={homeStats} />
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-story">
          <div>
            <SectionIntro
              eyebrow="Why institutions will care"
              title="Built to answer the questions that matter before and during application review."
              description="Instead of only organizing student records and communications, crtfy Student is built to make those records actionable, trusted, and outcome-oriented."
            />
            <div className="story-list">
              <div>
                <Binary size={18} />
                <div>
                  <strong>What can this student transfer or qualify for?</strong>
                  <p>Surface likely fit, credit applicability, and confidence before staff spend hours chasing context.</p>
                </div>
              </div>
              <div>
                <Files size={18} />
                <div>
                  <strong>What evidence supports the result?</strong>
                  <p>Show source data, rules, exceptions, notes, and trust markers in one decision packet.</p>
                </div>
              </div>
              <div>
                <ShieldCheck size={18} />
                <div>
                  <strong>Can we defend and operationalize the outcome?</strong>
                  <p>Drive release workflows, downstream connectors, and next-step experiences without losing auditability.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="story-panel">
            <MiniQuote
              quote="We do not want another place to look at records. We want a platform that helps us reach a decision faster and trust it when we do."
              source="Target customer sentiment this site is designed to speak to"
            />
            <div className="callout-card">
              <span className="eyebrow">Designed to compete differently</span>
              <h3>From CRM management to decision intelligence</h3>
              <p>
                The story is not just communication or workflow. It is confidence, clarity, and action across the
                student journey.
              </p>
              <Link className="inline-link" to="/why-crtfy">See the positioning <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alt-surface" id="product-suite">
        <div className="container">
          <SectionIntro
            eyebrow="Product suite"
            title="A focused suite built around outcomes, trust, and extensibility."
            description="Launch with crtfy Student as the wedge, then expand the platform over time without changing the core story."
            align="center"
          />
          <div className="suite-grid">
            {suiteCards.map((card) => (
              <article key={card.title} className="suite-card">
                <div className="feature-icon"><card.icon size={22} /></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="What crtfy Student does"
            title="Everything the market site should promise, even before the full product is finished."
            description="This is the future-state story for the flagship product: what institutions can buy into now and grow into over time."
          />
          <div className="feature-grid four-up">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Explore deeper"
            title="Use the site to tell a sharper competitive story."
            description="Separate product detail, platform detail, and strategic differentiation so the site feels like a serious company, not just a product landing page."
          />
          <div className="link-card-grid">
            <LinkCard to="/student" title="See the crtfy Student product story" description="Pages, capabilities, workflows, and future-state modules." />
            <LinkCard to="/platform" title="See the platform and trust layer" description="Connectors, orchestration, explainability, and delivery architecture." />
            <LinkCard to="/why-crtfy" title="See how we position against the market" description="Why this story is different from legacy CRM and AI engagement platforms." />
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
