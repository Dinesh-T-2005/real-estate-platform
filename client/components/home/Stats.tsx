import {
  Building2,
  Home,
  MapPinned,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "15K+",
    title: "Happy Families",
  },
  {
    icon: Building2,
    value: "850+",
    title: "Premium Properties",
  },
  {
    icon: MapPinned,
    value: "25+",
    title: "Cities Covered",
  },
  {
    icon: Star,
    value: "4.9",
    title: "Customer Rating",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}