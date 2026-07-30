"use client";

import { useState } from "react";


interface SearchProps {
  onSearch: (filters: {
    city: string;
    propertyType: string;
    minPrice: string;
    maxPrice: string;
  }) => void;

  onReset: () => void;
}

export default function Search({ onSearch, onReset }: SearchProps) {
  const [filters, setFilters] = useState({
    city: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
  });
  function handleReset() {
    setFilters({
      city: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
    });

    onReset();
  }

  function handleSearch() {
    onSearch(filters);
  }

  return (
    <section className="relative z-10 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                📍 Location
              </label>

              <select
                value={filters.city}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    city: e.target.value,
                  })
                }
                className="w-full !text-black rounded-xl border border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select City</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                🏠 Property Type
              </label>

              <select
                value={filters.propertyType}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    propertyType: e.target.value,
                  })
                }
                className="w-full !text-black rounded-xl border ! border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Property Type</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Land">Land</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                💰 Min Price
              </label>

              <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    minPrice: e.target.value,
                  })
                }
                className="w-full !text-black rounded-xl border ! border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                💰 Max Price
              </label>

              <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    maxPrice: e.target.value,
                  })
                }
                className="w-full !text-black rounded-xl border ! border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end gap-3">
              <button
                onClick={handleSearch}
                className="flex-1 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700"
              >
                Search
              </button>

              <button
                onClick={handleReset}
                className="flex-1 rounded-xl border border-slate-300 bg-blue-600 py-4 text-lg font-semibold hover:bg-blue-700"
              >
                Reset
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}