"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createEnquiry } from "@/lib/api";

interface ContactFormProps {
  propertyId: string;
}


interface EnquiryForm {
  fullName: string;
  email: string;
  phone: string;
  visitDate: string;
  message: string;
}

export default function ContactForm({
  propertyId,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryForm>();

  const onSubmit = async (data: EnquiryForm) => {
    try {
      await createEnquiry({
        propertyId,
        ...data,
      });

      toast.success("Enquiry Sent Successfully");

      reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to send enquiry");
    }
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-slate-900">
        Send an Enquiry
      </h2>

      <p className="mt-3 text-slate-500">
        Interested in this property? Fill in the form and our agent will
        contact you shortly.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("fullName", {
              required: "Full Name is required",
            })}
            className="w-full rounded-xl border border-slate-300 p-4 !text-black outline-none transition focus:border-blue-600"
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full rounded-xl border border-slate-300 !text-black  p-4 outline-none transition focus:border-blue-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91 9876543210"
            {...register("phone", {
              required: "Phone Number is required",
            })}
            className="w-full rounded-xl border !text-black  border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Visit Date */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Preferred Visit Date
          </label>

          <input
            type="date"
            {...register("visitDate")}
            className="w-full rounded-xl border !text-black  border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Write your enquiry..."
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full rounded-xl border !text-black  border-slate-300 p-4 outline-none transition focus:border-blue-600"
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </section>
  );
}