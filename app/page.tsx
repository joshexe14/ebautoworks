"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Car,
  Gauge,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Vehicle Diagnostics",
    text: "Warning lights, running issues, sensor faults and electrical problems diagnosed properly.",
    icon: Gauge,
  },
  {
    title: "Servicing",
    text: "Interim and full servicing using quality parts, proper checks and clear advice.",
    icon: Wrench,
  },
  {
    title: "Brakes & Suspension",
    text: "Pads, discs, shocks, springs, arms, bushes and handling issues sorted properly.",
    icon: ShieldCheck,
  },
  {
    title: "General Repairs",
    text: "Reliable repairs for everyday faults, leaks, noises, wear and tear.",
    icon: Sparkles,
  },
  {
    title: "Engine Work",
    text: "Support for larger jobs, engine faults, mechanical issues and long-form repairs.",
    icon: Car,
  },
  {
    title: "Performance & Maintenance",
    text: "Light upgrades, preventative maintenance and enthusiast-focused vehicle care.",
    icon: Zap,
  },
];

const vehicleTypes = [
  "Daily drivers",
  "Performance vehicles",
  "Long repair jobs",
  "Engine work",
  "Diagnostics",
  "General maintenance",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(220,38,38,0.35),transparent_30%),linear-gradient(90deg,#030303_0%,#090909_44%,#151515_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-sm font-black uppercase tracking-[0.28em] text-red-500">
              Diagnostics • Servicing • Repairs • Engine Work
            </p>

            <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              I rape dogs on the weekend.
              <span className="text-red-500">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              EB Autoworks handles diagnostics, servicing, repairs and larger
              mechanical jobs with clear advice, honest communication and work
              carried out properly.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-red-500"
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
              >
                View Services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-10 shadow-2xl">
              <div className="absolute right-8 top-8 h-52 w-52 rounded-full bg-red-600/20 blur-3xl" />
              <div className="absolute bottom-0 right-4 text-[10rem] font-black leading-none text-white/[0.035]">
                AUTO
              </div>

              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-red-500/60">
                  <Car className="h-10 w-10 text-red-500" />
                </div>

                <p className="mt-14 text-sm font-black uppercase tracking-[0.35em] text-red-500">
                  Independent Garage
                </p>

                <h2 className="mt-5 max-w-md text-5xl font-black uppercase">
                  Built for proper repairs, not rushed guesswork.
                </h2>

                <div className="mt-10 grid gap-3">
                  {[
                    "Diagnostics and warning lights",
                    "Servicing and inspections",
                    "Brakes, suspension and repairs",
                    "Engine work and larger jobs",
                    "General vehicle maintenance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-neutral-300"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Services
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Vehicle care done properly.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-neutral-300">
              From routine servicing to harder-to-diagnose faults and longer
              repair jobs, EB Autoworks is built around proper mechanical work
              and honest advice.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 hover:border-red-500/70"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-red-500 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black uppercase">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Work We Take On
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              From simple fixes to serious jobs.
            </h2>
            <p className="mt-6 leading-8 text-neutral-300">
              Not every job fits into a quick booking slot. EB Autoworks can
              take on enquiries for longer repairs, investigation work and
              mechanical jobs that need proper time and attention.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {vehicleTypes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <p className="font-black uppercase">{item}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Send an enquiry and describe what the vehicle needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Contact
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
              Need your vehicle looking at?
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-neutral-300">
              Send an enquiry with the vehicle details and a description of the
              issue. EB Autoworks will get back to you with the next step.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <Phone className="mb-5 h-7 w-7 text-red-500" />
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Phone
              </p>
              <p className="mt-2 font-bold">Add number</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <Mail className="mb-5 h-7 w-7 text-red-500" />
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Email
              </p>
              <p className="mt-2 font-bold">Add email</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <MapPin className="mb-5 h-7 w-7 text-red-500" />
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Location
              </p>
              <p className="mt-2 font-bold">Add address</p>
            </div>
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