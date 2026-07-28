import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PropertyHeader from "@/components/properties/PropertyHeader";
import PropertyFilter from "@/components/properties/PropertyFilter";
import PropertyGrid from "@/components/properties/PropertyGrid";

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <PropertyHeader />
      <PropertyFilter />
      <PropertyGrid />
      <Footer />
    </>
  );
}