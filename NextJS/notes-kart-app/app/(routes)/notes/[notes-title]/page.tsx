"use client"

interface Note {
  id: string;
  title: string;
  category: string;
  tag: string;
  author: string;
  authorRole: string;
  rating: number;
  reviewsCount: number;
  pages: number;
  formats: string[];
  price: number;
  originalPrice: number;
  highlights: string[];
  popular?: boolean;
}
import { NOTES_DATA } from "@/data/notes";
import { useParams } from "next/navigation";

export default function NotesPage() {
    const params = useParams();
    const note: Note | undefined = NOTES_DATA.find((data) => data.id === params['notes-title']);

    const discount = Math.round(
    ((note.originalPrice - note.price) / note.originalPrice) * 100
  );
  
  return (
    <div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all text-white">
      {/* Header Badges */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {note.category}
          </span>
          {note.tag && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {note.tag}
            </span>
          )}
        </div>
        {/* Title & Author */}
        <h3 className="font-bold text-lg leading-snug">{note.title}</h3>
        <p className="text-xs text-slate-400 mt-1">
          By <span className="text-slate-200">{note.author}</span> • {note.authorRole}
        </p>
        {/* Rating & Pages */}
        <div className="flex items-center gap-3 text-xs text-slate-300 mt-3">
          <span className="flex items-center gap-1 font-semibold text-amber-400">
            ★ {note.rating}
            <span className="text-slate-400 font-normal">({note.reviewsCount})</span>
          </span>
          <span>•</span>
          <span className="text-slate-400">{note.pages} pages</span>
        </div>
        {/* Highlights List */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
          {note.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Footer Formats & Price */}
      <div className="mt-6 pt-4 border-t border-slate-800">
        <p className="text-[11px] text-slate-400 mb-3">
          Formats: <span className="text-slate-200">{note.formats.join(" • ")}</span>
        </p>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-white">₹{note.price}</span>
              <span className="text-xs text-slate-400 line-through">₹{note.originalPrice}</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-400">{discount}% OFF</span>
          </div>
          <button
            type="button"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all cursor-pointer active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
