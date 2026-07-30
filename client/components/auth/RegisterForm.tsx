"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {
  registerSchema,
  RegisterInput,
} from "@/lib/validations/register";

import { registerUser } from "@/lib/api";

export default function RegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterInput) {
    try {
      const response = await registerUser({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      toast.success("Registration Successful");

      if (response.user.role === "ADMIN") {
        router.push("/dashboard");
      } else {
        router.push("/user/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-10 shadow-2xl">

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Create Account
        </h1>

        <p className="mt-3 text-slate-500">
          Register to start exploring properties.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Full Name
          </label>

          <input
            {...register("fullName")}
            placeholder="Enter Full Name"
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none focus:border-blue-600"
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Email
          </label>

          <input
            type="email"
            {...register("email")}
            placeholder="Enter Email"
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none focus:border-blue-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Phone
          </label>

          <input
            {...register("phone")}
            placeholder="Enter Phone Number"
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none focus:border-blue-600"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Enter Password"
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none focus:border-blue-600"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Confirm Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none focus:border-blue-600"
          />

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Show Password */}
        <div className="flex items-center gap-2">

          <input
            type="checkbox"
            onChange={(e) =>
              setShowPassword(e.target.checked)
            }
          />

          <span className="text-sm text-slate-600">
            Show Password
          </span>

        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {isSubmitting
            ? "Creating Account..."
            : "Register"}
        </button>

      </form>

      <div className="mt-8 text-center">

        <p className="text-slate-600">
          Already have an account?
        </p>

        <Link
          href="/login"
          className="mt-2 inline-block font-semibold text-blue-600 hover:underline"
        >
          Login Here
        </Link>

      </div>

    </div>
  );
}