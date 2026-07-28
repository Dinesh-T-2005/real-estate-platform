import {
  Wifi,
  ShieldCheck,
  Trees,
  Dumbbell,
  Car,
  Zap,
  Waves,
  Building2,
} from "lucide-react";
const amenities = [
  {
    title: "Swimming Pool",
    icon: Waves,
  },
  {
    title: "Gym",
    icon: Dumbbell,
  },
  {
    title: "Garden",
    icon: Trees,
  },
  {
    title: "24/7 Security",
    icon: ShieldCheck,
  },
  {
    title: "Parking",
    icon: Car,
  },
  {
    title: "Power Backup",
    icon: Zap,
  },
  {
    title: "High-Speed Wi-Fi",
    icon: Wifi,
  },
  {
    title: "Lift",
    icon: Building2,
  },
];

export default function PropertyAmenities() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <h2 className="text-4xl font-bold text-slate-900">
            Property Amenities
          </h2>

          <p className="mt-3 text-lg text-slate-500">
            Premium facilities included with this property.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon
                    className="text-blue-600"
                    size={30}
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}