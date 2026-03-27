import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { initializeFlutterwavePayment } from "@/lib/flutterwave";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const bookingId = url.searchParams.get("bookingId");
  if (!bookingId) {
    return NextResponse.json({ error: "bookingId is required" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
  if (!booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  const txRef = `hn-${booking.reference}-${randomUUID().slice(0, 8)}`;
  await prisma.payment.create({
    data: {
      bookingId: booking.id,
      txRef,
      customerEmail: booking.travelerEmail,
      amount: booking.totalAmount,
      currency: booking.currency,
      status: "PENDING",
    },
  });

  const baseUrl = process.env.APP_BASE_URL || url.origin;
  const response = await initializeFlutterwavePayment({
    tx_ref: txRef,
    amount: Number(booking.totalAmount),
    currency: booking.currency,
    redirect_url: `${baseUrl}/api/payments/flutterwave/verify?bookingId=${booking.id}`,
    customer: {
      email: booking.travelerEmail,
      name: booking.travelerName,
    },
    customizations: {
      title: "HanoTours booking payment",
      description: `Payment for booking ${booking.reference}`,
    },
  });

  if (!response?.data?.link) {
    return NextResponse.json({ error: "Payment link not generated" }, { status: 500 });
  }

  return NextResponse.redirect(response.data.link);
}
