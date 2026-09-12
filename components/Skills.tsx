"use client";

import { skillGroups, primarySkills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
          Skills
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
          Technical skills
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl">
          Every technology below is used in at least one project, certification, or current work
          responsibility.
        </p>

        {/* Primary skills highlight */}
        <div className="mb-6">
          <p className="text-sm font-mono text-neutral-400 mb-3 uppercase tracking-wider">
            Primary focus
          </p>
          <div className="flex flex-wrap gap-2">
            {primarySkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium rounded bg-sky-500/10 text-sky-300 border border-sky-500/25 hover:scale-110 hover:bg-sky-500/20 hover:text-sky-100 hover:border-sky-400 hover:shadow-[0_4px_16px_rgba(56,189,248,0.25)] transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* All groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="group p-4 rounded-lg border border-neutral-800 bg-neutral-900/20 hover:scale-[1.03] hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-all"
            >
              <h3 className="text-sm font-mono text-neutral-400 group-hover:text-sky-400 uppercase tracking-wider mb-3 transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2 py-1 text-sm rounded border transition-all hover:scale-110 ${group.primary
                        ? "bg-sky-500/20 text-sky-200 border-sky-500/40 hover:bg-rose-500/15 hover:text-rose-200 hover:border-rose-400"
                        : "bg-sky-500/10 text-sky-300 border-sky-500/25 hover:bg-rose-500/15 hover:text-rose-200 hover:border-rose-400"
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
