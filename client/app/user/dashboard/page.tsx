"use client";

export default function UserDashboard() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  return (
    <div>

      <div className="rounded-3xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome {user.fullName} 👋
        </h1>

        <p className="mt-3 text-slate-500">
          {user.email}
        </p>

      </div>

    </div>
  );
}