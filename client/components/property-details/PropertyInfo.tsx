import {
  Bath,
  BedDouble,
  Car,
  MapPin,
  Maximize,
  Star,
} from "lucide-react";

export default function PropertyInfo() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}
          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                FOR SALE
              </span>

              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="font-semibold">4.9</span>
              </div>

            </div>

            <h1 className="text-5xl font-bold text-slate-900">
              Luxury Modern Villa
            </h1>

            <div className="mt-5 flex items-center gap-2 text-lg text-slate-500">
              <MapPin size={20} />
              Chennai, Tamil Nadu
            </div>

          </div>

          {/* Right */}
          <div>

            <h2 className="text-5xl font-bold text-blue-600">
              ₹2.50 Cr
            </h2>

            <p className="mt-2 text-slate-500">
              Negotiable
            </p>

          </div>

        </div>

        {/* Specifications */}

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border p-6 text-center shadow-sm">

            <BedDouble className="mx-auto text-blue-600" size={30} />

            <h3 className="mt-3 text-2xl font-bold">
              4
            </h3>

            <p className="text-slate-500">
              Bedrooms
            </p>

          </div>

          <div className="rounded-2xl border p-6 text-center shadow-sm">

            <Bath className="mx-auto text-blue-600" size={30} />

            <h3 className="mt-3 text-2xl font-bold">
              3
            </h3>

            <p className="text-slate-500">
              Bathrooms
            </p>

          </div>

          <div className="rounded-2xl border p-6 text-center shadow-sm">

            <Car className="mx-auto text-blue-600" size={30} />

            <h3 className="mt-3 text-2xl font-bold">
              2
            </h3>

            <p className="text-slate-500">
              Parking
            </p>

          </div>

          <div className="rounded-2xl border p-6 text-center shadow-sm">

            <Maximize className="mx-auto text-blue-600" size={30} />

            <h3 className="mt-3 text-2xl font-bold">
              3200 sq.ft
            </h3>

            <p className="text-slate-500">
              Area
            </p>

          </div>

        </div>

        {/* Description */}

        <div className="mt-14">

          <h2 className="text-3xl font-bold text-slate-900">
            Description
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This luxury modern villa offers spacious living with elegant
            interiors, premium amenities, landscaped gardens and excellent
            connectivity. Located in one of Chennai's most desirable
            neighbourhoods, it is ideal for families looking for comfort,
            security and long-term value.
          </p>

        </div>

      </div>
    </section>
  );
}