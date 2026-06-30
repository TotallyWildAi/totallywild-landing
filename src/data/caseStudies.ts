// Case studies shown at /case-studies and /case-studies/<slug>.
// All clients are anonymised by design — no names, no logos. Pricing is
// intentionally omitted (kept to sales conversations). Append new entries here;
// remember to add the matching routes to scripts/prerender.mjs (ROUTES +
// ROUTE_META) so each case study is prerendered with its own <head>.

export interface CaseMetric {
  value: string
  label: string
}

export interface PipelineStage {
  n: string
  name: string
  traditional: string
  withAI: string
  result: string
}

export interface ResultRow {
  activity: string
  traditional: string
  withAI: string
  reduction: string
}

export interface Feature {
  title: string
  body: string
}

export interface CaseStudy {
  slug: string
  /** Eyebrow above the title. */
  vertical: string
  /** Card label — short vertical tag. */
  tag: string
  title: string
  /** One-line anonymised description of who it was for. */
  client: string
  /** Hero sub-headline / lede. */
  lede: string
  metrics: CaseMetric[]
  liveUrl?: string
  source?: string
  problem: { heading: string; body: string[] }
  pipeline?: { heading: string; sub: string; stages: PipelineStage[] }
  features?: { heading: string; sub?: string; items: Feature[] }
  results?: { heading: string; sub: string; rows: ResultRow[] }
  humanInLoop?: { heading: string; staysHuman: string[]; note: string }
  beyond?: { heading: string; body: string[]; items?: Feature[] }
  closing?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'loan-submission',
    vertical: 'Financial services · mortgage broking',
    tag: 'Mortgage broking',
    title: 'Cutting loan submission prep from four hours to under thirty minutes',
    client: 'A national mortgage broking group running around 80 submissions a month across a panel of 30+ lenders.',
    lede: 'The standard playbook burns 320 broker-hours a month on submission admin. The factory takes it under 40 — with no compromise on compliance or accuracy.',
    metrics: [
      { value: '~88%', label: 'less time per file — about four hours down to under thirty minutes' },
      { value: '320 → <40', label: 'broker-hours a month spent on submission admin' },
      { value: '5 agents', label: 'run every file end to end, with the broker signing off' },
    ],
    problem: {
      heading: "It's not a credit problem. It's an admin problem.",
      body: [
        "Every submission needs the same repetitive work: collating documents, completing the lender's form, drafting the submission notes, and chasing the borrower for what's missing. The submission engine — the form, the credit policy, the regulator's requirements — is about 10% of the work. The other 90% is human labour wrapping around it.",
        'That work is well-understood, repeatable and structured. It does not need the broker\'s judgement, it just needs their time — and brokers cost $120k to $200k a year fully loaded. The credit decision is specialised; the work around it is not.',
      ],
    },
    pipeline: {
      heading: 'Five agents, per file, end to end in under thirty minutes',
      sub: 'A pipeline of AI assistants runs every file through the same workflow a senior loan processor would — without hiring one for every brokerage. The broker reviews and signs off; nothing reaches a lender without explicit human approval.',
      stages: [
        {
          n: '01',
          name: 'Intake',
          traditional: 'Support staff chase the borrower for a week to collect payslips, statements, ID and rates notices. Files arrive in inconsistent formats, named badly.',
          withAI: 'The borrower uploads to a branded portal. The Intake agent classifies each document, flags poor-quality scans on the spot, and prompts a re-upload before submission.',
          result: '5 days → under 24 hours',
        },
        {
          n: '02',
          name: 'Extract',
          traditional: 'Staff manually read each payslip and statement and type income, liabilities and expenses into the CRM and the lender form. Two systems, double entry, transcription errors.',
          withAI: 'The Extract agent reads every document, structures the data once, and writes it to the CRM and the lender form at the same time. Confidence scores flag anything ambiguous for review.',
          result: '90 minutes → under 5 minutes',
        },
        {
          n: '03',
          name: 'Form',
          traditional: "Every lender's form is different. Brokers memorise the quirks of each one, and the knowledge lives in people's heads.",
          withAI: "The Form agent maps the extracted data to the target lender's application schema. Lender-specific rules are encoded once and applied consistently to every file.",
          result: 'Lender form complete in seconds',
        },
        {
          n: '04',
          name: 'Notes',
          traditional: 'The broker writes the serviceability narrative and Best Interests Duty rationale from scratch every time. Quality varies by who wrote it and how close to the deadline.',
          withAI: "The Notes agent drafts the submission narrative and BID statement from the file data and the broker's recommendation. The broker edits and signs off.",
          result: '45 minutes → 10 minutes of review',
        },
        {
          n: '05',
          name: 'Review',
          traditional: 'The broker cross-checks every field against the source documents at end of day, under pressure. Errors slip through and get flagged by the credit assessor.',
          withAI: 'A separate Review agent re-reads the file and flags any inconsistency between the source documents, CRM, form and notes. The broker approves.',
          result: 'Fewer lender callbacks, faster approvals',
        },
      ],
    },
    results: {
      heading: '320 broker-hours a month, down to under 40',
      sub: 'Roughly an 88% reduction in admin time per file, measured across the full workflow.',
      rows: [
        { activity: 'Document collation', traditional: '60 min', withAI: '5 min', reduction: '~92%' },
        { activity: 'Data extraction & entry', traditional: '75 min', withAI: '5 min', reduction: '~93%' },
        { activity: 'Form completion', traditional: '30 min', withAI: '<1 min', reduction: '~97%' },
        { activity: 'Submission notes', traditional: '45 min', withAI: '10 min', reduction: '~78%' },
        { activity: 'Cross-check & QA', traditional: '40 min', withAI: '5 min', reduction: '~88%' },
        { activity: 'Rework & lender queries', traditional: '20 min', withAI: '5 min', reduction: '~75%' },
        { activity: 'Total per file', traditional: '~4 hours', withAI: '~30 min', reduction: '~88%' },
      ],
    },
    humanInLoop: {
      heading: 'What stays human',
      staysHuman: [
        "The broker's credit recommendation and product selection",
        'The Best Interests Duty determination and disclosure',
        'Final sign-off on every submission before it reaches the lender',
        'Sensitive client conversations — hardship, complaints, settlements',
        'Compliance and audit responses to the aggregator or regulator',
      ],
      note: 'Australian credit law and the Best Interests Duty assume a licensed broker is in the chair. The factory is built around that assumption, not against it.',
    },
    beyond: {
      heading: 'The same pattern fits every regulated intermediary',
      body: [
        'Mortgage broking is one shape of a broader category: licensed intermediaries who spend most of their day on structured admin around a credit, advice or compliance decision. Wherever data extraction, form completion, narrative drafting and review consume more time than the underlying judgement, the same agent pipeline applies.',
      ],
      items: [
        { title: 'Financial advice', body: 'Statement of Advice production, fact-find capture, ongoing service reviews.' },
        { title: 'Commercial finance', body: 'SME loan submissions, asset finance applications, credit memoranda.' },
        { title: 'Insurance broking', body: 'Risk assessment notes, policy comparison memos, claim documentation.' },
        { title: 'Accounting & advisory', body: 'Client onboarding, BAS preparation, year-end working papers.' },
      ],
    },
    closing:
      "This is not making brokers a little faster. It changes the cost structure of running a brokerage — growth without proportional headcount. The broker stays the trusted advisor; the factory runs every file behind them.",
  },
  {
    slug: 'buyer-outreach',
    vertical: 'Financial services · business broking / M&A',
    tag: 'M&A advisory',
    title: 'A buyer-outreach platform for a sell-side M&A advisory',
    client: 'A business broker running multiple sell-side mandates, each with a panel of strategic and financial buyers.',
    lede: 'Enriching buyers, sequencing outreach, running NDAs and tracking the pipeline — with a human-in-the-loop checkpoint at every send. We designed, built and shipped it around 80% faster than a traditional build.',
    metrics: [
      { value: '~80%', label: 'faster to ship than a traditional build' },
      { value: '1 platform', label: 'replaces a stack of manual steps on every mandate' },
      { value: 'HITL', label: 'the advisor approves every outbound email and client-facing decision' },
    ],
    liveUrl: 'https://buyer-outreach.eqr.vc/',
    problem: {
      heading: 'Buyer outreach is mostly repetitive work around a few judgement calls',
      body: [
        'A sell-side process runs the same sequence on every mandate: build the buyer list, enrich contact data, send a sequenced outreach campaign, execute NDAs, triage replies and keep the pipeline current. Most of it is structured, repeatable admin — but it has to be done carefully, because every message is client-facing.',
        "Done by hand across multiple mandates it does not scale: the advisor's time goes into chasing data and copy-pasting emails instead of advising clients and closing deals.",
      ],
    },
    features: {
      heading: 'What the factory built',
      items: [
        { title: 'Enrichment waterfall', body: 'Buyer contact data is filled automatically through a vendor waterfall, with coverage shown per mandate so the advisor can approve any premium spend before it happens.' },
        { title: 'Sequenced outreach', body: 'Templated, merge-filled campaigns send in sequence — and pause automatically the moment a buyer replies.' },
        { title: 'Human-in-the-loop send gate', body: 'Every outbound email is staged for approval. The advisor sees the fully rendered message and can approve, edit or hold before anything goes out.' },
        { title: 'Reply triage', body: 'Inbound replies are auto-classified — interested, not interested, out-of-office — and the advisor confirms or overrides before a buyer advances.' },
        { title: 'NDA execution', body: 'NDAs are issued and tracked in the same flow, so access to confidential information stays controlled.' },
        { title: 'Pipeline tracking', body: 'Portfolio-level metrics and a per-mandate funnel give the advisor one view of every buyer in motion.' },
      ],
    },
    humanInLoop: {
      heading: 'The advisor stays in control',
      staysHuman: [
        'Approval of every outbound email before it sends',
        'The classification of any human reply',
        'Which buyers advance, and when',
        'Spend decisions on premium data enrichment',
      ],
      note: 'The platform handles the volume; the advisor keeps judgement over everything client-facing. It is white-labelled, so nothing in it is tied to a single firm.',
    },
    closing: 'Explore a live version of the platform below.',
  },
]

export function caseStudyBySlug(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
