"use client";

import { useEffect, useState } from "react";
import { getMonthlyChart } from "@/lib/api";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

export default function MonthlyChart() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        loadChart();
    }, []);

    async function loadChart() {
        try {
            const result = await getMonthlyChart();
            setData(result);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Monthly Enquiries
            </h2>

            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#2563eb"
                        strokeWidth={4}
                        dot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}