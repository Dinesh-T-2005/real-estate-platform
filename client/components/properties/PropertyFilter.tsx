"use client";

interface PropertyFilterProps {
  filters: {
    city: string;
    propertyType: string;
    bedrooms: string;
  };
  onChange: (name: string, value: string) => void;
  onSearch: () => void;
}

export default function PropertyFilter({
  filters,
  onChange,
  onSearch,
}: PropertyFilterProps) {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

          <select
            value={filters.city}
            onChange={(e) => onChange("city", e.target.value)}
            className="rounded-xl !text-black border p-4"
          >
            <option value="">City</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

          <select
            value={filters.propertyType}
            onChange={(e) => onChange("propertyType", e.target.value)}
            className="rounded-xl !text-black border p-4"
          >
            <option value="">Property Type</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Land">Land</option>
          </select>

          <select
            value={filters.bedrooms}
            onChange={(e) => onChange("bedrooms", e.target.value)}
            className="rounded-xl !text-black border p-4"
          >
            <option value="">Bedrooms</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK+</option>
          </select>

          <button
            onClick={onSearch}
            className="rounded-xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
          >
            Apply Filters
          </button>

        </div>
      </div>
    </section>
  );
}