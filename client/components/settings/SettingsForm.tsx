"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  getSettings,
  updateSettings,
  uploadImage,
} from "@/lib/api";

interface SettingsFormData {
  companyName: string;
  companyLogo?: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}
export default function SettingsForm() {
  const [logo, setLogo] = useState("");
  const [uploading, setUploading] = useState(false);

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
        setLogo(data.companyLogo || "");

        reset({
          companyName: data.companyName || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          about: data.about || "",
          facebook: data.facebook || "",
          instagram: data.instagram || "",
          linkedin: data.linkedin || "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogoUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const image = await uploadImage(file);

      setLogo(image);

      toast.success("Logo Uploaded Successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(data: SettingsFormData) {
    try {
      await updateSettings({
        ...data,
        companyLogo: logo,
      });

      toast.success("Settings Updated Successfully");
    } catch (error: any) {
      toast.error(
        error.message || "Failed to update settings"
      );
    }
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6"
      >
        {/* Company Logo */}

        <div>
          <label className="mb-2 block font-medium text-black">
            Company Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="w-full rounded-lg border p-3 text-black"
          />

          {uploading && (
            <p className="mt-2 text-blue-600">
              Uploading...
            </p>
          )}

          {logo && (
            <img
              src={`http://localhost:8000${logo}`}
              alt="Company Logo"
              className="mt-4 h-28 w-28 rounded-xl border object-contain"
            />
          )}
        </div>

        {/* Company Name */}

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

        {/* Email */}

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

        {/* Phone */}

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
            Facebook URL
          </label>

          <input
            {...register("facebook")}
            type="text"
            placeholder="https://facebook.com/yourpage"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-black">
            Instagram URL
          </label>

          <input
            {...register("instagram")}
            type="text"
            placeholder="https://instagram.com/yourpage"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-black">
            LinkedIn URL
          </label>

          <input
            {...register("linkedin")}
            type="text"
            placeholder="https://linkedin.com/company/yourcompany"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        {/* Address */}

        <div>
          <label className="mb-2 block font-medium text-black">
            Address
          </label>

          <textarea
            {...register("address")}
            rows={4}
            placeholder="Enter company address"
            className="w-full rounded-lg border p-3 text-black"
          />
        </div>

        {/* About */}

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

        {/* Save */}

        <button
          type="submit"
          disabled={isSubmitting || uploading}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting || uploading
            ? "Saving..."
            : "Save Settings"}
        </button>
      </form>
    </div>
  );
}