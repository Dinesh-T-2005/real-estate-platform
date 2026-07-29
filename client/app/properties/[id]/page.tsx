import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PropertyGallery from "@/components/property-details/PropertyGallery";
import PropertyInfo from "@/components/property-details/PropertyInfo";
import PropertyAmenities from "@/components/property-details/PropertyAmenities";
import AgentCard from "@/components/property-details/AgentCard";
import ContactForm from "@/components/property-details/ContactForm";
import SimilarProperties from "@/components/property-details/SimilarProperties";
import { getPropertyById } from "@/lib/api";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({
  params,
}: Props) {

  const { id } = await params;

  const property = await getPropertyById(id);

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">

        <PropertyGallery property={property} />

        <PropertyInfo />

        <PropertyAmenities />

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <ContactForm propertyId={property.id} />
          </div>

          <div>
            <AgentCard />
          </div>

        </div>

        <SimilarProperties currentId={id} />

      </main>

      <Footer />
    </>
  );
}