import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const slots = await prisma.availabilitySlot.findMany({ orderBy: { slotDate: "asc" } });
  return NextResponse.json(slots);
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const created = await prisma.availabilitySlot.create({ data: body });
  return NextResponse.json(created, { status: 201 });
}
