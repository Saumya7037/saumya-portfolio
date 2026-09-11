"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-800/50 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-base font-medium text-neutral-200">{profile.name}</p>
          <p className="text-sm font-mono text-neutral-500 mt-0.5">
            {profile.title}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 hover:text-sky-400 hover:scale-110 transition-all"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 hover:text-sky-400 hover:scale-110 transition-all"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-neutral-500 hover:text-sky-400 hover:scale-110 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-sm text-neutral-600 font-mono">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
