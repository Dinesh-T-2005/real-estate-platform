import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Chennai",
    properties: "1,250+ Properties",
    image: "/images/city-chennai.jpg",
  },
  {
    name: "Bangalore",
    properties: "980+ Properties",
    image: "/images/city-bangalore.jpg",
  },
  {
    name: "Hyderabad",
    properties: "760+ Properties",
    image: "/images/city-hyderabad.jpg",
  },
];

export default function Cities() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            TOP LOCATIONS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Explore Popular Cities
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Find premium homes in India's fastest-growing cities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cities.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold">
                    {city.name}
                  </h3>

                  <p className="mt-2">
                    {city.properties}
                  </p>
                </div>

              </div>

              <button className="flex w-full items-center justify-center gap-2 border-t py-5 font-semibold text-blue-600 transition hover:bg-blue-50">
                Explore City
                <ArrowRight size={18} />
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}