import React from "react";
import { IconBook, IconCheckCircle, IconDownload, IconShield, IconSparkles, IconZap } from "./icons";

export function ValueProps() {
  const features = [
    {
      icon: <IconZap className="w-6 h-6 text-amber-400" />,
      title: "Engineered for 48-Hour Sprints",
      description:
        "No academic fluff. Every page is dense with actionable patterns, mind maps, and bullet points designed for the night before your interview.",
    },
    {
      icon: <IconBook className="w-6 h-6 text-indigo-400" />,
      title: "Visual Diagrams & Memory Layouts",
      description:
        "Understand complex concepts easily with colored diagrams: OS paging tables, TCP 3-way handshakes, B+ tree rebalancing, and System Design architectures.",
    },
    {
      icon: <IconSparkles className="w-6 h-6 text-cyan-400" />,
      title: "Curated Recent Interview Questions",
      description:
        "Includes the exact questions asked in 2024-2026 on-campus and off-campus technical rounds at Microsoft, Amazon, Google, Uber, and top startups.",
    },
    {
      icon: <IconCheckCircle className="w-6 h-6 text-emerald-400" />,
      title: "Multi-Language Implementations",
      description:
        "Get clean, production-grade code templates in C++, Java, and Python with edge-case checks and detailed time/space analysis.",
    },
    {
      icon: <IconDownload className="w-6 h-6 text-purple-400" />,
      title: "PDF & Notion Workspace Sync",
      description:
        "Read on iPad, annotate in GoodNotes/Notability, or duplicate the Notion workspace to customize notes and track your personal progress.",
    },
    {
      icon: <IconShield className="w-6 h-6 text-blue-400" />,
      title: "Lifetime Free Version Updates",
      description:
        "Recruitment trends change every season. Whenever notes are updated with new company patterns, you get updated editions for free.",
    },
  ];

  return (
    <section id="why-noteskart" className="py-16 lg:py-24 border-y border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Why CSE Students Love NotesKart
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built by Engineers Who Have Been in Your Shoes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Standard college textbooks take weeks to digest. NotesKart provides the high-density shortcut you need to pass technical interviews with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
