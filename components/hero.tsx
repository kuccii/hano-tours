"use client"

import { Button } from "@/components/ui/button"
import { AnimatedElement } from "./AnimatedElement"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/10 z-10" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-20" />
        
        {/* Texture overlay */}
        <div className="absolute inset-0 dots-pattern opacity-20 mix-blend-soft-light z-30" />
        
        {/* Parallax Image */}
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: backgroundY }}
        >
          <img
            src="https://steptodown.com/istock-downloader/images/steptodown.com757086.jpg"
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
        </motion.div>
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] [text-shadow:_1px_1px_8px_rgb(0_0_0_/_30%)]">
              Discover Rwanda&apos;s Beauty
            </h1>
          </AnimatedElement>

          <AnimatedElement
            animationType="fadeInUp"
            delay={0.2}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] [text-shadow:_1px_1px_6px_rgb(0_0_0_/_30%)]">
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

      {/* Modern Static Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <svg
          className="relative block w-full h-[150px]"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main wave */}
          <path
            d="M0 96L48 85.3C96 75 192 53 288 42.7C384 32 480 32 576 42.7C672 53 768 75 864 80C960 85 1056 75 1152 69.3C1248 64 1344 64 1392 64H1440V140H0V96Z"
            className="fill-background"
          />
          {/* Overlay wave with transparency */}
          <path
            d="M0 96L48 101.3C96 107 192 117 288 112C384 107 480 85 576 80C672 75 768 85 864 90.7C960 96 1056 96 1152 90.7C1248 85 1344 75 1392 69.3L1440 64V140H0V96Z"
            className="fill-background/30"
          />
          {/* Subtle accent wave */}
          <path
            d="M0 112L48 117.3C96 123 192 133 288 128C384 123 480 101 576 96C672 91 768 101 864 106.7C960 112 1056 112 1152 106.7C1248 101 1344 91 1392 85.3L1440 80V140H0V112Z"
            className="fill-accent/10"
          />
        </svg>
      </div>
    </section>
  )
}
