import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NotesKart | Interview Prep Notes for CSE Students",
  description:
    "Curated, high-yield interview revision notes, DSA cheat sheets, and system design diagrams for CSE college students cracking tech campus placements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {/* Navigation */}
              <Navbar
                cartCount={0}
                onSearchChange={null}
                onOpenCart={null}
              />
        {children}
        </body>
    </html>
  );
}
