"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
    title: "Vehicle Diagnostics",
    description:
      "Warning lights, limp mode, sensor faults, electrical issues and running problems diagnosed properly.",
    icon: Gauge,
    points: ["Fault code reading", "Live data checks", "Clear next steps"],
  },
  {
    title: "Servicing",
    description:
      "Interim and full servicing using quality parts, proper checks and clear advice.",
    icon: Wrench,
    points: ["Oil and filter service", "Inspection checks", "Service resets"],
  },
  {
    title: "Brakes & Suspension",
    description:
      "Pads, discs, shocks, springs, bushes, arms and handling issues repaired properly.",
    icon: ShieldCheck,
    points: ["Brake inspections", "Suspension repairs", "Noise diagnosis"],
  },
  {
    title: "Engine Work",
    description:
      "Support for larger mechanical jobs, engine faults, rebuild-style work and long-form repairs.",
    icon: Settings,
    points: ["Engine noises", "Oil leaks", "Running faults"],
  },
  {
    title: "Clutch & Gearbox",
    description:
      "Clutch issues, gearbox concerns, drivetrain faults and transmission-related repairs.",
    icon: Car,
    points: ["Clutch problems", "Gear selection issues", "Drivetrain checks"],
  },
  {
    title: "MOT & General Repairs",
    description:
      "Everyday vehicle repairs for leaks, noises, wear and tear, MOT issues and reliability problems.",
    icon: CheckCircle2,
    points: ["MOT repairs", "Leaks and noises", "General maintenance"],
  },
  {
    title: "Performance & Maintenance",
    description:
      "Light upgrades, preventative maintenance and enthusiast-focused vehicle care.",
    icon: Zap,
    points: ["Upgrade support", "Preventative work", "Performance checks"],
  },
];

const workTypes = [
  "Diagnostics",
  "Servicing",
  "Engine work",
  "Clutch & gearbox",
  "Brakes & suspension",
  "MOT repairs",
  "General maintenance",
  "Long repair jobs",
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
            Diagnostics, servicing and proper repairs
            <span className="text-red-500">.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            From routine servicing to deeper fault finding, engine work and
            long-form repairs, EB Autoworks is built around honest advice,
            clear next steps and proper vehicle care.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-sm font-black uppercase tracking-[0.45em] text-white">
          <span>Diagnostics</span>
          <span className="text-red-500">/</span>
          <span>Servicing</span>
          <span className="text-red-500">/</span>
          <span>Repairs</span>
          <span className="text-red-500">/</span>
          <span>Engine Work</span>
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
              Work We Take On
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              From quick checks to serious jobs.
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              Not every job is a quick booking slot. Some vehicles need deeper
              diagnosis, careful strip-down work, parts ordering, engine repairs
              or longer project time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <p className="font-black uppercase">{type}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Send an enquiry with the vehicle details and what needs doing.
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
              [
                "01",
                "Tell us the issue.",
                "Send the vehicle details, symptoms and what you need help with.",
              ],
              [
                "02",
                "Inspection or diagnosis.",
                "The vehicle is checked properly before any work is recommended.",
              ],
              [
                "03",
                "Clear next steps.",
                "You get honest advice before repairs or servicing are carried out.",
              ],
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
            Need your vehicle looking at?
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-red-50">
            Send an enquiry today and describe what’s going on. EB Autoworks can
            then advise on the most suitable next step.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded bg-black px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-neutral-900"
            >
              Send Enquiry
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
          <p>Independent garage for diagnostics, servicing and repairs.</p>
        </div>
      </footer>
    </main>
  );
}