export type IconName =
  | "compass"
  | "pulse"
  | "shield"
  | "spark"
  | "code"
  | "phone"
  | "cloud"
  | "design"
  | "chart"
  | "plug";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  tagline: string;
  intro: string;
  /** Problems clients in this vertical arrive with. */
  problems: string[];
  /** What we actually build for them. */
  capabilities: { title: string; body: string }[];
  /** Compliance / standards we build against. */
  standards: string[];
  stack: string[];
  outcomes: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "travel",
    name: "Travel & Hospitality",
    short: "Booking engines, OTA platforms and itinerary apps that survive peak season.",
    icon: "compass",
    tagline: "Book, pay, travel — without the 3am pager",
    intro:
      "Travel products live or die on two things: search that feels instant, and payments that never drop. We build booking engines, OTA marketplaces and traveller apps that stay fast when a flash sale multiplies your traffic tenfold.",
    problems: [
      "Supplier and GDS integrations that break silently and lose bookings",
      "Search and availability queries that crawl once inventory grows",
      "Payment, refund and cancellation flows that leak money",
      "Mobile experiences that fall apart on airport wifi",
    ],
    capabilities: [
      {
        title: "Booking & reservation engines",
        body: "Real-time availability, hold-and-confirm flows, seat and room maps, dynamic pricing rules and overbooking protection.",
      },
      {
        title: "Supplier & GDS integrations",
        body: "Amadeus, Sabre, Travelport, hotel channel managers and bespoke supplier APIs, wrapped in a normalised internal contract with retries and circuit breakers.",
      },
      {
        title: "Payments & settlement",
        body: "Multi-currency checkout, split payments, partial refunds and reconciliation via Stripe, Razorpay or your acquirer of choice.",
      },
      {
        title: "Traveller mobile apps",
        body: "Offline-first itineraries, e-tickets and boarding passes, push notifications for gate and schedule changes.",
      },
      {
        title: "Ops & agent consoles",
        body: "Internal tooling for support teams — rebooking, manual overrides, audit trails and refund approvals.",
      },
    ],
    standards: ["PCI-DSS aware checkout", "GDPR", "WCAG 2.2 AA", "IATA / NDC data models"],
    stack: [
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Stripe",
      "AWS",
    ],
    outcomes: [
      { value: "<300ms", label: "typical search response" },
      { value: "99.95%", label: "checkout availability target" },
      { value: "10×", label: "peak traffic headroom" },
    ],
    faqs: [
      {
        q: "Can you integrate with our existing supplier contracts?",
        a: "Yes. We build an adapter layer per supplier so a flaky partner API degrades gracefully instead of taking down search. Adding a new supplier later becomes a contained piece of work rather than a rewrite.",
      },
      {
        q: "Do you handle the mobile app as well as the web platform?",
        a: "We do. Most travel clients start with a responsive web booking flow and add a React Native app once the funnel is proven, sharing the same API and design system.",
      },
    ],
  },
  {
    slug: "medical",
    name: "Healthcare & MedTech",
    short: "Patient portals, telehealth and clinical tooling built for audit day.",
    icon: "pulse",
    tagline: "Clinical-grade software, startup delivery speed",
    intro:
      "Healthcare software carries a burden ordinary products don't: every record is sensitive, every action is auditable, and every integration touches a system built decades ago. We build patient-facing and clinician-facing products that pass review without slowing your roadmap to a crawl.",
    problems: [
      "Compliance treated as a bolt-on, discovered weeks before an audit",
      "Patient data spread across tools with no coherent access model",
      "EHR and lab integrations that stall pilots for months",
      "Clinician workflows so clumsy that staff quietly revert to paper",
    ],
    capabilities: [
      {
        title: "Patient portals & intake",
        body: "Registration, consent capture, appointment booking, digital forms, secure document exchange and results delivery.",
      },
      {
        title: "Telehealth & remote care",
        body: "Encrypted video consultations, waiting rooms, e-prescriptions, follow-up scheduling and post-visit summaries.",
      },
      {
        title: "EHR & interoperability",
        body: "HL7 v2 and FHIR R4 integrations, lab and imaging feeds, and a normalised clinical data layer your team can actually query.",
      },
      {
        title: "Clinician & admin consoles",
        body: "Scheduling, triage queues, care-plan tracking and reporting designed around how staff actually work a shift.",
      },
      {
        title: "Audit & access control",
        body: "Role-based permissions, immutable audit logs, encryption at rest and in transit, data-retention policies and breach playbooks.",
      },
    ],
    standards: ["HIPAA-aligned", "GDPR", "HL7 v2 / FHIR R4", "ISO 27001 practices", "WCAG 2.2 AA"],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "FHIR server",
      "AWS / Azure",
      "Terraform",
    ],
    outcomes: [
      { value: "100%", label: "of privileged actions logged" },
      { value: "AES-256", label: "encryption at rest" },
      { value: "SSO", label: "SAML & OIDC ready" },
    ],
    faqs: [
      {
        q: "Are you able to sign a BAA?",
        a: "We work under a BAA and build on HIPAA-eligible infrastructure. We'll also walk your compliance lead through the data-flow diagram and access model before a line of production code ships.",
      },
      {
        q: "We already have an EHR. Can you build around it?",
        a: "That's the common case. We integrate over FHIR or HL7 where the vendor supports it, and build a thin interoperability service when they don't, so your product isn't blocked on their roadmap.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    short: "Security dashboards, detection tooling and hardened product platforms.",
    icon: "shield",
    tagline: "Ship a security product your buyers will trust",
    intro:
      "Security startups are held to the standard they sell. We build the product side of cybersecurity companies — consoles, agents, reporting and multi-tenant platforms — and we harden them the way your own customers would want them hardened.",
    problems: [
      "A strong detection engine wrapped in a dashboard nobody wants to use",
      "Multi-tenancy retrofitted late, leaking data across customer boundaries",
      "Findings without prioritisation, so analysts drown in noise",
      "Enterprise deals stalled on SSO, audit logs and SOC 2 evidence",
    ],
    capabilities: [
      {
        title: "Security consoles & dashboards",
        body: "Asset inventories, risk scoring, alert triage queues, timeline views and drill-downs analysts can move through quickly.",
      },
      {
        title: "Multi-tenant SaaS platforms",
        body: "Tenant isolation, org and workspace hierarchies, granular RBAC, API keys and per-tenant data residency.",
      },
      {
        title: "Detection & data pipelines",
        body: "Log ingestion, normalisation, enrichment, rule and anomaly evaluation, and alert routing at volume.",
      },
      {
        title: "Compliance reporting",
        body: "Evidence collection, control mapping, exportable reports and customer-facing trust pages.",
      },
      {
        title: "Secure engineering practice",
        body: "Threat modelling, secrets management, dependency and container scanning, and CI gates that block insecure builds.",
      },
    ],
    standards: ["SOC 2 readiness", "ISO 27001 practices", "OWASP ASVS", "NIST CSF alignment"],
    stack: [
      "Next.js",
      "Go / Node.js",
      "PostgreSQL",
      "ClickHouse",
      "Kafka",
      "Kubernetes",
      "Terraform",
    ],
    outcomes: [
      { value: "Row-level", label: "tenant isolation by default" },
      { value: "SSO + SCIM", label: "enterprise-ready auth" },
      { value: "CI-gated", label: "SAST, SCA & secret scanning" },
    ],
    faqs: [
      {
        q: "Do you do penetration testing?",
        a: "We're a product engineering team, not an offensive-security firm. We build securely, threat-model with you and prepare the codebase and evidence for a third-party pentest — then fix what the report finds.",
      },
      {
        q: "How do you handle secrets and access on our infrastructure?",
        a: "Least privilege, scoped short-lived credentials, no shared logins and everything in your own secrets manager. We're happy to work entirely inside your cloud account and tooling.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI & Chatbots",
    short: "RAG assistants and agent workflows that answer from your data, not their imagination.",
    icon: "spark",
    tagline: "Assistants that are actually right",
    intro:
      "A demo chatbot takes an afternoon. A chatbot you can put in front of paying customers takes retrieval that finds the right document, guardrails that refuse gracefully, and evaluation that tells you when a change made things worse. That's the part we build.",
    problems: [
      "Confident, fluent, wrong answers reaching real customers",
      "No way to measure whether a prompt change improved anything",
      "Token costs that scale faster than revenue",
      "Bots that can answer questions but can't complete an action",
    ],
    capabilities: [
      {
        title: "RAG assistants",
        body: "Document ingestion, chunking, hybrid search with reranking and citation-backed answers over your knowledge base, docs or ticket history.",
      },
      {
        title: "Agentic workflows",
        body: "Tool and function calling wired into your real systems — booking, refunds, ticket creation, CRM updates — with human approval where it matters.",
      },
      {
        title: "Support deflection & handoff",
        body: "Web, WhatsApp, Slack and in-app widgets, with clean escalation into Zendesk, Intercom or Freshdesk and full conversation context.",
      },
      {
        title: "Evaluation & observability",
        body: "Golden test sets, regression runs on every prompt change, hallucination and refusal tracking, per-conversation cost and latency dashboards.",
      },
      {
        title: "Guardrails & safety",
        body: "Prompt-injection defences, PII redaction, scope limiting, refusal behaviour and complete audit trails of what the model was shown.",
      },
    ],
    standards: ["Prompt-injection hardening", "PII redaction", "GDPR", "Model-agnostic architecture"],
    stack: [
      "Claude API",
      "OpenAI",
      "TypeScript",
      "Python",
      "pgvector",
      "LangGraph",
      "Next.js",
      "Vercel AI SDK",
    ],
    outcomes: [
      { value: "Cited", label: "answers traceable to a source" },
      { value: "Eval-gated", label: "no prompt ships untested" },
      { value: "Portable", label: "swap models without a rewrite" },
    ],
    faqs: [
      {
        q: "Which model do you build on?",
        a: "We keep the provider behind an interface and pick per workload — usually Claude for reasoning-heavy tasks and a smaller, cheaper model for classification and routing. You're never locked into one vendor's pricing.",
      },
      {
        q: "Will our data be used to train a model?",
        a: "No. We use enterprise API tiers with training disabled, and for sensitive deployments we can keep retrieval and storage entirely inside your own cloud account.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Cross-cutting engineering capabilities shown on the home page. */
export const capabilities: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "code",
    title: "Web application development",
    body: "Next.js and React products with server-rendered performance, typed end to end, built to still be maintainable at version twelve.",
  },
  {
    icon: "phone",
    title: "Mobile apps",
    body: "React Native and Flutter apps that share business logic with your web platform and ship to both stores from one codebase.",
  },
  {
    icon: "plug",
    title: "APIs & integrations",
    body: "REST and GraphQL services, third-party integrations, webhooks and event pipelines that fail loudly instead of silently.",
  },
  {
    icon: "spark",
    title: "AI engineering",
    body: "Retrieval, agents, evaluation and cost control — AI features that hold up under real customer traffic.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    body: "Infrastructure as code, CI/CD, observability and on-call runbooks on AWS, GCP or Azure. No snowflake servers.",
  },
  {
    icon: "design",
    title: "Product design",
    body: "Discovery, user flows, interface design and an accessible design system your team can build on without us.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    body: "We map the problem, the users and the constraints — technical, regulatory and commercial. You leave with a scoped backlog, an architecture sketch and a fixed estimate.",
  },
  {
    step: "02",
    title: "Design",
    duration: "Weeks 2–3",
    body: "Flows, wireframes and a working interface prototype. We validate the risky parts with real users before they become expensive to change.",
  },
  {
    step: "03",
    title: "Build",
    duration: "Weeks 3–8",
    body: "Two-week sprints with a demo at the end of each one. Code review, automated tests and a staging environment you can click through from day one.",
  },
  {
    step: "04",
    title: "Launch",
    duration: "Week 8+",
    body: "Production hardening, load testing, monitoring, alerting and a documented runbook. We stay on-call through the first weeks of live traffic.",
  },
  {
    step: "05",
    title: "Scale",
    duration: "Ongoing",
    body: "Iteration on real usage data, performance work and a clean handover to your in-house team whenever you're ready to take it over.",
  },
];

export const engagements = [
  {
    name: "MVP Sprint",
    price: "From $12k",
    duration: "6–8 weeks",
    summary: "Get a credible, investable product in front of real users.",
    features: [
      "Discovery workshop & scoped backlog",
      "Product design and design system",
      "Production-ready web application",
      "Cloud setup, CI/CD and monitoring",
      "2 weeks of post-launch support",
    ],
    highlight: false,
  },
  {
    name: "Product Partner",
    price: "Monthly retainer",
    duration: "3+ months",
    summary: "A dedicated squad that behaves like your in-house engineering team.",
    features: [
      "Dedicated engineers, designer and tech lead",
      "Two-week sprints with demos",
      "Roadmap and architecture ownership",
      "Security and compliance workstream",
      "Slack access and 24h response",
    ],
    highlight: true,
  },
  {
    name: "Rescue & Scale",
    price: "From $6k",
    duration: "2–4 weeks",
    summary: "Inherit a codebase that's slowing you down and make it move again.",
    features: [
      "Code, architecture and security audit",
      "Performance and cost profiling",
      "Prioritised remediation plan",
      "Hands-on fixes for critical issues",
      "Handover documentation",
    ],
    highlight: false,
  },
];
