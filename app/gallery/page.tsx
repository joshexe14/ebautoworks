"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/gallery-1.jpg",
    title: "Workshop",
    description: "INSERT CAPTION",
  },
  {
    src: "/gallery/gallery-2.jpg",
    title: "Servicing",
    description: "INSERT CAPTION",
  },
  {
    src: "/gallery/gallery-3.jpg",
    title: "Diagnostics",
    description: "INSERT CAPTION",
  },
  {
    src: "/gallery/gallery-4.jpg",
    title: "Repairs",
    description: "INSERT CAPTION",
  },
  {
    src: "/gallery/gallery-5.jpg",
    title: "Finished Work",
    description: "INSERT CAPTION",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = galleryImages[activeIndex];

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.32),transparent_30%),linear-gradient(to_bottom,#111,#050505)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-widest text-neutral-300 transition hover:bg-white hover:text-black"
          >
            ← Back Home
          </Link>

          <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            Gallery
            <span className="text-red-500">.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            Example of Completed Jobs
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-sm font-black uppercase tracking-[0.45em] text-white">
          <span>Workshop</span>
          <span className="text-red-500">/</span>
          <span>Servicing</span>
          <span className="text-red-500">/</span>
          <span>Repairs</span>
          <span className="text-red-500">/</span>
          <span>Diagnostics</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
                Photo Selection
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
                Select a photo.
              </h2>
            </div>

            <p className="max-w-xl leading-8 text-neutral-400">
              Drop your real images into <span className="text-white">public/gallery</span> and name
              them <span className="text-white">gallery-1.jpg</span>,{" "}
              <span className="text-white">gallery-2.jpg</span>, etc.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] md:min-h-[620px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage.src}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeImage.src}
                    alt={activeImage.title}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(galleryImages.length).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                      {activeImage.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-neutral-300">
                      {activeImage.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="pointer-events-none flex flex-col items-center text-center">
                  <ImageIcon className="mb-5 h-16 w-16 text-red-500/70" />
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-neutral-500">
                    Image placeholder
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={goPrevious}
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 backdrop-blur transition hover:bg-red-600"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 backdrop-blur transition hover:bg-red-600"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="grid gap-4">
              {galleryImages.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group overflow-hidden rounded-2xl border p-3 text-left transition ${
                      isActive
                        ? "border-red-500 bg-red-500/10"
                        : "border-white/10 bg-white/[0.035] hover:border-red-500/60"
                    }`}
                  >
                    <div className="grid grid-cols-[96px_1fr] gap-4">
                      <div className="relative h-24 overflow-hidden rounded-xl bg-[#101010]">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="h-full w-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="h-7 w-7 text-red-500/70" />
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="mt-2 font-black uppercase">
                          {image.title}
                        </p>

                        <p className="mt-1 line-clamp-2 text-sm text-neutral-500">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              What to upload
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Keep it simple and real.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Workshop photos",
              "MINIs on the ramp",
              "Engine bays",
              "Diagnostic work",
              "Brake and suspension jobs",
              "Finished vehicles",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <p className="font-black uppercase">{item}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Add natural photos from real jobs — no fake stock feel.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto rounded-[2rem] bg-red-600 p-10 text-white md:max-w-7xl md:p-14">
          <Camera className="mb-8 h-12 w-12" />

          <h2 className="max-w-4xl text-5xl font-black uppercase md:text-7xl">
            Want to show more work?
          </h2>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded bg-black px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-neutral-900"
            >
              Request Booking
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded border border-white/40 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} EB Autoworks. All rights reserved.</p>
          <p>MINI-focused independent garage. BMW vehicles also welcome.</p>
        </div>
      </footer>
    </main>
  );
}