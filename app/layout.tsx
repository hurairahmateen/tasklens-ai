import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "TaskLens AI",
  description: "Turn goals into focused, actionable plans using AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <footer className="py-12 px-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">
            TaskLens AI © {new Date().getFullYear()} • Built for Focused
            Execution
          </p>
        </footer>
      </body>
    </html>
  );
}
