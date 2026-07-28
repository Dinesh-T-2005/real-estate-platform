import AddPropertyForm from "@/components/dashboard/AddPropertyForm";

export default function AddPropertyPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-8 !text-black text-4xl font-bold">
          Add New Property
        </h1>

        <AddPropertyForm />
      </div>
    </main>
  );
}