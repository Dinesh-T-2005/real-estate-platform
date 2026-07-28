import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Home Buyer",
    image: "/images/testimonial1.jpg",
    review:
      "Nestora made buying our dream home simple and stress-free. The entire experience was excellent.",
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Property Investor",
    image: "/images/agent2.jpg",
    review:
      "Beautiful listings, verified properties, and professional agents. Highly recommended!",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    role: "Villa Owner",
    image: "/images/agent1.jpg",
    review:
      "I sold my property within a week through Nestora. Amazing platform and support.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Trusted by thousands of happy customers across India.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>

                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-slate-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}