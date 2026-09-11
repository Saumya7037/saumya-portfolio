"use client";

import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Let&#39;s connect.
          </h2>
          <p className="text-neutral-300 text-base mb-10 leading-relaxed">
            Interested in Cloud, DevOps, SRE, or infrastructure engineering
            opportunities? Feel free to connect.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-sky-500 hover:bg-sky-400 hover:scale-[1.03] text-neutral-950 font-semibold rounded text-base transition-all"
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:border-sky-500/50 hover:scale-[1.03] text-neutral-200 hover:text-neutral-100 font-medium rounded text-base transition-all"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:border-sky-500/50 hover:scale-[1.03] text-neutral-200 hover:text-neutral-100 font-medium rounded text-base transition-all"
            >
              <GithubIcon size={16} aria-hidden="true" />
              GitHub
            </a>

            <a
              href="/resume/Saumya-Kumar-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 hover:border-sky-500/50 hover:scale-[1.03] text-neutral-200 hover:text-neutral-100 font-medium rounded text-base transition-all"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
