"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getSettings, updateSettings } from "@/lib/api";

interface SettingsFormData {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  about: string;
}

export default function SettingsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SettingsFormData>();

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const data = await getSettings();

      if (data) {
        reset({
          companyName: data.companyName || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          about: data.about || "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(data: SettingsFormData) {
    try {
      await updateSettings(data);

      toast.success("Settings Updated Successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to update settings");
    }
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6"
      >
        <div>
          <label className="mb-2 block font-medium text-black">
            Company Name
          </label>

          <input
            {...register("companyName")}
            type="text"
            placeholder="Enter company name"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-black">
            Company Email
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="Enter email"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-black">
            Phone Number
          </label>

          <input
            {...register("phone")}
            type="text"
            placeholder="Enter phone number"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-black">
            Address
          </label>

          <textarea
            {...register("address")}
            rows={4}
            placeholder="Enter address"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-black">
            About Company
          </label>

          <textarea
            {...register("about")}
            rows={4}
            placeholder="About company"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {isSubmitting ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}