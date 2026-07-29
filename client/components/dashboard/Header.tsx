"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-2xl font-bold text-slate-900">
        Dashboard
      </h2>

      <div className="text-right">
        <h3 className="font-semibold text-slate-900">
          {user?.fullName || ""}
        </h3>

        <p className="text-sm text-slate-500">
          {user?.role || ""}
        </p>
      </div>
    </header>
  );
}