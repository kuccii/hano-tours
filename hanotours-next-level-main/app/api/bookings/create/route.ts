import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createBookingSchema } from "@/lib/schemas";
import { verifyAuthToken } from "@/lib/auth";

function bookingReference() {
  return `HN-${new Date().getFullYear()}-${randomUUID().slice(0, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = createBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const token = (await cookies()).get("auth_token")?.value;
  const authPayload = token ? await verifyAuthToken(token).catch(() => null) : null;

  const slotDate = new Date(parsed.data.startDate);
  const availability = await prisma.availabilitySlot.findFirst({
    where: {
      serviceType: parsed.data.serviceType,
      slotDate,
      ...(parsed.data.serviceType === "TOUR"
        ? { tourId: parsed.data.serviceId }
        : { carId: parsed.data.serviceId }),
    },
  });

  if (availability && availability.bookedCount + parsed.data.guestCount > availability.capacity) {
    return NextResponse.json({ error: "Selected date is no longer available." }, { status: 409 });
  }

  const booking = await prisma.$transaction(async (tx) => {
    if (availability) {
      await tx.availabilitySlot.update({
        where: { id: availability.id },
        data: { bookedCount: { increment: parsed.data.guestCount } },
      });
    }

    const created = await tx.booking.create({
      data: {
        reference: bookingReference(),
        userId: authPayload?.userId,
        status: "PAYMENT_PENDING",
        travelerName: parsed.data.travelerName,
        travelerEmail: parsed.data.travelerEmail,
        travelerPhone: parsed.data.travelerPhone,
        startDate: slotDate,
        guestCount: parsed.data.guestCount,
        baseAmount: parsed.data.totalAmount,
        totalAmount: parsed.data.totalAmount,
        currency: parsed.data.currency,
      },
    });

    await tx.bookingItem.create({
      data: {
        bookingId: created.id,
        serviceType: parsed.data.serviceType,
        unitPrice: parsed.data.totalAmount,
        totalPrice: parsed.data.totalAmount,
        quantity: 1,
        ...(parsed.data.serviceType === "TOUR"
          ? { tourId: parsed.data.serviceId }
          : { carId: parsed.data.serviceId }),
      },
    });

    return created;
  });

  return NextResponse.json({ bookingId: booking.id, reference: booking.reference });
}
