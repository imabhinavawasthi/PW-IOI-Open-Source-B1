import React, { useState } from "react";
import { IconArrowRight, IconBook, IconCheckCircle, IconDownload, IconSparkles } from "./icons";

interface BundleBannerProps {
  onUnlockBundle?: () => void;
}

export function BundleBanner({ onUnlockBundle }: BundleBannerProps) {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    if (onUnlockBundle) {
      onUnlockBundle();
    }
    setClaimed(true);
    setTimeout(() => setClaimed(false), 2500);
  };

  const inclusions = [
    "DSA Pattern Bible (Top 85 LeetCode Patterns)",
    "System Design Primer (HLD + LLD with 12 Case Studies)",
    "Operating Systems Core (Memory, Threads, Linux)",
    "DBMS & SQL Blueprint (Queries & Normalization)",
    "Computer Networks Fast-Track (Protocols & TCP/IP)",
    "OOPs & Design Patterns (C++, Java, Python)",
    "Bonus: 100+ Behavioral HR Questions & STAR Answers",
    "Bonus: Interactive Notion Placement Tracker Template",
  ];

  return (
    <section id="placement-bundle" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-indigo-500/10">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
              <IconSparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>LIMITED PLACEMENT SEASON SPECIAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              The Complete CSE Campus Placement Bundle
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Don't buy individual subjects. Get all 6 comprehensive interview guides, visual architecture charts, plus bonus HR interview prep at over 65% discount.
            </p>

            {/* Inclusions checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <IconDownload className="w-4 h-4 text-indigo-400" />
                Instant PDF & Notion Link
              </span>
              <span className="flex items-center gap-1.5">
                <IconBook className="w-4 h-4 text-indigo-400" />
                800+ Total Pages
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheckCircle className="w-4 h-4 text-emerald-400" />
                Lifetime Free Updates
              </span>
            </div>
          </div>

          {/* Right Pricing Card */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Bundle Savings</span>
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  SAVE ₹2,550
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white">₹899</span>
                  <span className="text-lg text-slate-400 line-through">₹3,449</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  One-time payment • Lifetime access to all 6 books + bonuses
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-xs text-slate-300">
                <li className="flex items-center justify-between">
                  <span>6x Core Subjects (DSA, OS, DBMS, CN, System Design, OOPs)</span>
                  <span className="text-slate-400">₹2,449</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>HR & Behavioral STAR Handbook</span>
                  <span className="text-slate-400">₹499</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Notion Placement Tracker & Mindmaps</span>
                  <span className="text-slate-400">₹500</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleClaim}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg ${
                  claimed
                    ? "bg-emerald-600 text-white shadow-emerald-600/30"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
                }`}
              >
                {claimed ? (
                  <>
                    <IconCheckCircle className="w-5 h-5 text-white" />
                    <span>Bundle Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Placement Bundle</span>
                    <IconArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                🔒 Safe 256-bit encrypted checkout via UPI, Cards, NetBanking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
