export default function PropertyFilter() {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

          <select className="rounded-xl border p-4">
            <option>City</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>

          <select className="rounded-xl border p-4">
            <option>Property Type</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Penthouse</option>
          </select>

          <select className="rounded-xl border p-4">
            <option>Bedrooms</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK+</option>
          </select>

          <select className="rounded-xl border p-4">
            <option>Budget</option>
            <option>₹50 Lakhs</option>
            <option>₹1 Crore</option>
            <option>₹2 Crore+</option>
          </select>

          <button className="rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700">
            Apply Filters
          </button>

        </div>

      </div>
    </section>
  );
}