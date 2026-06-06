import Link from "next/link";

const projects = [
  {
    title: "Token Rush",
    type: "Browser Game",
    description:
      "A browser-based multiplayer board game built from scratch — game design, SVG rendering, animations and CPU AI all hand-coded. Quick mode is fully playable. Medium and Long modes are in progress.",
    tags: ["HTML5", "SVG", "JavaScript", "Game Design", "Claude"],
    image: "/images/token-rush.png",
    link: "/games/token-rush/",
    upcomingLink: "/token-rush-upcoming",
    hasLink: true,
  },
  {
    title: "Insurance Platform Modernisation",
    type: "Web Application",
    description:
      "Led modernisation of a legacy AWS-hosted insurance platform, upgrading from PHP 5.4 to PHP 8.4 while maintaining production stability. Reduced technical debt, improved security and maintainability, and resolved complex compatibility issues across a large existing codebase.",
    tags: ["PHP", "Laravel", "AWS", "Legacy Modernisation"],
    image: null,
    link: null,
    upcomingLink: null,
    hasLink: false,
  },
  {
    title: "RMIT Student Results Platform",
    type: "Web Application",
    description:
      "Lead developer on the redevelopment of a 10-year-old on-premise student results system into a modern Azure-hosted Laravel platform, delivered for both RMIT Australia and RMIT Vietnam. Replaced a complex spreadsheet-based process, significantly reducing errors and improving efficiency for staff, teachers and students.",
    tags: ["PHP", "Laravel", "MySQL", "Azure", "Vue.js"],
    image: null,
    link: null,
    upcomingLink: null,
    hasLink: false,
  },
  {
    title: "Formula 1 Application",
    type: "Web Application",
    description:
      "A Formula 1 results and statistics application covering the full history of the sport. Built on Laravel 9 with a normalised MySQL schema across 19 tables — drivers, constructors, circuits, entrants, cars, engines and results. Features driver standings, race results, pole positions, fastest laps and records, with complex points calculation logic handling rule changes across every F1 season since 1950.",
    tags: ["PHP", "Laravel", "MySQL", "Data Visualisation"],
    image: "/images/f1-demo.png",
    link: "/demos/f1",
    upcomingLink: "/f1-backlog",
    hasLink: true,
  },
];

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
          My Work
        </p>
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col hover:border-zinc-600 transition-colors"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover object-top"
              />
            ) : (
              <div className="bg-zinc-800 h-48 flex items-center justify-center text-zinc-500 text-sm">
                [Screenshot placeholder]
              </div>
            )}
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div>
                <p className="text-blue-400 text-xs font-medium tracking-wider uppercase mb-1">
                  {project.type}
                </p>
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.hasLink && project.link?.startsWith("/demos") && (
                  <Link
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View Demo →
                  </Link>
                )}
                {project.hasLink && !project.link?.startsWith("/demos") && (
                  <a
                    href={project.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View Project →
                  </a>
                )}
                {project.upcomingLink && (
                  <Link
                    href={project.upcomingLink}
                    className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    Upcoming Features →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
