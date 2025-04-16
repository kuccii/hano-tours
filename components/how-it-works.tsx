"use client"

import { AnimatedElement } from "./AnimatedElement"
import { Check, Calendar, Car, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: <Check className="w-8 h-8" />,
    title: "Choose",
    description: "Select from our range of services and vehicles that best suit your needs."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Book",
    description: "Reserve your service online, by phone, or via WhatsApp for your preferred date."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Confirm",
    description: "Receive instant confirmation and details about your booking."
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: "Enjoy",
    description: "Relax and enjoy your journey with our professional drivers and guides."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 lines-pattern opacity-10" />
      </div>

      <div className="container relative mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Booking with Hano Tours is simple and convenient. Follow these easy steps to start your
            journey.
          </p>
        </AnimatedElement>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedElement
                key={step.title}
                animationType="fadeInUp"
                delay={index * 0.1}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <div className="relative p-6 rounded-2xl glass-card group hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 via-white/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  )
}