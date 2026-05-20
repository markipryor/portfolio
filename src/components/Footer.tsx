export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Mark Pryor. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="mailto:markpryor@gmail.com" className="hover:text-white transition-colors">
            markpryor@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/markipryor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
