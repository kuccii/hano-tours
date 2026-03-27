import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-dark">Payment successful</h1>
      <p className="mt-3 text-neutral-700">Your booking is now confirmed. A voucher and invoice are available in your account.</p>
      <Link href="/account/bookings" className="mt-6 inline-block rounded-md bg-brand-primary px-4 py-2 font-semibold text-white">
        View my bookings
      </Link>
    </div>
  );
}
