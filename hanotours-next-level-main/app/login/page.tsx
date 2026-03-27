"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      router.push("/account/bookings");
      router.refresh();
      return;
    }
    const data = await response.json();
    setMessage(data.error ?? "Invalid credentials.");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Login</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl bg-white p-6 shadow">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
        <button className="w-full rounded-md bg-brand-primary py-2 font-semibold text-white">Sign in</button>
        {message ? <p className="text-sm text-red-600">{message}</p> : null}
      </form>
    </div>
  );
}
