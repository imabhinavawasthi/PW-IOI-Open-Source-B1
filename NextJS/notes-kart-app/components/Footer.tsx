import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center font-bold text-white text-base">
                NK
              </div>
              <span className="font-bold text-base text-white tracking-tight">NotesKart</span>
            </Link>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              India's premier interview preparation marketplace for Computer Science & Engineering college students. Crack your dream on-campus & off-campus tech placements.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="px-2 py-1 text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-medium">
                ● 100% Secure Checkout
              </span>
            </div>
          </div>

          {/* Core Subjects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Core CSE Subjects
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#notes-catalog" className="hover:text-indigo-400 transition-colors">
                  Data Structures & Algorithms
                </a>
              </li>
              <li>
                <a href="#notes-catalog" className="hover:text-indigo-400 transition-colors">
                  System Design (HLD + LLD)
                </a>
              </li>
              <li>
                <a href="#notes-catalog" className="hover:text-indigo-400 transition-colors">
                  Operating Systems & Linux
                </a>
              </li>
              <li>
                <a href="#notes-catalog" className="hover:text-indigo-400 transition-colors">
                  Database Management Systems (SQL)
                </a>
              </li>
              <li>
                <a href="#notes-catalog" className="hover:text-indigo-400 transition-colors">
                  Computer Networks & Protocols
                </a>
              </li>
            </ul>
          </div>

          {/* Placement Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Placement Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#placement-bundle" className="hover:text-indigo-400 transition-colors">
                  Campus Placement All-in-One Bundle
                </a>
              </li>
              <li>
                <a href="#why-noteskart" className="hover:text-indigo-400 transition-colors">
                  48-Hour Technical Revision Guide
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-indigo-400 transition-colors">
                  Placed Students Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Guarantees */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Accepted Payment Methods
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Instant digital delivery right after payment confirmation.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-semibold text-slate-300">
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">UPI</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Google Pay</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">PhonePe</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Paytm</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">RuPay / Visa</span>
            </div>
            <p className="mt-4 text-[11px] text-slate-400">
              Support: support@noteskart.in
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} NotesKart Inc. Crafted with care for CSE engineers.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
