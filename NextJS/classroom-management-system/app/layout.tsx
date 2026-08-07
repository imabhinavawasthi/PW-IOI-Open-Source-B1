import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(components)/navbar";

export const metadata: Metadata = {
  title: "Classroom Management System",
  description: "Application for managing classrooms and students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Navbar/>
        <div className="container mx-5 mt-5">
          {children}
        </div>
      </body>
    </html>
  );
}
