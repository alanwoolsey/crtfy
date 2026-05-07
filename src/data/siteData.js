import {
  BadgeCheck,
  Blocks,
  Bot,
  Cable,
  FileStack,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  MessageSquareMore,
  Radar,
  SearchCheck,
  ShieldCheck,
  Waypoints,
  Workflow,
} from 'lucide-react'

export const primaryNav = [
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/platform', label: 'Platform' },
  { to: '/industries', label: 'Industries' },
  { to: '/resources', label: 'Resources' },
]

export const positioningLine = 'Crtfy delivers certified outcomes across data, AI, and operations through software, services, and compliance.'

export const homeStats = [
  { value: 'Software products', label: 'Focused applications for evaluation, trust, compliance, engagement, and analytics.' },
  { value: 'Managed services', label: 'Ongoing support for security operations, governance, and platform performance.' },
  { value: 'Advisory + compliance', label: 'Strategic guidance, audit readiness, and risk programs for regulated environments.' },
  { value: 'Platform infrastructure', label: 'Integrations, orchestration, and protection that connect the full environment.' },
]

export const problemCards = [
  {
    icon: Bot,
    title: 'Operational sprawl creates coverage gaps',
    description: 'Teams often manage separate tools for records, AI, compliance, and security, which makes it harder to coordinate the full outcome.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance pressure keeps rising',
    description: 'FERPA, CJIS, HIPAA, CMMC, and state-level privacy obligations demand stronger evidence, clearer controls, and better operating discipline.',
  },
  {
    icon: Radar,
    title: 'AI, data, and operations are converging fast',
    description: 'Teams are adopting AI and automation faster than governance, security, and workflow ownership can keep up.',
  },
]

export const categoryCards = [
  {
    title: 'Core Software Products',
    description: 'Applications for evaluation, trust, compliance, engagement, analytics, and industry-specific workflows.',
  },
  {
    title: 'Managed Services',
    description: 'Operational coverage for security, governance, and ongoing optimization once the platform is in motion.',
  },
  {
    title: 'Advisory + Compliance',
    description: 'High-trust services that turn complex regulations, modernization plans, and risk questions into executable programs.',
  },
  {
    title: 'Infrastructure + Integrations',
    description: 'The layers that connect systems, automate workflows, and protect sensitive data.',
  },
]

