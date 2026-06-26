 "use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Quote,
  ShieldCheck,
  Star,
  ThumbsUp,
} from "lucide-react";

const facebookPageUrl = "https://www.facebook.com/profile.php?id=61591544785700";

const starterReviews = [
  {
    name: "Future Customer",
    vehicle: "MINI Cooper S",
    review:
      "Customer reviews will appear here once EB Autoworks starts collecting feedback.",
  },
  {
    name: "Future Customer",
    vehicle: "MINI JCW",
    review:
      "This section is ready for Facebook, Google or manually added testimonials.",
  },
  {
    name: "Future Customer",
    vehicle: "BMW 1 Series",
    review:
      "Use this space to build trust with real customer experiences and completed jobs.",
  },
];

const trustPoints = [
  "MINI-focused independent garage",
  "Clear advice before work begins",
  "Diagnostics, servicing and repairs",
  "Facebook-ready review section",
];

export default function ReviewsPage() {
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

          <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
            Reviews
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            Customer trust starts here
            <span className="text-red-500">.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            EB Autoworks is ready to collect and showcase feedback from
            Facebook, Google and real customer experiences as the garage grows.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-sm font-black uppercase tracking-[0.45em] text-white">
          <span>Facebook</span>
          <span className="text-red-500">/</span>
          <span>Google</span>
          <span className="text-red-500">/</span>
          <span>Reviews</span>
          <span className="text-red-500">/</span>
          <span>Trust</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Facebook Ready
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Connect the Facebook page when it has content.
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              Since the Facebook page is empty right now, this section acts as a
              polished placeholder. Once posts, reviews and workshop updates are
              added, we can link directly to the page or embed the feed.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={facebookPageUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-red-500"
              >
                Facebook Page
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
              >
                Request Booking
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8"
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
                  Live Feed
                </p>
                <h3 className="mt-4 text-4xl font-black uppercase">
                  Facebook feed placeholder
                </h3>
              </div>

              <ExternalLink className="h-12 w-12 text-red-500" />
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-sm leading-7 text-neutral-400">
                Once the page has posts, reviews and workshop updates, this area
                can become either a direct call-to-action or an embedded
                Facebook Page Plugin.
              </p>

              <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-5">
                <p className="font-black uppercase text-red-500">
                  Coming Soon
                </p>
                <p className="mt-2 text-sm text-neutral-300">
                  Reviews, posts and recent workshop updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Testimonials
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Ready for real customer feedback.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {starterReviews.map((review) => (
              <motion.div
                key={review.vehicle}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-7"
              >
                <Quote className="mb-8 h-9 w-9 text-red-500" />

                <div className="mb-5 flex gap-1 text-red-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="leading-8 text-neutral-300">“{review.review}”</p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-black uppercase">{review.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {review.vehicle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Trust Signals
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              What reviews should prove.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <ShieldCheck className="mb-5 h-7 w-7 text-red-500" />
                <p className="font-black uppercase">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto rounded-[2rem] bg-red-600 p-10 text-white md:max-w-7xl md:p-14">
          <MessageCircle className="mb-8 h-12 w-12" />

          <h2 className="max-w-4xl text-5xl font-black uppercase md:text-7xl">
            Had work done by EB Autoworks?
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-red-50">
            Once the Facebook page is active, this button can send customers
            straight there to leave a review.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={facebookPageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded bg-black px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-neutral-900"
            >
              Leave a Facebook Review
              <ThumbsUp className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded border border-white/40 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
            >
              Contact The Garage
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