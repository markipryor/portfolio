"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight">
          Mark Pryor
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href="/cv.pdf"
          download
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
