"use client"

import { Button } from "@/components/ui/button"
import { AnimatedElement } from "./AnimatedElement"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Parallax Image with Fade */}
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ 
            y: backgroundY,
            opacity
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/steptodown.com757086.jpg"
            alt="Rwanda Convention Center and Radisson Hotel"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </motion.div>

        {/* Background Color Fade */}
        <motion.div
          className="absolute inset-0 bg-black/20 dark:bg-black/40"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.6, 0.8])
          }}
        />
      </div>

      {/* Decorative Elements with adjusted opacity */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float mix-blend-multiply dark:mix-blend-soft-light" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed mix-blend-multiply dark:mix-blend-soft-light" />
        <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-2xl animate-float mix-blend-multiply dark:mix-blend-soft-light" />
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
              className="w-full sm:w-auto text-lg font-semibold px-8 py-6 hover:scale-105 transition-transform backdrop-blur-sm bg-accent/90 text-primary"
              onClick={() => router.push('/contact')}
            >
              Book Your Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg font-semibold px-8 py-6 bg-white/10 border-white text-white hover:bg-white/20 hover:border-white/80 transition-all duration-300 backdrop-blur-sm"
              onClick={() => router.push('/about')}
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
            <div className="w-1 h-16 rounded-full bg-white/30" />
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
        </svg>
      </div>
    </section>
  )
}
