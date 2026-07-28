export default function ContactForm() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-slate-900">
        Send an Enquiry
      </h2>

      <p className="mt-3 text-slate-500">
        Interested in this property? Fill in the form and our agent will
        contact you shortly.
      </p>

      <form className="mt-8 space-y-6">

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91 9876543210"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Preferred Visit Date
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Write your enquiry..."
            className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Send Enquiry
        </button>

      </form>

    </section>
  );
}