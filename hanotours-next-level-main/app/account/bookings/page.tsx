import { cookies } from "next/headers";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { verifyAuthToken } from "@/lib/auth";

export default async function AccountBookingsPage() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p>Please <Link href="/login" className="text-brand-primary">log in</Link> to view your bookings.</p>
      </div>
    );
  }

  const payload = await verifyAuthToken(token).catch(() => null);
  if (!payload) {
    return <div className="mx-auto max-w-3xl px-4 py-12">Session expired. Please log in again.</div>;
  }

  const bookings = await prisma.booking.findMany({
    where: { userId: payload.userId },
    include: { items: { include: { tour: true, car: true } }, payments: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">My bookings</h1>
      <div className="mt-8 space-y-4">
        {bookings.map((booking) => (
          <article key={booking.id} className="rounded-lg bg-white p-5 shadow">
            <p className="text-xs uppercase tracking-wider text-neutral-500">{booking.reference}</p>
            <p className="mt-1 font-semibold text-brand-dark">{booking.status}</p>
            <p className="text-sm text-neutral-700">${Number(booking.totalAmount)} {booking.currency}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
