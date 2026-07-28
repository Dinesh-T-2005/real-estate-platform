import Image from "next/image";
import { Mail, Phone, Star } from "lucide-react";

export default function AgentCard() {
  return (
    <div className="sticky top-28 rounded-3xl bg-white p-8 shadow-xl">

      <div className="flex flex-col items-center">

        <Image
          src="/images/agent1.jpg"
          alt="Agent"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-blue-100"
        />

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Rajesh Kumar
        </h2>

        <p className="mt-1 text-slate-500">
          Senior Property Consultant
        </p>

        <div className="mt-4 flex items-center gap-2 text-yellow-500">
          <Star size={18} fill="currentColor" />
          <span className="font-semibold">4.9 Rating</span>
        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 rounded-xl border p-4">
          <Phone className="text-blue-600" size={20} />
          <span>+91 98765 43210</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border p-4">
          <Mail className="text-blue-600" size={20} />
          <span>agent@nestora.com</span>
        </div>

      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
        Contact Agent
      </button>

      <button className="mt-4 w-full rounded-xl border border-blue-600 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
        Schedule Visit
      </button>

    </div>
  );
}