export const productOfferings = [
    {
    slug: 'crtfy-student',
    to: '/products/crtfy-student',
    eyebrow: 'Industry Product',
    title: 'Crtfy Student',
    shortTitle: 'Crtfy Student',
    icon: GraduationCap,
    description: 'A higher-ed product offering that combines evaluation, verification, certification, and guided engagement around student records.',
    image: '/product-screens/prospect-portal.png',
    capabilities: [],
    proof: ['Higher education workflows', 'Admissions, registrar, and records operations', 'Built on the broader Crtfy platform'],
    departments: ['Admissions and registrar', 'Records and compliance', 'IT and security'],
    outcomes: ['Faster transcript and record review', 'More trusted student record workflows', 'Stronger coordination across teams'],
  },
  {
    slug: 'evaluate',
    to: '/products/evaluate',
    eyebrow: 'Core Product',
    title: 'Crtfy Evaluate',
    shortTitle: 'Evaluate',
    icon: GraduationCap,
    description: 'Academic and credential evaluation for transcripts, transfer credit, program fit, and structured review workflows.',
    image: '/product-screens/student-profile.png',
    proof: ['Transcript and credential evaluation', 'Transfer credit and program fit', 'Structured review workflows'],
    capabilities: [
      { icon: SearchCheck, title: 'Credential interpretation', description: 'Turn unstructured academic records into usable evaluation data.', bullets: ['Transcript parsing', 'Course normalization', 'Program mapping'] },
      { icon: GraduationCap, title: 'Transfer and fit modeling', description: 'Show likely fit, credit applicability, and readiness before manual teams lose time.', bullets: ['Transfer credit views', 'Program fit signals', 'Gap visibility'] },
      { icon: BadgeCheck, title: 'Defensible evaluation output', description: 'Keep every result tied to evidence, logic, and reviewer actions.', bullets: ['Audit trails', 'Evidence-backed decisions', 'Repeatable workflows'] },
    ],
    departments: ['Admissions and registrar', 'Records and compliance', 'Program evaluators'],
    outcomes: ['Faster evaluation throughput', 'More consistent decisions', 'Cleaner evidence for downstream review'],
  },
  {
    slug: 'verify',
    to: '/products/verify',
    eyebrow: 'Core Product',
    title: 'Crtfy Verify',
    shortTitle: 'Verify',
    icon: ShieldCheck,
    description: 'Fraud detection and document trust for transcripts, IDs, records, and AI-driven anomaly detection.',
    image: '/product-screens/student-profile.png',
    proof: ['Document trust and fraud detection', 'Record and ID anomaly analysis', 'Secure evidence and redaction'],
    capabilities: [
      { icon: ShieldCheck, title: 'Fraud and anomaly detection', description: 'Identify altered files, issuer mismatches, suspicious metadata, and AI-driven anomalies.', bullets: ['Document fraud checks', 'AI anomaly detection', 'Exception queues'] },
      { icon: FileStack, title: 'Records intake and classification', description: 'Bring structured OCR and document typing into the trust workflow.', bullets: ['OCR and classification', 'Metadata extraction', 'Routing and tagging'] },
      { icon: LockKeyhole, title: 'Protected evidence handling', description: 'Preserve provenance, redact sensitive data, and keep a defensible chain of custody.', bullets: ['Redaction controls', 'Audit history', 'Secure storage'] },
    ],
    departments: ['Records and intake teams', 'Compliance office', 'Public-sector document review teams'],
    outcomes: ['Lower fraud exposure', 'Fewer manual checks', 'A clean trust layer for sensitive workflows'],
  },
  // {
  //   slug: 'certify',
  //   to: '/products/certify',
  //   eyebrow: 'Core Product',
  //   title: 'Crtfy Certify',
  //   shortTitle: 'Certify',
  //   icon: BadgeCheck,
  //   description: 'Decision and compliance engine for audit trails, explainability, human review, and regulatory alignment.',
  //   image: '/product-screens/decision-studio.png',
  //   proof: ['Audit trails and explainability', 'Regulatory alignment', 'Human review and approval'],
  //   capabilities: [
  //     { icon: BadgeCheck, title: 'Explainable decisions', description: 'Make outcomes readable, reviewable, and tied to the evidence that supports them.', bullets: ['Decision packets', 'Evidence panels', 'Human rationale'] },
  //     { icon: Workflow, title: 'Approval and exception flow', description: 'Bring compliance logic, release controls, and oversight into the same operating surface.', bullets: ['Approval paths', 'Exception handling', 'Release workflows'] },
  //     { icon: ShieldCheck, title: 'Regulatory alignment', description: 'Keep operational decisions aligned with the frameworks and policies teams must defend.', bullets: ['Policy mapping', 'Audit readiness', 'Evidence retention'] },
  //   ],
  //   departments: ['Compliance and audit', 'Operations leaders', 'Program owners'],
  //   outcomes: ['Stronger compliance posture', 'More defensible decisions', 'Less friction during audits'],
  // },
  {
    slug: 'engage',
    to: '/products/engage',
    eyebrow: 'Core Product',
    title: 'Crtfy Engage',
    shortTitle: 'Engage',
    icon: MessageSquareMore,
    description: 'Engagement layer for student or citizen messaging, journeys, and AI-assisted interactions tied to real workflows.',
    image: '/product-screens/prospect-portal.png',
    proof: ['Journeys and messaging', 'AI-assisted interactions', 'Workflow-aware engagement'],
    capabilities: [
      { icon: MessageSquareMore, title: 'Guided interactions', description: 'Support messaging and journeys that respond to the real status of the person, file, or workflow.', bullets: ['Outbound messaging', 'Journey logic', 'Workflow triggers'] },
      { icon: Bot, title: 'AI interaction controls', description: 'Use AI in engagement while preserving compliance guardrails and oversight.', bullets: ['AI response controls', 'Human escalation', 'Prompt logging'] },
      { icon: Workflow, title: 'Connected next steps', description: 'Tie the engagement layer to decisions, records, and operational queues.', bullets: ['Case-aware outreach', 'Triggered next actions', 'Cross-system state updates'] },
    ],
    departments: ['Enrollment and service teams', 'Citizen service programs', 'Operations and outreach leaders'],
    outcomes: ['Clearer next steps', 'Better conversion and response rates', 'Less disconnected communication'],
  },
  {
    slug: 'insight',
    to: '/products/insight',
    eyebrow: 'Core Product',
    title: 'Crtfy Insight',
    shortTitle: 'Insight',
    icon: Radar,
    description: 'Analytics and prediction layer for forecasting, risk detection, funnel intelligence, and operational visibility.',
    image: '/product-screens/command-center.png',
    proof: ['Forecasting and prediction', 'Risk detection', 'Funnel and operational intelligence'],
    capabilities: [
      { icon: Radar, title: 'Predictive analysis', description: 'Spot risk, readiness, and likely outcomes earlier in the workflow.', bullets: ['Forecasting', 'Risk scoring', 'Readiness signals'] },
      { icon: LayoutDashboard, title: 'Operational visibility', description: 'Give leaders one place to see throughput, bottlenecks, and exception patterns.', bullets: ['Dashboards', 'Alerts', 'Trend views'] },
      { icon: SearchCheck, title: 'Decision intelligence', description: 'Connect analytics back to the systems, records, and actions driving the signal.', bullets: ['Source traceability', 'Performance insights', 'Actionable metrics'] },
    ],
    departments: ['Operations leadership', 'Enrollment analytics', 'Agency program managers'],
    outcomes: ['Earlier risk visibility', 'Better resource allocation', 'Clearer operating decisions'],
  },

]

