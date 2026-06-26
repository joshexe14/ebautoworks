"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Battery,
  Car,
  CheckCircle2,
  Gauge,
  Settings,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "MINI Diagnostics",
    description:
      "Warning lights, limp mode, sensor faults, electrical issues and running problems diagnosed properly.",
    icon: Gauge,
    points: ["Fault code reading", "Live data checks", "Clear next steps"],
  },
  {
    title: "MINI Servicing",
    description:
      "Interim and full servicing for MINI models, with proper checks and quality replacement parts.",
    icon: Wrench,
    points: ["Oil and filter service", "Inspection checks", "Service reset"],
  },
  {
    title: "Brakes & Suspension",
    description:
      "Pads, discs, shocks, springs, bushes, arms and handling issues repaired properly.",
    icon: ShieldCheck,
    points: ["Brake inspections", "Suspension repairs", "Noise diagnosis"],
  },
  {
    title: "Timing Chain & Engine Issues",
    description:
      "Support for common MINI engine concerns, rattles, leaks, rough running and reliability checks.",
    icon: Settings,
    points: ["Engine noises", "Oil leaks", "Running faults"],
  },
  {
    title: "Clutch & Gearbox",
    description:
      "Clutch issues, gearbox concerns, drivetrain faults and general transmission-related repairs.",
    icon: Car,
    points: ["Clutch problems", "Gear selection issues", "Drivetrain checks"],
  },
  {
    title: "BMW Basic Servicing",
    description:
      "Basic BMW servicing, diagnostics and repair support alongside the core MINI specialist work.",
    icon: Battery,
    points: ["1 Series support", "Basic servicing", "Fault checks"],
  },
  {
    title: "General Repairs",
    description:
      "Everyday vehicle repairs for leaks, noises, wear and tear, MOT issues and reliability problems.",
    icon: CheckCircle2,
    points: ["MOT repairs", "Leaks and noises", "General maintenance"],
  },
  {
    title: "Performance & Maintenance",
    description:
      "Light upgrades, preventative maintenance and enthusiast-focused care for MINI and BMW vehicles.",
    icon: Zap,
    points: ["Performance checks", "Upgrade support", "Preventative work"],
  },
];

const models = [
  "MINI Cooper",
  "MINI Cooper S",
  "MINI JCW",
  "MINI Clubman",
  "MINI Countryman",
  "BMW 1 Series",
];

export default function ServicesPage() {
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
            EB Autoworks Services
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            MINI specialist care. BMW support where needed
            <span className="text-red-500">.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            From diagnostics and servicing to brakes, suspension, engine issues
            and general repairs, EB Autoworks is built around MINI drivers while
            still supporting basic BMW work and everyday vehicle repairs.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-sm font-black uppercase tracking-[0.45em] text-white">
          <span>MINI</span>
          <span className="text-red-500">/</span>
          <span>Diagnostics</span>
          <span className="text-red-500">/</span>
          <span>Servicing</span>
          <span className="text-red-500">/</span>
          <span>Repairs</span>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-red-500/70 hover:bg-white/[0.055]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-red-500 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="text-xl font-black uppercase">
                    {service.title}
                  </h2>

                  <p className="mt-4 min-h-[112px] leading-7 text-neutral-400">
                    {service.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-neutral-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-red-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              MINI Models
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Built around the MINI range.
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              The site should make it clear straight away that EB Autoworks is a
              strong fit for MINI owners, especially Cooper, Cooper S and JCW
              drivers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {models.map((model) => (
              <div
                key={model}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <p className="font-black uppercase">{model}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Diagnostics, servicing, inspections and repair support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              How it works
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Simple, clear and no nonsense.
            </h2>
          </div>

          <div className="grid gap-5">
            {[
              ["01", " Your Issue.", "Send the vehicle details, symptoms and what you need help with."],
              ["02", "Inspectcion / Diagnosis.", "Proper vehicle checks before recommending work."],
              ["03", "Clear next steps.", "You get honest advice before any work is carried out."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[80px_1fr]"
              >
                <p className="text-4xl font-black text-red-500">{number}</p>
                <div>
                  <h3 className="text-2xl font-black uppercase">{title}</h3>
                  <p className="mt-3 leading-7 text-neutral-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto rounded-[2rem] bg-red-600 p-10 text-white md:max-w-7xl md:p-14">
          <h2 className="max-w-4xl text-5xl font-black uppercase md:text-7xl">
            Need your MINI looking at?
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-red-50">
            Send an enquiry today and we’ll get back to you as soon as possible.
            A full booking calendar can be added in the next phase.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded bg-black px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-neutral-900"
            >
              Request Booking
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded border border-white/40 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
            >
              Back Home
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