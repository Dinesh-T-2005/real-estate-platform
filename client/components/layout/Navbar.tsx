import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg">
            🏡
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Nestora
            </h1>

            <p className="-mt-1 text-xs tracking-wider text-slate-500">
              PREMIUM REAL ESTATE
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          {[
            "Home",
            "Properties",
            "Agents",
            "About",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              className="relative text-[15px] font-medium text-slate-600 transition duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}

        </nav>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            href="/login"
            className="rounded-xl px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Mobile Menu */}
        <button className="text-3xl lg:hidden">
          ☰
        </button>

      </div>
    </header>
  );
}