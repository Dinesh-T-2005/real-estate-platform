"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

import { getDashboardStats } from "@/lib/api";

export default function DashboardCards() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const data = await getDashboardStats();
    setStats(data);
  }

  if (!stats) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow">
        Loading Dashboard...
      </div>
    );
  }

  const cards = [
    {
      title: "Properties",
      value: stats.totalProperties,
      icon: Home,
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
    {
      title: "Users",
      value: stats.totalUsers,
      icon: Users,
      bg: "bg-indigo-50",
      color: "text-indigo-600",
    },
    {
      title: "Enquiries",
      value: stats.totalEnquiries,
      icon: MessageSquare,
      bg: "bg-cyan-50",
      color: "text-cyan-600",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock,
      bg: "bg-yellow-50",
      color: "text-yellow-600",
    },
    {
      title: "Approved",
      value: stats.approved,
      icon: CheckCircle,
      bg: "bg-green-50",
      color: "text-green-600",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: XCircle,
      bg: "bg-red-50",
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl p-4 ${card.bg}`}
              >
                <Icon
                  size={32}
                  className={card.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}