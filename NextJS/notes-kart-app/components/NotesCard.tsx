import React, { useState } from "react";
import { NoteItem } from "@/types/note";
import { IconBag, IconCheckCircle, IconDownload, IconStar } from "./icons";

interface NotesCardProps {
  note: NoteItem;
  onAddToCart: (note: NoteItem) => void;
  onPreview: (note: NoteItem) => void;
}

export function NotesCard({ note, onAddToCart, onPreview }: NotesCardProps) {
  const [added, setAdded] = useState(false);

  const discountPercent = Math.round(
    ((note.originalPrice - note.price) / note.originalPrice) * 100
  );

  const handleAdd = () => {
    onAddToCart(note);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
      {/* Top Banner / Category Badge */}
      <div className="p-5 pb-0 flex items-start justify-between gap-2">
        <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
          {note.category}
        </span>
        {note.tag && (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
            {note.tag}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
            {note.title}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            By <span className="text-slate-200 font-medium">{note.author}</span>{" "}
            ({note.authorRole})
          </p>

          {/* Rating & Pages Meta */}
          <div className="mt-3 flex items-center gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded">
              <IconStar className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">{note.rating}</span>
              <span className="text-slate-400">({note.reviewsCount})</span>
            </div>
            <div className="text-slate-400">
              <span>{note.pages} pages</span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
            {note.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Formats pill */}
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
            <span>Formats included:</span>
            <span className="font-medium text-slate-300">{note.formats.join(" • ")}</span>
          </div>

          {/* Price & Actions */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">₹{note.price}</span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{note.originalPrice}
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-400">
                {discountPercent}% OFF
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onPreview(note)}
                className="px-3 py-2 text-xs font-semibold rounded-xl text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                title="Preview sample pages"
              >
                Sample
              </button>

              <button
                type="button"
                onClick={handleAdd}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 active:scale-95 ${
                  added
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
                }`}
              >
                {added ? (
                  <>
                    <IconCheckCircle className="w-4 h-4 text-white" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <IconBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
