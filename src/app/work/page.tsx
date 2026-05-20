const projects = [
  {
    title: "Token Rush",
    type: "Mobile Game",
    description:
      "A fully shipped mobile board game built from concept to app store release. Designed and engineered end-to-end, covering game mechanics, UI, and performance optimisation for mobile devices.",
    tags: ["Mobile", "Swift", "Game Development", "UI/UX"],
    link: "/games/token-rush/",
    hasLink: true,
  },
  {
    title: "Insurance Application",
    type: "Web Application",
    description:
      "A fullstack insurance platform handling complex business logic, policy management, and customer-facing workflows. Built for reliability and scalability in a regulated industry.",
    tags: ["Fullstack", "React", "Node.js", "PostgreSQL"],
    link: null,
    hasLink: false,
  },
  {
    title: "Formula 1 Application",
    type: "Web Application",
    description:
      "A Formula 1 data and results application delivering real-time race information, standings, and statistics with a fast, responsive interface built for performance.",
    tags: ["Fullstack", "React", "APIs", "Data Visualisation"],
    link: null,
    hasLink: false,
  },
];

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
          My Work
        </p>
        <h1 className="text-4xl font-bold text-white">Selected Projects</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col hover:border-zinc-600 transition-colors"
          >
            <div className="bg-zinc-800 h-48 flex items-center justify-center text-zinc-500 text-sm">
              [Screenshot placeholder]
            </div>
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
              {project.hasLink && (
                <a
                  href={project.link!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
