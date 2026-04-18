import {
  BadgeCheck,
  Bot,
  Cable,
  FileStack,
  LayoutDashboard,
  MessageSquareMore,
  Radar,
  School,
  SearchCheck,
  Shield,
  Waypoints,
  Workflow,
} from 'lucide-react'

export const homeStats = [
  { value: 'Pre-apply first', label: 'Start with fit, transferability, and outcome confidence before submit' },
  { value: 'Audit-ready', label: 'Every decision packet includes rationale, source data, and trust markers' },
  { value: 'Actionable AI', label: 'Use AI where it helps, but keep rules and human oversight where it matters' },
  { value: 'Connector-led', label: 'Bring decisions into Banner, Colleague, CRM, SIS, and downstream workflows' },
]

export const coreFeatures = [
  {
    icon: FileStack,
    title: 'Transcript intake and pre-admit intelligence',
    description:
      'Upload unofficial or official documents, extract structure, and generate early program-fit and transferability signals before the student completes an application.',
    bullets: ['Document parsing', 'Heuristic + AI extraction', 'Program fit views'],
  },
  {
    icon: SearchCheck,
    title: 'Decision Studio',
    description:
      'Give teams a workspace to review outcomes, compare rule results, inspect evidence, and release decision packets with clarity and consistency.',
    bullets: ['Confidence scoring', 'Evidence panel', 'Explainable outcomes'],
  },
  {
    icon: Shield,
    title: 'Trust Center',
    description:
      'Surface provenance, fraud indicators, completeness checks, and rule lineage so institutions can trust the outcome and defend it later.',
    bullets: ['Audit trail', 'Fraud flags', 'Source lineage'],
  },
  {
    icon: MessageSquareMore,
    title: 'Student-ready experiences',
    description:
      'Power portals and guided next steps that help students understand where they stand, what they can transfer, and what comes next.',
    bullets: ['Prospect portal', 'Decision packets', 'Next-step guidance'],
  },
]

export const platformFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Command Center',
    description: 'A single operational view across document intake, queue health, confidence, connector status, and release throughput.',
  },
  {
    icon: Bot,
    title: 'Human-supervised AI workflows',
    description: 'Use AI to summarize, classify, and recommend while preserving deterministic rules and staff control for final outcomes.',
  },
  {
    icon: Cable,
    title: 'Certified connectors',
    description: 'Connect into SIS, CRM, workflow tools, and data platforms so decision intelligence moves cleanly into institutional systems.',
  },
  {
    icon: Workflow,
    title: 'Outcome orchestration',
    description: 'Trigger review steps, outreach, holds, release events, and student actions based on trusted decision states.',
  },
  {
    icon: Radar,
    title: 'Signals and scoring',
    description: 'Highlight risk, uncertainty, readiness, and conversion opportunities so teams can focus time where it matters most.',
  },
  {
    icon: Waypoints,
    title: 'Designed for expansion',
    description: 'Start with admissions and transfer workflows, then extend toward onboarding, student success, and lifecycle experiences.',
  },
]

export const suiteCards = [
  {
    icon: School,
    title: 'crtfy Student',
    description: 'The flagship experience for pre-admit intelligence, transcript-aware workflows, decision clarity, and student-ready outcomes.',
  },
  {
    icon: BadgeCheck,
    title: 'Trust Fabric',
    description: 'The cross-platform layer for explainability, evidence, provenance, confidence scoring, and defensible release decisions.',
  },
  {
    icon: Cable,
    title: 'Certified Connectors',
    description: 'The delivery layer that moves intelligence into SIS, CRM, admissions, analytics, and workflow ecosystems.',
  },
]

export const resourceCards = [
  {
    title: 'Why pre-admit intelligence changes the game',
    description: 'A product point of view on how institutions can compete before the application funnel bottlenecks.',
  },
  {
    title: 'What a certified decision packet should include',
    description: 'A practical framework for explainability, trust signals, provenance, and release workflows.',
  },
  {
    title: 'From transcript upload to student-ready next steps',
    description: 'A walkthrough of the future-state crtfy Student experience from intake through decision release.',
  },
]
