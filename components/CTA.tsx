import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-black md:p-14">
        <h2 className="text-4xl font-black md:text-5xl">
          Need your vehicle looking at?
        </h2>

        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          Give us a call today or send us a message. Online booking is currently
          in development and will be launching soon.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="tel:"
            className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Call Now
          </a>

          <Link
            href="/contact"
            className="rounded-full border-2 border-black px-8 py-4 font-bold transition hover:bg-black hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}