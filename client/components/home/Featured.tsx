import Image from "next/image";
import { Bath, BedDouble, Car, Heart, MapPin } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Chennai",
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    parking: 2,
    image: "/images/villa1.jpg",
  },
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
    title: "Premium Penthouse",
    location: "Hyderabad",
    price: "₹3.2 Cr",
    beds: 5,
    baths: 4,
    parking: 2,
    image: "/images/villa2.jpg",
  },
];

export default function Featured() {
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Property Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />

                <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg transition hover:scale-110">
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
                    <span>{property.beds}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    <span>{property.baths}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Car size={18} />
                    <span>{property.parking}</span>
                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <h4 className="text-3xl font-bold text-blue-600">
                    {property.price}
                  </h4>

                  <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                    View Details
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}