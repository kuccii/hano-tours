import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isValidSignature(rawBody: string, signature: string | null) {
  if (!signature || !process.env.FLUTTERWAVE_WEBHOOK_SECRET_HASH) return false;
  const digest = createHash("sha256").update(rawBody).digest("hex");
  return timingSafeEqual(Buffer.from(digest), Buffer.from(process.env.FLUTTERWAVE_WEBHOOK_SECRET_HASH));
}

export async function POST(request: Request) {
  const signature = request.headers.get("verif-hash");
  const rawBody = await request.text();

  if (!isValidSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody) as {
    event?: string;
    data?: { tx_ref?: string; id?: number; status?: string; amount?: number; currency?: string; customer?: { email?: string } };
  };

  const txRef = payload?.data?.tx_ref;
  if (!txRef) {
    return NextResponse.json({ ok: true });
  }

  const payment = await prisma.payment.findUnique({ where: { txRef } });
  if (!payment) {
    return NextResponse.json({ ok: true });
  }

  const successful = payload.data?.status === "successful";
  if (payment.status === "SUCCESSFUL" && successful) {
    return NextResponse.json({ ok: true });
  }

  await prisma.payment.update({
    where: { txRef },
    data: {
      transactionId: payload.data?.id ? String(payload.data.id) : payment.transactionId,
      status: successful ? "SUCCESSFUL" : "FAILED",
      paidAt: successful ? new Date() : payment.paidAt,
      rawPayload: payload,
    },
  });

  await prisma.booking.update({
    where: { id: payment.bookingId },
    data: { status: successful ? "CONFIRMED" : "PAYMENT_PENDING" },
  });

  return NextResponse.json({ ok: true });
}
