"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()
  const whatsappNumber = "+250788123456"
  const whatsappMessage = "Hello, I'm interested in booking a service with Hano Tours."

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  )
}

export default WhatsAppButton
