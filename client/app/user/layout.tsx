import UserSidebar from "@/components/user/UserSidebar";
import UserHeader from "@/components/user/UserHeader";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Fixed Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="ml-72 flex flex-1 flex-col">

        {/* Fixed Header */}
        <UserHeader />

        {/* Page Content */}
        <main className="flex-1 bg-slate-100 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}