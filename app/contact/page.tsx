"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const contactCards = [
  {
    label: "Phone",
    value: "Add number",
    icon: Phone,
  },
  {
    label: "Email",
    value: "Add email",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Add address",
    icon: MapPin,
  },
];

const openingHours = [
  ["Monday", "Add hours"],
  ["Tuesday", "Add hours"],
  ["Wednesday", "Add hours"],
  ["Thursday", "Add hours"],
  ["Friday", "Add hours"],
  ["Saturday", "Add hours"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          vehicle: formData.get("vehicle"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setFeedback("Enquiry sent successfully. EB Autoworks will be in touch.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.24),transparent_28%),linear-gradient(to_bottom,#0b0b0b,#050505)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-widest text-neutral-300 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
            Contact EB Autoworks
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            Let’s get your car sorted<span className="text-red-500">.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Tell us what’s going on with your vehicle and we’ll get back to you
            as soon as possible. Online booking is coming soon.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                <MessageSquare className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-black uppercase">
                  Send an enquiry
                </h2>
                <p className="text-sm text-neutral-400">
                  This form now sends directly to the garage email.
                </p>
              </div>
            </div>

            {feedback && (
              <div
                className={`mb-6 rounded-xl border p-4 text-sm font-bold ${
                  status === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-300"
                    : "border-red-500/30 bg-red-500/10 text-red-200"
                }`}
              >
                {feedback}
              </div>
            )}

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                    Name *
                  </span>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-neutral-600 focus:border-red-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                    Phone *
                  </span>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Your phone number"
                    className="rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-neutral-600 focus:border-red-500"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-neutral-600 focus:border-red-500"
                />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                    Vehicle
                  </span>
                  <input
                    name="vehicle"
                    type="text"
                    placeholder="e.g. MINI Cooper S"
                    className="rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-neutral-600 focus:border-red-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                    Service Needed
                  </span>
                  <select
                    name="service"
                    defaultValue="MINI Diagnostics"
                    className="rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-red-500"
                  >
                    <option>MINI Diagnostics</option>
                    <option>MINI Servicing</option>
                    <option>Brakes & Suspension</option>
                    <option>Timing Chain / Engine Issues</option>
                    <option>Clutch & Gearbox</option>
                    <option>BMW Servicing</option>
                    <option>General Repairs</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                  Message *
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us what you need..."
                  className="resize-none rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none placeholder:text-neutral-600 focus:border-red-500"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-3 rounded bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    Sending
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    Sent
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="grid gap-5">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                  >
                    <Icon className="mb-5 h-7 w-7 text-red-500" />
                    <p className="text-xs font-black uppercase tracking-widest text-neutral-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-black">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <Clock className="mb-5 h-7 w-7 text-red-500" />

              <h2 className="text-xl font-black uppercase">Opening hours</h2>

              <div className="mt-6 space-y-3">
                {openingHours.map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-white/10 pb-3 text-sm last:border-b-0 last:pb-0"
                  >
                    <span className="text-neutral-400">{day}</span>
                    <span className="font-bold">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
              <CalendarDays className="mb-5 h-7 w-7 text-red-500" />

              <h2 className="text-xl font-black uppercase">
                Online booking coming soon
              </h2>

              <p className="mt-4 leading-7 text-neutral-300">
                The next phase will let customers choose a service, enter their
                vehicle details, pick a date and send a booking request directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.22),transparent_35%),#0b0b0b] p-8">
          <MapPin className="h-10 w-10 text-red-500" />
          <p className="mt-32 text-sm uppercase tracking-widest text-neutral-500">
            Map placeholder
          </p>
          <p className="mt-2 text-xl font-black">EB Autoworks</p>
        </div>
      </section>

      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} EB Autoworks. All rights reserved.</p>
          <p>MINI-focused independent garage. BMW vehicles also welcome.</p>
        </div>
      </footer>
    </main>
  );
}