export const managedServices = [
  {
    slug: 'secure',
    to: '/services/secure',
    eyebrow: 'Managed Service',
    title: 'Crtfy Secure',
    shortTitle: 'Secure',
    icon: ShieldCheck,
    description: 'Managed security and compliance operations for monitoring, alerts, investigation, and response.',
    image: '/product-screens/command-center.png',
    proof: ['Monitoring and response', 'Managed detection coverage', 'Compliance-aware security operations'],
    capabilities: [
      { icon: ShieldCheck, title: 'Managed security operations', description: 'Support detection, triage, and coordinated response as an ongoing service.', bullets: ['Alert monitoring', 'Escalation workflows', 'Response coordination'] },
      { icon: Blocks, title: 'Toolchain management', description: 'Operate across the security stack without leaving internal teams to stitch tools together.', bullets: ['Firewall and endpoint coordination', 'Alert normalization', 'Coverage management'] },
      { icon: BadgeCheck, title: 'Compliance-ready evidence', description: 'Preserve the operating evidence needed for audits and policy reviews.', bullets: ['Operational reporting', 'Evidence capture', 'Review cadence'] },
    ],
    departments: ['IT and security leadership', 'Compliance teams', 'Operational responders'],
    outcomes: ['Less internal burden on security teams', 'Stronger response ownership', 'Better audit posture'],
  },
  {
    slug: 'govern',
    to: '/services/govern',
    eyebrow: 'Managed Service',
    title: 'Crtfy Govern',
    shortTitle: 'Govern',
    icon: Bot,
    description: 'AI and data governance as a service for policy enforcement, reporting, oversight, and audit readiness.',
    image: '/product-screens/decision-studio.png',
    proof: ['Policy enforcement', 'AI and data governance', 'Reporting and oversight'],
    capabilities: [
      { icon: Bot, title: 'AI governance operations', description: 'Run governance processes continuously instead of treating them as one-time policy writing exercises.', bullets: ['Usage review', 'Policy enforcement', 'Human oversight'] },
      { icon: LockKeyhole, title: 'Data governance controls', description: 'Apply governance to the data feeding systems, workflows, and AI outputs.', bullets: ['Sensitive data rules', 'Access reviews', 'Usage controls'] },
      { icon: BadgeCheck, title: 'Audit and reporting cadence', description: 'Provide recurring evidence, review cycles, and executive reporting around governance maturity.', bullets: ['Governance reporting', 'Audit prep', 'Executive updates'] },
    ],
    departments: ['Compliance office', 'AI program owners', 'Data governance stakeholders'],
    outcomes: ['Faster governance maturity', 'Less policy drift', 'A stronger trust layer around AI adoption'],
  },
  {
    slug: 'operate',
    to: '/services/operate',
    eyebrow: 'Managed Service',
    title: 'Crtfy Operate',
    shortTitle: 'Operate',
    icon: Workflow,
    description: 'Full platform operations for workflow tuning, system management, continuous optimization, and adoption support.',
    image: '/product-screens/command-center.png',
    proof: ['Workflow management', 'Continuous optimization', 'Operational ownership'],
    capabilities: [
      { icon: Workflow, title: 'Workflow operations', description: 'Tune, maintain, and improve the processes running across the platform.', bullets: ['Workflow tuning', 'Exception management', 'Performance improvement'] },
      { icon: Cable, title: 'System administration', description: 'Keep integrations, configurations, and operating dependencies aligned as the platform grows.', bullets: ['Configuration management', 'Integration health', 'Operational support'] },
      { icon: Radar, title: 'Optimization and adoption', description: 'Turn the platform from a deployment into an operating advantage.', bullets: ['Usage optimization', 'Adoption support', 'Continuous improvement'] },
    ],
    departments: ['Operations leaders', 'System owners', 'Program managers'],
    outcomes: ['Faster operational maturity', 'Stronger day-to-day consistency', 'Less drift after launch'],
  },
]

