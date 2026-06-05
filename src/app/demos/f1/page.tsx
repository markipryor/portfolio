"use client";

import { useState } from "react";
import Link from "next/link";

const driverStandings2025 = [
  { pos: 1,  name: "Lando Norris",       constructor: "McLaren",       points: 349, wins: 7, poles: 6, podiums: 16 },
  { pos: 2,  name: "Oscar Piastri",      constructor: "McLaren",       points: 320, wins: 6, poles: 4, podiums: 13 },
  { pos: 3,  name: "Max Verstappen",     constructor: "Red Bull",      points: 313, wins: 5, poles: 7, podiums: 12 },
  { pos: 4,  name: "George Russell",     constructor: "Mercedes",      points: 241, wins: 2, poles: 2, podiums: 8  },
  { pos: 5,  name: "Charles Leclerc",    constructor: "Ferrari",       points: 197, wins: 0, poles: 1, podiums: 7  },
  { pos: 6,  name: "Lewis Hamilton",     constructor: "Ferrari",       points: 127, wins: 0, poles: 0, podiums: 0  },
  { pos: 7,  name: "Kimi Antonelli",     constructor: "Mercedes",      points: 110, wins: 0, poles: 0, podiums: 2  },
  { pos: 8,  name: "Alexander Albon",    constructor: "Williams",      points: 70,  wins: 0, poles: 0, podiums: 0  },
  { pos: 9,  name: "Nico Hülkenberg",    constructor: "Sauber",        points: 43,  wins: 0, poles: 0, podiums: 1  },
  { pos: 10, name: "Isack Hadjar",       constructor: "RB",            points: 42,  wins: 0, poles: 0, podiums: 1  },
  { pos: 11, name: "Oliver Bearman",     constructor: "Haas",          points: 38,  wins: 0, poles: 0, podiums: 0  },
  { pos: 12, name: "Fernando Alonso",    constructor: "Aston Martin",  points: 37,  wins: 0, poles: 0, podiums: 0  },
  { pos: 13, name: "Liam Lawson",        constructor: "RB",            points: 36,  wins: 0, poles: 0, podiums: 0  },
  { pos: 14, name: "Carlos Sainz",       constructor: "Williams",      points: 29,  wins: 0, poles: 0, podiums: 1  },
  { pos: 15, name: "Lance Stroll",       constructor: "Aston Martin",  points: 28,  wins: 0, poles: 0, podiums: 0  },
  { pos: 16, name: "Esteban Ocon",       constructor: "Haas",          points: 26,  wins: 0, poles: 0, podiums: 0  },
  { pos: 17, name: "Yuki Tsunoda",       constructor: "Red Bull",      points: 20,  wins: 0, poles: 0, podiums: 0  },
  { pos: 18, name: "Gabriel Bortoleto",  constructor: "Sauber",        points: 19,  wins: 0, poles: 0, podiums: 0  },
  { pos: 19, name: "Pierre Gasly",       constructor: "Alpine",        points: 16,  wins: 0, poles: 0, podiums: 0  },
];

const constructorStandings2025 = [
  { pos: 1,  name: "McLaren",       points: 669, wins: 13 },
  { pos: 2,  name: "Mercedes",      points: 351, wins: 2  },
  { pos: 3,  name: "Red Bull",      points: 333, wins: 5  },
  { pos: 4,  name: "Ferrari",       points: 324, wins: 0  },
  { pos: 5,  name: "Williams",      points: 99,  wins: 0  },
  { pos: 6,  name: "RB",            points: 78,  wins: 0  },
  { pos: 7,  name: "Aston Martin",  points: 65,  wins: 0  },
  { pos: 8,  name: "Haas",          points: 64,  wins: 0  },
  { pos: 9,  name: "Sauber",        points: 62,  wins: 0  },
  { pos: 10, name: "Alpine",        points: 16,  wins: 0  },
];

