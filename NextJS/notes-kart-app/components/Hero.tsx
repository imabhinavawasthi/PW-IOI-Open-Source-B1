import React from "react";
import { IconArrowRight, IconBook, IconDownload, IconShield, IconSparkles, IconStar, IconZap } from "./icons";
import { PLATFORM_STATS } from "@/data/notes";

export function Hero() {
  const companyTags = ["Google", "Microsoft", "Amazon", "Uber", "Atlassian", "Oracle", "Adobe", "Goldman Sachs"];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <IconSparkles className="w-4 h-4 text-amber-400" />
            <span>Curated for 2026 Campus Placement & Internship Drives</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Stop Reading 800-Page Books.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
              Revise Core CSE in 48 Hours.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            High-yield interview revision notes, DSA pattern templates, and system design diagrams written by engineers from FAANG & top tier product companies. No filler, only what recruiters ask.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#notes-catalog"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Notes Catalog</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#placement-bundle"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <IconBook className="w-4 h-4 text-indigo-400" />
              <span>Get Complete CSE Bundle</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <IconDownload className="w-4 h-4 text-emerald-400" />
              <span>Instant PDF & Notion Download</span>
            </div>
            <div className="flex items-center gap-2">
              <IconZap className="w-4 h-4 text-amber-400" />
              <span>Lifetime Free Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <IconShield className="w-4 h-4 text-indigo-400" />
              <span>100% Verified Content</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {PLATFORM_STATS.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recruiter / Placement Company Tags */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Students placed at top companies using NotesKart
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {companyTags.map((company) => (
              <span
                key={company}
                className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/80 text-slate-300 border border-slate-800"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
