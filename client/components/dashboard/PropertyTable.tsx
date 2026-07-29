"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { getProperties, deleteProperty } from "@/lib/api";
import { Property } from "@/types/property";
import router from "next/dist/shared/lib/router/router";
import { useRouter } from "next/dist/client/components/navigation";

export default function PropertyTable() {
    const router = useRouter();
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProperties();
    }, []);

    async function loadProperties() {
        try {
            const data = await getProperties();
            setProperties(data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load properties");
        } finally {
            setLoading(false);
        }
    }



    async function handleDelete(id: string) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this property?"
        );

        if (!confirmDelete) return;

        try {
            await deleteProperty(id);

            toast.success("Property deleted successfully");

            loadProperties();
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete property");
        }
    }

    if (loading) {
        return (
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
                Loading properties...
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="border-b border-slate-200 px-8 py-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    Property List
                </h2>

                <p className="mt-1 text-slate-500">
                    Total Properties: {properties.length}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-black">Image</th>
                            <th className="px-6 py-4 text-left text-black">Title</th>
                            <th className="px-6 py-4 text-left text-black">City</th>
                            <th className="px-6 py-4 text-left text-black">Price</th>
                            <th className="px-6 py-4 text-left text-black">Status</th>
                            <th className="px-6 py-4 text-center text-black">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {properties.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="py-12 text-center text-slate-500"
                                >
                                    No Properties Found
                                </td>
                            </tr>
                        ) : (
                            properties.map((property) => (
                                <tr
                                    key={property.id}
                                    className="border-b hover:bg-slate-50"
                                >
                                    <td className="px-6 py-4">
                                        <img
                                            src={`http://localhost:8000${property.image}`}
                                            alt={property.title}
                                            className="h-[60px] w-[80px] rounded-lg object-cover"
                                        />
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-black">
                                        {property.title}
                                    </td>

                                    <td className="px-6 py-4 text-black">
                                        {property.city}
                                    </td>

                                    <td className="px-6 py-4 text-black">
                                        ₹{Number(property.price).toLocaleString("en-IN")}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-sm font-medium ${property.isAvailable
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {property.isAvailable ? "Available" : "Sold"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-3">
                                            <button
                                                onClick={() =>
                                                    router.push(`/dashboard/properties/edit/${property.id}`)
                                                }
                                                className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                                            >
                                                <Pencil size={18} />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(property.id)}
                                                className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}