const races2025 = [
  { round: 1,  name: "Australia",      date: "16 Mar", winner: "Lando Norris",    team: "McLaren",   sprint: false },
  { round: 2,  name: "China",          date: "23 Mar", winner: "Oscar Piastri",   team: "McLaren",   sprint: true  },
  { round: 3,  name: "Japan",          date: "6 Apr",  winner: "Max Verstappen",  team: "Red Bull",  sprint: false },
  { round: 4,  name: "Bahrain",        date: "13 Apr", winner: "Oscar Piastri",   team: "McLaren",   sprint: false },
  { round: 5,  name: "Saudi Arabia",   date: "20 Apr", winner: "Oscar Piastri",   team: "McLaren",   sprint: false },
  { round: 6,  name: "Miami",          date: "4 May",  winner: "Oscar Piastri",   team: "McLaren",   sprint: true  },
  { round: 7,  name: "Emilia Romagna", date: "18 May", winner: "Max Verstappen",  team: "Red Bull",  sprint: false },
  { round: 8,  name: "Monaco",         date: "25 May", winner: "Lando Norris",    team: "McLaren",   sprint: false },
  { round: 9,  name: "Spain",          date: "1 Jun",  winner: null,              team: null,        sprint: false },
  { round: 10, name: "Canada",         date: "15 Jun", winner: "George Russell",  team: "Mercedes",  sprint: false },
  { round: 11, name: "Austria",        date: "29 Jun", winner: "Lando Norris",    team: "McLaren",   sprint: false },
  { round: 12, name: "Great Britain",  date: "6 Jul",  winner: "Lando Norris",    team: "McLaren",   sprint: false },
  { round: 13, name: "Belgium",        date: "27 Jul", winner: "Oscar Piastri",   team: "McLaren",   sprint: true  },
  { round: 14, name: "Hungary",        date: "3 Aug",  winner: "Lando Norris",    team: "McLaren",   sprint: false },
  { round: 15, name: "Dutch",          date: "31 Aug", winner: "Oscar Piastri",   team: "McLaren",   sprint: false },
  { round: 16, name: "Italy",          date: "7 Sep",  winner: "Max Verstappen",  team: "Red Bull",  sprint: false },
  { round: 17, name: "Azerbaijan",     date: "21 Sep", winner: "Max Verstappen",  team: "Red Bull",  sprint: false },
  { round: 18, name: "Singapore",      date: "5 Oct",  winner: "George Russell",  team: "Mercedes",  sprint: false },
  { round: 19, name: "United States",  date: "19 Oct", winner: "Max Verstappen",  team: "Red Bull",  sprint: true  },
  { round: 20, name: "Mexico City",    date: "26 Oct", winner: "Lando Norris",    team: "McLaren",   sprint: false },
  { round: 21, name: "Sao Paulo",      date: "9 Nov",  winner: "Lando Norris",    team: "McLaren",   sprint: true  },
];

const allTimeWins = [
  { name: "Lewis Hamilton",     wins: 105 },
  { name: "Michael Schumacher", wins: 91  },
  { name: "Max Verstappen",     wins: 63  },
  { name: "Sebastian Vettel",   wins: 53  },
  { name: "Alain Prost",        wins: 51  },
  { name: "Ayrton Senna",       wins: 41  },
  { name: "Fernando Alonso",    wins: 32  },
  { name: "Nigel Mansell",      wins: 31  },
  { name: "Jackie Stewart",     wins: 27  },
  { name: "Niki Lauda",         wins: 25  },
];

const allTimePoles = [
  { name: "Lewis Hamilton",     poles: 104 },
  { name: "Michael Schumacher", poles: 68  },
  { name: "Ayrton Senna",       poles: 65  },
  { name: "Sebastian Vettel",   poles: 57  },
  { name: "Max Verstappen",     poles: 47  },
  { name: "Juan Manuel Fangio", poles: 36  },
  { name: "Jim Clark",          poles: 34  },
  { name: "Alain Prost",        poles: 33  },
  { name: "Nigel Mansell",      poles: 32  },
  { name: "Nico Rosberg",       poles: 30  },
];

