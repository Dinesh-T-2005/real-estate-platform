"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { createProperty } from "@/lib/api";

import {
    propertySchema,
    PropertyFormInput,
    PropertyFormData,
} from "@/lib/validations/property";

const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white p-4 text-black placeholder:text-black !text-black caret-black outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

const labelClass =
    "mb-2 block font-medium !text-black text-slate-800";

export default function AddPropertyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PropertyFormInput>({
        resolver: zodResolver(propertySchema),
        defaultValues: {
            title: "",
            price: 0,
            location: "",
            city: "",
            bedrooms: 1,
            bathrooms: 1,
            parking: 0,
            area: 100,
            propertyType: "",
            image: "",
            description: "",
            featured: false,
            isAvailable: true,
        },
    });

    const onSubmit = async (data: PropertyFormInput) => {
        try {
            const response = await createProperty(data);

            console.log(response);

            toast.success("Property Added Successfully!");

        } catch (error: any) {
            console.error(error);

            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(
            onSubmit,
            (errors) => {
                console.log(errors);

                const firstError = Object.values(errors)[0];

                if (firstError?.message) {
                    toast.error(firstError.message.toString());
                } else {
                    toast.error("Please fill all required fields.");
                }
            }
        )} className="rounded-3xl bg-white p-8 shadow-xl">

            <div className="mb-8">
                <h2 className="text-3xl !text-black font-bold text-slate-900">
                    Property Information
                </h2>

                <p className="mt-2 !text-black text-slate-500">
                    Enter the property details below.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <div>
                    <label className={labelClass}>Property Title</label>
                    <input
                        type="text"
                        placeholder="Luxury Villa"
                        {...register("title")}
                        className={inputClass}
                    />
                    {errors.title && (
                        <p>{errors.title.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>Price</label>
                    <input
                        type="number"
                        {...register("price", {
                            valueAsNumber: true,
                        })}
                        className={inputClass}
                    />
                    {errors.price && (
                        <p>{errors.price.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>Location</label>
                    <input
                        type="text"
                        placeholder="OMR, Chennai"
                        {...register("location")}
                        className={inputClass}
                    />
                    {errors.location && (
                        <p>{errors.location.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>City</label>
                    <input
                        type="text"
                        placeholder="Chennai"
                        {...register("city")}
                        className={inputClass}
                    />
                    {errors.city && (
                        <p>{errors.city.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>Bedrooms</label>
                    <input
                        type="number"
                        {...register("bedrooms", {
                            valueAsNumber: true,
                        })}
                        className={inputClass}
                    />
                    {errors.bedrooms && (
                        <p>{errors.bedrooms.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>Bathrooms</label>
                    <input
                        type="number"
                        {...register("bathrooms", {
                            valueAsNumber: true,
                        })}
                        className={inputClass}
                    />
                    {errors.bathrooms && (
                        <p>{errors.bathrooms.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>Parking</label>
                    <input
                        type="number"
                        {...register("parking", {
                            valueAsNumber: true,
                        })}
                        className={inputClass}
                    />
                    {errors.parking && (
                        <p>{errors.parking.message}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>Area (sq.ft)</label>
                    <input
                        type="number"
                        placeholder="3200"
                        min={100}
                        {...register("area", {
                            valueAsNumber: true,
                        })}
                        className={inputClass}
                    />
                    {errors.area && (
                        <p>{errors.area.message}</p>
                    )}
                </div>

            </div>

            <div className="mt-6">

                <label className={labelClass}>Property Type</label>

                <select
                    {...register("propertyType")}
                    className="w-full rounded-xl border border-slate-300 bg-white p-4 text-black"
                >
                    <option value="">Select Property</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Land">Land</option>
                </select>

            </div>

            <div className="mt-6">

                <label className={labelClass}>Image URL</label>

                <input
                    type="text"
                    placeholder="/images/villa1.jpg"
                    {...register("image")}
                    className={inputClass}
                />
                {errors.image && (
                    <p>{errors.image.message}</p>
                )}

            </div>

            <div className="mt-6">

                <label className={labelClass}>Description</label>

                <textarea
                    rows={5}
                    placeholder="Write property description..."
                    {...register("description")}
                    className="w-full rounded-xl border !text-black border-slate-300 bg-white px-4 py-3 text-black"
                />

            </div>

            <div className="mt-6 flex gap-8">

                <label className="flex items-center !text-black gap-2 text-slate-800">
                    <input
                        type="checkbox"
                        className="h-5 w-5 !text-black accent-blue-600"
                        {...register("featured")}
                    />
                    Featured
                </label>

                <label className="flex items-center !text-black gap-2 text-slate-800">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="h-5 w-5 !text-black accent-blue-600"
                        {...register("isAvailable")}
                    />
                    Available
                </label>

            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isSubmitting ? "Submitting..." : "Add Property"}
            </button>

        </form>
    );
}