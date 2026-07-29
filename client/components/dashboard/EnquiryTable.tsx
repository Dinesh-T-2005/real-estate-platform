"use client";

import { useEffect, useState } from "react";
import { getEnquiries } from "@/lib/api";

export default function EnquiryTable() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEnquiries();
  }, []);

  async function loadEnquiries() {
    try {
      const data = await getEnquiries();
      setEnquiries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <h2 className="text-xl font-semibold text-black">
          Loading Enquiries...
        </h2>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="border-b border-slate-200 px-8 py-6">
        <h2 className="text-3xl font-bold text-black">
          Enquiries
        </h2>

        <p className="mt-2 text-slate-600">
          Total Enquiries: {enquiries.length}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-black">
                Property
              </th>
              <th className="px-6 py-4 text-left font-semibold text-black">
                Name
              </th>
              <th className="px-6 py-4 text-left font-semibold text-black">
                Email
              </th>
              <th className="px-6 py-4 text-left font-semibold text-black">
                Phone
              </th>
              <th className="px-6 py-4 text-left font-semibold text-black">
                Visit Date
              </th>
            </tr>
          </thead>

          <tbody>
            {enquiries.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-slate-500"
                >
                  No Enquiries Found
                </td>
              </tr>
            ) : (
              enquiries.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium text-black">
                    {item.property?.title}
                  </td>

                  <td className="px-6 py-4 text-black">
                    {item.fullName}
                  </td>

                  <td className="px-6 py-4 text-black">
                    {item.email}
                  </td>

                  <td className="px-6 py-4 text-black">
                    {item.phone}
                  </td>

                  <td className="px-6 py-4 text-black">
                    {item.visitDate
                      ? new Date(item.visitDate).toLocaleDateString("en-GB")
                      : "-"}
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