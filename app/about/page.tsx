"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Car,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const values = [
  "Honest advice before work begins",
  "Diagnostics-first approach",
  "MINI-focused specialist knowledge",
  "Long-form repair work welcome",
  "Clear communication throughout",
  "Quality workmanship over rushed jobs",
];

const capabilities = [
  {
    title: "MINI Specialist Work",
    text: "Focused support for MINI servicing, diagnostics, repairs and common model issues.",
    icon: Car,
  },
  {
    title: "Diagnostics & Fault Finding",
    text: "Warning lights, running issues, electrical faults and deeper investigation work.",
    icon: Gauge,
  },
  {
    title: "Engine Work",
    text: "Support for bigger repairs, engine issues, rebuild-style work and long-form jobs.",
    icon: Wrench,
  },
  {
    title: "BMW Support",
    text: "Basic BMW servicing, diagnostics and general repair support where suitable.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.32),transparent_30%),linear-gradient(to_bottom,#111,#050505)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 rounded border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-widest text-neutral-300 transition hover:bg-white hover:text-black"
            >
              ← Back Home
            </Link>

            <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
              About EB Autoworks
            </p>

            <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              Built by Elliot Battersby
              <span className="text-red-500">.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
              EB Autoworks is a MINI-focused independent garage built around
              proper diagnostics, honest advice and quality mechanical work —
              from servicing and repairs to bigger jobs like engine work and
              long-form projects.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-red-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent_35%),#0b0b0b]">
                <img
                  src="/owner.png"
                  alt="Elliot Battersby, owner of EB Autoworks"
                  className="max-h-[420px] w-full object-contain object-bottom"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
                  Owner
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase">
                  Elliot Battersby
                </h2>
                <p className="mt-4 leading-7 text-neutral-400">
                  MINI-focused independent garage owner, with BMW and general
                  vehicle work also welcome where suitable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-sm font-black uppercase tracking-[0.45em] text-white">
          <span>MINI</span>
          <span className="text-red-500">/</span>
          <span>Diagnostics</span>
          <span className="text-red-500">/</span>
          <span>Engine Work</span>
          <span className="text-red-500">/</span>
          <span>Repairs</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              What We Do
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Not just quick jobs.
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              EB Autoworks is positioned for owners who want proper mechanical
              attention, not rushed guesswork. Some jobs are simple services;
              others need deeper diagnosis, stripping down, engine work or
              longer repair time.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 hover:border-red-500/70"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-red-500 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <Brain className="h-12 w-12 text-red-500" />

            <h2 className="mt-8 text-5xl font-black uppercase md:text-6xl">
              Diagnose first. Repair properly.
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              The goal is to understand the fault properly before parts are
              thrown at the car. That matters especially with MINI and BMW
              vehicles, where symptoms can come from sensors, electrics,
              mechanical wear or deeper engine issues.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Approach
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Built around trust, not pressure.
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              Customers should feel like they’re being spoken to clearly, not
              confused with jargon. The site, the enquiry flow and the workshop
              approach all point toward the same thing: clear advice, realistic
              expectations and work done properly.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Values
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              How EB Autoworks should feel.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <CheckCircle2 className="mb-5 h-7 w-7 text-red-500" />
                <p className="font-black uppercase">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto rounded-[2rem] bg-red-600 p-10 text-white md:max-w-7xl md:p-14">
          <h2 className="max-w-4xl text-5xl font-black uppercase md:text-7xl">
            Need proper advice on your MINI?
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-red-50">
            Send an enquiry and explain what’s going on. EB Autoworks can then
            advise on the next step rather than forcing everything into a fixed
            booking slot.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded bg-black px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-neutral-900"
            >
              Contact EB Autoworks
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded border border-white/40 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
            >
              View Services
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