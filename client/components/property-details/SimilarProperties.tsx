import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Car, MapPin } from "lucide-react";

const properties = [
  {
    id: 2,
    title: "Modern Apartment",
    location: "Bangalore",
    price: "₹95 Lakhs",
    beds: 3,
    baths: 2,
    parking: 1,
    image: "/images/apartment1.jpg",
  },
  {
    id: 3,
    title: "Premium Villa",
    location: "Hyderabad",
    price: "₹1.8 Cr",
    beds: 4,
    baths: 3,
    parking: 2,
    image: "/images/villa2.jpg",
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    location: "Chennai",
    price: "₹3.2 Cr",
    beds: 5,
    baths: 4,
    parking: 2,
    image: "/images/villa3.jpg",
  },
];

export default function SimilarProperties() {
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
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {property.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
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