const allTimeFastestLaps = [
  { name: "Michael Schumacher", fl: 77 },
  { name: "Lewis Hamilton",     fl: 67 },
  { name: "Kimi Räikkönen",     fl: 46 },
  { name: "Alain Prost",        fl: 41 },
  { name: "Sebastian Vettel",   fl: 38 },
  { name: "Max Verstappen",     fl: 33 },
  { name: "Nigel Mansell",      fl: 30 },
  { name: "Jim Clark",          fl: 28 },
  { name: "Fernando Alonso",    fl: 26 },
  { name: "Mika Häkkinen",      fl: 25 },
];

const teamColours: Record<string, string> = {
  "McLaren":      "bg-orange-500",
  "Ferrari":      "bg-red-600",
  "Mercedes":     "bg-teal-500",
  "Red Bull":     "bg-blue-700",
  "Williams":     "bg-sky-500",
  "RB":           "bg-blue-500",
  "Aston Martin": "bg-green-600",
  "Sauber":       "bg-green-500",
  "Haas":         "bg-red-400",
  "Alpine":       "bg-pink-500",
};

type Tab = "drivers" | "constructors" | "calendar" | "records";
type Year = "2025" | "2026";

function NoData({ year }: { year: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-4xl mb-4">🏎️</p>
      <p className="text-white font-semibold text-lg mb-2">{year} data not available yet</p>
      <p className="text-zinc-500 text-sm">Results will appear here as the season progresses.</p>
    </div>
  );
}

