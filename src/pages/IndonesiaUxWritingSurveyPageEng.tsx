import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Link } from "react-router-dom"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TooltipProvider } from "../components/ui/tooltip"
import { generateBreadcrumbSchema } from "../lib/structured-data"

// Understanding vs Appreciation gap
const understandingData = [
  { name: "Company understanding", value: 3.57, fill: "#0d9488", fullMark: 5 },
  { name: "Company appreciation", value: 2.75, fill: "#c2410c", fullMark: 5 },
]
const gapScore = 0.82

// Company type understanding
const companyUnderstanding = [
  { company: "Tech Unicorn", value: 4.06, n: 18, note: "Highest—mature digital culture" },
  { company: "Multinational", value: 3.67, n: 6, note: "Above average" },
  { company: "Startup", value: 3.55, n: 11, note: "Moderate—still growing" },
  { company: "Local Non-Tech", value: 3.31, n: 13, note: "Below average" },
  { company: "SOE/Government", value: 3.14, n: 7, note: "Lowest—needs education" },
]

// Team adequacy
const teamAdequacy = [
  { name: "Understaffed", value: 65, fill: "#c2410c" },
  { name: "Adequate", value: 35, fill: "#0d9488" },
]

// Collaboration scores
const collaborationData = [
  { stakeholder: "Product/UX Designer", score: 4.9, n: 63, fullMark: 5 },
  { stakeholder: "Product Manager", score: 4.43, n: 61, fullMark: 5 },
  { stakeholder: "Engineer", score: 3.61, n: 62, fullMark: 5 },
  { stakeholder: "QA", score: 2.62, n: 61, fullMark: 5 },
  { stakeholder: "Customer Support", score: 2.43, n: 61, fullMark: 5 },
  { stakeholder: "Legal/Compliance", score: 2.28, n: 61, fullMark: 5 },
]

// Documentation
const documentationData = [
  { name: "Style Guide", coverage: 83.1, n: 65 },
  { name: "Voice & Tone", coverage: 80, n: 65 },
  { name: "Content Repository", coverage: 70, n: 65 },
  { name: "Copy Token System", coverage: 50, n: 65 },
]

// AI
const aiData = [
  { name: "Uses AI daily/weekly", value: 84.6, n: 65, label: "Near-universal adoption" },
  { name: "No AI Policy", value: 63.1, n: 65, label: "GOVERNANCE GAP" },
  { name: "For brainstorming", value: 78.5, n: 65, label: "Use case #1" },
  { name: "For variations", value: 72.3, n: 65, label: "Use case #2" },
]

// Barriers
const barriersData = [
  { barrier: "Timelines too tight", pct: 63.1, n: 65, rank: "#1" },
  { barrier: "No formal process", pct: 56.9, n: 65, rank: "#2" },
  { barrier: "Seen as 'finishing touch'", pct: 47.7, n: 65, rank: "#3" },
  { barrier: "Assigned after design is done", pct: 46.2, n: 65, rank: "#4" },
  { barrier: "Involved from the start ✓", pct: 13.8, n: 65, rank: "Only 9 of 65" },
]

// Impact types
const impactData = [
  { type: "Brand consistency", pct: 50.8, n: 65 },
  { type: "Fewer errors/tickets", pct: 47.7, n: 65 },
  { type: "Conversion uplift", pct: 44.6, n: 65 },
  { type: "Development efficiency", pct: 41.5, n: 65 },
  { type: "User satisfaction/NPS", pct: 36.9, n: 65 },
  { type: "Never measured impact", pct: 33.8, n: 65 },
]

// Salary by company type (4E.2 + 4E.10)
const salaryByCompany = [
  { company: "Tech Unicorn", range: "Rp 18–50+ M", typical: "Rp 12–17.9 M (19%)", min: "< Rp 5 M", max: "≥ Rp 50 M", n: 18, understanding: 4.06 },
  { company: "Multinational", range: "Rp 12–35 M", typical: "Rp 8–11.9 M (57%)", min: "Rp 5–7.9 M", max: "≥ Rp 50 M", n: 6, understanding: 3.67 },
  { company: "Startup", range: "Rp 8–18 M", typical: "Rp 5–7.9 M (45%)", min: "Rp 5–7.9 M", max: "Rp 18–24.9 M", n: 11, understanding: 3.55 },
  { company: "Local Non-Tech", range: "Rp 8–18 M", typical: "Rp 12–17.9 M (33%)", min: "Rp 5–7.9 M", max: "Rp 18–24.9 M", n: 13, understanding: 3.31 },
  { company: "SOE/Government", range: "Rp 8–12 M", typical: "Rp 12–17.9 M (43%)", min: "Rp 5–7.9 M", max: "Rp 18–24.9 M", n: 7, understanding: 3.14 },
  { company: "Agency/Consulting", range: "variable", typical: "< Rp 5 M (33%)", min: "< Rp 5 M", max: "Rp 25–34.9 M", n: 3, understanding: null },
  { company: "Freelance", range: "Rp 5–17 M", typical: "Rp 12–17.9 M (33%)", min: "Rp 5–7.9 M", max: "Rp 12–17.9 M", n: 3, understanding: null },
]

