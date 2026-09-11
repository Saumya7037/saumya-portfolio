"use client";

import { AlertTriangle, Search, RotateCcw, BarChart3, Wrench } from "lucide-react";

const mindsetItems = [
  {
    icon: Search,
    title: "Root-cause analysis",
    description:
      "Don't treat symptoms. Trace failures through logs, configs, and system dependencies until the actual cause is understood.",
  },
  {
    icon: AlertTriangle,
    title: "Incident investigation",
    description:
      "Systematic triage: what failed, when, what changed, what is the blast radius, and how to stop recurrence.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & detection",
    description:
      "Failures should be detected by the system before a user reports them. Alerts should be meaningful, not noisy.",
  },
  {
    icon: RotateCcw,
    title: "Repeatability & IaC",
    description:
      "Infrastructure defined as code eliminates configuration drift and makes environments reproducible and auditable.",
  },
  {
    icon: Wrench,
    title: "Automation first",
    description:
      "Repetitive manual work is a reliability risk. Automate deployments, configuration, and validation wherever practical.",
  },
];

export default function ReliabilityMindset() {
  return (
    <section id="reliability" className="py-12 sm:py-16 lg:py-20 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-sm text-sky-500 hover:text-sky-300 tracking-widest uppercase mb-3 transition-colors">
          Reliability Mindset
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
          How I think about systems
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl">
          Daily production troubleshooting at FarEye has shaped how I approach infrastructure and reliability work — systematic investigation, proactive detection, and repeatable solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mindsetItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:scale-[1.03] hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-all">
                    <Icon size={16} className="text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-all" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-100 group-hover:text-sky-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-lg border border-neutral-800 bg-neutral-900/20 max-w-2xl hover:scale-[1.01] hover:border-sky-500/30 hover:bg-neutral-900/40 hover:shadow-[0_8px_30px_rgba(2,132,199,0.06)] transition-all">
          <p className="text-sm font-mono text-neutral-500">
            Note — reliability mindset formed through production support experience. Cloud/SRE project work is
            demonstrated in the Projects section above.
          </p>
        </div>
      </div>
    </section>
  );
}
