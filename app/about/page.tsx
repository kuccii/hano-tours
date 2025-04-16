import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Hano Tours</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted travel and transportation partner in Rwanda, committed to providing premium services with a
            touch of African hospitality.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop"
              alt="Hano Tours team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Hano Tours began with a vision to showcase the beauty of Rwanda to visitors while
              providing exceptional transportation services. What started as a small fleet of three vehicles has grown
              into one of Rwanda's premier travel and transportation companies.
            </p>
            <p className="text-gray-600 mb-4">
              Our name "Hano" means "here" in Kinyarwanda, reflecting our deep connection to Rwanda and our commitment
              to being present and attentive to our clients' needs. We take pride in our Rwandan heritage and strive to
              infuse our services with the warmth and hospitality that Rwanda is known for.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of clients annually, from tourists exploring Rwanda's attractions to corporate
              clients requiring reliable transportation solutions. Our growth is built on our unwavering commitment to
              quality, safety, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="bg-primary text-white rounded-lg p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/80 mb-4">
                To provide exceptional travel and transportation experiences that showcase Rwanda's beauty and culture
                while ensuring the highest levels of comfort, safety, and customer satisfaction.
              </p>
              <p className="text-white/80">
                We aim to be ambassadors for Rwanda, contributing to the country's tourism development while maintaining
                sustainable and responsible business practices.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-bold">Excellence:</span> We strive for excellence in every aspect of our
                    service.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-bold">Integrity:</span> We operate with honesty, transparency, and ethical
                    standards.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-bold">Reliability:</span> We are dependable and consistent in our service
                    delivery.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-bold">Cultural Pride:</span> We celebrate and share Rwanda's rich cultural
                    heritage.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Hano Tours</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand out from the competition through our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise",
                description:
                  "Our team consists of local experts with deep knowledge of Rwanda's culture, history, and attractions.",
              },
              {
                title: "Premium Fleet",
                description: "We maintain a modern fleet of well-maintained vehicles for maximum comfort and safety.",
              },
              {
                title: "Personalized Service",
                description:
                  "We tailor our services to meet your specific needs and preferences for a customized experience.",
              },
              {
                title: "Safety First",
                description: "Your safety is our priority, with regular vehicle maintenance and professional drivers.",
              },
              {
                title: "Sustainable Tourism",
                description:
                  "We are committed to environmentally responsible practices and supporting local communities.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our customer support team is available around the clock to assist with any queries or concerns.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-medium">Book Your Experience</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
