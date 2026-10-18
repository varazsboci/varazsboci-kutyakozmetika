import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 px-4">
      <h1 className="text-2xl font-bold">Admin bejelentkezés</h1>
      <LoginForm />
    </div>
  );
}
