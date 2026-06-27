import {
  BadgeCheck,
  Bot,
  Building2,
  ClipboardCheck,
  FileCheck2,
  FileStack,
  GraduationCap,
  LayoutDashboard,
  LibraryBig,
  LockKeyhole,
  MessageSquareMore,
  Route,
  SearchCheck,
  ShieldCheck,
  Signature,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

export const primaryNav = [
  { to: '/products', label: 'Platform' },
  { to: '/products/crtfy-student', label: 'Crtfy Student' },
  { to: '/products/crtfy-ai', label: 'Crtfy AI' },
  { to: '/products/crtfy-documents', label: 'Crtfy Content' },
  { to: '/resources', label: 'Resources' },
]

export const positioningLine = 'Crtfy is the education-first operating platform for admissions, governed AI, and intelligent content management.'

export const homeStats = [
  { value: 'Student', label: 'Admissions operating system for every student, document, decision, and next step.' },
  { value: 'AI', label: 'A governed workspace for approved prompts, sources, assistants, reviews, and audit trails.' },
  { value: 'Content', label: 'Intelligent content management for records, forms, workflows, signatures, retention, and AI search.' },
]

export const problemCards = [
  {
    icon: GraduationCap,
    title: 'Admissions CRMs do not run the whole operation',
    description: 'Prospects, applications, transcripts, documents, decisions, trust signals, and yield work often live in separate places.',
  },
  {
    icon: Bot,
    title: 'AI is already happening without enough control',
    description: 'Staff need safe ways to use AI with approved knowledge, role permissions, sensitive-data checks, review, and source evidence.',
  },
  {
    icon: FileStack,
    title: 'Institutional content is trapped in old workflows',
    description: 'Shared drives, PDF forms, email routing, and legacy ECM tools make records hard to classify, route, retain, search, and audit.',
  },
]

export const marketDrivers = [
  {
    title: 'Replace disconnected admissions systems',
    description: 'Give enrollment teams one daily operating surface from inquiry through application, review, decision, yield, and handoff.',
  },
  {
    title: 'Govern AI without blocking adoption',
    description: 'Let teams use AI with approved sources, prompt libraries, policy rules, human review, and activity history.',
  },
  {
    title: 'Modernize ECM into intelligent content management',
    description: 'Bring intake, repository, e-forms, signatures, packets, workflows, retention, and governed AI search together.',
  },
]

export const categoryCards = [
  {
    title: 'Crtfy Student',
    description: 'The admissions operating system for institutions that need more than a CRM.',
  },
  {
    title: 'Crtfy AI',
    description: 'A safe place for every team to use AI with institutional controls.',
  },
  {
    title: 'Crtfy Content',
    description: 'Education-first intelligent content management for records and workflows.',
  },
]

export const productOfferings = [
  {
    slug: 'crtfy-student',
    to: '/products/crtfy-student',
    eyebrow: 'Admissions Operating System',
    title: 'Crtfy Student',
    shortTitle: 'Crtfy Student',
    icon: GraduationCap,
    description: 'Replace your admissions CRM with one governed workspace for recruitment, applications, transcript intake, student records, review queues, decisions, yield, and handoff.',
    image: '/product-screens/student-360.png',
    proof: ['Today’s Work prioritization', 'Canonical Student 360', 'Transcript intelligence', 'Decision Studio', 'Yield and handoff'],
    capabilities: [
      { icon: LayoutDashboard, title: 'Today’s Work', description: 'Start each day with the students and blockers that need action now.', bullets: ['Needs attention', 'Close to completion', 'Ready for decision'] },
      { icon: GraduationCap, title: 'Student 360', description: 'One canonical student record for applications, documents, signals, decisions, and next steps.', bullets: ['Checklist progress', 'Academic snapshot', 'Next-best action'] },
      { icon: FileCheck2, title: 'Transcript Intelligence', description: 'Turn transcripts into academic signals, GPA trends, transfer insights, and review-ready evidence.', bullets: ['Course equivalency', 'Subject GPA', 'Credit estimates'] },
      { icon: BadgeCheck, title: 'Decision Studio', description: 'Review packets, evaluate trust signals, generate recommendations, and keep humans in control.', bullets: ['AI recommendations', 'Confidence and fit', 'Human approval'] },
      { icon: ShieldCheck, title: 'Trust Center', description: 'Surface missing evidence, duplicates, source confidence, and exception work before release.', bullets: ['Trust signals', 'Exception queues', 'Audit history'] },
      { icon: Route, title: 'Yield & Handoff', description: 'Move admitted students toward deposit, reduce melt risk, and hand off cleanly after admission.', bullets: ['Deposit likelihood', 'Melt risk', 'Clean transition'] },
    ],
    departments: ['Enrollment leaders', 'Admissions counselors', 'Registrar and records teams', 'IT and system owners'],
    outcomes: ['Replace fragmented CRM workflows', 'Focus staff on work that can move today', 'Connect documents directly to decisions', 'Improve visibility from inquiry to enrolled'],
  },
  {
    slug: 'crtfy-ai',
    to: '/products/crtfy-ai',
    eyebrow: 'Governed AI Workspace',
    title: 'Crtfy AI',
    shortTitle: 'Crtfy AI',
    icon: Bot,
    description: 'Give every team a safe place to use AI with approved institutional knowledge, role-based prompts, policy enforcement, human review, and audit-ready activity trails.',
    image: '/product-screens/command-center.png',
    proof: ['Approved AI workspaces', 'Permission-scoped knowledge', 'Role-based prompts', 'Human review', 'Policy simulation'],
    capabilities: [
      { icon: Bot, title: 'AI Workspace', description: 'A governed assistant experience for drafting, summarizing, analyzing files, and asking institutional questions.', bullets: ['Role-aware assistant', 'File analysis', 'Saved history'] },
      { icon: Users, title: 'Team Rooms', description: 'Shared AI spaces for departments, projects, committees, and operating teams.', bullets: ['Team prompts', 'Shared sources', 'Review queues'] },
      { icon: MessageSquareMore, title: 'Prompt & Template Library', description: 'Approved work starters, SOP builders, document generators, and repeatable AI workflows.', bullets: ['Curated prompts', 'Reusable workflows', 'Template builder'] },
      { icon: LibraryBig, title: 'Institutional Knowledge', description: 'Connect, classify, sync, and permission-scope institutional sources before retrieval.', bullets: ['Citations', 'Source permissions', 'Classification'] },
      { icon: Sparkles, title: 'Role Twins', description: 'Assistants shaped around roles, responsibilities, sources, and approved actions.', bullets: ['Department roles', 'Guided work', 'Learning paths'] },
      { icon: ShieldCheck, title: 'Governance Center', description: 'Controls before retrieval, before model use, and after output generation.', bullets: ['PII / PHI checks', 'Human approval', 'Policy simulation'] },
    ],
    departments: ['CIO and IT leadership', 'Compliance and governance teams', 'Department managers', 'Knowledge owners'],
    outcomes: ['Give staff approved AI instead of shadow AI', 'Keep AI tied to institutional knowledge', 'Control sensitive outputs', 'Preserve a complete audit trail'],
  },
  {
    slug: 'crtfy-documents',
    to: '/products/crtfy-documents',
    eyebrow: 'Intelligent Content Management',
    title: 'Crtfy Content',
    shortTitle: 'Crtfy Content',
    icon: FileStack,
    description: 'Replace shared drives, email routing, static PDFs, and legacy ECM workflows with education-first intelligent content management for records, forms, packets, retention, and AI search.',
    image: '/product-screens/decision-studio.png',
    proof: ['Document intake', 'Secure repository', 'Workflow queues', 'E-forms and signatures', 'Retention and AI search'],
    capabilities: [
      { icon: FileStack, title: 'Repository', description: 'Secure document and records management with metadata, preview, validation, approval, and audit history.', bullets: ['Metadata', 'Preview', 'Approval'] },
      { icon: SearchCheck, title: 'Intake', description: 'Upload, classify, extract, tag, and route incoming documents from portals, scanners, APIs, and integrations.', bullets: ['Classification', 'Extraction', 'Routing'] },
      { icon: Workflow, title: 'Workflow Automation', description: 'Configurable workflows for admissions, registrar, financial aid, HR, compliance, and operations.', bullets: ['Queues', 'Approvals', 'Exceptions'] },
      { icon: ClipboardCheck, title: 'E-Forms', description: 'Build and route campus forms such as FERPA releases, change of major, residency appeals, and verification requests.', bullets: ['Templates', 'Submissions', 'Analytics'] },
      { icon: Signature, title: 'Signatures & Packets', description: 'Create packets, route signatures, collect acknowledgements, and preserve evidence.', bullets: ['Board packets', 'Student packets', 'Signer roles'] },
      { icon: LockKeyhole, title: 'Governance & AI Search', description: 'Retention, legal holds, source-grounded search, permission controls, and audit-ready reporting.', bullets: ['Retention', 'Legal hold', 'Citations'] },
    ],
    departments: ['Registrar and records teams', 'Admissions operations', 'Financial aid', 'HR and institutional operations', 'IT and compliance'],
    outcomes: ['Replace legacy ECM and shared drives', 'Move documents through real workflows', 'Make records searchable with governance', 'Connect content directly to student decisions'],
  },
]

export const productCards = productOfferings
export const allOfferings = productOfferings

export const pathwaySteps = [
  {
    title: 'Start with the buyer pain',
    description: 'Admissions CRM replacement, governed AI adoption, or ECM modernization gives the first clear entry point.',
  },
  {
    title: 'Connect the evidence',
    description: 'Tie students, documents, prompts, recommendations, forms, approvals, sources, and audit trails together.',
  },
  {
    title: 'Expand into the platform',
    description: 'Use Student, AI, and Content together as the governed operating layer for institutional workflows.',
  },
]

export const resourceCards = [
  {
    title: 'Platform positioning',
    description: positioningLine,
  },
  {
    title: 'No customer logo wall yet',
    description: 'Until logo permissions are approved, use experience-based proof points instead of implying endorsement from porting customers.',
  },
  {
    title: 'Recommended naming',
    description: 'Use Crtfy Content as the product name and Intelligent Content Management as the category language.',
  },
]

export const platformPillars = [
  { title: 'Admissions operations', description: 'Crtfy Student runs inquiry-to-enrolled workflows.' },
  { title: 'AI governance', description: 'Crtfy AI controls prompts, sources, role context, reviews, and audit trails.' },
  { title: 'Content lifecycle', description: 'Crtfy Content manages records, forms, packets, workflows, retention, and AI search.' },
]

export const platformProof = [
  { value: '3 products', label: 'Student, AI, and Content under one Crtfy operating model.' },
  { value: 'Education-first', label: 'Built for institutions, records, enrollment, governance, and campus workflows.' },
  { value: 'Governed by design', label: 'Permissions, review, source evidence, activity history, and auditability are product patterns.' },
]

export const serviceCards = []
export const platformCards = []
export const sledSegments = []
export const partnerCards = []
