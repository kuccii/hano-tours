"use client"

import { AnimatedElement } from "./AnimatedElement"
import { Check, Calendar, Car, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: "Choose",
    description: "Select from our range of services and vehicles that best suit your needs."
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Book",
    description: "Reserve your service online, by phone, or via WhatsApp for your preferred date."
  },
  {
    icon: <Car className="h-8 w-8 text-primary" />,
    title: "Confirm",
    description: "Receive instant confirmation and details about your booking."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: "Enjoy",
    description: "Relax and enjoy your journey with our professional drivers and guides."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-950/5">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/10 via-accent/5 to-gray-950/10">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_100%)]" />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left shape */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl 
          animate-[float_8s_ease-in-out_infinite] mix-blend-soft-light" />
        
        {/* Bottom right shape */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl 
          animate-[float_10s_ease-in-out_2s_infinite] mix-blend-soft-light" />
        
        {/* Center shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/6 rounded-full blur-2xl 
          animate-[float_12s_ease-in-out_1s_infinite] mix-blend-soft-light" />

        {/* Additional floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent/6 rounded-full blur-2xl 
          animate-[spin_15s_linear_infinite,float_8s_ease-in-out_infinite] mix-blend-soft-light" />
        
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl 
          animate-[spin_20s_linear_infinite,float_10s_ease-in-out_3s_infinite] mix-blend-soft-light" />

        {/* Moving dots */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm
            animate-[moveLeftRight_15s_linear_infinite]" style={{ top: '20%' }} />
          <div className="absolute w-2 h-2 bg-accent/20 rounded-full blur-sm
            animate-[moveRightLeft_20s_linear_2s_infinite]" style={{ top: '60%' }} />
          <div className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm
            animate-[moveTopBottom_25s_linear_1s_infinite]" style={{ left: '30%' }} />
        </div>
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
                animationType="cardReveal"
                delay={index * 0.1}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center z-10 shadow-lg shadow-accent/20">
                  {index + 1}
                </div>

                <div className="relative h-full p-8 rounded-2xl backdrop-blur-[2px] bg-white/60 hover:-translate-y-2 transition-all duration-300 hover:bg-white/70">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex flex-col">
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 w-fit group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}