import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Senior Fullstack Engineer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Mark Pryor
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              20 years of experience building products end-to-end — including
              shipped mobile games — bringing product thinking and ownership to
              every project.
            </p>
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
              <span className="text-3xl font-bold text-white">3+</span>
              <p>Shipped products</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
            [Photo placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
