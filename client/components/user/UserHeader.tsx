"use client";

import { useEffect, useState } from "react";

interface User {
  fullName: string;
  email: string;
}

export default function UserHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!mounted) {
    return (
      <header className="flex h-20 items-center justify-between border-b bg-white px-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome
        </h2>
      </header>
    );
  }

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome
        </h2>
      </div>

      <div className="text-right">
        <h3 className="font-semibold text-slate-900">
          {user?.fullName}
        </h3>

        <p className="text-sm text-slate-500">
          {user?.email}
        </p>
      </div>
    </header>
  );
}