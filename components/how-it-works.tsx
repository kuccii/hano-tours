"use client"

import { AnimatedElement } from "./AnimatedElement"
import { Check, Calendar, Car, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: <Check className="w-6 h-6 text-[#1a2942]" />,
    title: "Choose",
    description: "Select from our range of services and vehicles that best suit your needs."
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#1a2942]" />,
    title: "Book",
    description: "Reserve your service online, by phone, or via WhatsApp for your preferred date."
  },
  {
    icon: <Car className="w-6 h-6 text-[#1a2942]" />,
    title: "Confirm",
    description: "Receive instant confirmation and details about your booking."
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-[#1a2942]" />,
    title: "Enjoy",
    description: "Relax and enjoy your journey with our professional drivers and guides."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-200/90 to-gray-300/80">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/60 via-gray-100/40 to-gray-200/60">
        <div className="absolute inset-0 lines-pattern opacity-10" />
      </div>

      <div className="container relative mx-auto px-4">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2942] mb-6">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Booking with Hano Tours is simple and convenient. Follow these easy steps to start your
            journey.
          </p>
        </AnimatedElement>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200/50 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedElement
                key={step.title}
                animationType="fadeInUp"
                delay={index * 0.1}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#ffc107] text-[#1a2942] text-sm font-bold flex items-center justify-center z-10 shadow-sm">
                  {index + 1}
                </div>

                <div className="relative p-6 rounded-2xl bg-white/30 backdrop-blur-sm group hover:-translate-y-1 transition-all duration-300 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="mb-6 p-3 rounded-xl bg-white/40 backdrop-blur-sm w-fit group-hover:scale-105 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1a2942]">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl animate-float-delayed" />
    </section>
  )
}