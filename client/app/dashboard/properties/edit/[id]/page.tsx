import EditPropertyForm from "@/components/dashboard/EditPropertyForm";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <EditPropertyForm id={id} />
    </main>
  );
}