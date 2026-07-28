import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Car, Heart, MapPin, Star } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    parking: number;
    rating: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-72">

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg">
          <Heart size={18} className="text-red-500" />
        </button>

      </div>

      <div className="p-6">

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-slate-900">
            {property.title}
          </h2>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            {property.rating}
          </div>

        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          {property.location}
        </div>

        <div className="mt-6 flex justify-between text-slate-600">

          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            {property.beds}
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            {property.baths}
          </div>

          <div className="flex items-center gap-2">
            <Car size={18} />
            {property.parking}
          </div>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <h3 className="text-3xl font-bold text-blue-600">
            {property.price}
          </h3>

          <Link
            href={`/properties/${property.id}`}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}