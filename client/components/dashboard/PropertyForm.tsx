"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/api";

import {
    propertySchema,
    PropertyFormInput,
} from "@/lib/validations/property";

interface PropertyFormProps {
    initialData?: Partial<PropertyFormInput>;
    onSubmit: (data: PropertyFormInput) => Promise<void>;
    buttonText: string;
}

const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white p-4 text-black placeholder:text-black caret-black outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

const labelClass =
    "mb-2 block font-medium text-slate-800";



export default function PropertyForm({
    initialData,
    onSubmit,
    buttonText,
}: PropertyFormProps) {

    const [preview, setPreview] = useState("");
    const [uploading, setUploading] = useState(false);
    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        try {
            setUploading(true);

            const imageUrl = await uploadImage(file);

            setPreview(`http://localhost:8000${imageUrl}`);

            setValue("image", imageUrl);

            toast.success("Image Uploaded Successfully");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setUploading(false);
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        setValue,
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

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    const submitForm = async (data: PropertyFormInput) => {
        try {
            await onSubmit(data);
        } catch (error: any) {
            toast.error(error.message || "Something went wrong");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="rounded-3xl bg-white p-8 shadow-xl"
        >
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-black">
                    Property Information
                </h2>

                <p className="mt-2 text-slate-500">
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
                        <p className="mt-1 text-sm font-medium text-red-600">
                            {errors.title.message}
                        </p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.price.message}</p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.location.message}</p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.city.message}</p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.bedrooms.message}</p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.bathrooms.message}</p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.parking.message}</p>
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
                        <p className="mt-1 text-sm font-medium text-red-600">{errors.area.message}</p>
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
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={inputClass}
                />

                <input
                    type="hidden"
                    {...register("image")}
                />

                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="mt-4 h-40 w-60 rounded-lg object-cover"
                    />
                )}

                {uploading && (
                    <p className="mt-2 text-blue-600">
                        Uploading...
                    </p>
                )}
                {errors.image && (
                    <p className="mt-1 text-sm font-medium text-red-600">{errors.image.message}</p>
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
                {isSubmitting || uploading
                    ? "Submitting..."
                    : buttonText}
            </button>


        </form>
    );
}