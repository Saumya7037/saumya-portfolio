"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

function ArchitecturePreview({ flow }: { flow: string[] }) {
  const preview = flow.slice(0, 5);
  return (
    <div className="flex items-center gap-1 flex-wrap" aria-hidden="true">
      {preview.map((node, i) => (
        <span key={node} className="flex items-center gap-1">
          <span className="px-2 py-1 text-sm font-mono text-neutral-400 bg-neutral-800/60 rounded border border-neutral-700/50 hover:scale-105 hover:border-sky-500/40 hover:text-sky-300 transition-all">
            {node}
          </span>
          {i < preview.length - 1 && (
            <span className="text-neutral-700 text-sm">→</span>
          )}
        </span>
      ))}
      {flow.length > 5 && (
        <span className="text-neutral-600 text-sm">…</span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
          Projects
        </p>
        <h2 className="text-4xl font-bold text-neutral-100 mb-4">
          Engineering projects
        </h2>
        <p className="text-neutral-400 text-base mb-12 max-w-xl">
          Hands-on cloud infrastructure and DevOps projects with full code, architecture, and deployment documentation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col p-6 rounded-xl border transition-all hover:-translate-y-1 hover:scale-[1.01] ${
                project.featured
                  ? "border-sky-500/30 bg-sky-500/3 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-500/10"
                  : "border-neutral-800 bg-neutral-900/30 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-sm text-neutral-500">
                  {project.number}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 text-sm font-mono rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/25">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-sky-200 mb-3 leading-snug transition-colors">
                {project.title}
              </h3>

              <p className="text-base text-neutral-300 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Architecture preview */}
              <div className="mb-5">
                <p className="text-sm font-mono text-neutral-500 mb-2">
                  Architecture
                </p>
                <ArchitecturePreview flow={project.architectureFlow} />
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50 hover:scale-105 hover:bg-sky-500/10 hover:text-sky-300 hover:border-sky-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Link
                  href={project.detailPath}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 hover:scale-[1.05] transition-all"
                >
                  View Case Study
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-sky-300 hover:scale-[1.05] transition-all"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GithubIcon size={14} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
