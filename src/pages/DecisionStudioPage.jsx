const decisionRows = [
  {
    student: 'Mira Holloway',
    program: 'BS Nursing Transfer',
    fit: '94%',
    creditEstimate: '42',
    readiness: 'Auto-certify',
    reason: 'All prerequisites satisfied. No risk signals present.',
  },
  {
    student: 'Calder Frost',
    program: 'BS Computer Science',
    fit: '81%',
    creditEstimate: '27',
    readiness: 'Need syllabus',
    reason: 'Three CS transfer outcomes require manual equivalency review.',
  },
  {
    student: 'Niko Vale',
    program: 'BS Biology',
    fit: '66%',
    creditEstimate: '18',
    readiness: 'Trust hold',
    reason: 'Issuer mismatch and repeated metadata pattern detected.',
  },
]

export default function DecisionStudioPage() {
  return (
    <div className="page-wrap">
      <div className="section-header">
        <div>
          <p className="eyebrow">Explainable Decisioning</p>
          <h1>Decision Studio</h1>
          <p className="section-subtitle">
            Move beyond notes and queues. Build a decision packet staff can approve, defend, and sync downstream.
          </p>
        </div>
        <div className="section-actions">
          <button type="button" className="primary-button">Create decision packet</button>
        </div>
      </div>

      <section className="decision-studio-grid">
        <article className="panel">
          <h3>Decision packet anatomy</h3>
          <div className="decision-anatomy-list">
            <div><strong>Academic fit</strong><span>Program alignment, rubric score, and missing requirements.</span></div>
            <div><strong>Transfer certainty</strong><span>Likely accepted credits with evidence and exceptions.</span></div>
            <div><strong>Trust evidence</strong><span>Document provenance, risk signals, and quarantine history.</span></div>
            <div><strong>Next action</strong><span>Admit, hold, request item, route to counselor, or sync to SIS.</span></div>
          </div>
        </article>
        <article className="panel decision-rule-panel">
          <span>Prototype rule</span>
          <h3>No black-box recommendation ships without reasons</h3>
          <p>
            Every outcome includes human-readable rationale, source evidence, confidence, and connector-ready payloads.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h3>Decision workbench</h3>
            <p>Examples of how staff should review and release outcomes.</p>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Program</th>
                <th>Fit</th>
                <th>Credit estimate</th>
                <th>Readiness</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {decisionRows.map((row) => (
                <tr key={row.student}>
                  <td><strong>{row.student}</strong></td>
                  <td>{row.program}</td>
                  <td>{row.fit}</td>
                  <td>{row.creditEstimate}</td>
                  <td><span className="tag active-tag">{row.readiness}</span></td>
                  <td>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
