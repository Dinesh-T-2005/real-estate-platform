import DashboardStats from "@/components/dashboard/DashboardStats";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome to the Real Estate Admin Dashboard
        </p>
      </div>

      <DashboardStats />
    </div>
  );
}