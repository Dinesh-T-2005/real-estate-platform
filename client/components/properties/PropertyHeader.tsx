"use client";

import { Search } from "lucide-react";

interface PropertyHeaderProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSearch: () => void;
}

export default function PropertyHeader({
  keyword,
  onKeywordChange,
  onSearch,
}: PropertyHeaderProps) {
  return (
    <section className="pt-80 pb-24 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Find Your Perfect Property
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Browse thousands of verified properties across India.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center rounded-2xl bg-white p-3 shadow-2xl">

            <Search className="ml-3 text-slate-500" />

            <input
              type="text"
              value={keyword}
              onChange={(e) => onKeywordChange(e.target.value)}
              placeholder="Search by city, property name..."
              className="w-full bg-transparent px-4 py-3 text-slate-800 outline-none"
            />

            <button
              onClick={onSearch}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}