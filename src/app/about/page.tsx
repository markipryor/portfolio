const skills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Swift", "Mobile Development", "PostgreSQL", "REST APIs",
  "Git", "AWS", "[Skill placeholder]", "[Skill placeholder]",
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h1 className="text-4xl font-bold text-white mb-6">
              Senior Fullstack Engineer
            </h1>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                [Bio placeholder — based in [City], I am a senior fullstack engineer
                with over 20 years of experience delivering software across web,
                mobile, and game platforms.]
              </p>
              <p>
                [Paragraph two — types of companies and projects worked on, e.g.
                enterprise, startups, agencies. What makes your work distinctive.]
              </p>
              <p>
                Beyond professional work, I design and ship mobile games — a
                discipline that sharpens my eye for performance, UX, and
                end-to-end product ownership in ways that carry directly into
                every engineering role I take on.
              </p>
            </div>
          </div>
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="space-y-10">
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
              [Photo placeholder]
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
