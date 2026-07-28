import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 px-10 py-20 text-center text-white shadow-2xl">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold tracking-widest">
            GET STARTED TODAY
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
            Ready to Find Your
            <br />
            Dream Home?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Browse thousands of verified properties, connect with trusted
            agents, and find the perfect home for you and your family.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/properties"
              className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Explore Properties
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}