"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/notes";
import { IconChevronDown } from "./icons";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
          Got Questions?
        </span>
        <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Everything you need to know about purchasing, accessing, and using NotesKart.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm sm:text-base hover:text-indigo-300 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-indigo-400" : ""
                  }`}
                >
                  <IconChevronDown className="w-5 h-5" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