export const advisoryOfferings = [
  {
    slug: 'advisory',
    to: '/services/advisory',
    eyebrow: 'Advisory',
    title: 'Crtfy Advisory',
    shortTitle: 'Advisory',
    icon: Waypoints,
    description: 'Strategic consulting for architecture, modernization, AI adoption, and security program design.',
    image: '/product-screens/command-center.png',
    proof: ['Modernization strategy', 'Architecture and operating model design', 'AI adoption planning'],
    capabilities: [
      { icon: Waypoints, title: 'Architecture strategy', description: 'Define the target state across systems, data, AI, and compliance.', bullets: ['Current-state assessment', 'Target architecture', 'Operating model design'] },
      { icon: Bot, title: 'AI adoption planning', description: 'Shape how AI should be introduced without creating unmanaged risk.', bullets: ['Use case prioritization', 'Control design', 'Adoption sequencing'] },
      { icon: Workflow, title: 'Modernization roadmap', description: 'Turn strategy into a staged execution path the organization can actually buy and implement.', bullets: ['Roadmaps', 'Phasing', 'Stakeholder alignment'] },
    ],
    departments: ['Executives and CIOs', 'Transformation leaders', 'Compliance and program owners'],
    outcomes: ['Clearer direction', 'More credible executive planning', 'Less fragmented decision-making'],
  },
  {
    slug: 'compliance',
    to: '/services/compliance',
    eyebrow: 'Advisory',
    title: 'Crtfy Compliance',
    shortTitle: 'Compliance',
    icon: BadgeCheck,
    description: 'Audit and regulatory readiness across FERPA, CJIS, HIPAA, CMMC, and related control environments.',
    image: '/product-screens/decision-studio.png',
    proof: ['Audit readiness', 'Regulatory mapping', 'Framework evidence'],
    capabilities: [
      { icon: BadgeCheck, title: 'Framework readiness', description: 'Map systems, workflows, and controls to the frameworks that matter most to the organization.', bullets: ['FERPA and CJIS', 'HIPAA and CMMC', 'State privacy requirements'] },
      { icon: ShieldCheck, title: 'Evidence and control posture', description: 'Identify where controls exist, where evidence is weak, and what needs remediation.', bullets: ['Control reviews', 'Evidence mapping', 'Gap analysis'] },
      { icon: FileStack, title: 'Audit preparation', description: 'Organize the documents, histories, and workflows needed to defend the environment under scrutiny.', bullets: ['Audit prep', 'Documentation support', 'Review readiness'] },
    ],
    departments: ['Compliance office', 'Internal audit', 'Security leadership'],
    outcomes: ['More confidence in regulatory reviews', 'Less scramble before audits', 'Stronger posture messaging'],
  },
  {
    slug: 'risk',
    to: '/services/risk',
    eyebrow: 'Advisory',
    title: 'Crtfy Risk',
    shortTitle: 'Risk',
    icon: Radar,
    description: 'Risk assessments and posture scoring across security, data handling, AI usage, and operational workflows.',
    image: '/product-screens/command-center.png',
    proof: ['Risk assessments', 'Posture scoring', 'Prioritized remediation'],
    capabilities: [
      { icon: Radar, title: 'Risk posture analysis', description: 'Assess where the real operational, compliance, and AI risks sit in the environment.', bullets: ['Security risk scoring', 'AI usage risk', 'Workflow exposure'] },
      { icon: ShieldCheck, title: 'Priority mapping', description: 'Separate urgent exposure from lower-priority noise so teams know what to fix first.', bullets: ['Exposure ranking', 'Priority sequencing', 'Stakeholder alignment'] },
      { icon: Workflow, title: 'Remediation planning', description: 'Turn assessments into an execution path tied to owners, systems, and controls.', bullets: ['Remediation plans', 'Owner mapping', 'Follow-through support'] },
    ],
    departments: ['Executive leadership', 'Security and compliance', 'Program managers'],
    outcomes: ['Clearer risk visibility', 'Better remediation focus', 'Stronger executive decision support'],
  },
]