// Salary by experience (4E.8) — n=60 with valid salary data
const salaryByExperience = [
  { experience: "1–2 years", n: 4, typical: "Rp 5–7.9 M", typicalPct: "50%", min: "Rp 5–7.9 M", max: "Rp 8–11.9 M" },
  { experience: "3–5 years", n: 40, typical: "Rp 8–11.9 M", typicalPct: "32%", min: "< Rp 5 M", max: "≥ Rp 50 M" },
  { experience: "6–10 years", n: 16, typical: "Rp 18–24.9 M", typicalPct: "38%", min: "Rp 8–11.9 M", max: "Rp 35–49.9 M" },
]

// Salary by job level (4E.9)
const salaryByJobLevel = [
  { level: "Junior/Entry", n: 7, typical: "Rp 5–7.9 M", typicalPct: "57%", min: "< Rp 5 M", max: "Rp 8–11.9 M" },
  { level: "Mid-Level", n: 28, typical: "Rp 12–17.9 M", typicalPct: "39%", min: "Rp 5–7.9 M", max: "Rp 12–17.9 M" },
  { level: "Senior", n: 19, typical: "Rp 18–24.9 M", typicalPct: "42%", min: "Rp 8–11.9 M", max: "≥ Rp 50 M" },
  { level: "Lead/Manager", n: 4, typical: "Rp 18–24.9 M", typicalPct: "50%", min: "Rp 18–24.9 M", max: "≥ Rp 50 M" },
]

// Employment status (4E.3) — representative categories
const employmentStatus = [
  { status: "Full-time / Permanent", pct: 85, n: 65 },
  { status: "Contract", pct: 9, n: 65 },
  { status: "Freelance / Project-based", pct: 6, n: 65 },
]

// Benefits, bonus, other comp (4E.4)
const benefitsCategories = [
  { name: "BPJS Health", note: "Basic; in lean companies often only this + THR" },
  { name: "THR (Religious holiday bonus)", note: "National standard" },
  { name: "Comprehensive health insurance", note: "More common in Tech Unicorns / MNCs" },
  { name: "Other allowances", note: "Transport, communication, etc. vary by company" },
  { name: "Annual / performance bonus", note: "Uneven; often variable in startups" },
  { name: "Learning budget / training", note: "Minority; development gap" },
]

// Career acceleration strategies (4E.11)
const careerAcceleration = [
  { rank: 1, strategy: "Move up to Senior level", impact: "+107%", difficulty: "Medium", note: "Largest jump Mid → Senior (Rp 12–17.9 M → Rp 18–24.9 M)" },
  { rank: 2, strategy: "Accumulate 6–10 years of experience", impact: "+77%", difficulty: "Time-dependent", note: "Typical salary rises from Rp 8–11.9 M to Rp 18–24.9 M" },
  { rank: 3, strategy: "Move to a Tech Unicorn", impact: "+60%", difficulty: "Competitive", note: "Highest range; ceiling ≥ Rp 50 M" },
  { rank: 4, strategy: "Become Lead/Manager", impact: "+57%", difficulty: "High", note: "Minimum Rp 18–24.9 M; N=4 in sample" },
]

// Career ladder
const careerLadderData = [
  { name: "Very clear (formal)", value: 18.5, fill: "#0d9488" },
  { name: "Quite clear (guidance)", value: 23, fill: "#14b8a6" },
  { name: "Not very clear", value: 26.2, fill: "#f59e0b" },
  { name: "No ladder", value: 32.3, fill: "#c2410c" },
]

