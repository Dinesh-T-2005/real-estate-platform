"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
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
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "User Management",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      name: "Add Property",
      href: "/dashboard/properties/new",
      icon: Building2,
    },
    {
      name: "Properties",
      href: "/dashboard/properties",
      icon: Building2,
    },
    {
      name: "Company Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      name: "Enquiries",
      href: "/dashboard/enquiries",
      icon: MessageSquare,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-slate-900 text-white shadow-xl">

      {/* Logo */}

      <div className="border-b border-slate-700 p-6">

        <h1 className="text-3xl font-bold">
          Real Estate
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Admin Panel
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 overflow-y-auto p-4">

        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            menu.href === "/dashboard"
              ? pathname === "/dashboard"
              : menu.href === "/dashboard/properties"
                ? pathname === "/dashboard/properties"
                : menu.href === "/dashboard/properties/new"
                  ? pathname === "/dashboard/properties/new"
                  : pathname === menu.href ||
                  pathname.startsWith(menu.href + "/");

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${active
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