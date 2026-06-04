import Link from "next/link";

const skills = [
  "PHP", "Laravel", "MySQL", "JavaScript", "Vue.js",
  "RESTful APIs", "Azure", "AWS", "Git", "AI",
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-950/60 border border-orange-700/50 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Built with Claude AI
            </div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Senior Fullstack Engineer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Mark Pryor
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              20+ years designing, building and modernising web applications
              across insurance, education, government and commercial sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded transition-colors"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-medium px-6 py-3 rounded transition-colors"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex gap-8 pt-4 text-zinc-400 text-sm">
            <div>
              <span className="text-3xl font-bold text-white">20+</span>
              <p>Years experience</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">5+</span>
              <p>Industries served</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/mark.jpg"
            alt="Mark Pryor"
            className="w-72 h-72 rounded-full object-cover border-2 border-zinc-700"
          />
        </div>
      </div>
    </div>
  );
}
