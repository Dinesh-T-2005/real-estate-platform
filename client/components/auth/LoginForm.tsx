"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { loginUser } from "@/lib/api";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await loginUser(data);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success("Login Successful");

      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Login  Failed");
    }
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">
        Admin Login
      </h1>

      <p className="mb-8 text-center text-slate-500">
        Login to access Dashboard
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full rounded-xl border border-slate-300 p-4 !text-black outline-none transition focus:border-blue-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full rounded-xl border border-slate-300 !text-black p-4 outline-none transition focus:border-blue-600"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}