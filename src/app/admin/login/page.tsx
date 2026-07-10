"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@ips.edu");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (email === "admin@ips.edu" && password === "admin123") {
        localStorage.setItem("ips_admin", "1");
        toast.success("Welcome back, admin");
        router.push("/admin");
      } else {
        toast.error("Invalid credentials. Try admin@ips.edu / admin123");
        setLoading(false);
      }
    }, 600);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(https://content3.jdmagicbox.com/comp/indore/r8/0731px731.x731.110210170622.k2r8/catalogue/ips-academy-rajendra-nagar-indore-institutes-for-bca-rvhimthj84.jpg)] bg-cover px-4 font-sans">
      <div className="w-full max-w-md ">
        <Link href="/" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to site
        </Link>
        <div className="rounded-2xl border border-border backdrop-blur-xl p-8 shadow-[var(--shadow-elegant)]">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold">Admin Console</h1>
              <p className="text-xs text-muted-foreground">IPS Campus Assistant</p>
            </div>
          </div>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="mt-1.5" />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </form>
          <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Demo credentials:</span> admin@ips.edu / admin123
          </div>
        </div>
      </div>
    </div>
  );
}
