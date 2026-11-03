"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconBag, IconSearch } from "./icons";

interface NavbarProps {
  cartCount?: number;
  onSearchChange?: (term: string) => void;
  onOpenCart?: () => void;
}

export function Navbar({ cartCount = 0, onSearchChange, onOpenCart }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-white text-xl tracking-tight">NK</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-white tracking-tight">NotesKart</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">CSE</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Campus Placement Revision Notes</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <IconSearch className="w-4 h-4 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search DSA patterns, OS paging, SQL queries, System Design..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-900 border border-slate-700/80 rounded-full text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#notes-catalog" className="hover:text-indigo-400 transition-colors">
              Browse Notes
            </a>
            <a href="#placement-bundle" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
              <span>All-In-One Bundle</span>
              <span className="px-1.5 py-0.2 text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded font-semibold">SAVE 65%</span>
            </a>
            <a href="#why-noteskart" className="hover:text-indigo-400 transition-colors">
              Why Us
            </a>
            <a href="#reviews" className="hover:text-indigo-400 transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
              aria-label="View Cart"
            >
              <IconBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="#notes-catalog"
              className="px-4 py-2 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
            >
              Get Notes
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
