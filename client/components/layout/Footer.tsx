import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Nestora
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Helping families find their dream homes with trusted agents
              and verified properties across India.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-sky-500"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-700"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>
                <Link href="/" className="transition hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/properties" className="transition hover:text-blue-400">
                  Properties
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-blue-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li className="hover:text-blue-400 cursor-pointer transition">
                Buy Property
              </li>

              <li className="hover:text-blue-400 cursor-pointer transition">
                Sell Property
              </li>

              <li className="hover:text-blue-400 cursor-pointer transition">
                Rent Property
              </li>

              <li className="hover:text-blue-400 cursor-pointer transition">
                Property Management
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5 text-slate-300">

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>support@nestora.com</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-16 border-t border-slate-700 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-slate-400">
              © 2026 <span className="font-semibold text-white">Nestora</span>.
              All Rights Reserved.
            </p>

            <div className="flex gap-6 text-slate-400">

              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}