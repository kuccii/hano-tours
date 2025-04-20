"use client"

const steps = [
  {
    number: "1",
    title: "Browse",
    description: "Select from our range of carefully curated tours and services.",
    icon: "🔍",
  },
  {
    number: "2",
    title: "Book",
    description: "Reserve your service online, quick and hassle-free.",
    icon: "📅",
  },
  {
    number: "3",
    title: "Confirm",
    description: "Receive instant confirmation and detailed information.",
    icon: "✓",
  },
  {
    number: "4",
    title: "Enjoy",
    description: "Relax and enjoy your journey with our professional service.",
    icon: "🌟",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary dark:text-white">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground dark:text-gray-300">
            Booking with Hano Tours is simple and convenient. Follow these easy steps to start your journey.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="how-it-works-card">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-semibold">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-primary dark:text-white">
                  {step.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}