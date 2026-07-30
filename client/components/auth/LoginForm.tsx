"use client";

import Link from "next/link";
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

    console.log("Login Response:", response);

    localStorage.setItem("token", response.token);
    localStorage.setItem(
      "user",
      JSON.stringify(response.user)
    );

    toast.success("Login Successful");

    if (response.user.role === "ADMIN") {
      router.push("/dashboard");
    } else {
      router.push("/user/dashboard");
    }
  } catch (error: any) {
    toast.error(error.message || "Login Failed");
  }
}

  return (
    <div className="rounded-3xl bg-white p-10 shadow-2xl">

      <div className="mb-8 text-center">

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-3 text-slate-500">
          Login to continue to your account.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

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
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none transition focus:border-blue-600"
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
            className="w-full rounded-xl border border-slate-300 p-4 text-black outline-none transition focus:border-blue-600"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}

        </div>

        {/* Show Password */}

        <label className="flex items-center gap-2 text-sm text-slate-600">

          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) =>
              setShowPassword(e.target.checked)
            }
          />

          Show Password

        </label>

        {/* Login Button */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
        >
          {isSubmitting
            ? "Logging in..."
            : "Login"}
        </button>

      </form>

      {/* Register Link */}

      <div className="mt-8 text-center">

        <p className="text-slate-600">
          Don't have an account?
        </p>

        <Link
          href="/register"
          className="mt-2 inline-block font-semibold text-blue-600 hover:underline"
        >
          Register Here
        </Link>

      </div>

    </div>
  );
}