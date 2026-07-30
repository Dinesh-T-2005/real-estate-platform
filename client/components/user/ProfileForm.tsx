"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  getUserProfile,
  updateUserProfile,
} from "@/lib/api";

interface ProfileFormData {
  fullName: string;
  email: string;
  phone: string;
}

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ProfileFormData>();

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const data = await getUserProfile();

      reset({
        fullName: data.fullName || "",
        email: data.email || "",
        phone: data.phone || "",
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  async function onSubmit(data: ProfileFormData) {
    try {
      await updateUserProfile({
        fullName: data.fullName,
        phone: data.phone,
      });

      toast.success("Profile Updated Successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        My Profile
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Full Name */}

        <div>

          <label className="mb-2 block font-medium text-black">
            Full Name
          </label>

          <input
            {...register("fullName")}
            className="w-full rounded-xl border p-4 text-black"
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block font-medium text-black">
            Email
          </label>

          <input
            {...register("email")}
            disabled
            className="w-full rounded-xl border bg-slate-100 p-4 text-black"
          />

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block font-medium text-black">
            Phone
          </label>

          <input
            {...register("phone")}
            className="w-full rounded-xl border p-4 text-black"
          />

        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
        >
          {isSubmitting
            ? "Updating..."
            : "Save Changes"}
        </button>

      </form>

    </div>
  );
}