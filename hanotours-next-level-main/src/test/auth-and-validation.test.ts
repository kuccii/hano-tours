import { describe, expect, it } from "vitest";
import { createAuthToken, verifyAuthToken } from "@/lib/auth";
import { contactSchema, createBookingSchema, quoteSchema } from "@/lib/schemas";
import { isRateLimited } from "@/lib/rate-limit";

describe("auth token", () => {
  it("creates and verifies jwt payload", async () => {
    const token = await createAuthToken({
      userId: "user_1",
      role: "CUSTOMER",
      email: "test@example.com",
    });

    const payload = await verifyAuthToken(token);
    expect(payload.userId).toBe("user_1");
    expect(payload.email).toBe("test@example.com");
  });
});

describe("input validation", () => {
  it("accepts quote payload", () => {
    const parsed = quoteSchema.safeParse({
      serviceType: "TOUR",
      serviceId: "abc",
      startDate: new Date().toISOString(),
      guestCount: 2,
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects weak contact payload", () => {
    const parsed = contactSchema.safeParse({
      fullName: "A",
      email: "bad-email",
      subject: "x",
      message: "short",
    });
    expect(parsed.success).toBe(false);
  });

  it("accepts booking creation payload", () => {
    const parsed = createBookingSchema.safeParse({
      serviceType: "CAR",
      serviceId: "car_1",
      startDate: new Date().toISOString(),
      guestCount: 1,
      travelerName: "User Test",
      travelerEmail: "user@test.com",
      totalAmount: 120,
      currency: "USD",
    });
    expect(parsed.success).toBe(true);
  });
});

describe("rate limiter", () => {
  it("blocks after threshold", () => {
    const key = `test-${Date.now()}`;
    expect(isRateLimited(key, 2, 1000)).toBe(false);
    expect(isRateLimited(key, 2, 1000)).toBe(false);
    expect(isRateLimited(key, 2, 1000)).toBe(true);
  });
});
