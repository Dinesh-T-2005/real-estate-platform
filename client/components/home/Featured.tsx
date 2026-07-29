"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Bath,
  BedDouble,
  Car,
  Heart,
  MapPin,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { getProperties } from "@/lib/api";
import { Property } from "@/types/property";

export default function Featured() {
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
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-slate-900">
            Loading Properties...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            Featured Collection
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Explore Premium Properties
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Discover luxury homes carefully selected for you.
          </p>
        </div>

        {properties.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900">
              No Properties Found
            </h3>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => (

              <div
                key={property.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden">

                  <Image
                    src={`http://localhost:8000${property.image}`}
                    alt={property.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    unoptimized
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />

                  <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg">
                    <Heart size={20} className="text-red-500" />
                  </button>

                </div>

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {property.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-slate-500">
                    <MapPin size={18} />
                    <span>{property.location}</span>
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

                    <h4 className="text-3xl font-bold text-blue-600">
                      ₹{Number(property.price).toLocaleString("en-IN")}
                    </h4>

                    <button
                      onClick={() => router.push(`/properties/${property.id}`)}
                      className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}