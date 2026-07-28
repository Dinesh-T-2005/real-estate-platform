import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3, "Property Title is required"),

  price: z.coerce.number().min(1, "Price is required"),

  location: z.string().min(2, "Location is required"),

  city: z.string().min(2, "City is required"),

  bedrooms: z.coerce.number().min(1, "Minimum 1 bedroom"),

  bathrooms: z.coerce.number().min(1, "Minimum 1 bathroom"),

  parking: z.coerce.number().min(0),

  area: z.coerce.number().min(100, "Minimum area is 100 sq.ft"),

  propertyType: z.string().min(1, "Select Property Type"),

  image: z.string().min(1, "Image URL is required"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),

  featured: z.boolean(),

  isAvailable: z.boolean(),
});

export type PropertyFormInput = z.input<typeof propertySchema>;
export type PropertyFormData = z.output<typeof propertySchema>;