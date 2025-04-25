"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { AnimatedElement } from "@/components/AnimatedElement"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            Have questions or ready to book? Reach out to our team for personalized assistance with your travel and
            transportation needs.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedElement animationType="fadeInLeft">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Our Location</h3>
                    <p className="text-muted-foreground dark:text-gray-400">KN2st 56AVE, Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Phone Number</h3>
                    <p className="text-muted-foreground dark:text-gray-400">+250 788 460 359</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Email Address</h3>
                    <p className="text-muted-foreground dark:text-gray-400">info@hanotours.rw</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Working Hours</h3>
                    <p className="text-muted-foreground dark:text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground dark:text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground dark:text-gray-400">Sunday: Closed (Emergency services available)</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-64 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41051054439!2d30.03955565!3d-1.9440867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement animationType="fadeInRight">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary dark:text-white">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary dark:text-white">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary dark:text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-primary dark:text-white">Subject</Label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger id="subject" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Request</SelectItem>
                        <SelectItem value="tour">Tour Information</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary dark:text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={6}
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary font-medium">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedElement>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground dark:text-gray-400">
              Find answers to common questions about our services, booking process, and policies.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement animationType="fadeInUp" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  How do I book a tour or transportation service?
                </h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  You can book our services through our website, by phone, email, or WhatsApp. We recommend booking in advance to ensure availability,
                  especially during peak tourist seasons.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  We accept credit/debit cards, bank transfers, and mobile money payments. For tours, a 30% deposit is required to confirm your booking,
                  with the balance due before the service date.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  Can I customize a tour package?
                </h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Yes, we offer customized tour packages tailored to your preferences, schedule, and interests. Contact our team to discuss your requirements,
                  and we'll create a personalized itinerary for you.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInUp" delay={0.4}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  What is your cancellation policy?
                </h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  Cancellations made 7+ days before the service date receive a full refund. Cancellations 3-6 days prior receive a 50% refund. Cancellations less
                  than 3 days before the service date are non-refundable.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  )
}
