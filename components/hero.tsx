"use client"

import { Button } from "@/components/ui/button"
import { AnimatedElement } from "./AnimatedElement"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-20" />
        
        {/* Texture overlay */}
        <div className="absolute inset-0 dots-pattern opacity-20 mix-blend-soft-light z-30" />
        
        {/* Image */}
        <img
          src="https://steptodown.com/istock-downloader/images/steptodown.com757086.jpg"
          alt="Hero Background"
          className="object-cover w-full h-full transform scale-105 animate-subtle-zoom"
        />
      </div>

      {/* Decorative Elements with adjusted opacity */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float mix-blend-soft-light" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed mix-blend-soft-light" />
        <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-float mix-blend-soft-light" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement
            animationType="fadeInUp"
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)]">
              Discover Rwanda&apos;s Beauty
            </h1>
          </AnimatedElement>

          <AnimatedElement
            animationType="fadeInUp"
            delay={0.2}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] [text-shadow:_1px_1px_8px_rgb(0_0_0_/_40%)]">
              Experience the heart of Africa with our premium transportation and tour services.
              Your journey through the land of a thousand hills starts here.
            </p>
          </AnimatedElement>

          <AnimatedElement
            animationType="fadeInUp"
            delay={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              variant="accent"
              className="w-full sm:w-auto text-lg font-semibold px-8 py-6 hover:scale-105 transition-transform backdrop-blur-sm bg-accent/90"
            >
              Book Your Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg font-semibold px-8 py-6 border-white text-black hover:bg-black/10 hover:text-white hover:scale-105 transition-transform backdrop-blur-sm"
            >
              Learn More
            </Button>
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <AnimatedElement animationType="fadeInUp" delay={0.8}>
          <div className="animate-bounce">
            <div className="w-1 h-16 rounded-full bg-gradient-to-b from-white/80 to-transparent" />
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
