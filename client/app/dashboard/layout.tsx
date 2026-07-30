import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-100">

        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="ml-64 flex min-h-screen flex-col">

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 bg-slate-100 p-8">
            {children}
          </main>

        </div>

      </div>
    </ProtectedRoute>
  );
}