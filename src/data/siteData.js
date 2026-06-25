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
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
]

export const positioningLine = 'Crtfy builds governed SaaS workspaces for AI operations, student lifecycle workflows, and education-first document management.'

export const homeStats = [
  { value: 'Products', label: 'Purpose-built Education applications for governed AI, enrollment operations, and institutional document workflows.' },
  { value: 'Education-first', label: 'Designed around admissions, registrar, records, compliance, and campus operations teams.' },
  { value: 'Governed AI', label: 'AI assistance is tied to roles, sources, permissions, citations, policies, and review workflows.' },
  { value: 'Intelligent Content Management', label: 'Queues, tasks, approvals, routing, audit history, and integrations are core product patterns.' },
]

export const problemCards = [
  {
    icon: Blocks,
    title: 'Campus work is split across disconnected tools',
    description: 'Shared drives, inboxes, spreadsheets, CRMs, and generic document systems make it difficult to see status, ownership, and evidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Sensitive records need defensible handling',
    description: 'Student data, institutional records, decisions, document access, AI use, and retention all need clear controls and auditability.',
  },
  {
    icon: Bot,
    title: 'AI needs an operating model',
    description: 'Teams want AI support, but production use requires guardrails, review, source grounding, prompt controls, and role-aware access.',
  },
]

export const categoryCards = [
  {
    title: 'Governed AI workspace',
    description: 'Crtfy.ai gives teams a controlled place to use prompts, knowledge, workflows, role twins, and review guardrails.',
  },
  {
    title: 'Student operating system',
    description: 'Crtfy Student helps admissions and enrollment teams prioritize today\'s work, student records, decisions, trust, and yield.',
  },
  {
    title: 'Document operations',
    description: 'Crtfy Documents manages intake, repository workflows, e-forms, signatures, governance, retention, and governed search.',
  },
]

