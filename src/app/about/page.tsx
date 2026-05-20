const skills = [
  "PHP", "Laravel", "MySQL", "JavaScript",
  "Vue.js", "AWS", "Azure", "API Integrations",
  "Solution Design", "Agile", "Legacy Modernisation", "Mobile Games",
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
                I am an experienced Full Stack Developer with more than 20 years of
                experience delivering and modernising enterprise web applications
                across education, insurance, government and commercial sectors.
              </p>
              <p>
                My background includes strong expertise in PHP, Laravel, MySQL,
                JavaScript, cloud-hosted platforms and API integrations, along with
                recent hands-on experience modernising legacy AWS-hosted applications
                from PHP 5.4 to PHP 8.4.
              </p>
              <p>
                I have worked across the full software development lifecycle —
                including solution design, development, testing, deployment and
                ongoing support within Agile environments — and am experienced working
                both onsite and remotely within distributed teams.
              </p>
              <p>
                Throughout my career, including nearly 10 years at RMIT UP and more
                recent consulting work, I have led major redevelopment projects focused
                on improving scalability, maintainability, security and operational
                efficiency. I combine strong technical problem-solving skills with
                effective stakeholder communication and enjoy working in collaborative
                engineering environments that embrace evolving technologies including
                Vue.js, Azure, AWS and AI-assisted development tools.
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
