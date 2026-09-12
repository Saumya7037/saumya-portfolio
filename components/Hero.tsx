"use client";

import { Download, ArrowRight, Circle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const flowNodes = [
  "Git Push",
  "GitHub Actions",
  "Terraform / Docker",
  "AWS VPC · EC2",
  "Application",
  "CloudWatch",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden dot-grid"
      aria-label="Introduction"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
        {/* Left — Text */}
        <div className="space-y-8 sm:space-y-10">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-sm font-mono text-emerald-400">
            <Circle size={6} className="fill-emerald-400 text-emerald-400 animate-pulse" aria-hidden="true" />
            {profile.status}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <p className="text-sm font-mono text-neutral-400 tracking-widest uppercase">
              {profile.location}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.1]">
              {profile.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-sky-400">
              {profile.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg">
            {profile.tagline}
          </p>

          {/* Supporting sentence */}
          <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
            {profile.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 hover:scale-[1.03] text-neutral-950 font-semibold rounded text-sm transition-all"
            >
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/resume/Saumya-Kumar-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 hover:border-sky-500/50 hover:scale-[1.03] text-neutral-300 hover:text-neutral-100 font-medium rounded text-sm transition-all"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 pt-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-sky-300 hover:scale-[1.05] transition-all"
            >
              <GithubIcon size={15} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-sky-300 hover:scale-[1.05] transition-all"
            >
              <LinkedinIcon size={15} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — Infrastructure flow diagram */}
        <div className="hidden lg:flex justify-end pr-4 xl:pr-12" aria-hidden="true">
          <div className="relative w-72 sm:w-80">
            <div className="absolute inset-0 bg-sky-500/3 rounded-2xl border border-sky-500/10" />
            <div className="relative p-8 space-y-0">
              <p className="font-mono text-sm text-neutral-400 mb-8 text-center tracking-widest uppercase">
                CI/CD Flow
              </p>
              {flowNodes.map((node, i) => (
                <div key={node} className="flex flex-col items-center">
                  <div
                    className={`w-full px-5 py-3.5 rounded-lg text-center text-[15px] font-mono font-medium border transition-all hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(56,189,248,0.15)] ${i === 0
                        ? "border-sky-500/50 text-sky-400 bg-sky-500/10 hover:border-sky-400/70 hover:text-sky-300"
                        : i === flowNodes.length - 1
                          ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 hover:border-emerald-400/70 hover:text-emerald-300"
                          : "border-neutral-700 text-neutral-400 bg-neutral-900/60 hover:border-sky-500/40 hover:text-sky-300"
                      }`}
                  >
                    {node}
                  </div>
                  {i < flowNodes.length - 1 && (
                    <div className="flex flex-col items-center my-1" aria-hidden="true">
                      <div className="w-px h-3 bg-neutral-700" />
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-neutral-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