// Career aspirations
const aspirationsData = [
  { aspiration: "Move to another company", pct: 46.2, n: 65, note: "TALENT CRISIS" },
  { aspiration: "Switch to another role", pct: 40, n: 65, note: "Leaving UX Writing" },
  { aspiration: "Stay & move up levels", pct: 38.5, n: 65, note: "Retention potential" },
  { aspiration: "Work overseas", pct: 32.3, n: 65, note: "Brain drain" },
  { aspiration: "Freelance/Consultant", pct: 26.2, n: 65, note: "Alternative" },
]

// Custom tooltip content for Recharts
function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload?: Record<string, unknown> }>; label?: string }) {
  if (!active || !payload?.length) return null
  const p = payload[0].payload as Record<string, unknown>
  return (
    <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
      {label && <div className="font-semibold">{label}</div>}
      <div>Score: {payload[0].value}/5</div>
      {"n" in p && <div className="text-muted-foreground">n = {String(p.n)}</div>}
      {"note" in p && <div className="text-muted-foreground">{String(p.note)}</div>}
    </div>
  )
}

function PctTooltip({ active, payload }: { active?: boolean; payload?: Array<{ value: number; payload?: Record<string, unknown> }> }) {
  if (!active || !payload?.length) return null
  const p = payload[0].payload as Record<string, unknown>
  return (
    <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
      <div className="font-semibold">{String("barrier" in p ? p.barrier : "type" in p ? p.type : p.name ?? "")}</div>
      <div>{payload[0].value}%</div>
      {"n" in p && <div className="text-muted-foreground">n = {String(p.n)}</div>}
    </div>
  )
}

