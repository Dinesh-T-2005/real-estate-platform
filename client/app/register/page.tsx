import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-20">
      <div className="mx-auto max-w-xl">
        <RegisterForm />
      </div>
    </main>
  );
}