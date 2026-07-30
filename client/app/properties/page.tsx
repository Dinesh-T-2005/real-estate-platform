"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PropertyHeader from "@/components/properties/PropertyHeader";
import PropertyFilter from "@/components/properties/PropertyFilter";
import PropertyGrid from "@/components/properties/PropertyGrid";

import { getProperties, searchProperties } from "@/lib/api";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<any[]>([]);

  const [filters, setFilters] = useState({
    keyword: "",
    city: "",
    propertyType: "",
    bedrooms: "",
  });



  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    const data = await getProperties();
    setProperties(data);
  }

  function handleChange(name: string, value: string) {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSearch() {
    const params = new URLSearchParams();

    if (filters.keyword) {
      params.append("keyword", filters.keyword);
    }

    if (filters.city) {
      params.append("city", filters.city);
    }

    if (filters.propertyType) {
      params.append("propertyType", filters.propertyType);
    }

    if (filters.bedrooms) {
      params.append("bedrooms", filters.bedrooms);
    }

    const data = await searchProperties(params);

    setProperties(data);
  }

  return (
    <>
      <Navbar />

      <PropertyHeader
        keyword={filters.keyword}
        onKeywordChange={(value) =>
          handleChange("keyword", value)
        }
        onSearch={handleSearch}
      />

      <PropertyFilter
        filters={filters}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      <PropertyGrid properties={properties} />

      <Footer />
    </>
  );
}