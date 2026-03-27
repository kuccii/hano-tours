import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const bookings = await prisma.booking.findMany({
    include: { items: { include: { tour: true, car: true } }, payments: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(bookings);
}

export async function PATCH(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await request.json()) as { id: string; status: string };
  const updated = await prisma.booking.update({
    where: { id: body.id },
    data: { status: body.status as never },
  });
  return NextResponse.json(updated);
}
