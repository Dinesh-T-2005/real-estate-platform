"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  getSavedProperties,
  removeSavedProperty,
} from "@/lib/api";

export default function SavedProperties() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSavedProperties();
  }, []);

  async function loadSavedProperties() {
    try {
      const data = await getSavedProperties();
      setProperties(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(propertyId: string) {
    try {
      await removeSavedProperty(propertyId);

      toast.success("Removed from Saved Properties");

      setProperties((prev) =>
        prev.filter((item) => item.property.id !== propertyId)
      );
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  if (loading) {
    return (
      <div className="p-10 text-center text-lg">
        Loading...
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow">
        <h2 className="text-3xl font-bold text-slate-800">
          Saved Properties
        </h2>

        <p className="mt-5 text-slate-500">
          No saved properties found.
        </p>
      </div>
    );
  }

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold text-slate-900">
        ❤️ Saved Properties
      </h1>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {properties.map((item) => {

          const property = item.property;

          return (

            <div
              key={property.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >

              <div className="relative h-64">

                <Image
                  src={`http://localhost:8000${property.image}`}
                  alt={property.title}
                  fill
                  unoptimized
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h2 className="text-2xl !text-black font-bold">
                  {property.title}
                </h2>

                <p className="mt-2 text-slate-500">
                  {property.city}
                </p>

                <p className="mt-4 text-3xl font-bold text-blue-600">
                  ₹{Number(property.price).toLocaleString()}
                </p>

                <button
                  onClick={() =>
                    handleRemove(property.id)
                  }
                  className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Remove
                </button>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}