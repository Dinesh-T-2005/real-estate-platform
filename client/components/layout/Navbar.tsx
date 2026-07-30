"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getSettings } from "@/lib/api";

export default function Navbar() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await getSettings();
        setSettings(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadSettings();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-blue-600 shadow-lg">

            {settings?.companyLogo ? (
              <Image
                src={`http://localhost:8000${settings.companyLogo}`}
                alt="Company Logo"
                width={56}
                height={56}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-2xl text-white">
                🏡
              </span>
            )}

          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              {settings?.companyName || "Nestora"}
            </h1>

            <p className="-mt-1 text-xs tracking-wider text-slate-500">
              {settings?.about || "PREMIUM REAL ESTATE"}
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {[
            { name: "Home", href: "/" },
            { name: "Properties", href: "/properties" },
            { name: "Agents", href: "/agents" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[15px] font-medium text-slate-600 transition duration-300 hover:text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden items-center gap-4 lg:flex">

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

        {/* Mobile */}
        <button className="text-3xl lg:hidden">
          ☰
        </button>

      </div>
    </header>
  );
}