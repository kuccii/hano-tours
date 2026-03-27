const faqs = [
  {
    q: "How do I confirm a booking?",
    a: "Choose your service and date, complete traveler details, then finish payment on Flutterwave.",
  },
  {
    q: "Can I reschedule after payment?",
    a: "Yes, depending on your tour or vehicle cancellation policy and availability.",
  },
  {
    q: "Do you support deposits?",
    a: "Yes. You can configure deposit or full payment during checkout.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Frequently asked questions</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-lg bg-white p-5 shadow">
            <h2 className="text-lg font-semibold text-brand-dark">{item.q}</h2>
            <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
