"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Bath,
  BedDouble,
  Car,
  Heart,
  MapPin,
} from "lucide-react";

import { Property } from "@/types/property";
import { saveProperty } from "@/lib/api";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {

  const imageUrl = `http://localhost:8000${property.image}`;

  const [saved, setSaved] = useState(false);

  async function handleSave() {
    try {
      await saveProperty(property.id);

      setSaved(true);

      toast.success("Property Saved");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-72">

        <Image
          src={imageUrl}
          alt={property.title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <button
          onClick={handleSave}
          className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg"
        >
          <Heart
            size={18}
            className={
              saved
                ? "fill-red-500 text-red-500"
                : "text-red-500"
            }
          />
        </button>

      </div>

      <div className="p-6">

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          {property.title}
        </h2>

        <div className="flex items-center gap-2 text-slate-500">
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
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}