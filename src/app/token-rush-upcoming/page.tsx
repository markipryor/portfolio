import Link from "next/link";

const done = [
  { id: "–", title: "Quick game mode", desc: "46-square board, fast-paced gameplay fully implemented." },
  { id: "–", title: "Core game mechanics", desc: "Collect, Steal, Forfeit, Rebalance, Pass-Start bonus, sprint rounds." },
  { id: "–", title: "Safari animal player pieces", desc: "🦁🐘🦒🦓 — unique pieces for each player on board and in cards." },
  { id: "–", title: "Animated SVG board", desc: "Burst animations, confetti on win, roll button in board centre." },
];

const inProgress = [
  { id: "BR-01", title: "Medium & Long game modes", complexity: "S", desc: "Quick is live. Medium and Long board configs and token distributions are in progress." },
  { id: "BR-02", title: "Graphical improvements", complexity: "M", desc: "Richer square art, smoother transitions, themed colour palettes." },
];

const planned = [
  { id: "BR-05", title: "Mobile board visibility", complexity: "S", desc: "Viewport and safe-area audit to ensure the full board is visible on all mobile devices." },
  { id: "BR-03", title: "Randomised board", complexity: "S–M", desc: "Randomise token, steal and forfeit square positions each game while keeping the layout balanced." },
  { id: "BR-04", title: "Automated testing", complexity: "M", desc: "Playwright end-to-end tests run in CI after each version is built." },
];

const future = [
  { id: "BR-06", title: "Achievements", complexity: "M", desc: "Unlock conditions, localStorage storage, achievement gallery screen and unlock animations." },
  { id: "BR-10", title: "Multiplayer", complexity: "XL", desc: "Real-time human vs human play via WebSockets. Requires lobby, room system and reconnection handling." },
  { id: "BR-07", title: "In-game currency & items", complexity: "XL", desc: "Board backgrounds, token skins, persistent wallet. Needs full spec before any code." },
  { id: "BR-08", title: "Ad integration", complexity: "L", desc: "Google AdMob banners and interstitials. Requires Android packaging first." },
  { id: "BR-09", title: "Ad-free purchase", complexity: "M", desc: "IAP entitlement to remove ads permanently. Part of one monetisation system with BR-07/08." },
  { id: "BR-11", title: "Google Play publishing", complexity: "M", desc: "Developer account, store listing, release pipeline, Play policy compliance." },
];

const complexityColour: Record<string, string> = {
  "S": "bg-green-900/50 text-green-300 border-green-700/50",
  "S–M": "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  "M": "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  "L": "bg-orange-900/50 text-orange-300 border-orange-700/50",
  "XL": "bg-red-900/50 text-red-300 border-red-700/50",
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

export default function TokenRushUpcoming() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-10">
        <Link href="/work" className="text-zinc-500 hover:text-white text-sm transition-colors">
          ← My Projects
        </Link>
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mt-6 mb-3">Token Rush</p>
        <h1 className="text-4xl font-bold text-white">Upcoming Features</h1>
        <p className="text-zinc-400 mt-3 text-sm">Planned roadmap and feature backlog for Token Rush.</p>
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
