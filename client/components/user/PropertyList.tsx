"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getProperties } from "@/lib/api";
import PropertyCard from "@/components/properties/PropertyCard";

export default function PropertyList() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow">
        Loading Properties...
      </div>
    );
  }

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Browse Properties
        </h1>

        <p className="mt-2 text-slate-500">
          Browse and save your favourite properties.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

    </div>
  );
}