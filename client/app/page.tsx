"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Search from "@/components/home/Search";
import Stats from "@/components/home/Stats";
import Featured from "@/components/home/Featured";
import WhyUs from "@/components/home/WhyUs";
import Cities from "@/components/home/Cities";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

import { getProperties, searchProperties } from "@/lib/api";
import { Property } from "@/types/property";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      console.error(error);
    }
  }
async function handleReset() {
  try {
    const data = await getProperties();
    setProperties(data);
  } catch (error) {
    console.error(error);
  }
}
  async function handleSearch(filters: {
    city: string;
    propertyType: string;
    minPrice: string;
    maxPrice: string;
  }) {
    const params = new URLSearchParams();

    if (filters.city) {
      params.append("city", filters.city);
    }

    if (filters.propertyType) {
      params.append("propertyType", filters.propertyType);
    }

    if (filters.minPrice) {
      params.append("minPrice", filters.minPrice);
    }

    if (filters.maxPrice) {
      params.append("maxPrice", filters.maxPrice);
    }

    try {
      const data = await searchProperties(params);
      setProperties(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Search onReset={handleReset} onSearch={handleSearch} />

      <Featured properties={properties} />

      <WhyUs />

      <Cities />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}