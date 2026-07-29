"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/api";
import StatCard from "./StatCard";

interface Stats {
  properties: number;
  enquiries: number;
  users: number;
}

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    properties: 0,
    enquiries: 0,
    users: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
        title="Total Properties"
        value={stats.properties}
        color="text-blue-600"
      />

      <StatCard
        title="Total Enquiries"
        value={stats.enquiries}
        color="text-green-600"
      />

      <StatCard
        title="Total Users"
        value={stats.users}
        color="text-purple-600"
      />
    </div>
  );
}