"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    Calendar,
    Clock3,
    MapPin,
    MessageSquare,
    Building2,
} from "lucide-react";

import { getMyEnquiries } from "@/lib/api";

export default function MyEnquiries() {
    const [enquiries, setEnquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEnquiries();
    }, []);

    async function loadEnquiries() {
        try {
            const data = await getMyEnquiries();
            setEnquiries(data);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="rounded-3xl bg-white p-10 shadow">
                <p className="text-center text-lg text-slate-500">
                    Loading enquiries...
                </p>
            </div>
        );
    }

    if (!enquiries.length) {
        return (
            <div className="rounded-3xl bg-white p-12 text-center shadow-xl">
                <Building2
                    size={70}
                    className="mx-auto text-blue-600"
                />

                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    No Enquiries Yet
                </h2>

                <p className="mt-3 text-slate-500">
                    You haven't submitted any property enquiries.
                </p>
            </div>
        );
    }

    return (
        <div>

            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-slate-900">
                    My Enquiries
                </h1>

                <p className="mt-2 text-slate-500">
                    Track all the enquiries you have submitted.
                </p>
            </div>

            <div className="space-y-6">

                {enquiries.map((item) => (

                    <div
                        key={item.id}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <h2 className="text-2xl font-bold text-slate-900">
                                    {item.property.title}
                                </h2>

                                <div className="mt-2 flex items-center gap-2 text-slate-500">
                                    <MapPin size={18} />
                                    {item.property.location},{" "}
                                    {item.property.city}
                                </div>

                            </div>

                            <span
                                className={`rounded-full px-4 py-2 text-sm font-semibold ${item.status === "PENDING"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : item.status === "APPROVED"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {item.status}
                            </span>

                        </div>

                        <div className="my-6 h-px bg-slate-200"></div>

                        <div className="space-y-5">

                            <div className="flex items-start gap-3">
                                <MessageSquare
                                    size={20}
                                    className="mt-1 text-blue-600"
                                />

                                <div>
                                    <p className="font-semibold text-slate-800">
                                        Message
                                    </p>

                                    <p className="text-slate-600">
                                        {item.message}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar
                                    size={20}
                                    className="text-green-600"
                                />

                                <span className="text-slate-700">
                                    Visit Date :
                                    {" "}
                                    {item.visitDate
                                        ? new Date(
                                            item.visitDate
                                        ).toLocaleDateString()
                                        : "-"}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock3
                                    size={20}
                                    className="text-orange-600"
                                />

                                <span className="text-slate-700">
                                    Submitted :
                                    {" "}
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}