export default function F1Demo() {
  const [tab, setTab] = useState<Tab>("drivers");
  const [year, setYear] = useState<Year>("2025");
  const [recordTab, setRecordTab] = useState<"wins" | "poles" | "fl">("wins");

  const maxDriverPoints = driverStandings2025[0].points;
  const maxConstructorPoints = constructorStandings2025[0].points;

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-10">
        <Link href="/work" className="text-zinc-500 hover:text-white text-sm transition-colors">
          ← My Projects
        </Link>
        <div className="flex items-end justify-between mt-6 mb-1 flex-wrap gap-4">
          <div>
            <p className="text-red-500 text-sm font-medium tracking-widest uppercase mb-2">Formula 1</p>
            <h1 className="text-4xl font-bold text-white">Statistics Demo</h1>
          </div>
          <span className="text-xs text-zinc-500 bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full">
            Data from live MySQL database
          </span>
        </div>
        <p className="text-zinc-400 text-sm mt-3">
          Real data extracted from a Laravel 9 / MySQL application with 19 normalised tables and 27,000+ historical race results.
        </p>
      </div>

      {/* Main tab nav */}
      <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1 w-fit mb-2">
        {([
          ["drivers", "Driver Standings"],
          ["constructors", "Constructor Standings"],
          ["calendar", "Calendar"],
          ["records", "All-Time Records"],
        ] as [Tab, string][]).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tab === key ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Year sub-tabs (hidden for All-Time Records) */}
      {tab !== "records" && (
        <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1 w-fit mb-6">
          {(["2025", "2026"] as Year[]).map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                year === y ? "bg-red-700 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      )}

      {/* Season incomplete notice */}
      {tab !== "records" && year === "2025" && (
        <p className="text-xs text-amber-500/80 mb-4">⚠ 2025 season in progress — data through round 21 of 24.</p>
      )}

      {/* Driver Standings */}
      {tab === "drivers" && year === "2026" && <NoData year="2026" />}
      {tab === "drivers" && year === "2025" && (
        <div className="space-y-2">
          {driverStandings2025.map((d) => (
            <div key={d.name} className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-4">
              <span className="text-zinc-500 text-sm w-5 text-right font-mono">{d.pos}</span>
              <div className={`w-1 h-8 rounded-full ${teamColours[d.constructor] ?? "bg-zinc-600"}`} />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">{d.name}</p>
                <p className="text-zinc-500 text-xs">{d.constructor}</p>
              </div>
              <div className="hidden sm:flex gap-6 text-xs text-zinc-400 text-right">
                <div><p className="text-white font-medium">{d.wins}</p><p>Wins</p></div>
                <div><p className="text-white font-medium">{d.poles}</p><p>Poles</p></div>
                <div><p className="text-white font-medium">{d.podiums}</p><p>Podiums</p></div>
              </div>
              <div className="text-right min-w-[60px]">
                <p className="text-white font-bold text-lg">{d.points}</p>
                <div className="w-full bg-zinc-800 rounded-full h-1 mt-1">
                  <div className={`h-1 rounded-full ${teamColours[d.constructor] ?? "bg-zinc-600"}`} style={{ width: `${(d.points / maxDriverPoints) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Constructor Standings */}
      {tab === "constructors" && year === "2026" && <NoData year="2026" />}
      {tab === "constructors" && year === "2025" && (
        <div className="space-y-2">
          {constructorStandings2025.map((c) => (
            <div key={c.name} className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-4">
              <span className="text-zinc-500 text-sm w-5 text-right font-mono">{c.pos}</span>
              <div className={`w-1 h-8 rounded-full ${teamColours[c.name] ?? "bg-zinc-600"}`} />
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{c.name}</p>
                <p className="text-zinc-500 text-xs">{c.wins} win{c.wins !== 1 ? "s" : ""}</p>
              </div>
              <div className="text-right min-w-[80px]">
                <p className="text-white font-bold text-lg">{c.points}</p>
                <div className="w-full bg-zinc-800 rounded-full h-1 mt-1">
                  <div className={`h-1 rounded-full ${teamColours[c.name] ?? "bg-zinc-600"}`} style={{ width: `${(c.points / maxConstructorPoints) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Calendar */}
      {tab === "calendar" && year === "2026" && <NoData year="2026" />}
      {tab === "calendar" && year === "2025" && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-zinc-500 text-xs uppercase tracking-wider border-b border-zinc-800">
                <th className="pb-3 text-left w-8">#</th>
                <th className="pb-3 text-left">Grand Prix</th>
                <th className="pb-3 text-left">Date</th>
                <th className="pb-3 text-left">Winner</th>
                <th className="pb-3 text-left">Constructor</th>
                <th className="pb-3 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {races2025.map((r) => (
                <tr key={r.round} className="hover:bg-zinc-900/60 transition-colors">
                  <td className="py-3 text-zinc-500 font-mono text-xs">{r.round}</td>
                  <td className="py-3 text-white font-medium">{r.name}</td>
                  <td className="py-3 text-zinc-400">{r.date}</td>
                  <td className="py-3 text-zinc-300">{r.winner ?? <span className="text-zinc-600 italic">Pending</span>}</td>
                  <td className="py-3">
                    {r.team && (
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${teamColours[r.team] ?? "bg-zinc-600"}`} />
                        <span className="text-zinc-400 text-xs">{r.team}</span>
                      </span>
                    )}
                  </td>
                  <td className="py-3 text-center">
                    {r.sprint && <span className="text-xs bg-purple-900/50 text-purple-300 border border-purple-700/40 px-2 py-0.5 rounded-full">Sprint</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* All-Time Records */}
      {tab === "records" && (
        <div>
          <div className="flex gap-1 mb-6 w-fit bg-zinc-900 border border-zinc-800 rounded-lg p-1">
            {([["wins", "Most Wins"], ["poles", "Most Poles"], ["fl", "Most Fastest Laps"]] as ["wins" | "poles" | "fl", string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setRecordTab(key)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${recordTab === key ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {(recordTab === "wins"
              ? allTimeWins.map((r, i) => ({ name: r.name, value: r.wins, max: allTimeWins[0].wins, i }))
              : recordTab === "poles"
              ? allTimePoles.map((r, i) => ({ name: r.name, value: r.poles, max: allTimePoles[0].poles, i }))
              : allTimeFastestLaps.map((r, i) => ({ name: r.name, value: r.fl, max: allTimeFastestLaps[0].fl, i }))
            ).map(({ name, value, max, i }) => (
              <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-4">
                <span className="text-zinc-500 text-sm w-5 text-right font-mono">{i + 1}</span>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <div className="w-full bg-zinc-800 rounded-full h-1 mt-2">
                    <div className="h-1 rounded-full bg-red-500" style={{ width: `${(value / max) * 100}%` }} />
                  </div>
                </div>
                <span className="text-white font-bold text-lg w-8 text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