export const platformOfferings = [
  {
    slug: 'connect',
    to: '/platform/connect',
    eyebrow: 'Platform Layer',
    title: 'Crtfy Connect',
    shortTitle: 'Connect',
    icon: Cable,
    description: 'Certified integrations across SIS, CRM, LMS, external records systems, and operational tools.',
    image: '/product-screens/command-center.png',
    proof: ['Certified integrations', 'Cross-system data movement', 'Lower implementation friction'],
    capabilities: [
      { icon: Cable, title: 'System integrations', description: 'Connect source systems and operational tools without creating brittle handoffs.', bullets: ['SIS and CRM integration', 'LMS and external system links', 'Implementation patterns'] },
      { icon: FileStack, title: 'Data movement and mapping', description: 'Move data cleanly across systems while preserving structure and control.', bullets: ['Field mapping', 'Data transformations', 'Operational handoffs'] },
      { icon: BadgeCheck, title: 'Certified delivery layer', description: 'Make integrations consistent, governed, and easier to maintain over time.', bullets: ['Reusable connectors', 'Governed delivery', 'Lower deployment risk'] },
    ],
    departments: ['IT and architecture', 'System owners', 'Implementation teams'],
    outcomes: ['Faster deployment', 'Less integration drag', 'Higher switching resistance after launch'],
  },
  {
    slug: 'orchestrate',
    to: '/platform/orchestrate',
    eyebrow: 'Platform Layer',
    title: 'Crtfy Orchestrate',
    shortTitle: 'Orchestrate',
    icon: Workflow,
    description: 'Workflow and automation engine for coordinating actions across systems, teams, and decision states.',
    image: '/product-screens/decision-studio.png',
    proof: ['Workflow automation', 'Cross-system coordination', 'Operational oversight'],
    capabilities: [
      { icon: Workflow, title: 'Cross-system workflow control', description: 'Coordinate what happens next across different systems without losing state or ownership.', bullets: ['Workflow engines', 'State transitions', 'Task routing'] },
      { icon: BadgeCheck, title: 'Accountable operations', description: 'Keep actions tied to rules, approvals, and auditability.', bullets: ['Approval workflows', 'Rule-aware automation', 'Operational traceability'] },
      { icon: Radar, title: 'Adaptive prioritization', description: 'Use signals and policy logic to route cases, alerts, and tasks intelligently.', bullets: ['Priority scoring', 'Exception routing', 'Queue optimization'] },
    ],
    departments: ['Operations teams', 'Program owners', 'IT workflow leaders'],
    outcomes: ['Less manual orchestration', 'Clearer ownership across teams', 'A more durable operating model'],
  },
  {
    slug: 'protect',
    to: '/platform/protect',
    eyebrow: 'Platform Layer',
    title: 'Crtfy Protect',
    shortTitle: 'Protect',
    icon: LockKeyhole,
    description: 'Encryption, key management, zero-trust controls, and secure sharing for protected data environments.',
    image: '/product-screens/command-center.png',
    proof: ['Encryption and key management', 'Zero-trust access controls', 'Secure sharing across organizations'],
    capabilities: [
      { icon: LockKeyhole, title: 'Encryption and key management', description: 'Protect sensitive data at rest and in transit while integrating with the organization’s key strategy.', bullets: ['Encryption controls', 'KMS alignment', 'Protected storage'] },
      { icon: BadgeCheck, title: 'Zero-trust access', description: 'Control who can access what data, in which context, and under which policy conditions.', bullets: ['Least-privilege access', 'Role-aware controls', 'Policy enforcement'] },
      { icon: Cable, title: 'Secure exchange', description: 'Share protected data across systems, agencies, and workflows without losing governance.', bullets: ['Secure sharing', 'Cross-boundary controls', 'Usage visibility'] },
    ],
    departments: ['Security architecture', 'Compliance teams', 'Agencies sharing protected data'],
    outcomes: ['Stronger data protection', 'Safer collaboration', 'A compliance-ready core for the platform'],
  },
]

