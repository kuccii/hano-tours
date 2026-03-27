import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { verifyAuthToken } from "@/lib/auth";

export default async function AdminPage() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) redirect("/login");

  const payload = await verifyAuthToken(token).catch(() => null);
  if (!payload || !["ADMIN", "MANAGER", "OPERATOR"].includes(String(payload.role))) {
    redirect("/");
  }

  const [bookings, tours, cars] = await Promise.all([
    prisma.booking.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    prisma.tour.findMany({ orderBy: { createdAt: "desc" }, take: 10 }),
    prisma.car.findMany({ orderBy: { createdAt: "desc" }, take: 10 }),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Admin dashboard</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-neutral-500">Bookings</p>
          <p className="text-3xl font-bold">{bookings.length}</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-neutral-500">Tours</p>
          <p className="text-3xl font-bold">{tours.length}</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-neutral-500">Cars</p>
          <p className="text-3xl font-bold">{cars.length}</p>
        </div>
      </div>
    </div>
  );
}
