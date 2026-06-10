import Link from "next/link";

const done = [
  { id: "–",    title: "Git repository", desc: "Initialised and pushed to GitHub." },
  { id: "–",    title: "Database migrations", desc: "All 19 tables migrated in dependency order covering drivers, constructors, circuits, results, sprints, fastest laps and more." },
  { id: "F1-20", title: "2026 Rd 1 — Australia data entry", desc: "Results entered, portfolio demo updated with race result, standings and calendar." },
  { id: "F1-21", title: "2026 Rd 2 — China data entry ⚡", desc: "Sprint weekend. Results entered, portfolio demo updated with race result, sprint winner, standings and calendar." },
];

const inProgress = [
  { id: "F1-22–41", title: "2026 Season data entry", complexity: "S", desc: "Entering race results within 24 hours of each race completing across the remaining 20 rounds. Portfolio demo updated after each round." },
  { id: "F1-05", title: "Fix & complete existing features", complexity: "S", desc: "Dynamic year in standings, fix Engine::cars() typo, replace dd() error handling, add request validation, add constructor standings, wire up empty stub controllers." },
];

const planned = [
  { id: "F1-01", title: "Database seeders", complexity: "S", desc: "Convert reference data into Laravel seeders so a fresh environment can be fully set up with php artisan migrate --seed." },
  { id: "F1-03", title: "REST API endpoints", complexity: "M", desc: "JSON API routes for races, results, drivers, standings and records using Laravel API Resources for consistent response shapes." },
  { id: "F1-04", title: "Authentication", complexity: "S", desc: "Laravel Sanctum for API auth. Write routes protected behind auth middleware; public read routes remain open." },
  { id: "F1-07", title: "Automated testing", complexity: "M", desc: "PHPUnit feature tests for standings calculation, points systems, API endpoints and import logic." },
  { id: "F1-10–19", title: "Data audits (10 checks)", complexity: "S", desc: "Systematic database checks for position gaps, duplicate grids, orphaned references, points mismatches, invalid time formats, fastest lap validity, sprint flag consistency, and driver death vs result date." },
];

const future = [
  { id: "F1-02", title: "Automated data ingestion", complexity: "M", desc: "Scheduled Laravel commands pulling from Jolpica API (historical data) and OpenF1 (real-time). Replaces manual entry entirely." },
  { id: "F1-06", title: "Frontend improvements", complexity: "M", desc: "Replace the Bootstrap 4 / Blade UI with either an improved Blade dashboard or a Laravel API + React/Next.js frontend. Decision pending F1-03." },
  { id: "F1-08", title: "Deployment", complexity: "M", desc: "Deploy to a public server (Railway, Fly.io or VPS) with production config, MySQL, queue worker and CI/CD pipeline from GitHub." },
  { id: "F1-09", title: "Subscription API", complexity: "XL", desc: "Paid API with key management, subscription tiers, rate limiting and Stripe billing. Requires F1-03 and F1-04 to be complete first." },
];

const complexityColour: Record<string, string> = {
  "S":   "bg-green-900/50 text-green-300 border-green-700/50",
  "S–M": "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  "M":   "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  "L":   "bg-orange-900/50 text-orange-300 border-orange-700/50",
  "XL":  "bg-red-900/50 text-red-300 border-red-700/50",
};

function Card({ id, title, complexity, desc }: { id: string; title: string; complexity?: string; desc: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs text-zinc-500 font-mono">{id}</span>
        {complexity && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${complexityColour[complexity] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
            {complexity}
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-white leading-snug">{title}</p>
      <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function Column({ title, colour, children }: { title: string; colour: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      <div className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full self-start border ${colour}`}>
        {title}
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default function F1Backlog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-10">
        <Link href="/work" className="text-zinc-500 hover:text-white text-sm transition-colors">
          ← My Projects
        </Link>
        <p className="text-red-500 text-sm font-medium tracking-widest uppercase mt-6 mb-3">Formula 1 Application</p>
        <h1 className="text-4xl font-bold text-white">Project Backlog</h1>
        <p className="text-zinc-400 mt-3 text-sm">Roadmap and feature backlog for the F1 statistics application.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <Column title="Done" colour="bg-green-950/60 text-green-400 border-green-700/40">
          {done.map((item) => <Card key={item.title} {...item} />)}
        </Column>
        <Column title="In Progress" colour="bg-blue-950/60 text-blue-400 border-blue-700/40">
          {inProgress.map((item) => <Card key={item.id} {...item} />)}
        </Column>
        <Column title="Planned" colour="bg-yellow-950/60 text-yellow-400 border-yellow-700/40">
          {planned.map((item) => <Card key={item.id} {...item} />)}
        </Column>
        <Column title="Future" colour="bg-zinc-800/80 text-zinc-400 border-zinc-600/40">
          {future.map((item) => <Card key={item.id} {...item} />)}
        </Column>
      </div>
    </div>
  );
}
