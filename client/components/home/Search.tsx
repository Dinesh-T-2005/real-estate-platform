export default function Search() {
  return (
    <section className="relative z-10 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white p-6 shadow-2xl border border-slate-200">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                📍 Location
              </label>

              <select className="w-full rounded-xl border border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none">
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>
            </div>

            {/* Property */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                🏠 Property Type
              </label>

              <select className="w-full rounded-xl border border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none">
                <option>Villa</option>
                <option>Apartment</option>
                <option>Land</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                💰 Budget
              </label>

              <select className="w-full rounded-xl border border-slate-300 px-4 py-4 focus:border-blue-500 focus:outline-none">
                <option>₹25 Lakhs</option>
                <option>₹50 Lakhs</option>
                <option>₹1 Crore+</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
                Search
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}