"use client";

import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties: any[];
}

export default function PropertyGrid({
  properties,
}: PropertyGridProps) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl !text-black font-bold">
            Available Properties
          </h2>

          <p className="text-slate-500">
            Showing {properties.length} Properties
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property: any) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}