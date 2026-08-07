import "./globals.css";

export const metadata = {
  title: "Task Tracker",
  description: "Task Tracker built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}