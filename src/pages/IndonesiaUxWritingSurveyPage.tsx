import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
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
import { Tooltip as RadixTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import { BarChart3, Users, Briefcase, TrendingUp, DollarSign, Quote } from "lucide-react"
import { generateBreadcrumbSchema } from "../lib/structured-data"

// Understanding vs Appreciation gap
const understandingData = [
  { name: "Pemahaman Perusahaan", value: 3.57, fill: "#0d9488", fullMark: 5 },
  { name: "Apresiasi Perusahaan", value: 2.75, fill: "#c2410c", fullMark: 5 },
]
const gapScore = 0.82

// Company type understanding
const companyUnderstanding = [
  { company: "Tech Unicorn", value: 4.06, n: 18, note: "Tertinggi—mature digital culture" },
  { company: "Multinational", value: 3.67, n: 6, note: "Di atas rata-rata" },
  { company: "Startup", value: 3.55, n: 11, note: "Moderate—masih berkembang" },
  { company: "Local Non-Tech", value: 3.31, n: 13, note: "Di bawah rata-rata" },
  { company: "BUMN/Government", value: 3.14, n: 7, note: "Terendah—perlu edukasi" },
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
  { name: "AI Daily/Weekly", value: 84.6, n: 65, label: "Adopsi hampir universal" },
  { name: "Tanpa AI Policy", value: 63.1, n: 65, label: "GOVERNANCE GAP" },
  { name: "Brainstorming Use", value: 78.5, n: 65, label: "Use case #1" },
  { name: "Variations Use", value: 72.3, n: 65, label: "Use case #2" },
]

// Barriers
const barriersData = [
  { barrier: "Timeline terlalu singkat", pct: 63.1, n: 65, rank: "#1" },
  { barrier: "Tidak ada proses formal", pct: 56.9, n: 65, rank: "#2" },
  { barrier: "Dianggap 'finishing touch'", pct: 47.7, n: 65, rank: "#3" },
  { barrier: "Di-assign setelah design selesai", pct: 46.2, n: 65, rank: "#4" },
  { barrier: "Sudah dilibatkan awal ✓", pct: 13.8, n: 65, rank: "Hanya 9 dari 65" },
]

// Impact types
const impactData = [
  { type: "Brand Consistency", pct: 50.8, n: 65 },
  { type: "Pengurangan Error/Ticket", pct: 47.7, n: 65 },
  { type: "Peningkatan Conversion", pct: 44.6, n: 65 },
  { type: "Efisiensi Development", pct: 41.5, n: 65 },
  { type: "User Satisfaction/NPS", pct: 36.9, n: 65 },
  { type: "Belum pernah mengukur", pct: 33.8, n: 65 },
]

// Salary by company type (4E.2 + 4E.10)
const salaryByCompany = [
  { company: "Tech Unicorn", range: "Rp 18–50+ jt", typical: "Rp 12–17,9 jt (19%)", min: "< Rp 5 jt", max: "≥ Rp 50 jt", n: 18, understanding: 4.06 },
  { company: "Multinational", range: "Rp 12–35 jt", typical: "Rp 8–11,9 jt (57%)", min: "Rp 5–7,9 jt", max: "≥ Rp 50 jt", n: 6, understanding: 3.67 },
  { company: "Startup", range: "Rp 8–18 jt", typical: "Rp 5–7,9 jt (45%)", min: "Rp 5–7,9 jt", max: "Rp 18–24,9 jt", n: 11, understanding: 3.55 },
  { company: "Local Non-Tech", range: "Rp 8–18 jt", typical: "Rp 12–17,9 jt (33%)", min: "Rp 5–7,9 jt", max: "Rp 18–24,9 jt", n: 13, understanding: 3.31 },
  { company: "BUMN/Government", range: "Rp 8–12 jt", typical: "Rp 12–17,9 jt (43%)", min: "Rp 5–7,9 jt", max: "Rp 18–24,9 jt", n: 7, understanding: 3.14 },
  { company: "Agency/Konsultan", range: "variabel", typical: "< Rp 5 jt (33%)", min: "< Rp 5 jt", max: "Rp 25–34,9 jt", n: 3, understanding: null },
  { company: "Freelance", range: "Rp 5–17 jt", typical: "Rp 12–17,9 jt (33%)", min: "Rp 5–7,9 jt", max: "Rp 12–17,9 jt", n: 3, understanding: null },
]

// Salary by experience (4E.8) — n=60 dengan data gaji valid
const salaryByExperience = [
  { experience: "1–2 tahun", n: 4, typical: "Rp 5–7,9 jt", typicalPct: "50%", min: "Rp 5–7,9 jt", max: "Rp 8–11,9 jt" },
  { experience: "3–5 tahun", n: 40, typical: "Rp 8–11,9 jt", typicalPct: "32%", min: "< Rp 5 jt", max: "≥ Rp 50 jt" },
  { experience: "6–10 tahun", n: 16, typical: "Rp 18–24,9 jt", typicalPct: "38%", min: "Rp 8–11,9 jt", max: "Rp 35–49,9 jt" },
]

// Salary by job level (4E.9)
const salaryByJobLevel = [
  { level: "Junior/Entry", n: 7, typical: "Rp 5–7,9 jt", typicalPct: "57%", min: "< Rp 5 jt", max: "Rp 8–11,9 jt" },
  { level: "Mid-Level", n: 28, typical: "Rp 12–17,9 jt", typicalPct: "39%", min: "Rp 5–7,9 jt", max: "Rp 12–17,9 jt" },
  { level: "Senior", n: 19, typical: "Rp 18–24,9 jt", typicalPct: "42%", min: "Rp 8–11,9 jt", max: "≥ Rp 50 jt" },
  { level: "Lead/Manager", n: 4, typical: "Rp 18–24,9 jt", typicalPct: "50%", min: "Rp 18–24,9 jt", max: "≥ Rp 50 jt" },
]

// Employment status (4E.3) — representative categories
const employmentStatus = [
  { status: "Full-time / Karyawan tetap", pct: 85, n: 65 },
  { status: "Contract / Kontrak", pct: 9, n: 65 },
  { status: "Freelance / Project-based", pct: 6, n: 65 },
]

// Benefits, bonus, other comp (4E.4) — dari laporan kualitatif & survei
const benefitsCategories = [
  { name: "BPJS Kesehatan", note: "Umum; di perusahaan minim hanya ini + THR" },
  { name: "THR", note: "Standar nasional" },
  { name: "Asuransi kesehatan lengkap", note: "Lebih umum di Tech Unicorn / MNC" },
  { name: "Tunjangan lain", note: "Tunjangan transport, komunikasi, dll bervariasi per perusahaan" },
  { name: "Bonus tahunan / performance", note: "Tidak merata; startup sering variable" },
  { name: "Learning budget / training", note: "Minoritas; gap development" },
]

// Career acceleration strategies (4E.11)
const careerAcceleration = [
  { rank: 1, strategy: "Naik ke level Senior", impact: "+107%", difficulty: "Medium", note: "Lompatan terbesar Mid → Senior (Rp 12–17,9 jt → Rp 18–24,9 jt)" },
  { rank: 2, strategy: "Pengalaman 6–10 tahun", impact: "+77%", difficulty: "Time-dependent", note: "Typical salary naik dari Rp 8–11,9 jt ke Rp 18–24,9 jt" },
  { rank: 3, strategy: "Pindah ke Tech Unicorn", impact: "+60%", difficulty: "Competitive", note: "Range tertinggi; ceiling ≥ Rp 50 jt" },
  { rank: 4, strategy: "Menjadi Lead/Manager", impact: "+57%", difficulty: "High", note: "Minimal Rp 18–24,9 jt; N=4 dalam sampel" },
]

// Career ladder
const careerLadderData = [
  { name: "Sangat Jelas (formal)", value: 18.5, fill: "#0d9488" },
  { name: "Cukup Jelas (guidance)", value: 23, fill: "#14b8a6" },
  { name: "Kurang Jelas", value: 26.2, fill: "#f59e0b" },
  { name: "Tidak Ada", value: 32.3, fill: "#c2410c" },
]

// Career aspirations
const aspirationsData = [
  { aspiration: "Pindah ke perusahaan lain", pct: 46.2, n: 65, note: "TALENT CRISIS" },
  { aspiration: "Pindah ke role lain", pct: 40, n: 65, note: "Keluar dari UX Writing" },
  { aspiration: "Tetap & naik level", pct: 38.5, n: 65, note: "Retention potential" },
  { aspiration: "Ke luar negeri", pct: 32.3, n: 65, note: "Brain drain" },
  { aspiration: "Freelance/Konsultan", pct: 26.2, n: 65, note: "Alternative" },
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

export default function IndonesiaUxWritingSurveyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sintaksis.com" },
    { name: "Indonesia UX Writing Survey 2025", url: "https://sintaksis.com/indonesia-ux-writing-survey" },
  ])

  return (
    <>
      <Helmet>
        <title>Riset Industri UX Writing Indonesia 2025 | Sintaksis</title>
        <meta name="description" content="Laporan temuan kunci riset industri UX Writing Indonesia 2025: kondisi industri, praktik kerja, profesionalisme, dampak bisnis, salary & karir." />
        <meta property="og:title" content="Riset Industri UX Writing Indonesia 2025" />
        <meta property="og:url" content="https://sintaksis.com/indonesia-ux-writing-survey" />
        <link rel="canonical" href="https://sintaksis.com/indonesia-ux-writing-survey" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1">
            {/* Hero */}
            <section className="relative border-b bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
              <div className="container">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Laporan Temuan Kunci</p>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans mb-4">
                    Riset Industri UX Writing Indonesia 2025
                  </h1>
                  <p className="text-lg text-muted-foreground font-mono">
                    Survei terhadap praktisi dari berbagai jenis perusahaan—gambaran komprehensif pertama tentang kondisi profesi UX Writer di Indonesia.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">n = 67 responden UX Writer/Content Designer · Desember 2025</p>
                </div>
              </div>
            </section>
{/* Contributors & Disclaimer */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">Kontributor</h2>
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="rounded-xl border bg-background px-5 py-4 min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Survey Lead</p>
                    <a
                      href="https://www.linkedin.com/in/evangilang/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold font-sans text-primary hover:underline"
                    >
                      Evan Gilang Ramadhan
                    </a>
                    <p className="font-mono text-sm text-muted-foreground">UX Researcher</p>
                  </div>
                  <div className="rounded-xl border bg-background px-5 py-4 min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Data Storyteller</p>
                    <a
                      href="https://www.linkedin.com/in/prasaja-mukti/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold font-sans text-primary hover:underline"
                    >
                      Prasaja Mukti Aji
                    </a>
                    <p className="font-mono text-sm text-muted-foreground">Product Storyteller</p>
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold font-sans mb-3">Disclaimer</h3>
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    Survei ini dimaksudkan untuk meningkatkan daya tawar UX Writer di Indonesia dengan menyediakan baseline data yang jujur dan representatif. Data mentah (raw data) dapat diakses dan dieksplorasi secara bebas oleh siapa pun—kami mendorong peneliti, praktisi, dan stakeholder untuk menggali lebih dalam sesuai kebutuhan.
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    Temuan survei ini juga akan dibahas dalam acara berbayar (21 Februari 2026) <strong className="text-foreground">Memperkecil Spasi: Membahas Temuan Survei UX Writing Indonesia 2025</strong>. Setiap peserta akan menerima hardcopy laporan hasil survei. <br></br><br></br>Informasi dan tiket:{" "}
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
            {/* Latar Belakang */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">1. Latar Belakang</h2>
                <p className="font-mono text-sm mb-6">
                  Dalam dua hingga tiga tahun terakhir, peran UX Writer di Indonesia terlihat kehilangan visibilitas dan pengaruhnya di banyak organisasi. Dibandingkan role lain di product team, UX Writer sering dianggap sebagai posisi pendukung belaka, bukan posisi yang memiliki dampak strategis.
                </p>
                <p className="font-mono text-sm mb-6">
                  Di sisi lain, informasi terkait praktik kerja, standar kualitas, KPI, ekspektasi bisnis, hingga salary bracket UX Writer di berbagai industri masih sangat minim dan tidak terstruktur. Akibatnya:
                </p>
                <ul className="font-mono text-sm space-y-2 list-disc pl-6 text-muted-foreground">
                  <li>Banyak UX Writer yang tidak tahu sebenarnya berapa nilai kompetensi mereka.</li>
                  <li>Stakeholder sulit diyakinkan tentang dampak UX Writing.</li>
                  <li>Thought leadership di bidang UX Writing belum berkembang.</li>
                  <li>Tidak ada baseline nasional tentang bagaimana seharusnya UX Writing berkontribusi pada bisnis.</li>
                  <li>Praktik kerja UX Writer menjadi sangat berbeda-beda antar perusahaan tanpa ada standar yang bisa dirujuk.</li>
                </ul>
                <p className="font-mono text-sm mt-6 text-primary font-medium">Riset ini hadir untuk menjawab kekosongan tersebut.</p>
              </div>
            </section>

            {/* Tujuan Riset */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">2. Tujuan Riset</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-3">2.1 Tujuan Utama</h3>
                    <p className="font-mono text-sm mb-4">Meningkatkan daya tawar UX Writer di berbagai industri di Indonesia.</p>
                    <p className="font-mono text-sm text-muted-foreground mb-2">Hasil riset ini diharapkan dapat dipublikasikan sebagai laporan komprehensif yang bisa dijadikan rujukan oleh:</p>
                    <ul className="font-mono text-sm space-y-1 list-disc pl-6 text-muted-foreground">
                      <li>UX Writer (junior hingga principal)</li>
                      <li>Hiring manager</li>
                      <li>Product team (PM, designer, engineer)</li>
                      <li>HR & Talent Acquisition</li>
                      <li>Owner atau C-level</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-3">2.2 Tujuan Sekunder</h3>
                    <ul className="font-mono text-sm space-y-2 list-disc pl-6 text-muted-foreground">
                      <li>Menghadirkan salary bracket UX Writer di Indonesia secara jujur dan representatif.</li>
                      <li>Menyediakan baseline tentang ekspektasi, praktik kerja, KPI, dan standar profesional UX Writer.</li>
                      <li>Mengidentifikasi gap antara apa yang UX Writer kerjakan vs apa yang perusahaan harapkan.</li>
                      <li>Membuka ruang diskusi untuk munculnya thought leadership baru di bidang UX Writing.</li>
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
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Situasi</h3>
                    <p className="font-mono text-sm">UX Writing telah menjadi disiplin penting dalam ekonomi digital Indonesia.</p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Komplikasi</h3>
                    <p className="font-mono text-sm">65% tim understaffed, 58% tanpa career ladder jelas, 46% berencana pindah perusahaan.</p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md md:col-span-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Jawaban Kunci</h3>
                    <p className="font-mono text-sm">Gap pemahaman–apresiasi: perusahaan <strong>memahami</strong> peran UX Writer (3.57/5) namun <strong>tidak mengapresiasi</strong> craft-nya (2.75/5). Gap 0.82 poin adalah akar masalah.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-sans mb-4">Pemahaman vs Apresiasi Perusahaan</h3>
                <p className="text-muted-foreground text-sm font-mono mb-6">Hover pada bar untuk detail. Gap 0.82 = disconnect signifikan.</p>
                <div className="rounded-xl border bg-card p-6">
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={understandingData} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 5]} tickCount={6} />
                      <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 12 }} />
                      <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {understandingData.map((entry, i) => (
                          <Cell key={i} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    <RadixTooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center gap-2 rounded-md bg-teal-100 dark:bg-teal-900/30 px-3 py-1.5 text-sm font-medium text-teal-800 dark:text-teal-200 cursor-help">
                          Pemahaman 3.57
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>Perusahaan tahu peran UX Writer (n=63)</TooltipContent>
                    </RadixTooltip>
                    <RadixTooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center gap-2 rounded-md bg-amber-100 dark:bg-amber-900/30 px-3 py-1.5 text-sm font-medium text-amber-800 dark:text-amber-200 cursor-help">
                          Apresiasi 2.75
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>Craft tidak dihargai (n=65)</TooltipContent>
                    </RadixTooltip>
                    <span className="inline-flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-1.5 text-sm font-medium text-destructive">
                      Gap {gapScore} poin
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Insight cards A–E */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Lima Insight Kunci</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { id: "A", title: "Kondisi Industri", desc: "Gap pemahaman-apresiasi (3.57 vs 2.75) menjelaskan mengapa UX Writer dipahami tapi tidak dihargai", icon: BarChart3 },
                    { id: "B", title: "Praktik Kerja", desc: "Maturitas tinggi (80%+ dokumentasi, 100% Figma) tapi governance gap (63% tanpa AI policy)", icon: Briefcase },
                    { id: "C", title: "Profesionalisme", desc: "Hanya 14% dilibatkan sejak awal, 63% timeline terlalu singkat—tidak ada ruang deep work", icon: Users },
                    { id: "D", title: "Dampak Bisnis", desc: "33% belum pernah mengukur dampak formal—sulit buktikan value ke stakeholder", icon: TrendingUp },
                    { id: "E", title: "Salary & Karir", desc: "58% tanpa career ladder, 46% ingin pindah, Tech Unicorn bayar 2-3x lebih tinggi", icon: DollarSign },
                  ].map(({ id, title, desc, icon: Icon }) => (
                    <RadixTooltip key={id}>
                      <TooltipTrigger asChild>
                        <div className="group rounded-xl border bg-background p-5 transition-all hover:shadow-md hover:border-primary/20 cursor-default">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{id}</span>
                            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                          </div>
                          <h3 className="font-semibold font-sans mb-1">{title}</h3>
                          <p className="text-sm text-muted-foreground font-mono">{desc}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">Insight {id} dari riset</TooltipContent>
                    </RadixTooltip>
                  ))}
                </div>
              </div>
            </section>

            {/* Company type understanding */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-2">Pemahaman per Jenis Perusahaan</h2>
                <p className="text-muted-foreground text-sm font-mono mb-6">Hover pada bar untuk catatan (n = responden per jenis).</p>
                <div className="rounded-xl border bg-card p-6">
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={companyUnderstanding} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 5]} tickCount={6} />
                      <YAxis type="category" dataKey="company" width={140} tick={{ fontSize: 11 }} />
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

            {/* Team adequacy + Collaboration */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Tim & Kolaborasi</h2>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Kecukupan Tim UX Writer</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">65% tim understaffed → demand tinggi, supply rendah.</p>
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
                          <Tooltip formatter={(value: number) => [`${value}%`, "Responden"]} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Kolaborasi dengan Stakeholder</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">Score 1–5. Hover untuk detail.</p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={collaborationData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 5]} tickCount={6} />
                          <YAxis type="category" dataKey="stakeholder" width={130} tick={{ fontSize: 10 }} />
                          <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                          <Bar dataKey="score" fill="#0d9488" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Documentation + AI */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Dokumentasi & AI</h2>
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Dokumentasi (Style Guide, Voice & Tone, Content Repo)</h3>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={documentationData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 100]} unit="%" />
                          <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 11 }} />
                          <Tooltip content={({ active, payload }) => {
                            if (!active || !payload?.length) return null
                            const p = payload[0].payload as (typeof documentationData)[0]
                            return (
                              <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                                <div className="font-semibold">{p.name}</div>
                                <div>{p.coverage}% · n = {p.n}</div>
                              </div>
                            )
                          }} cursor={{ fill: "hsl(var(--muted))" }} />
                          <Bar dataKey="coverage" fill="#14b8a6" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">AI Adoption vs Governance Gap</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">84.6% pakai AI daily/weekly, tapi 63.1% tanpa AI policy.</p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={aiData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 100]} unit="%" />
                          <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 10 }} />
                          <Tooltip content={({ active, payload }) => {
                            if (!active || !payload?.length) return null
                            const p = payload[0].payload as (typeof aiData)[0]
                            return (
                              <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                                <div className="font-semibold">{p.name}</div>
                                <div>{p.value}% · n = {p.n}</div>
                                <div className="text-muted-foreground">{p.label}</div>
                              </div>
                            )
                          }} cursor={{ fill: "hsl(var(--muted))" }} />
                          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {aiData.map((entry, i) => (
                              <Cell key={i} fill={entry.name === "Tanpa AI Policy" ? "#c2410c" : "#0d9488"} />
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
                <h2 className="text-2xl font-bold font-sans mb-2">Hambatan Terbesar untuk Berkembang</h2>
                <p className="text-muted-foreground text-sm font-mono mb-6">% responden (n=65). Hover untuk ranking.</p>
                <div className="rounded-xl border bg-card p-6">
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={barriersData} layout="vertical" margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" domain={[0, 70]} unit="%" />
                      <YAxis type="category" dataKey="barrier" width={220} tick={{ fontSize: 11 }} />
                      <Tooltip content={({ active, payload }) => {
                        if (!active || !payload?.length) return null
                        const p = payload[0].payload as (typeof barriersData)[0]
                        return (
                          <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                            <div className="font-semibold">{p.barrier}</div>
                            <div>{p.pct}% · {p.rank} · n = {p.n}</div>
                          </div>
                        )
                      }} cursor={{ fill: "hsl(var(--muted))" }} />
                      <Bar dataKey="pct" fill="#c2410c" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Impact + Career ladder + Aspirations */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Dampak, Karir & Aspirasi</h2>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-lg font-semibold font-sans mb-2">Jenis Dampak yang Dihasilkan</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-4">33.8% belum pernah mengukur dampak formal.</p>
                    <div className="rounded-xl border bg-card p-6">
                      <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={impactData} layout="vertical" margin={{ left: 12, right: 12 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis type="number" domain={[0, 60]} unit="%" />
                          <YAxis type="category" dataKey="type" width={180} tick={{ fontSize: 10 }} />
                          <Tooltip content={<PctTooltip />} cursor={{ fill: "hsl(var(--muted))" }} />
                          <Bar dataKey="pct" fill="#0d9488" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold font-sans mb-2">Career Ladder Clarity</h3>
                      <p className="text-sm text-muted-foreground font-mono mb-4">32.3% tidak ada career ladder (critical).</p>
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
                            <Tooltip formatter={(value: number) => [`${value}%`, "Responden"]} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-sans mb-2">Career Aspirations</h3>
                      <p className="text-sm text-muted-foreground font-mono mb-4">46.2% ingin pindah perusahaan = talent crisis.</p>
                      <div className="rounded-xl border bg-card p-6">
                        <ResponsiveContainer width="100%" height={260}>
                          <BarChart data={aspirationsData} layout="vertical" margin={{ left: 12, right: 12 }}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis type="number" domain={[0, 55]} unit="%" />
                            <YAxis type="category" dataKey="aspiration" width={160} tick={{ fontSize: 10 }} />
                            <Tooltip content={({ active, payload }) => {
                              if (!active || !payload?.length) return null
                              const p = payload[0].payload as (typeof aspirationsData)[0]
                              return (
                                <div className="rounded-lg border bg-background px-3 py-2 shadow-md text-sm">
                                  <div className="font-semibold">{p.aspiration}</div>
                                  <div>{p.pct}% · n = {p.n}</div>
                                  <div className="text-muted-foreground">{p.note}</div>
                                </div>
                              )
                            }} cursor={{ fill: "hsl(var(--muted))" }} />
                            <Bar dataKey="pct" fill="#0d9488" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mapping Project Impact (N=18) */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-4">Mapping Project Impact</h2>
                <p className="text-muted-foreground font-mono text-sm mb-8 max-w-3xl">
                  Pertanyaan opsional survei: 18 responden berhasil mengartikulasikan dampak konkret dari project mereka. Dampak bisnis (39%) mendominasi—ketika UX Writer berhasil mengukur impact, hasilnya signifikan dan terukur. Masalahnya bukan ketidakmampuan UX Writing menghasilkan dampak, tapi ketiadaan infrastruktur pengukuran.
                </p>
                <div className="grid gap-6 sm:grid-cols-3 mb-8">
                  {[
                    { cat: "Dampak Bisnis", n: 7, pct: "39%", examples: ["Conversion +20%", "Registration +10%", "Click rate ↑", "Cost efficiency", "Revenue generation", "Time efficiency", "Contact ratio ↓"] },
                    { cat: "Dampak Brand/UX", n: 6, pct: "33%", examples: ["Humanizing copy", "UX simplification", "Task completion", "Information architecture", "Mobile UX revamp", "AI product copy"] },
                    { cat: "Dampak Internal Process", n: 5, pct: "28%", examples: ["Workflow -5 hari", "Copy library + Figma", "Writing guideline", "Copy audit framework", "Compliance"] },
                  ].map((c) => (
                    <div key={c.cat} className="rounded-xl border bg-card p-5">
                      <h3 className="font-semibold font-sans mb-1">{c.cat}</h3>
                      <p className="text-xs text-muted-foreground font-mono mb-3">n = {c.n} ({c.pct})</p>
                      <ul className="text-sm font-mono text-muted-foreground space-y-1">
                        {c.examples.map((ex, i) => (
                          <li key={i}>· {ex}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 space-y-6">
                  <h3 className="font-semibold font-sans">Highlight: Dampak Bisnis Terukur</h3>
                  <ul className="font-mono text-sm space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Conversion +20%</strong> — &quot;Setelah revamp conversion rate pd produk naik sekitar 20% dr 0%&quot;</li>
                    <li><strong className="text-foreground">Registration +10%</strong> — &quot;We got ~10+ increase in registration... just because of that copy change&quot;</li>
                    <li><strong className="text-foreground">Click rate ↑</strong> — &quot;click rate naik bahkan paling tinggi dibanding PN lain&quot;</li>
                    <li><strong className="text-foreground">Time efficiency</strong> — &quot;mengurangi waktu survei dari 2 hari jadi sekitar 2 jam&quot;</li>
                    <li><strong className="text-foreground">Cost efficiency</strong> — &quot;cost notifikasi jadi lebih efisien&quot;</li>
                    <li><strong className="text-foreground">Revenue</strong> — &quot;Generate revenue dari itu sebanyak IDR XXX juta&quot;</li>
                  </ul>
                  <h3 className="font-semibold font-sans pt-2">Highlight: Dampak Internal Process</h3>
                  <ul className="font-mono text-sm space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Workflow -5 hari</strong> — &quot;cutting the estimated newsletter process... by +/- 5 working days&quot;</li>
                    <li><strong className="text-foreground">Copy library</strong> — &quot;copy library integrated dengan figma variabel untuk meningkatkan konsistensi&quot;</li>
                    <li><strong className="text-foreground">Compliance</strong> — &quot;comply with BI compliance requirements... obtain certification&quot;</li>
                  </ul>
                  <h3 className="font-semibold font-sans pt-2">Highlight: Dampak Brand & UX</h3>
                  <ul className="font-mono text-sm space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Humanizing copy</strong> — &quot;rework status tracking untuk pengiriman agar lebih humanis&quot;</li>
                    <li><strong className="text-foreground">Task completion</strong> — &quot;Membantu user (sopir truk) menyelesaikan tugasnya&quot;</li>
                    <li><strong className="text-foreground">UX simplification</strong> — &quot;memudahkan Penjual untuk ekspor ke luar negeri dengan mudah&quot;</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Salary & Kompensasi — detailed */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Salary & Kompensasi</h2>

                {/* Salary per company type */}
                <h3 className="text-lg font-semibold font-sans mb-3">Salary per Jenis Perusahaan</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">Tech Unicorn & Multinasional range tertinggi (hingga ≥ Rp 50 jt). Startup typical terendah. n = responden per jenis.</p>
                <div className="rounded-xl border bg-card p-4 overflow-x-auto mb-10">
                  <table className="w-full min-w-[560px] text-left font-mono text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="py-2 pr-4">Jenis Perusahaan</th>
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

                {/* Salary by experience */}
                <h3 className="text-lg font-semibold font-sans mb-3">Salary by Experience</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">Sample n=60 (data gaji valid). Experience premium signifikan: typical naik dari Rp 8–11,9 jt (3–5 tahun) ke Rp 18–24,9 jt (6–10 tahun).</p>
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
                          <td className="py-3 pr-4">{row.typical} ({row.typicalPct})</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.min}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.max}</td>
                          <td className="py-3">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Salary by job level */}
                <h3 className="text-lg font-semibold font-sans mb-3">Salary by Job Level</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">Lompatan terbesar: Mid-Level → Senior (typical Rp 12–17,9 jt → Rp 18–24,9 jt). Senior range bisa mencapai ≥ Rp 50 jt di top company.</p>
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
                          <td className="py-3 pr-4">{row.typical} ({row.typicalPct})</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.min}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.max}</td>
                          <td className="py-3">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Employment status */}
                <h3 className="text-lg font-semibold font-sans mb-3">Employment Status</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">Mayoritas full-time/karyawan tetap; kontrak dan freelance minoritas.</p>
                <div className="rounded-xl border bg-card p-6 mb-10">
                  <div className="flex flex-wrap gap-4">
                    {employmentStatus.map((row) => (
                      <div key={row.status} className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 min-w-[200px]">
                        <span className="font-mono text-2xl font-bold text-primary">{row.pct}%</span>
                        <div>
                          <p className="font-mono text-sm font-medium">{row.status}</p>
                          <p className="text-xs text-muted-foreground">n = {row.n}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits, bonus, other comps */}
                <h3 className="text-lg font-semibold font-sans mb-3">Benefits, Bonus, dan Kompensasi Lain</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">Bervariasi besar antar perusahaan. Wawancara: dari &quot;cuma BPJS dan THR&quot; (P1) hingga tunjangan lengkap + asuransi (P3). Total compensation gap bisa 3–4x jika benefit ikut dihitung.</p>
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

                {/* Career acceleration strategies */}
                <h3 className="text-lg font-semibold font-sans mb-3">Career Acceleration Strategies</h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">Berdasarkan data, strategi tercepat untuk meningkatkan salary. Rekomendasi: fokus promotion ke Senior sebagai prioritas utama (highest ROI), lalu pertimbangkan pindah ke Tech Unicorn untuk maximize earning potential.</p>
                <div className="rounded-xl border bg-card p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left font-mono text-sm">
                      <thead>
                        <tr className="border-b text-muted-foreground">
                          <th className="py-2 pr-4">#</th>
                          <th className="py-2 pr-4">Strategi</th>
                          <th className="py-2 pr-4">Impact</th>
                          <th className="py-2 pr-4">Difficulty</th>
                          <th className="py-2">Catatan</th>
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

            {/* Gambaran Kondisi: Apa yang Terjadi */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">Gambaran Kondisi: Apa yang Terjadi</h2>
                <p className="font-mono text-sm text-muted-foreground mb-8 max-w-3xl">
                  Berdasarkan data di atas, berikut ringkasan kondisi riil yang terjadi di industri UX Writing Indonesia—apa yang terlihat dari angka dan apa implikasinya di lapangan.
                </p>
                <div className="space-y-8">
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-2">Perusahaan paham, tapi tidak menghargai</h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      Skor pemahaman perusahaan terhadap peran UX Writer (3.57/5) berada di atas netral—mereka tahu apa yang dikerjakan. Namun apresiasi terhadap craft (2.75/5) di bawah netral. Gap 0.82 poin ini membuat UX Writer dilibatkan terlambat, punya pengaruh terbatas dalam keputusan, dan jarang mendapat investasi karir yang memadai. Hanya 14% dilibatkan sejak awal proyek; 63% menyebut timeline terlalu singkat sebagai hambatan utama.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-2">Tim kecil, kolaborasi tidak merata</h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      65% tim UX Writer understaffed—demand tinggi tapi supply rendah. Kolaborasi paling kuat dengan Product/UX Designer (4.9/5) dan PM (4.43/5), sementara dengan QA (2.62/5), Customer Support (2.43/5), dan Legal/Compliance (2.28/5) sangat rendah. Artinya UX Writer sering bekerja dalam silo; feedback loop dengan support dan compliance lemah.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-2">Dokumentasi matang, governance AI tertinggal</h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      Praktik dokumentasi cukup matang: 83% punya Style Guide, 80% Voice & Tone, 100% pakai Figma. Di sisi lain, 84.6% memakai AI daily/weekly tapi 63.1% tanpa AI policy—governance gap yang bisa memperlebar ketimpangan skill dan produktivitas dalam 2–3 tahun ke depan jika tidak ada intervensi.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-2">Dampak sulit dibuktikan, karir tidak jelas</h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      Sepertiga responden (33.8%) belum pernah mengukur dampak kerja secara formal—sulit membuktikan value ke stakeholder. Hanya 7.7% yang punya final authority atas copy. Di sisi karir: 58% tidak punya career ladder jelas (32.3% sama sekali tidak ada), dan 46.2% berencana pindah perusahaan. Kombinasi ini menandakan talent crisis yang mengancam keberlanjutan profesi.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-2">Kompensasi dan jenis perusahaan sangat menentukan</h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      Tech Unicorn membayar 2–3x lebih tinggi dari BUMN/Government (Rp 18–50+ jt vs Rp 8–12 jt) dan juga punya skor pemahaman tertinggi (4.06/5). BUMN/Government terendah (3.14/5). Perbedaan ini mendorong brain drain ke Tech Unicorn dan membuat UX Writer di perusahaan non-tech atau pemerintah merasa undervalued—sesuai dengan temuan kualitatif bahwa gap bukan sekadar gaji, tapi akses ke tools, research, dan recognition.
                    </p>
                  </div>
                </div>
                <p className="font-mono text-sm mt-8 text-muted-foreground italic max-w-3xl">
                  Secara ringkas: industri UX Writing Indonesia menunjukkan maturitas praktik (dokumentasi, tools) di level individu, tetapi di level organisasi masih ada gap apresiasi, governance, dan karir. Tanpa perbaikan di ketiga area tersebut, talent akan terus pindah atau keluar dari profesi.
                </p>
              </div>
            </section>

            {/* ========== ANALISIS KUALITATIF: SUARA DARI LAPANGAN ========== */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-4">Analisis Kualitatif: Suara dari Lapangan</h2>
                <p className="text-muted-foreground font-mono text-sm mb-10 max-w-3xl">
                  Wawancara mendalam dengan 5 praktisi dari spektrum karier yang berbeda—dari solo writer di perusahaan non-tech hingga manager di Tech Unicorn—mengungkap bahwa gap kompensasi 2.3x yang terlihat di data survei adalah manifestasi dari perbedaan fundamental dalam struktur kerja, akses resources, dan kualitas hidup profesional.
                </p>

                {/* Metodologi & Profil Partisipan */}
                <h3 className="text-xl font-bold font-sans mb-4">Metodologi & Profil Partisipan</h3>
                <div className="rounded-xl border bg-card p-6 mb-6">
                  <h4 className="font-semibold font-sans mb-3">Metodologi Wawancara</h4>
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    Lima wawancara mendalam dilakukan selama 45–60 menit per sesi, menggunakan panduan diskusi semi-terstruktur dengan 31 pertanyaan. Topik meliputi: profil & background, kondisi industri, praktik kerja, AI & teknologi, profesionalisme, dampak bisnis, dan kompensasi & karier. Partisipan dipilih secara purposive untuk mewakili spektrum pengalaman—dari solo writer di perusahaan non-tech hingga manager di Tech Unicorn.
                  </p>
                  <ul className="font-mono text-sm text-muted-foreground space-y-1 list-disc pl-6">
                    <li>Durasi: 45–60 menit per sesi</li>
                    <li>Format: Semi-terstruktur (31 pertanyaan)</li>
                    <li>Sampling: Purposive (spektrum karier & jenis perusahaan)</li>
                  </ul>
                </div>
                <h4 className="text-lg font-semibold font-sans mb-4">Profil Partisipan (P1–P5)</h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                  {[
                    { id: "P1", label: "The Survivor", company: "Perusahaan logistik non-tech", exp: "4 tahun", role: "Solo Writer", note: "Bekerja sendirian, benefit minimal (BPJS saja), mempertimbangkan exit dari industri." },
                    { id: "P2", label: "The Privileged", company: "Tech Unicorn", exp: "3 tahun", role: "Tim established", note: "Akses copy review, career path visible, resources memadai." },
                    { id: "P3", label: "The Strategist", company: "Bank Digital", exp: "6+ tahun", role: "Manager", note: "Memimpin tim localization, pemahaman strategis AI governance." },
                    { id: "P4", label: "The Innovator", company: "Tech Unicorn Regional", exp: "5+ tahun", role: "Senior", note: "Company-wide AI adoption, perspektif regional." },
                    { id: "P5", label: "The Regulated", company: "HealthTech", exp: "3 tahun", role: "Mid-level", note: "Industri highly regulated, harapan komunitas UX Writing Indonesia." },
                  ].map((p) => (
                    <div key={p.id} className="rounded-xl border bg-background p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono font-bold text-primary">{p.id}</span>
                        <span className="font-semibold font-sans">{p.label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{p.company} · {p.exp} · {p.role}</p>
                      <p className="text-sm mt-2 font-mono">{p.note}</p>
                    </div>
                  ))}
                </div>

                {/* The Solo Writer Trap */}
                <h3 className="text-xl font-bold font-sans mb-4">The Solo Writer Trap: Anatomi Lingkaran Setan</h3>
                <p className="text-muted-foreground font-mono text-sm mb-6">
                  &quot;2022 role pertama sebagai UX Writer... jadi solo UX Writer. Di tahun 2023 sempet ada temen tapi ga lama, orang tersebut ga gitu passionate di UX Writer jadi keluar dari kantor. Sisanya sendirian.&quot; — <strong>P1, Solo Writer di perusahaan logistik</strong>
                </p>
                <p className="font-mono text-sm mb-6">
                  Frasa &quot;sisanya sendirian&quot; mungkin terdengar sederhana, tetapi implikasinya sangat dalam. Rantai sebab-akibat:
                </p>
                <div className="space-y-6 mb-10">
                  {[
                    { title: "Dampak 1: Tidak Ada Copy Review → Tidak Ada Quality Benchmark", body: "Di perusahaan dengan tim established (P2), setiap copy melewati peer review sebelum approval. Ketika P1 membuat keputusan copy, tidak ada siapa pun yang bisa memberikan perspektif kedua." },
                    { title: "Dampak 2: Tidak Ada Career Path → Tidak Ada Skill Development Trajectory", body: "P1: \"Belum ada kesempatan belajar jadi lead. Masih solo, ga ada skill untuk ngelead tim sendiri.\" Empat tahun bekerja, skill leadership tidak berkembang karena tidak pernah ada kesempatan." },
                    { title: "Dampak 3: Overwhelming Workload → Tidak Ada Waktu untuk Strategic Work", body: "P1: \"Pegang beberapa tim... ada masanya jadi keteteran malah ditanya kerjanya lambat. Kenapa kok jadi menurun, harusnya tahu sendiri gimana load kerjaannya.\" Dianggap lambat justru karena overloaded—tanpa data atau peer yang memvalidasi workload." },
                    { title: "Dampak 4: Lemahnya Bargaining Power → Stuck dalam Kondisi Tidak Ideal", body: "P1: \"Dari awal berapa kali minta [tambah tim], ada masanya kewalahan tetep ga dicariin juga. Lebih butuhnya bagi mereka pun PO nya, Designer-nya, dan Engineer-nya.\" Tanpa tim, tidak ada data untuk membuktikan value; tanpa bukti value, tidak ada justification untuk menambah tim." },
                    { title: "Hasil Akhir: Hopelessness dan Exit Intent", body: "P1: \"Pengen cari peluang baru ke tempat lain. Masih dicoba, belum ada rezeki. Aga hopeless sebenernya. Switch career produk management... lagi mempersiapkan untuk berkarir [di tempat lain].\" Kata \"hopeless\" muncul tiga kali dalam wawancara—resigned acceptance, dan solusi yang dipilih: exit dari industri UX Writing sama sekali." },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border bg-background p-5 pl-6 border-l-4 border-l-primary/50">
                      <h4 className="font-semibold font-sans mb-2">{item.title}</h4>
                      <p className="font-mono text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border bg-card p-6 mb-12">
                  <p className="text-sm font-mono font-semibold mb-3">Efek domino (hover untuk urutan):</p>
                  <div className="flex flex-wrap gap-3">
                    {["Tanpa peer", "Tanpa copy review", "Tanpa QA", "Tanpa data value", "Tanpa bargaining power", "Stuck / exit"].map((step, i) => (
                      <RadixTooltip key={step}>
                        <TooltipTrigger asChild>
                          <span className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm font-mono transition-colors hover:bg-muted hover:border-primary/30 cursor-help">
                            {i + 1}. {step}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>{i < 5 ? "Efek domino: " : "Hasil: "}{step}</TooltipContent>
                      </RadixTooltip>
                    ))}
                  </div>
                </div>

                {/* The Invisible Gap */}
                <h3 className="text-xl font-bold font-sans mb-4">The Invisible Gap: Di Balik Angka 2.3x</h3>
                <p className="font-mono text-sm mb-6">Data survei: Tech Unicorn membayar 2.3x lebih tinggi dari Startup. Wawancara mengungkap perbedaan jauh lebih dalam:</p>
                <div className="grid gap-4 sm:grid-cols-2 mb-12">
                  {[
                    { dim: "Benefit Package", p1: "Benefit cuma BPJS aja dan cuma THR.", p3: "Ada tunjangan, THR, asuransi kesehatan [lengkap].", note: "Total compensation gap bisa 3–4x." },
                    { dim: "Akses User Research", p1: "Selama 4 tahun kerja bisa dihitung [pakai tangan] 5 kali research dan UX testing secara langsung... yang secara langsung jarang banget.", p3: null, note: "Lima kali dalam 4 tahun ≈ 1.25x/tahun. Tech Unicorn: tim research terstruktur, testing lebih sering." },
                    { dim: "Tools & Infrastructure", p1: "Pernah awal-awal pakai FigJam tapi udah ga disediain lagi. Sisanya pakai Google Docs.", p4: "Company-wide tools adoption.", note: "Gap produktivitas bukan sekadar preferensi." },
                    { dim: "Involvement Timing", p1: "Seringkali masih suka designer-nya sama PO-nya kayak baru kelar udah mepet-mepet mau review.", p3: null, note: "Survei: hanya 14% dilibatkan sejak awal. UX Writer sering dipanggil \"mepet-mepet mau review\"." },
                  ].map((d, i) => (
                    <div key={i} className="rounded-xl border bg-background p-5">
                      <h4 className="font-semibold font-sans mb-2">{d.dim}</h4>
                      <p className="text-sm font-mono text-muted-foreground mb-2"><Quote className="inline h-4 w-4 mr-1" /> P1: {d.p1}</p>
                      {d.p3 && <p className="text-sm font-mono text-muted-foreground mb-2"><Quote className="inline h-4 w-4 mr-1" /> P3: {d.p3}</p>}
                      {d.p4 && <p className="text-sm font-mono text-muted-foreground mb-2"><Quote className="inline h-4 w-4 mr-1" /> P4: {d.p4}</p>}
                      <p className="text-xs font-mono text-primary">{d.note}</p>
                    </div>
                  ))}
                </div>

                {/* Suara Partisipan: Storytelling P2–P5 */}
                <h3 className="text-xl font-bold font-sans mb-4">Suara Partisipan: Storytelling P2–P5</h3>
                <p className="font-mono text-sm text-muted-foreground mb-6">Selain P1 (The Survivor), keempat partisipan lain membagikan konteks dan harapan mereka—dari privilege copy review hingga harapan identitas UX Writing Indonesia.</p>
                <div className="space-y-6 mb-12">
                  <div className="rounded-xl border bg-background p-6 pl-6 border-l-4 border-l-primary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono font-bold text-primary">P2</span>
                      <span className="font-semibold font-sans">The Privileged · Tech Unicorn</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-3">
                      P2 menyebut &quot;privilege ada copy review&quot;—di perusahaan dengan tim established, setiap copy melewati peer review sebelum approval. Ini bukan sekadar catching errors; ini soal continuous learning dan quality consistency. Meski begitu, P2 tetap menghadapi ketidakjelasan tentang standar industri di luar perusahaannya.
                    </p>
                    <p className="font-mono text-sm italic text-muted-foreground">
                      &quot;Pengen kayak UX Writer sekuat community-nya designer.&quot; — Harapan P2 untuk ekosistem yang setara dengan UX Design.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-6 pl-6 border-l-4 border-l-primary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono font-bold text-primary">P3</span>
                      <span className="font-semibold font-sans">The Strategist · Bank Digital</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-3">
                      Dari perspektif senior dan manager, P3 memimpin tim localization dan punya pemahaman strategis tentang AI governance. P3 mengungkap bahwa &quot;impact-nya ga bisa diukur dan ga bisa dijadiin bargaining power. Yang jadi bargaining power tuh omongan subjektif.&quot; Tanpa metrik, negosiasi gaji atau request resources kalah dari data Engineer atau Designer.
                    </p>
                    <p className="font-mono text-sm text-muted-foreground mb-2">
                      Di sisi kompensasi: &quot;Ada tunjangan, THR, asuransi kesehatan [lengkap].&quot; P3 juga menekankan bahwa &quot;AI governance-nya akan menjadi skill differentiator&quot;—yang punya governance akan mengintegrasikan AI ke workflow secara sistematis; yang tidak akan tetap ad-hoc.
                    </p>
                    <p className="font-mono text-sm italic text-muted-foreground">
                      &quot;Semoga berguyub kayak designer.&quot; — Harapan untuk komunitas yang solid.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-6 pl-6 border-l-4 border-l-primary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono font-bold text-primary">P4</span>
                      <span className="font-semibold font-sans">The Innovator · Tech Unicorn Regional</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-3">
                      P4 berada di perusahaan dengan company-wide AI adoption—&quot;vibe coding&quot; di mana tiap quarter tim di-assign untuk ship sesuatu dengan AI. Perspektif regional dan akses ke tools membuat P4 melihat peluang; namun career path tetap menjadi &quot;misteri&quot; bahkan di perusahaan mature.
                    </p>
                    <p className="font-mono text-sm italic text-muted-foreground">
                      &quot;This should be the time UX Writer take over.&quot; — AI sebagai momentum bagi UX Writer untuk mengambil peran strategis.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-6 pl-6 border-l-4 border-l-primary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono font-bold text-primary">P5</span>
                      <span className="font-semibold font-sans">The Regulated · HealthTech</span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-3">
                      P5 bekerja di industri highly regulated (kesehatan). Tantangan compliance dan kebutuhan copy yang jelas serta aman membuat peran UX Writer krusial, sekaligus menuntut standar yang tinggi. P5 menyuarakan kebutuhan akan identitas lokal dan harapan untuk membangun komunitas UX Writing Indonesia yang lebih solid.
                    </p>
                    <p className="font-mono text-sm italic text-muted-foreground">
                      &quot;Identitas. UX in general ada yang mewakili Indonesia.&quot; — Harapan agar UX Writing Indonesia punya suara dan representasi yang jelas.
                    </p>
                  </div>
                </div>

                {/* AI: Equalizer atau Amplifier */}
                <h3 className="text-xl font-bold font-sans mb-4">AI: Equalizer atau Amplifier Ketimpangan?</h3>
                <p className="font-mono text-sm mb-6">Harapan: AI mendemokratisasi produktivitas. Wawancara menunjukkan realita berbeda.</p>
                <div className="rounded-xl border bg-card p-6 mb-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <p className="text-xs font-mono text-muted-foreground uppercase mb-2">P1 (Basic)</p>
                      <p className="font-mono text-sm">&quot;Pakai ChatGPT ga terlalu sering. Karena sendirian buat bantu brainstorming aja. Tetep aja ga bisa bener-bener pas sesuai dengan yang dibutuhkan.&quot;</p>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <p className="text-xs font-mono text-muted-foreground uppercase mb-2">P4 (Advanced)</p>
                      <p className="font-mono text-sm">&quot;Company-wide vibe coding. Tiap quarter di-assign berapa orang wajib nge-ship something [dengan AI].&quot;</p>
                    </div>
                  </div>
                  <p className="font-mono text-sm mt-4 text-muted-foreground">P3 (Manager): &quot;AI governance-nya akan menjadi skill differentiator.&quot; Yang memiliki governance mengintegrasikan AI ke workflow secara sistematis; yang tidak akan terus ad-hoc tanpa framework.</p>
                </div>

                {/* Impact Paradox */}
                <h3 className="text-xl font-bold font-sans mb-4">The Impact Paradox: Tanpa Bukti, Tanpa Power</h3>
                <p className="font-mono text-sm mb-4">Survei: 33% tidak pernah mengukur business impact. Wawancara mengungkap mengapa dan konsekuensinya:</p>
                <div className="rounded-xl border bg-card p-6 mb-6">
                  <p className="font-mono text-sm mb-2"><Quote className="inline h-4 w-4 mr-1" /> P1: &quot;Keresahan aku dan temen-temen: apa yang kita kerjain ga tau impact-nya sebesar apa. Dan hasilnya gimana.&quot;</p>
                  <p className="font-mono text-sm mb-4"><Quote className="inline h-4 w-4 mr-1" /> P3: &quot;Impact-nya ga bisa diukur dan ga bisa dijadiin bargaining power. Yang jadi bargaining power tuh omongan subjektif.&quot;</p>
                  <p className="font-mono text-sm text-muted-foreground">Root cause: Bukan UX Writer tidak mau mengukur—sering tidak punya akses ke data analytics, tidak ada bandwidth untuk setup tracking, dan tidak ada kultur organisasi yang memprioritaskan copy measurement.</p>
                </div>

                {/* Mapping Project Impact N=18 */}
                <h4 className="text-lg font-semibold font-sans mb-3">Bukti Dampak dari Survei: Mapping Project Impact (N=18)</h4>
                <p className="text-muted-foreground font-mono text-sm mb-4">Pertanyaan opsional: 18 responden mengartikulasikan dampak konkret. Dampak bisnis (39%) mendominasi—ketika UX Writer berhasil mengukur impact, hasilnya signifikan.</p>
                <div className="grid gap-4 sm:grid-cols-3 mb-12">
                  {[
                    { cat: "Dampak Bisnis", n: 7, pct: "39%", examples: ["Conversion +20%", "Registration +10%", "Click rate ↑", "Cost efficiency", "Revenue generation"] },
                    { cat: "Dampak Brand/UX", n: 6, pct: "33%", examples: ["Humanizing copy", "UX simplification", "Task completion", "Information architecture"] },
                    { cat: "Dampak Internal Process", n: 5, pct: "28%", examples: ["Workflow -5 hari", "Copy library + Figma", "Writing guideline", "Compliance"] },
                  ].map((c) => (
                    <div key={c.cat} className="rounded-xl border bg-background p-5">
                      <h5 className="font-semibold font-sans mb-1">{c.cat}</h5>
                      <p className="text-xs text-muted-foreground font-mono mb-3">n = {c.n} ({c.pct})</p>
                      <ul className="text-sm font-mono text-muted-foreground space-y-1">
                        {c.examples.map((ex, i) => (
                          <li key={i}>· {ex}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Harapan: Lima Suara, Satu Pesan */}
                <h3 className="text-xl font-bold font-sans mb-4">Harapan: Lima Suara, Satu Pesan</h3>
                <p className="font-mono text-sm mb-6">Meski dari konteks berbeda, harapan kelima partisipan berkonvergensi:</p>
                <ul className="space-y-4 mb-10">
                  {[
                    { theme: "Recognition", quote: "Dihargai sebagai profesional. Semoga bisa lebih dihargai. Ga dipandang sebelah mata, ga dianggap [tidak] serius. Ini bukan pekerjaan yang mudah.", who: "P1" },
                    { theme: "Ecosystem", quote: "Pengen kayak UX Writer sekuat community-nya designer.", who: "P2" },
                    { theme: "Community", quote: "Semoga berguyub kayak designer.", who: "P3" },
                    { theme: "AI as Opportunity", quote: "This should be the time UX Writer take over.", who: "P4" },
                    { theme: "Identity", quote: "Identitas. UX in general ada yang mewakili Indonesia.", who: "P5" },
                  ].map((h) => (
                    <li key={h.theme} className="rounded-xl border bg-background p-4 pl-6 border-l-4 border-l-primary/30">
                      <span className="font-semibold font-sans">{h.theme}</span>
                      <span className="text-muted-foreground font-mono text-sm"> — {h.quote} ({h.who})</span>
                    </li>
                  ))}
                </ul>

                {/* Sintesis & Kesimpulan */}
                <h3 className="text-xl font-bold font-sans mb-4">Sintesis & Jalan Keluar dari Lingkaran Setan</h3>
                <p className="font-mono text-sm mb-6">Triangulasi data kuantitatif dengan insight kualitatif:</p>
                <ul className="space-y-3 font-mono text-sm mb-6">
                  <li><strong>Gap persepsi 0.82</strong> + &quot;Masih ada yang menggampangkan pekerjaan UX Writer&quot; → Butuh edukasi kontinu + bukti impact konkret.</li>
                  <li><strong>Tech Unicorn 2.3x vs Startup</strong> + Proper team vs solo writer = perbedaan kualitas hidup → Solusi perlu address ecosystem, bukan hanya kompensasi.</li>
                  <li><strong>63% tanpa AI governance</strong> + &quot;AI governance sebagai future skill differentiator&quot; → Gap akan melebar tanpa intervensi.</li>
                  <li><strong>33% tidak pernah mengukur impact</strong> + &quot;Impact ga bisa dijadiin bargaining power&quot; → Butuh standar metrik industri dan playbook self-measurement.</li>
                </ul>
                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                  <p className="font-mono text-sm font-semibold mb-2">Solusi perlu datang dari multiple levels:</p>
                  <ul className="font-mono text-sm space-y-1 text-muted-foreground">
                    <li><strong className="text-foreground">Level Individu:</strong> Proaktif membangun portofolio impact, leverage AI untuk productivity, invest dalam network.</li>
                    <li><strong className="text-foreground">Level Komunitas:</strong> Peer review network lintas perusahaan, sharing salary data, collective advocacy.</li>
                    <li><strong className="text-foreground">Level Industri:</strong> Standardisasi career ladder, metrik impact, dan AI governance framework.</li>
                  </ul>
                  <p className="font-mono text-sm mt-4 italic">UX Writer Indonesia tidak butuh simpati; mereka butuh struktur, tools, dan recognition yang setara dengan kontribusi mereka. Solusi itu harus datang dari gerakan kolektif.</p>
                </div>
              </div>
            </section>

            {/* Rekomendasi Strategis */}
            <section className="py-16 md:py-20 border-b">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-8">Rekomendasi Strategis</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-3 text-primary">Untuk UX Writer</h3>
                    <ul className="font-mono text-sm space-y-2 text-muted-foreground">
                      <li>· Ukur dan komunikasikan dampak bisnis secara terukur (33% belum pernah → target 100% punya data)</li>
                      <li>· Advokasi untuk seat di product planning meeting (7.7% final authority → target lebih tinggi)</li>
                      <li>· Gunakan data riset ini sebagai baseline saat negosiasi gaji dan peran</li>
                      <li>· Bangun portfolio dampak bisnis, bukan hanya portfolio copy</li>
                      <li>· Pertimbangkan Tech Unicorn untuk pertumbuhan karir dan pemahaman lebih baik</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-3 text-primary">Untuk Organisasi/Perusahaan</h3>
                    <ul className="font-mono text-sm space-y-2 text-muted-foreground">
                      <li>· Tutup gap apresiasi: libatkan UX Writer sejak kickoff, bukan sebagai &quot;finishing touch&quot; (14% → target 50%+)</li>
                      <li>· Buat career ladder formal dan terdokumentasi (58% tanpa ladder → target 100% punya)</li>
                      <li>· Right-size tim: ratio maksimal 1:3 Writer-to-Designer (65% understaffed → adequate)</li>
                      <li>· Buat AI governance policy sebelum adopsi meluas (63% tanpa policy → 100% punya)</li>
                      <li>· Benchmark kompensasi dengan Tech Unicorn untuk retain talent</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="font-semibold font-sans mb-3 text-primary">Untuk Industri/Komunitas</h3>
                    <ul className="font-mono text-sm space-y-2 text-muted-foreground">
                      <li>· Publikasikan riset ini sebagai baseline nasional pertama</li>
                      <li>· Kembangkan competency framework dan career benchmark terstandardisasi</li>
                      <li>· Buat program sertifikasi atau kredensial UX Writing Indonesia</li>
                      <li>· Inisiasi salary transparency untuk level playing field</li>
                      <li>· Bangun platform knowledge-sharing untuk thought leadership</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Metodologi */}
            <section className="py-16 md:py-20 border-b bg-muted/30">
              <div className="container max-w-5xl">
                <h2 className="text-2xl font-bold font-sans mb-6">Metodologi</h2>
                <div className="rounded-xl border bg-card p-6 font-mono text-sm">
                  <table className="w-full text-left">
                    <tbody className="space-y-2">
                      <tr><td className="text-muted-foreground py-1 pr-4">Periode Survei</td><td>Desember 2025</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">Platform</td><td>Typeform online survey</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">Total Respons</td><td>85 total (sebelum deduplikasi)</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">UX Writers (Final)</td><td>67 responden unik (2 duplikat dihapus berdasarkan Network ID)</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">HR/Recruiters</td><td>3 responden</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">Metode Analisis</td><td>Statistik deskriptif; persentase berdasarkan valid response per pertanyaan</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">Struktur Laporan</td><td>Pyramid Principle (SCQ → Jawaban → Insight → Rekomendasi)</td></tr>
                      <tr><td className="text-muted-foreground py-1 pr-4">Wawancara Kualitatif</td><td>5 wawancara mendalam, 45–60 menit/sesi, panduan semi-terstruktur (31 pertanyaan)</td></tr>
                    </tbody>
                  </table>
                  <p className="mt-4 text-muted-foreground">Mayoritas pertanyaan n=65; Industry n=57; Company Understanding n=63; Decision Involvement n=60. Laporan dibuat: Januari 2026.</p>
                </div>
              </div>
            </section>


            {/* Closing — no bounce to Resources */}
            <section className="py-16 md:py-20">
              <div className="container max-w-3xl text-center">
                <h2 className="text-2xl font-bold font-sans mb-4">Laporan Lengkap</h2>
                <p className="text-muted-foreground font-mono text-sm">
                  Semua temuan kuantitatif, kualitatif, rekomendasi, dan metodologi riset Industri UX Writing Indonesia 2025 terwujud atas kontribusi praktisi dan stakeholder. Terima kasih atas partisipasi dan dukungannya untuk menjawab kekosongan data tentang UX Writing di Indonesia.
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
