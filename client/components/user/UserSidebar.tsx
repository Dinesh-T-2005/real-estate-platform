"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Heart,
  MessageSquare,
  Lock,
  LogOut,
  Building2,
} from "lucide-react";

export default function UserSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  }

  const menus = [
    {
      name: "Dashboard",
      href: "/user/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "My Profile",
      href: "/user/profile",
      icon: User,
      exact: false,
    },
    {
      name: "Browse Properties",
      href: "/user/properties",
      icon: Building2,
      exact: true,
    },
    {
      name: "Saved Properties",
      href: "/user/saved",
      icon: Heart,
      exact: false,
    },
    {
      name: "My Enquiries",
      href: "/user/enquiries",
      icon: MessageSquare,
      exact: false,
    },
    {
      name: "Change Password",
      href: "/user/change-password",
      icon: Lock,
      exact: false,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-slate-900 text-white shadow-xl">

      {/* Logo */}

      <div className="border-b border-slate-700 p-6">
        <h1 className="text-3xl font-bold">
          Nestora
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          User Panel
        </p>
      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active = menu.exact
            ? pathname === menu.href
            : pathname === menu.href ||
              pathname.startsWith(menu.href + "/");

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="border-t border-slate-700 p-4">
        <button
          onClick={logout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 py-3 font-semibold transition hover:bg-red-700"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </aside>
  );
}