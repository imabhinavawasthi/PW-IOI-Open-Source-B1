import React from "react";
import { TESTIMONIALS_DATA } from "@/data/notes";
import { IconStar } from "./icons";

export function Testimonials() {
  return (
    <section id="reviews" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
          Wall of Success
        </span>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Over 4,500+ Campus Placement Offers
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          See how CSE graduates from across the country used NotesKart to secure offers at dream tech companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <IconStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xs text-white">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.college}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="px-2 py-0.5 text-xs font-bold rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {t.company}
                </span>
                <p className="text-[10px] text-slate-400 mt-1">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
