"use client";

import { useState } from "react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("Sending...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, subject, message }),
    });
    if (response.ok) {
      setStatus("Message sent successfully.");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
      return;
    }
    const data = await response.json();
    setStatus(data.error ?? "Could not send message.");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Contact us</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl bg-white p-6 shadow">
        <input
          required
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Full name"
          className="w-full rounded-md border px-3 py-2"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full rounded-md border px-3 py-2"
        />
        <input
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Subject"
          className="w-full rounded-md border px-3 py-2"
        />
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us about your trip"
          className="w-full rounded-md border px-3 py-2"
        />
        <button className="rounded-md bg-brand-primary px-4 py-2 font-semibold text-white">Send message</button>
        <p className="text-sm text-neutral-700">{status}</p>
      </form>
    </div>
  );
}
