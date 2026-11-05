"use client";

import React, { useMemo, useState } from "react";
import { NOTES_DATA } from "@/data/notes";
import { Category, NoteItem } from "@/types/note";
import { CategoryFilter } from "./CategoryFilter";
import { NotesCard } from "./NotesCard";
import { PreviewModal } from "./PreviewModal";
import Link from "next/link";

interface FeaturedNotesProps {
  searchQuery?: string;
  onAddToCart: (note: NoteItem) => void;
}

export function FeaturedNotes({ searchQuery = "", onAddToCart }: FeaturedNotesProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [previewNote, setPreviewNote] = useState<NoteItem | null>(null);

  // Compute counts per category for the filter pills
  const itemCounts = useMemo(() => {
    const counts: Record<string, number> = { All: NOTES_DATA.length };
    NOTES_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter notes by category and search query
  const filteredNotes = useMemo(() => {
    return NOTES_DATA.filter((note) => {
      const matchesCategory =
        selectedCategory === "All" || note.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        note.title.toLowerCase().includes(q) ||
        note.category.toLowerCase().includes(q) ||
        note.author.toLowerCase().includes(q) ||
        note.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="notes-catalog" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Handcrafted for Placement Prep
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Interview Revision Notes
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Choose your subject or grab the complete library. Every note comes with visual mindmaps, complexity tables, and top company interview questions.
          </p>
        </div>

        {/* Category Pills */}
        <div className="w-full md:w-auto">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            itemCounts={itemCounts}
          />
        </div>
      </div>

      {/* Grid of Notes */}
      {filteredNotes.length > 0 ? (
        <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNotes.map((note) => (
            <Link className="" href={`/notes/${note.id}`} key={note.id}>
            <NotesCard
              key={note.id}
              note={note}
              onAddToCart={onAddToCart}
              onPreview={setPreviewNote}
            />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
          <p className="text-lg font-semibold text-slate-200">No notes found matching your filter</p>
          <p className="text-xs text-slate-400 mt-1">
            Try resetting your search query or selecting "All" to browse all available subjects.
          </p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="mt-4 px-4 py-2 text-xs font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            Show All Notes
          </button>
        </div>
      )}

      {/* Sample Preview Modal */}
      <PreviewModal
        note={previewNote}
        onClose={() => setPreviewNote(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}
