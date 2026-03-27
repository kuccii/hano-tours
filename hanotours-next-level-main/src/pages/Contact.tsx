import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gold mb-2">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Have a question or want a custom itinerary? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold">Reach Us</h2>
              {[
                { icon: Phone, label: "Phone", value: "+250 780 000 000", href: "tel:+250780000000" },
                { icon: Mail, label: "Email", value: "info@hanotours.com", href: "mailto:info@hanotours.com" },
                { icon: MapPin, label: "Office", value: "Kigali, Rwanda", href: "#" },
                { icon: Clock, label: "Hours", value: "Mon-Sat: 7am - 8pm EAT", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-3 group">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-elevated">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium mb-1 block">Full Name</label>
                        <Input placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block">Email</label>
                        <Input type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1 block">Subject</label>
                      <Input placeholder="e.g. Custom gorilla trekking trip" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1 block">Message</label>
                      <Textarea placeholder="Tell us about your ideal trip..." rows={5} />
                    </div>
                    <Button size="lg" className="w-full md:w-auto px-8">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
