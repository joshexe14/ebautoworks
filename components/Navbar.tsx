"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-black/85 px-6 py-4 shadow-2xl backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-end justify-center overflow-hidden rounded-2xl border border-red-500/40 bg-neutral-900">
            <img
              src="/owner.png"
              alt="EB Autoworks"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-black uppercase tracking-[0.25em] text-white">
              EB AUTOWORKS
            </h1>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.45em] text-red-500">
              MINI SPECIALIST
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-neutral-300 transition hover:text-red-500">
            Home
          </Link>
          <Link href="/services" className="text-sm font-bold uppercase tracking-widest text-neutral-300 transition hover:text-red-500">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-bold uppercase tracking-widest text-neutral-300 transition hover:text-red-500">
            Gallery
          </Link>
          <Link href="/reviews" className="text-sm font-bold uppercase tracking-widest text-neutral-300 transition hover:text-red-500">
            Reviews
          </Link>
          <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-neutral-300 transition hover:text-red-500">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-xl border border-red-600 px-6 py-3 text-sm font-bold uppercase tracking-widest transition hover:bg-red-600 xl:flex"
        >
          Request Booking
          <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}