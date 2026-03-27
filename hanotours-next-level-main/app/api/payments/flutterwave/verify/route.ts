import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyFlutterwaveTransaction } from "@/lib/flutterwave";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const transactionId = url.searchParams.get("transaction_id");
  const status = url.searchParams.get("status");
  const txRef = url.searchParams.get("tx_ref");
  const bookingId = url.searchParams.get("bookingId");

  if (!transactionId || !txRef || !bookingId) {
    return NextResponse.redirect(`${process.env.APP_BASE_URL || url.origin}/payment/failed`);
  }

  const verify = await verifyFlutterwaveTransaction(transactionId);
  const ok = status === "successful" && verify?.data?.status === "successful";

  await prisma.payment.updateMany({
    where: { txRef },
    data: {
      transactionId,
      status: ok ? "SUCCESSFUL" : "FAILED",
      paidAt: ok ? new Date() : null,
      rawPayload: verify,
    },
  });

  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: ok ? "CONFIRMED" : "PAYMENT_PENDING" },
  });

  return NextResponse.redirect(`${process.env.APP_BASE_URL || url.origin}/payment/${ok ? "success" : "failed"}`);
}
