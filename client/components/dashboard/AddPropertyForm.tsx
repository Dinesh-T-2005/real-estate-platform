"use client";

import toast from "react-hot-toast";
import { createProperty } from "@/lib/api";
import PropertyForm from "./PropertyForm";
import { PropertyFormInput } from "@/lib/validations/property";

export default function AddPropertyForm() {


  async function handleCreate(
    data: PropertyFormInput,
    gallery: File[]
  ) {
    try {

      const property = await createProperty(data);

      if (gallery.length) {

        const formData = new FormData();

        gallery.forEach(file => {
          formData.append("images", file);
        });

        await fetch(
          `http://localhost:8000/api/property-images/${property.id}`,
          {
            method: "POST",
            body: formData
          }
        );
      }

      toast.success("Property Added Successfully!");

    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <PropertyForm
      buttonText="Add Property"
      onSubmit={handleCreate}
    />
  );
}