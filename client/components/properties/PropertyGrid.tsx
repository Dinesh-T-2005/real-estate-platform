import PropertyCard from "./PropertyCard";
import { getProperties } from "@/lib/api";

export default async function PropertyGrid() {
  const properties = await getProperties();

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
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
              property={{
                id: property.id,
                title: property.title,
                location: property.location,
                price: `₹${Number(property.price).toLocaleString("en-IN")}`,
                beds: property.bedrooms,
                baths: property.bathrooms,
                parking: property.parking,
                rating: 4.9,
                image: property.image,
              }}
            />
          ))}

        </div>

      </div>
    </section>
  );
}