export const allOfferings = [
  ...productOfferings,
  ...managedServices,
  ...advisoryOfferings,
  ...platformOfferings,
]

export const productCards = productOfferings
export const serviceCards = [...managedServices, ...advisoryOfferings]
export const platformCards = platformOfferings

export const marketDrivers = [
  {
    title: 'AI is moving faster than policy',
    description: 'Many SLED organizations are experimenting with AI, but formal governance, data lineage, and usage controls are still immature.',
  },
  {
    title: 'Cybersecurity spend is non-discretionary',
    description: 'Ransomware, infrastructure risk, and federal scrutiny keep cyber and resilience budgets active even when other spending slows.',
  },
  {
    title: 'Compliance complexity keeps expanding',
    description: 'Education, public safety, and health-oriented programs are simultaneously navigating FERPA, CJIS, HIPAA, state privacy rules, and grant conditions.',
  },
  {
    title: 'Operational fragmentation is expensive',
    description: 'Teams are still buying tools in silos even though risk, compliance, data, and operations are increasingly intertwined.',
  },
]

export const sledSegments = [
  {
    title: 'State university systems',
    description: 'Complex records, sensitive data, audit pressure, and cross-campus coordination needs make them a strong fit for Crtfy.',
  },
  {
    title: 'State agencies and public safety',
    description: 'Health, transportation, and public safety teams need stronger governance, data protection, and operational accountability.',
  },
  {
    title: 'Municipalities and K-12 districts',
    description: 'Mid-sized organizations feel vendor sprawl and compliance pressure without having endless internal operating capacity.',
  },
]

export const partnerCards = [
  { title: 'Cisco', description: 'Network, firewall, and infrastructure credibility.' },
  { title: 'Arctic Wolf', description: 'SOC and MDR alignment for recurring security operations.' },
  { title: 'KnowBe4', description: 'Security awareness and human-risk reduction.' },
  { title: 'Verkada + Meraki', description: 'Physical security, cameras, and operational visibility.' },
]

export const resourceCards = [
  {
    title: 'Platform summary',
    description: positioningLine,
  },
  {
    title: 'What Crtfy covers',
    description: 'A unified approach to evaluation, verification, compliance, engagement, analytics, governance, and protected operations.',
  },
  {
    title: 'How organizations start',
    description: 'Many teams begin with a pressing workflow, compliance need, or trust issue and then connect adjacent capabilities over time.',
  },
]

export const pathwaySteps = [
  {
    title: 'Start with an immediate need',
    description: 'Begin with the product or service that addresses the most urgent workflow, trust, or compliance challenge.',
  },
  {
    title: 'Connect adjacent capabilities',
    description: 'Add compliance, governance, security operations, or workflow layers as the environment becomes more connected.',
  },
  {
    title: 'Unify the environment',
    description: 'Use Connect, Orchestrate, and Protect to bring systems, controls, and operations under one framework.',
  },
]

export const platformProof = [
  { value: '14 offerings', label: 'Products, services, advisory, and platform layers under one brand.' },
  { value: '1 unified platform', label: 'Software, services, and compliance connected through the Crtfy framework.' },
  { value: 'SLED-first', label: 'Designed for institutions and agencies navigating security, records, AI, and regulatory complexity.' },
  { value: 'Built to scale', label: 'Teams can start with one capability and extend into broader platform coverage over time.' },
]
