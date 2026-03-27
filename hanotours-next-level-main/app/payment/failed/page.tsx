import Link from "next/link";

export default function PaymentFailedPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-dark">Payment not completed</h1>
      <p className="mt-3 text-neutral-700">No worries, your booking is pending and you can try payment again.</p>
      <Link href="/tours" className="mt-6 inline-block rounded-md bg-brand-primary px-4 py-2 font-semibold text-white">
        Back to tours
      </Link>
    </div>
  );
}
