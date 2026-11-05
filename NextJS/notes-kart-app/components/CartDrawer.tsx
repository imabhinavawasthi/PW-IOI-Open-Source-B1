import React from "react";
import { NoteItem } from "@/types/note";
import { IconCheckCircle } from "./icons";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NoteItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price, 0);
  const totalOriginal = items.reduce((sum, item) => sum + item.originalPrice, 0);
  const totalSavings = totalOriginal - total;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Your Cart</h2>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300">
                {items.length} {items.length === 1 ? "note" : "notes"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Cart items list */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <p className="text-sm">Your cart is currently empty.</p>
                <p className="text-xs text-slate-400 mt-1">
                  Explore notes from the catalog and add them to get instant access.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold uppercase text-indigo-400">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.pages} Pages • PDF + Notion</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-sm font-bold text-white">₹{item.price}</span>
                      <span className="text-xs text-slate-400 line-through">₹{item.originalPrice}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-xs text-rose-400 hover:text-rose-300 transition-colors"
                    title="Remove item"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/80 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span>₹{totalOriginal}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Instant Discount:</span>
                  <span>-₹{totalSavings}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total Amount:</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => alert(`Proceeding to mock checkout for ₹${total}! You will receive direct PDF links instantly.`)}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Pay ₹{total} via UPI / Card</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <IconCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant automated email & on-screen download</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
