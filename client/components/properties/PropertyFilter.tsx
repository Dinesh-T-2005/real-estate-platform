"use client";

interface PropertyFilterProps {
  filters: {
    city: string;
    propertyType: string;
    bedrooms: string;
    minPrice: string;
    maxPrice: string;
  };
  onChange: (name: string, value: string) => void;
  onSearch: () => void;
  onReset: () => void;
}



export default function PropertyFilter({
  filters,
  onChange,
  onSearch,
  onReset,
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

          <div>
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => onChange("minPrice", e.target.value)}
              className="w-full !text-black rounded-xl border p-4"
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => onChange("maxPrice", e.target.value)}
              className="w-full !text-black rounded-xl border p-4"
            />
          </div>

          <button
            onClick={onSearch}
            className="rounded-xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
          >
            Apply Filters
          </button>

          <button
            onClick={onReset}
            className="rounded-xl border bg-blue-600 border-slate-300 px-6 py-4 font-semibold"
          >
            Reset
          </button>

        </div>
      </div>
    </section>
  );
}