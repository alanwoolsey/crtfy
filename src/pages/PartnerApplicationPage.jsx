import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PartnerApplicationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-hero">
          <span className="eyebrow">Become a Crtfy partner</span>
          <h1>Partner with Crtfy to help institutions modernize operational workflows.</h1>
          <p className="lead-copy centered-copy">
            Tell us about your organization, education technology experience, implementation capabilities, and the markets you support.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container form-page-grid">
          <aside className="story-panel partner-form-sidebar">
            <Link className="inline-link" to="/partners"><ArrowLeft size={16} /> Back to partners</Link>
            <h3>What we look for</h3>
            <p>
              Crtfy is building a partner ecosystem for education technology consultants, systems integrators, and value-added resellers.
            </p>
            <div className="feature-bullets feature-bullets-plain">
              <span>Education or public-sector technology experience</span>
              <span>Implementation and integration capability</span>
              <span>Customer success and rollout support</span>
              <span>Interest in admissions, AI, or content modernization</span>
            </div>
          </aside>

          <form className="partner-application-form">
            <div className="form-section">
              <h2>Organization</h2>
              <div className="form-grid two-up">
                <label>
                  Company name
                  <input type="text" name="companyName" placeholder="Company or firm name" />
                </label>
                <label>
                  Website
                  <input type="url" name="website" placeholder="https://example.com" />
                </label>
                <label>
                  Headquarters location
                  <input type="text" name="location" placeholder="City, state, country" />
                </label>
                <label>
                  Company type
                  <select name="companyType" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Value-added reseller</option>
                    <option>Systems integrator</option>
                    <option>Education technology consultant</option>
                    <option>Managed services provider</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h2>Primary contact</h2>
              <div className="form-grid two-up">
                <label>
                  First name
                  <input type="text" name="firstName" />
                </label>
                <label>
                  Last name
                  <input type="text" name="lastName" />
                </label>
                <label>
                  Work email
                  <input type="email" name="email" placeholder="name@company.com" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="Optional" />
                </label>
              </div>
            </div>

            <div className="form-section">
              <h2>Partner fit</h2>
              <div className="form-grid">
                <label>
                  Which Crtfy areas are most relevant?
                  <select name="focusArea" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Crtfy Student</option>
                    <option>Crtfy AI</option>
                    <option>Crtfy Content</option>
                    <option>Multiple products</option>
                  </select>
                </label>
                <label>
                  Regions or markets served
                  <input type="text" name="markets" placeholder="Example: Midwest higher ed, community colleges, public sector" />
                </label>
                <label>
                  Implementation capabilities
                  <textarea name="capabilities" rows="4" placeholder="Describe integration, migration, configuration, training, support, or managed services capabilities." />
                </label>
                <label>
                  Why are you interested in partnering with Crtfy?
                  <textarea name="interest" rows="4" placeholder="Tell us about customer demand, current services, or strategic fit." />
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="button button-primary">Submit partner inquiry</button>
              <p>This form is ready for integration. Submission handling will be connected later.</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
