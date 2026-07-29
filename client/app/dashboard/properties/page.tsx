import PropertyTable from "@/components/dashboard/PropertyTable";

export default function DashboardPropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Property Management
            </h1>

            <p className="mt-2 text-slate-500">
              Manage all your properties from one place.
            </p>
          </div>
        </div>

        <PropertyTable />
      </div>
    </main>
  );
}