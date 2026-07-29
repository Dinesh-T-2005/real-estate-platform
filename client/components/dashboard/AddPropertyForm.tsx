"use client";

import toast from "react-hot-toast";
import { createProperty } from "@/lib/api";
import PropertyForm from "./PropertyForm";
import { PropertyFormInput } from "@/lib/validations/property";

export default function AddPropertyForm() {
  async function handleCreate(data: PropertyFormInput) {
    try {
      await createProperty(data);

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