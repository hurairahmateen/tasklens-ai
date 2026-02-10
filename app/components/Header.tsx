"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-800 py-6 px-4 md:px-8 flex items-center justify-between bg-zinc-950 sticky top-0 z-50">
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-zinc-100">
          TaskLens <span className="text-emerald-500">AI</span>
        </h1>
      </Link>

      <nav className="flex space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-zinc-100"
              : "text-zinc-500 hover:text-zinc-300"
          } transition-colors`}
        >
          App
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about"
              ? "text-zinc-100"
              : "text-zinc-500 hover:text-zinc-300"
          } transition-colors`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
