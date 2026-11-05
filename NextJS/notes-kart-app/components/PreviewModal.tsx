import React from "react";
import { NoteItem } from "@/types/note";
import { IconCheckCircle, IconDownload, IconStar } from "./icons";

interface PreviewModalProps {
  note: NoteItem | null;
  onClose: () => void;
  onAddToCart: (note: NoteItem) => void;
}

export function PreviewModal({ note, onClose, onAddToCart }: PreviewModalProps) {
  if (!note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-indigo-500/20 text-indigo-300">
                {note.category}
              </span>
              <span className="text-xs text-slate-400">• {note.pages} pages PDF</span>
            </div>
            <h2 className="text-xl font-bold text-white">{note.title}</h2>
            <p className="text-xs text-slate-400 mt-1">
              Curated by {note.author} ({note.authorRole})
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Preview"
          >
            ✕
          </button>
        </div>

        {/* Modal Content - Sample Excerpt */}
        <div className="p-6 space-y-6 flex-1 text-sm text-slate-300">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Sample Chapter Preview: High-Yield Formulas & Cheat Sheets
            </h4>
            <div className="font-mono text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
              <p className="text-emerald-400">// Time & Space Complexity Framework</p>
              <p>• Lookup: Average O(1), Worst Case O(n) (Hash collisions resolved via chaining)</p>
              <p>• Binary Tree Inorder Traversal: Iterative using explicit Stack [O(n) time, O(h) space]</p>
              <p>• Fast & Slow Pointers (Floyd's Cycle): Detect cycle start at (head + meeting_point)</p>
              <p className="text-amber-400">// Crucial Interview Note:</p>
              <p>Always verify edge cases: null roots, empty arrays, duplicate integers, integer overflow!</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-2">What you get in this pack:</h4>
            <ul className="space-y-2 text-xs">
              {note.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full printable PDF format + Notion workspace link</span>
              </li>
              <li className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lifetime access with automatic update notifications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400">Total Price:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">₹{note.price}</span>
              <span className="text-xs text-slate-400 line-through">₹{note.originalPrice}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Back to Catalog
            </button>
            <button
              onClick={() => {
                onAddToCart(note);
                onClose();
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
            >
              Add to Cart • ₹{note.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
