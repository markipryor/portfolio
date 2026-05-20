"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:markpryor@gmail.com?subject=Portfolio enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold text-white">Contact Me</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-zinc-300 text-lg leading-relaxed">
            I am open to fullstack engineering roles. Feel free to reach out
            via any of the channels below or use the form.
          </p>

          <div className="space-y-4">
            <a
              href="tel:+61424866266"
              className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 text-lg">
                ✆
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Phone</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  +61 424 866 266
                </p>
              </div>
            </a>

            <a
              href="mailto:markpryor@gmail.com"
              className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 text-lg">
                ✉
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  markpryor@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/markipryor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 text-lg">
                in
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">LinkedIn</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  linkedin.com/in/markipryor
                </p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {sent ? (
            <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-6 text-blue-300">
              Your email client should have opened. Thank you for getting in touch!
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
