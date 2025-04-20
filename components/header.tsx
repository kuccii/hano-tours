"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/tours",
      label: "Tours",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-md py-2"
          : isHomePage
          ? "bg-transparent py-4"
          : "bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={cn(
            "text-2xl font-playfair font-bold",
            isScrolled || !isHomePage ? "text-primary dark:text-white" : "text-white"
          )}>
            Hano<span className="text-accent">Tours</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "font-medium transition-colors hover:text-accent",
                isScrolled || !isHomePage ? "text-primary dark:text-gray-200" : "text-white"
              )}
            >
              {route.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button 
            className="bg-accent hover:bg-accent/90 text-primary dark:text-primary font-medium"
            onClick={() => router.push('/contact')}
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={cn(
                "h-6 w-6",
                isScrolled || !isHomePage ? "text-primary dark:text-white" : "text-white"
              )} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] dark:bg-gray-950 dark:border-gray-800">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-sm font-medium transition-colors hover:text-accent dark:text-gray-200 dark:hover:text-accent"
                >
                  {route.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-primary dark:text-primary"
                onClick={() => router.push('/contact')}
              >
                Book Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
