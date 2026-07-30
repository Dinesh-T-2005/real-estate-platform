"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Eye,
  Trash2,
  Building2,
} from "lucide-react";
import { deleteEnquiry } from "@/lib/api";

import { getEnquiries } from "@/lib/api";
import { updateEnquiryStatus } from "@/lib/api";

export default function EnquiryTable() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 10;

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    loadEnquiries();
  }, [page]);

  async function loadEnquiries() {
    try {
      const result = await getEnquiries(
        page,
        limit
      );

      setEnquiries(result.enquiries);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {

    if (!confirm("Delete this enquiry?")) {
      return;
    }

    try {

      await deleteEnquiry(id);

      setEnquiries((prev) =>
        prev.filter((x) => x.id !== id)
      );

    } catch (err) {
      console.error(err);
    }

  }

  async function changeStatus(
    id: string,
    status: string
  ) {
    try {
      await updateEnquiryStatus(id, status);

      loadEnquiries();

    } catch (err) {
      console.error(err);
    }
  }
  const pending = enquiries.filter(
    (x) => (x.status || "PENDING") === "PENDING"
  ).length;

  const approved = enquiries.filter(
    (x) => x.status === "APPROVED"
  ).length;

  const rejected = enquiries.filter(
    (x) => x.status === "REJECTED"
  ).length;


  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow-xl">
        <h2 className="text-2xl font-semibold text-slate-900">
          Loading Enquiries...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Stats */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <p className="text-slate-500">
            Total Enquiries
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {enquiries.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-6 shadow-lg">
          <p className="text-yellow-800">
            Pending
          </p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-800">
            {pending}
          </h2>
        </div>

        <div className="rounded-2xl bg-green-50 p-6 shadow-lg">
          <p className="text-green-800">
            Approved
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-800">
            {approved}
          </h2>
        </div>

        <div className="rounded-2xl bg-red-50 p-6 shadow-lg">
          <p className="text-red-800">
            Rejected
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-800">
            {rejected}
          </h2>
        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <div className="border-b border-slate-200 px-8 py-6">

          <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
            <Building2 className="text-blue-600" />
            Property Enquiries
          </h2>

          <p className="mt-2 text-slate-500">
            Manage all customer property enquiries.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-100">

              <tr className="text-left text-slate-900">

                <th className="px-6 py-4 font-semibold">
                  Property
                </th>

                <th className="px-6 py-4 font-semibold">
                  Customer
                </th>

                <th className="px-6 py-4 font-semibold">
                  Contact
                </th>

                <th className="px-6 py-4 font-semibold">
                  Visit Date
                </th>

                <th className="px-6 py-4 font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 font-semibold">
                  Message
                </th>

                <th className="px-6 py-4 text-center font-semibold">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {enquiries.length === 0 ? (

                <tr>

                  <td
                    colSpan={7}
                    className="py-12 text-center text-lg text-slate-500"
                  >
                    No enquiries found.
                  </td>

                </tr>

              ) : (

                enquiries.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-slate-200 text-slate-900 transition hover:bg-slate-50"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {item.property?.title}
                    </td>

                    <td className="px-6 py-5 font-medium">
                      {item.fullName}
                    </td>

                    <td className="px-6 py-5">

                      <div className="space-y-2 text-sm">

                        <div className="flex items-center gap-2">
                          <Mail
                            size={15}
                            className="text-blue-600"
                          />
                          <span>{item.email}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone
                            size={15}
                            className="text-green-600"
                          />
                          <span>{item.phone}</span>
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        <Calendar
                          size={16}
                          className="text-blue-600"
                        />

                        <span>
                          {item.visitDate
                            ? new Date(
                              item.visitDate
                            ).toLocaleDateString("en-GB")
                            : "-"}
                        </span>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-4 py-2 text-xs font-bold ${(item.status || "PENDING") ===
                          "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : (item.status ||
                            "PENDING") ===
                            "REJECTED"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {item.status || "PENDING"}
                      </span>

                    </td>

                    <td className="max-w-xs px-6 py-5">

                      <div className="flex items-start gap-2">

                        <MessageSquare
                          size={16}
                          className="mt-1 text-blue-600"
                        />

                        <span className="line-clamp-2">
                          {item.message}
                        </span>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-3">

                        <select
                          value={item.status || "PENDING"}
                          onChange={(e) =>
                            changeStatus(item.id, e.target.value)
                          }
                          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
                        >
                          <option value="PENDING">
                            Pending
                          </option>

                          <option value="APPROVED">
                            Approved
                          </option>

                          <option value="REJECTED">
                            Rejected
                          </option>
                        </select>

                        <button onClick={() => handleDelete(item.id)} className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700">
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>
          <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-5">

            <p className="text-sm font-medium text-slate-600">
              Showing {(page - 1) * limit + 1} -
              {Math.min(page * limit, total)} of {total} enquiries
            </p>

            <div className="flex items-center gap-3">

              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className={`rounded-lg px-5 py-2 font-semibold transition ${page === 1
                    ? "cursor-not-allowed bg-slate-200 text-slate-400"
                    : "bg-slate-800 text-white hover:bg-slate-900"
                  }`}
              >
                ← Previous
              </button>

              <span className="rounded-lg border bg-white px-4 py-2 font-bold text-blue-600 shadow">
                {page} / {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className={`rounded-lg px-5 py-2 font-semibold transition ${page === totalPages
                    ? "cursor-not-allowed bg-slate-200 text-slate-400"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
              >
                Next →
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}