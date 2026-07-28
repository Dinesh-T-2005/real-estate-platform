import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-28">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid min-h-[700px] items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              ✨ India's Premium Real Estate Platform
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Find Your
              <br />
              <span className="text-blue-600">
                Dream Home
              </span>
              <br />
              Today
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Discover luxury villas, premium apartments and dream
              homes with trusted agents across India.
            </p>

            <div className="mt-10 flex gap-5">

              <Link
                href="/properties"
                className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Properties
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Contact Agent
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 to-sky-400 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
                alt="Luxury Home"
                className="h-[600px] w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-2xl">

              <p className="text-sm text-slate-500">
                Starting From
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-600">
                ₹85 Lakhs
              </h2>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}