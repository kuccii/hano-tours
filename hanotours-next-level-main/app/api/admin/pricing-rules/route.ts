import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const rules = await prisma.pricingRule.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(rules);
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const created = await prisma.pricingRule.create({ data: body });
  return NextResponse.json(created, { status: 201 });
}
