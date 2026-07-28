import {
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Search,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    desc: "Every listing is verified before it reaches our platform.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Agents",
    desc: "Connect with experienced and certified real estate experts.",
  },
  {
    icon: Search,
    title: "Smart Property Search",
    desc: "Find your dream home faster using powerful filters.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our team is always available to help you at every step.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Why Choose Nestora?
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Everything you need to buy or sell property with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}