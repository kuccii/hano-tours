"use client";

import { useState } from "react";

type BookingWidgetProps = {
  serviceType: "TOUR" | "CAR";
  serviceId: string;
  currency?: string;
};

export function BookingWidget({ serviceType, serviceId, currency = "USD" }: BookingWidgetProps) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submitBooking() {
    setLoading(true);
    setMessage("");
    try {
      const quoteRes = await fetch("/api/bookings/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          serviceId,
          guestCount: guests,
          startDate: date,
        }),
      });
      const quoteData = await quoteRes.json();
      if (!quoteRes.ok) {
        throw new Error(quoteData.error || "Could not calculate quote.");
      }

      const createRes = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          serviceId,
          guestCount: guests,
          startDate: date,
          travelerName: fullName,
          travelerEmail: email,
          totalAmount: quoteData.totalAmount,
          currency,
        }),
      });
      const createData = await createRes.json();
      if (!createRes.ok) {
        throw new Error(createData.error || "Booking creation failed.");
      }

      window.location.href = `/api/payments/flutterwave/init?bookingId=${createData.bookingId}`;
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Booking failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="sticky top-24 rounded-xl border bg-white p-5 shadow">
      <h3 className="text-lg font-semibold text-brand-dark">Book this experience</h3>
      <div className="mt-4 space-y-3">
        <label className="block text-sm">
          Date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Guests
          <input
            type="number"
            min={1}
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Full name
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={submitBooking}
        disabled={loading}
        className="mt-4 w-full rounded-md bg-brand-primary px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Processing..." : "Book and pay with Flutterwave"}
      </button>
      {message ? <p className="mt-3 text-sm text-red-600">{message}</p> : null}
    </aside>
  );
}
