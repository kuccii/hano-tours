import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book a gorilla trekking permit?",
    a: "We handle all gorilla trekking permits on your behalf. Permits are $1,500 per person and must be booked well in advance, especially during peak season (June-September and December-February). Simply book your tour with us, and we'll secure your permit.",
  },
  {
    q: "What's included in your car hire service?",
    a: "All car hires include a professional, English-speaking driver, fuel, vehicle insurance, and bottled water. Airport transfers include meet-and-greet service. Multi-day hires include the driver's accommodation and meals.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Most tours offer free cancellation up to 5-7 days before the trip. Gorilla trekking permits are non-refundable but can be rescheduled subject to availability. Car hire cancellations are free up to 48 hours before pickup.",
  },
  {
    q: "Do you offer custom itineraries?",
    a: "Absolutely! Our 'Build My Trip' service lets you create a fully personalized itinerary. Tell us your dates, interests, and budget, and our travel planners will craft the perfect Rwanda experience for you.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept payments via Flutterwave (Visa, Mastercard, mobile money), bank transfer, and cash on arrival for car services. A deposit of 30% is required to confirm most bookings.",
  },
  {
    q: "Is Rwanda safe for tourists?",
    a: "Rwanda is one of the safest countries in Africa for tourists. Kigali is consistently ranked as the cleanest and safest city on the continent. Our guides and drivers are trained in safety protocols and first aid.",
  },
  {
    q: "What should I pack for gorilla trekking?",
    a: "We recommend sturdy hiking boots, long pants, long-sleeved shirt, rain jacket, garden gloves, and sunscreen. We provide walking sticks and rain ponchos. The trek can take 1-6 hours depending on where the gorillas are.",
  },
  {
    q: "Do you provide airport pickup?",
    a: "Yes! We provide meet-and-greet airport transfer service at Kigali International Airport (KGL). Your driver will be waiting with a name board at arrivals. Available 24/7 including early morning and late-night flights.",
  },
];

export default function FAQ() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gold mb-2">Support</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Everything you need to know about traveling with HanoTours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border-0 shadow-card px-6">
                <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
