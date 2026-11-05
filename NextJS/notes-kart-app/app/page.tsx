"use client";

import React, { useState } from "react";
import { Hero } from "@/components/Hero";
import { FeaturedNotes } from "@/components/FeaturedNotes";
import { BundleBanner } from "@/components/BundleBanner";
import { ValueProps } from "@/components/ValueProps";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { NoteItem } from "@/types/note";
import { NOTES_DATA } from "@/data/notes";

export default function Home() {
  const [cart, setCart] = useState<NoteItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (note: NoteItem) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === note.id)) {
        return prev;
      }
      return [...prev, note];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleUnlockBundle = () => {
    // Add all notes to cart as a bundled purchase
    NOTES_DATA.forEach((note) => handleAddToCart(note));
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">

      

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <FeaturedNotes
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
        />
        <BundleBanner onUnlockBundle={handleUnlockBundle} />
        <ValueProps />
        <Testimonials />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