export const productOfferings = [
  {
    slug: 'crtfy-ai',
    to: '/products/crtfy-ai',
    eyebrow: 'Governed AI Workspace',
    title: 'Crtfy.ai',
    shortTitle: 'Crtfy.ai',
    icon: Bot,
    description: 'A governed AI workspace for teams that need useful AI without losing control of prompts, knowledge, roles, review, and policy.',
    image: '/product-screens/command-center.png',
    proof: ['Prompt and output governance', 'Knowledge-connected workflows', 'Role-aware AI workspaces'],
    capabilities: [
      { icon: Bot, title: 'AI workspace', description: 'Give teams a governed place to launch work, reuse prompts, and connect knowledge sources.', bullets: ['Prompt library', 'Knowledge sources', 'Team workspaces'] },
      { icon: ShieldCheck, title: 'Guardrails and review', description: 'Control how AI is used with policies, reviewer queues, citations, and activity history.', bullets: ['Policy controls', 'Pending reviews', 'AI activity logs'] },
      { icon: Workflow, title: 'Workflow-ready AI', description: 'Connect AI assistance to repeatable work instead of one-off chat sessions.', bullets: ['Open workflows', 'Role twins', 'Template builder'] },
    ],
    departments: ['Operations teams', 'Knowledge owners', 'Compliance and leadership'],
    outcomes: ['Move common work into governed AI flows', 'Keep AI answers tied to approved sources', 'Review usage before it creates unmanaged risk'],
  },
  {
    slug: 'crtfy-student',
    to: '/products/crtfy-student',
    eyebrow: 'Enrollment Operating System',
    title: 'Crtfy Student',
    shortTitle: 'Crtfy Student',
    icon: GraduationCap,
    description: 'An enrollment and student-records operating system for prioritizing today\'s work, document queues, decisions, trust, yield, and handoff.',
    image: '/product-screens/student-360.png',
    proof: ['Today\'s Work orchestration', 'Student 360 records', 'Decision and trust workflows'],
    capabilities: [
      { icon: LayoutDashboard, title: 'Today\'s Work', description: 'Prioritize the students and work items that staff can move now.', bullets: ['Needs attention', 'Close to completion', 'Ready for decision'] },
      { icon: GraduationCap, title: 'Student 360', description: 'View student context, checklist progress, transcripts, decisions, trust posture, and handoff state.', bullets: ['Student record view', 'Checklist progress', 'Transcript context'] },
      { icon: BadgeCheck, title: 'Decision workflows', description: 'Support review packets, recommendations, evidence, trust signals, and human approval.', bullets: ['Decision Studio', 'Trust Center', 'Yield and melt queues'] },
    ],
    departments: ['Admissions counselors', 'Registrar and records teams', 'Enrollment leaders'],
    outcomes: ['Focus staff on students who can move now', 'Coordinate records, trust, and decision work', 'Improve conversion visibility from admit to enrollment'],
  },
  {
    slug: 'crtfy-documents',
    to: '/products/crtfy-documents',
    eyebrow: 'Document Operations',
    title: 'Crtfy Documents',
    shortTitle: 'Crtfy Documents',
    icon: FileStack,
    description: 'An education-first document management and workflow platform for institutional records, intake, queues, e-forms, packets, retention, and governed AI search.',
    image: '/product-screens/decision-studio.png',
    proof: ['Education-first content management', 'Document intake and review queues', 'Retention, audit, and governed AI search'],
    capabilities: [
      { icon: FileStack, title: 'Repository and intake', description: 'Store documents with metadata, person links, audit events, versions, preview, and secure access.', bullets: ['Document repository', 'Staff and portal intake', 'Metadata capture'] },
      { icon: Workflow, title: 'Queues and workflows', description: 'Turn uploaded files, forms, and approvals into actionable work for departments.', bullets: ['Review queues', 'Workflow automation', 'E-forms and signatures'] },
      { icon: ShieldCheck, title: 'Governance and AI search', description: 'Manage retention, legal holds, disposition, audit, and source-grounded AI assistance.', bullets: ['Retention policies', 'Legal hold', 'Governed search'] },
    ],
    departments: ['Records managers', 'Department staff and reviewers', 'IT and implementation teams'],
    outcomes: ['Replace shared drives and email routing', 'Govern the full document lifecycle', 'Keep search and AI assistance tied to source records'],
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
    title: 'AI adoption needs source-grounded controls',
    description: 'Institutions need useful AI that respects roles, permissions, citations, review paths, and policy boundaries.',
  },
  {
    title: 'Enrollment teams need a daily operating system',
    description: 'Staff need to know which students can move now, which blockers matter, and where trust or decision work is stuck.',
  },
  {
    title: 'Document work is still too manual',
    description: 'Schools still rely on email, PDFs, shared drives, and generic ECM tools that do not match campus workflows.',
  },
  {
    title: 'Auditability is becoming a product requirement',
    description: 'Modern workflows need evidence, retention, access history, AI activity logging, and human approval built in.',
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
    title: 'Product portfolio summary',
    description: positioningLine,
  },
  {
    title: 'What Crtfy covers',
    description: 'Governed AI workspaces, student lifecycle operations, and education-first document management.',
  },
  {
    title: 'How organizations start',
    description: 'Most customers begin with one product surface and expand into adjacent workflows as their operating model matures.',
  },
]

export const pathwaySteps = [
  {
    title: 'Start with the daily workflow',
    description: 'Begin where staff already feel the operational pain: AI governance, enrollment work queues, or document intake.',
  },
  {
    title: 'Connect records and evidence',
    description: 'Tie work to documents, sources, decisions, activity history, and role-aware controls.',
  },
  {
    title: 'Scale with governance',
    description: 'Expand into workflows, integrations, policies, reporting, and AI assistance without losing accountability.',
  },
]

export const platformProof = [
  { value: '14 offerings', label: 'Products, services, advisory, and platform layers under one brand.' },
  { value: '1 unified platform', label: 'Software, services, and compliance connected through the Crtfy framework.' },
  { value: 'SLED-first', label: 'Designed for institutions and agencies navigating security, records, AI, and regulatory complexity.' },
  { value: 'Built to scale', label: 'Teams can start with one capability and extend into broader platform coverage over time.' },
]
