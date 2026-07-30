"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Shield,
  Trash2,
  Search,
} from "lucide-react";

import {
  getUsers,
  updateUserStatus,
  deleteUser,
} from "@/lib/api";

export default function UserTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleStatus(user: any) {
    try {
      await updateUserStatus(
        user.id,
        !user.isActive
      );

      loadUsers();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this user?")) return;

    try {
      await deleteUser(id);

      setUsers((prev) =>
        prev.filter((u) => u.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  }

  const filtered = users.filter(
    (u) =>
      u.fullName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      u.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="overflow-hidden rounded-3xl bg-white text-slate-900 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-200 p-6">

        <div className="flex items-center justify-between">

          <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
            <Users className="text-blue-600" />
            Users
          </h2>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search user..."
              className="rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left font-semibold text-slate-900">
                Name
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-900">
                Email
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-900">
                Phone
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-900">
                Role
              </th>

              <th className="px-6 py-4 text-left font-semibold text-slate-900">
                Status
              </th>

              <th className="px-6 py-4 text-center font-semibold text-slate-900">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center text-slate-500"
                >
                  No users found
                </td>

              </tr>

            ) : (

              filtered.map((user) => (

                <tr
                  key={user.id}
                  className="border-b border-slate-200 text-slate-900 transition hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {user.fullName}
                  </td>

                  <td className="px-6 py-4 text-slate-900">
                    {user.email}
                  </td>

                  <td className="px-6 py-4 text-slate-900">
                    {user.phone || "-"}
                  </td>

                  <td className="px-6 py-4 text-slate-900">
                    {user.role}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.isActive ? "Active" : "Blocked"}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() => handleStatus(user)}
                        className={`rounded-lg p-2 text-white transition ${
                          user.isActive
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        <Shield size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}