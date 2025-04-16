"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedElement } from "@/components/AnimatedElement"

const BookingPreview = () => {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <AnimatedElement animationType="sectionReveal" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book your transportation or tour with Hano Tours and experience Rwanda in comfort and style.
          </p>
        </AnimatedElement>

        <AnimatedElement animationType="cardReveal" delay={0.2}>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">
                    Service Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car-rental">Car Rental</SelectItem>
                      <SelectItem value="tour">Guided Tour</SelectItem>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                      <SelectItem value="wedding">Wedding Car</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white">
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20",
                          !date && "text-white/60"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Additional Information
                </Label>
                <Input
                  id="message"
                  placeholder="Any special requirements?"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-primary font-medium"
              >
                Book Now
              </Button>
            </form>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default BookingPreview
