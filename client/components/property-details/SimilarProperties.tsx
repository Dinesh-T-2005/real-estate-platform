"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Car, MapPin } from "lucide-react";

import { getProperties } from "@/lib/api";
import { Property } from "@/types/property";

interface Props {
  currentId?: string;
}

export default function SimilarProperties({ currentId }: Props) {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const data = await getProperties();

      // Current property remove pannrom
      setProperties(
        data.filter((item: Property) => item.id !== currentId).slice(0, 3)
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            YOU MAY ALSO LIKE
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Similar Properties
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {properties.map((property) => (

            <div
              key={property.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-64">

                <Image
                  src={`http://localhost:8000${property.image}`}
                  alt={property.title}
                  fill
                  unoptimized
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {property.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  <span>
                    {property.location}, {property.city}
                  </span>
                </div>

                <div className="mt-6 flex justify-between text-slate-600">

                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    <span>{property.bedrooms}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    <span>{property.bathrooms}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Car size={18} />
                    <span>{property.parking}</span>
                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <h3 className="text-3xl font-bold text-blue-600">
                    ₹{Number(property.price).toLocaleString("en-IN")}
                  </h3>

                  <Link
                    href={`/properties/${property.id}`}
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    View
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}