export default function IndonesiaUxWritingSurveyPageEng() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sintaksis.com" },
    { name: "Indonesia UX Writing Survey 2025 (English)", url: "https://sintaksis.com/indonesia-ux-writing-survey-eng" },
  ])

  return (
    <>
      <Helmet>
        <title>Indonesia UX Writing Industry Survey 2025 (English) | Sintaksis</title>
        <meta
          name="description"
          content="Key findings from the 2025 Indonesia UX Writing industry survey (English version): industry conditions, ways of working, professionalism, business impact, salary & career."
        />
        <meta property="og:title" content="Indonesia UX Writing Industry Survey 2025 (English)" />
        <meta property="og:url" content="https://sintaksis.com/indonesia-ux-writing-survey-eng" />
        <link rel="canonical" href="https://sintaksis.com/indonesia-ux-writing-survey-eng" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1">
            {/* Language toggle */}
            <section className="border-b bg-muted/40">
              <div className="container max-w-5xl py-3 flex justify-center">
                <Link
                  to="/indonesia-ux-writing-survey"
                  className="text-xs sm:text-sm font-mono rounded-full px-4 py-1.5 border border-foreground/40 hover:border-foreground hover:bg-background transition-colors text-foreground text-center"
                >
                  Baca hasil riset dalam bahasa Indonesia
                </Link>
              </div>
            </section>

            {/* Hero */}
            <section className="relative border-b bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
              <div className="container">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Key Findings Report
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans mb-4">
                    Indonesia UX Writing Industry Survey 2025
                  </h1>
                  <p className="text-lg text-muted-foreground font-mono">
                    A survey of practitioners from different company types in Indonesia, intended to provide a
                    comprehensive picture of the UX Writing profession: how teams work, how they are valued, and how
                    careers grow.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    n = 67 UX Writer/Content Designer respondents · Fielded in December 2025
                  </p>
                </div>
              </div>
            </section>

            {/* Contributors & Disclaimer */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">Contributors</h2>
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="rounded-xl border bg-background px-5 py-4 min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      Survey Lead
                    </p>
                    <a
                      href="https://www.linkedin.com/in/evangilang/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold font-sans text-primary hover:underline"
                    >
                      Evan Gilang Ramadhan
                    </a>
                    <p className="font-mono text-sm text-muted-foreground">UX Researcher & Insights Storyteller</p>
                  </div>
                  <div className="rounded-xl border bg-background px-5 py-4 min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      Survey Co-Runner
                    </p>
                    <a
                      href="https://www.linkedin.com/in/prasaja-mukti/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold font-sans text-primary hover:underline"
                    >
                      Prasaja Mukti Aji
                    </a>
                    <p className="font-mono text-sm text-muted-foreground">Head of Product Storyteller</p>
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold font-sans mb-3">Disclaimer</h3>
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    This survey is designed to strengthen the bargaining power of UX Writers in Indonesia by providing
                    an honest, representative baseline of industry data. The raw data is open and can be explored by
                    anyone. We encourage researchers, practitioners, and stakeholders to dig deeper based on their own
                    questions.
                    <br />
                    <br />
                    The raw survey data can be{" "}
                    <a
                      href="/src/data/raw-data-survey.xlsx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      downloaded for free.
                    </a>
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    The survey findings are also discussed in a paid event (21 February 2026){' '}
                    <strong className="text-foreground">
                      Memperkecil Spasi: Membahas Temuan Survei UX Writing Indonesia 2025
                    </strong>
                    . Each participant receives a printed report and a chance to respond to and interpret the data.
                    <br />
                    <br />
                    Information & tickets:{' '}
                    <a
                      href="https://www.loket.com/event/memperkecil-spasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      loket.com/event/memperkecil-spasi
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Background */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">1. Background</h2>
                <p className="font-mono text-sm mb-6">
                  Over the past two to three years, the UX Writing role in Indonesia has seen its visibility and
                  influence fade in many organisations. Compared to other product or design roles, UX Writers are often
                  seen as support rather than a strategic function.
                </p>
                <p className="font-mono text-sm mb-6">
                  At the same time, information about ways of working, quality standards, KPIs, business expectations,
                  and salary brackets for UX Writers across industries is still scarce and unstructured. This leads to:
                </p>
                <ul className="font-mono text-sm space-y-2 list-disc pl-6 text-muted-foreground">
                  <li>Many UX Writers not knowing the true value of their skills.</li>
                  <li>Stakeholders struggling to be convinced of UX Writing&apos;s impact.</li>
                  <li>
                    Thought leadership around UX Writing being repetitive and focused on surface-level topics instead of
                    deeper structure.
                  </li>
                  <li>No national baseline for how UX Writing should contribute to business outcomes.</li>
                  <li>
                    Ways of working that vary widely between companies, with no shared reference for what good looks
                    like.
                  </li>
                </ul>
                <p className="font-mono text-sm mt-6 text-primary font-medium">
                  This research exists to close that gap—<i>like the space between words</i>.
                </p>
              </div>
            </section>

            {/* Research Objectives */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">2. Research Objectives</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-3">2.1 Primary Objective</h3>
                    <p className="font-mono text-sm mb-4">
                      To increase the bargaining power of UX Writers across industries in Indonesia.
                    </p>
                    <p className="font-mono text-sm text-muted-foreground mb-2">
                      The findings are intended to be published as a comprehensive report that can be used as a
                      reference by:
                    </p>
                    <ul className="font-mono text-sm space-y-1 list-disc pl-6 text-muted-foreground">
                      <li>UX Writers (junior to principal)</li>
                      <li>Hiring managers</li>
                      <li>Product teams (PMs, designers, engineers)</li>
                      <li>HR & Talent Acquisition</li>
                      <li>Owners and C-level leaders</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-3">2.2 Secondary Objectives</h3>
                    <ul className="font-mono text-sm space-y-2 list-disc pl-6 text-muted-foreground">
                      <li>Provide an honest, representative salary bracket for UX Writers in Indonesia.</li>
                      <li>
                        Establish a baseline for expectations, ways of working, KPIs, and professional standards for UX
                        Writers.
                      </li>
                      <li>
                        Identify gaps between what UX Writers actually do and what companies expect or recognise.
                      </li>
                      <li>Create room for new thought leadership around UX Writing in Indonesia.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Executive Summary + Key Insight: Gap */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">Executive Summary</h2>
                <div className="grid gap-6 md:grid-cols-2 mb-12">
                  <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Situation
                    </h3>
                    <p className="font-mono text-sm">
                      UX Writing has become an essential discipline in Indonesia&apos;s digital economy.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Complication
                    </h3>
                    <p className="font-mono text-sm">
                      65% of teams are understaffed, 58% have no clear career ladder, and 46% plan to move to another
                      company.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md md:col-span-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Key Answer
                    </h3>
                    <p className="font-mono text-sm">
                      There is a clear understanding–appreciation gap: companies <strong>understand</strong> the UX
                      Writer role (3.57/5) but <strong>do not appreciate</strong> the craft (2.75/5). The 0.82-point gap
                      is the root of many downstream problems.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-sans mb-4">Company Understanding vs Appreciation</h3>
                <p className="text-muted-foreground text-sm font-mono mb-6">
                  Hover over the bars for details. Gap of 0.82 = a significant disconnect.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={understandingData} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 5]} tickCount={6} />
                      <YAxis type="category" dataKey="name" width={200} tick={{ fontSize: 12 }} />
                      <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {understandingData.map((entry, i) => (
                          <Cell key={i} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    <span className="inline-flex items-center gap-2 rounded-md bg-teal-100 dark:bg-teal-900/30 px-3 py-1.5 text-sm font-medium text-teal-800 dark:text-teal-200">
                      Understanding 3.57 · companies know what UX Writers do (n=63)
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-md bg-amber-100 dark:bg-amber-900/30 px-3 py-1.5 text-sm font-medium text-amber-800 dark:text-amber-200">
                      Appreciation 2.75 · the craft is undervalued (n=65)
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-1.5 text-sm font-medium text-destructive">
                      Gap {gapScore}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* The remaining sections mirror the Indonesian version but are summarised in English */}

            {/* Company type understanding */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-2">Understanding by Company Type</h2>
                <p className="text-muted-foreground text-sm font-mono mb-6">
                  Hover over each bar for notes and sample size (n).
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={companyUnderstanding} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 5]} tickCount={6} />
                      <YAxis type="category" dataKey="company" width={160} tick={{ fontSize: 11 }} />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null
                          const p = payload[0].payload as (typeof companyUnderstanding)[0]
                          return (
                            <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                              <div className="font-semibold">{p.company}</div>
                              <div>Understanding: {p.value}/5</div>
                              <div className="text-muted-foreground">n = {p.n}</div>
                              <div className="text-muted-foreground">{p.note}</div>
                            </div>
                          )
                        }}
                        cursor={{ fill: "hsl(var(--muted))" }}
                      />
                      <Bar dataKey="value" fill="#0d9488" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Team & Collaboration */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Teams & Collaboration</h2>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Team Adequacy</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">
                      65% of UX Writing teams are understaffed → high demand, low supply.
                    </p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                          <Pie
                            data={teamAdequacy}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                            nameKey="name"
                            label={({ name, value }) => `${name} ${value}%`}
                          >
                            {teamAdequacy.map((_, i) => (
                              <Cell key={i} fill={_.fill} className="outline-none" />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number) => [`${value}%`, "Respondents"]} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Collaboration with Stakeholders</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">
                      Scores 1–5. Hover for details.
                    </p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={collaborationData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 5]} tickCount={6} />
                          <YAxis type="category" dataKey="stakeholder" width={150} tick={{ fontSize: 10 }} />
                          <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                          <Bar dataKey="score" fill="#0d9488" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Documentation & AI */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Documentation & AI</h2>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">
                      Documentation (Style Guide, Voice & Tone, Content Repository)
                    </h3>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={documentationData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 100]} unit="%" />
                          <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11 }} />
                          <Tooltip
                            content={({ active, payload }) => {
                              if (!active || !payload?.length) return null
                              const p = payload[0].payload as (typeof documentationData)[0]
                              return (
                                <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                                  <div className="font-semibold">{p.name}</div>
                                  <div>
                                    {p.coverage}% · n = {p.n}
                                  </div>
                                </div>
                              )
                            }}
                            cursor={{ fill: "hsl(var(--muted))" }}
                          />
                          <Bar dataKey="coverage" fill="#14b8a6" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">AI Adoption vs Governance Gap</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">
                      84.6% use AI daily/weekly, but 63.1% have no AI policy.
                    </p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={aiData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 100]} unit="%" />
                          <YAxis type="category" dataKey="name" width={160} tick={{ fontSize: 10 }} />
                          <Tooltip
                            content={({ active, payload }) => {
                              if (!active || !payload?.length) return null
                              const p = payload[0].payload as (typeof aiData)[0]
                              return (
                                <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                                  <div className="font-semibold">{p.name}</div>
                                  <div>
                                    {p.value}% · n = {p.n}
                                  </div>
                                  <div className="text-muted-foreground">{p.label}</div>
                                </div>
                              )
                            }}
                            cursor={{ fill: "hsl(var(--muted))" }}
                          />
                          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {aiData.map((entry, i) => (
                              <Cell key={i} fill={entry.name === "No AI Policy" ? "#c2410c" : "#0d9488"} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Barriers */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-2">Biggest Barriers to Growth</h2>
                <p className="text-muted-foreground text-sm font-mono mb-6">
                  % of respondents (n=65). Hover for ranking.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={barriersData} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 70]} unit="%" />
                      <YAxis type="category" dataKey="barrier" width={240} tick={{ fontSize: 11 }} />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null
                          const p = payload[0].payload as (typeof barriersData)[0]
                          return (
                            <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                              <div className="font-semibold">{p.barrier}</div>
                              <div>
                                {p.pct}% · {p.rank} · n = {p.n}
                              </div>
                            </div>
                          )
                        }}
                        cursor={{ fill: "hsl(var(--muted))" }}
                      />
                      <Bar dataKey="pct" fill="#c2410c" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Impact, Career & Aspirations (summarised) */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Impact, Career & Aspirations</h2>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Types of Impact</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">
                      33.8% have never formally measured their impact.
                    </p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={impactData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 60]} unit="%" />
                          <YAxis type="category" dataKey="type" width={200} tick={{ fontSize: 10 }} />
                          <Tooltip content={<PctTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                          <Bar dataKey="pct" fill="#0d9488" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold font-sans mb-2">Career Ladder Clarity</h3>
                      <p className="text-sm text-muted-foreground font-mono mb-4">
                        32.3% report no career ladder at all (critical).
                      </p>
                      <div className="rounded-xl border bg-card p-6">
                        <ResponsiveContainer width="100%" height={220}>
                          <PieChart>
                            <Pie
                              data={careerLadderData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                              nameKey="name"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {careerLadderData.map((_, i) => (
                                <Cell key={i} fill={_.fill} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value: number) => [`${value}%`, "Respondents"]} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-sans mb-2">Career Aspirations</h3>
                      <p className="text-sm text-muted-foreground font-mono mb-4">
                        46.2% want to move to another company = a talent crisis.
                      </p>
                      <div className="rounded-xl border bg-card p-6">
                        <ResponsiveContainer width="100%" height={260}>
                          <BarChart data={aspirationsData} layout="vertical" margin={{ left: 12, right: 12 }}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis type="number" domain={[0, 55]} unit="%" />
                            <YAxis type="category" dataKey="aspiration" width={200} tick={{ fontSize: 10 }} />
                            <Tooltip
                              content={({ active, payload }) => {
                                if (!active || !payload?.length) return null
                                const p = payload[0].payload as (typeof aspirationsData)[0]
                                return (
                                  <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                                    <div className="font-semibold">{p.aspiration}</div>
                                    <div>
                                      {p.pct}% · n = {p.n}
                                    </div>
                                    <div className="text-muted-foreground">{p.note}</div>
                                  </div>
                                )
                              }}
                              cursor={{ fill: "hsl(var(--muted))" }}
                            />
                            <Bar dataKey="pct" fill="#0d9488" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Salary & Compensation (tables reused, labels lightly localised) */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Salary & Compensation</h2>

                <h3 className="text-lg font-semibold font-sans mb-3">Salary by Company Type</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Tech Unicorns & Multinationals have the highest ranges (up to ≥ Rp 50 M). Startups are typically the
                  lowest. n = respondents per type.
                </p>
                <div className="rounded-xl border bg-card p-4 overflow-x-auto mb-10">
                  <table className="w-full min-w-[560px] text-left font-mono text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="py-2 pr-4">Company Type</th>
                        <th className="py-2 pr-4">Typical (mode)</th>
                        <th className="py-2 pr-4">Min</th>
                        <th className="py-2 pr-4">Max</th>
                        <th className="py-2">n</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salaryByCompany.map((row) => (
                        <tr key={row.company} className="border-b last:border-0 hover:bg-muted/30">
                          <td className="py-3 pr-4 font-medium">{row.company}</td>
                          <td className="py-3 pr-4">{row.typical}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.min}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.max}</td>
                          <td className="py-3">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold font-sans mb-3">Salary by Experience</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Sample n=60 (valid salary data). Experience premium is significant: typical salary rises from Rp
                  8–11.9 M (3–5 years) to Rp 18–24.9 M (6–10 years).
                </p>
                <div className="rounded-xl border bg-card p-4 overflow-x-auto mb-10">
                  <table className="w-full min-w-[480px] text-left font-mono text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="py-2 pr-4">Experience</th>
                        <th className="py-2 pr-4">Typical (mode)</th>
                        <th className="py-2 pr-4">Min</th>
                        <th className="py-2 pr-4">Max</th>
                        <th className="py-2">n</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salaryByExperience.map((row) => (
                        <tr key={row.experience} className="border-b last:border-0 hover:bg-muted/30">
                          <td className="py-3 pr-4 font-medium">{row.experience}</td>
                          <td className="py-3 pr-4">
                            {row.typical} ({row.typicalPct})
                          </td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.min}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.max}</td>
                          <td className="py-3">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold font-sans mb-3">Salary by Job Level</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Biggest jump: Mid-Level → Senior (typical Rp 12–17.9 M → Rp 18–24.9 M). Senior ranges can reach ≥ Rp
                  50 M in top companies.
                </p>
                <div className="rounded-xl border bg-card p-4 overflow-x-auto mb-10">
                  <table className="w-full min-w-[480px] text-left font-mono text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="py-2 pr-4">Level</th>
                        <th className="py-2 pr-4">Typical (mode)</th>
                        <th className="py-2 pr-4">Min</th>
                        <th className="py-2 pr-4">Max</th>
                        <th className="py-2">n</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salaryByJobLevel.map((row) => (
                        <tr key={row.level} className="border-b last:border-0 hover:bg-muted/30">
                          <td className="py-3 pr-4 font-medium">{row.level}</td>
                          <td className="py-3 pr-4">
                            {row.typical} ({row.typicalPct})
                          </td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.min}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.max}</td>
                          <td className="py-3">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold font-sans mb-3">Employment Status</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Most respondents are full-time/permanent; contract and freelance are a minority.
                </p>
                <div className="rounded-xl border bg-card p-6 mb-10">
                  <div className="flex flex-wrap gap-4">
                    {employmentStatus.map((row) => (
                      <div
                        key={row.status}
                        className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 min-w-[200px]"
                      >
                        <span className="font-mono text-2xl font-bold text-primary">{row.pct}%</span>
                        <div>
                          <p className="font-mono text-sm font-medium">{row.status}</p>
                          <p className="text-xs text-muted-foreground">n = {row.n}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-semibold font-sans mb-3">Benefits, Bonus & Other Compensation</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Packages vary widely. From &quot;only BPJS and THR&quot; all the way to full benefits and insurance.
                  When benefits are included, total compensation gaps can reach 3–4x.
                </p>
                <div className="rounded-xl border bg-card p-6 mb-10 overflow-hidden">
                  <ul className="grid gap-3 sm:grid-cols-2 font-mono text-sm min-w-0">
                    {benefitsCategories.map((b) => (
                      <li key={b.name} className="flex gap-2 min-w-0 rounded-lg border bg-background px-4 py-3">
                        <span className="font-medium shrink-0">{b.name}</span>
                        <span className="text-muted-foreground min-w-0 break-words">— {b.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-lg font-semibold font-sans mb-3">Career Acceleration Strategies</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Based on the data, these are the fastest ways to increase salary. Recommendation: prioritise promotion
                  to Senior for highest ROI, then consider moving to a Tech Unicorn to maximise earning potential.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left font-mono text-sm">
                      <thead>
                        <tr className="border-b text-muted-foreground">
                          <th className="py-2 pr-4">#</th>
                          <th className="py-2 pr-4">Strategy</th>
                          <th className="py-2 pr-4">Impact</th>
                          <th className="py-2 pr-4">Difficulty</th>
                          <th className="py-2">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {careerAcceleration.map((row) => (
                          <tr key={row.rank} className="border-b last:border-0 hover:bg-muted/30">
                            <td className="py-3 pr-4 font-bold text-primary">{row.rank}</td>
                            <td className="py-3 pr-4 font-medium">{row.strategy}</td>
                            <td className="py-3 pr-4 text-primary font-semibold">{row.impact}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{row.difficulty}</td>
                            <td className="py-3 text-muted-foreground">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="py-16 md:py-20">
              <div className="container max-w-3xl text-center">
                <h2 className="text-2xl font-bold font-sans mb-4">Full Report</h2>
                <p className="text-muted-foreground font-mono text-sm">
                  This English summary is built on the same quantitative and qualitative data as the Indonesian report.
                  The full narrative, stakeholder voices, and methodological notes are available in Bahasa Indonesia.
                  Thank you to all practitioners and stakeholders who contributed to the 2025 Indonesia UX Writing
                  Industry Survey.
                </p>
              </div>
            </section>
          </main>
          <SiteFooter />
        </div>
      </TooltipProvider>
    </>
  )
}

