"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

const products = [
  {
    name: "Shreyhit Premium Tea",
    category: "Beverages",
    image: "/premium-tea-product.jpg",
    description: "Rich, aromatic tea leaves sourced and packaged with care for the perfect brew",
    benefits: ["100% Natural", "Rich Aroma", "Premium Quality", "Fresh Packaging"],
  },
  {
    name: "Shreyhit Toothbrush",
    category: "Oral Care",
    image: "/toothbrush-product.jpg",
    description: "Ergonomic design with gentle bristles for optimal dental care and comfort",
    benefits: ["Ergonomic Design", "Soft Bristles", "Durable", "Hygienic"],
  },
  {
    name: "Shreyhit Dry Fruits Mix",
    category: "Food & Beverages",
    image: "/dry-fruits-product.jpg",
    description: "Premium selection of hand-picked nuts and dried fruits with excellent nutritional value",
    benefits: ["Hand-Picked", "High Nutrition", "Premium Quality", "Delicious Taste"],
  },
  {
    name: "Shreyhit Premium Aata",
    category: "Food & Beverages",
    image: "/wheat-flour.jpg",
    description: "Pure whole wheat flour freshly ground for healthy and nutritious rotis and parathas",
    benefits: ["100% Whole Wheat", "Fresh Ground", "High Fiber", "No Additives"],
  },
  {
    name: "Shreyhit Detergent Powder",
    category: "Cleaning",
    image: "/detergent-powder-product.jpg",
    description: "Powerful cleaning formula for all fabric types with superior stain removal",
    benefits: ["Powerful Formula", "All Fabrics", "Eco-Friendly", "Long Lasting"],
  },
  {
    name: "Shreyhit Scrubber",
    category: "Cleaning",
    image: "/scrubber-product.jpg",
    description: "Durable scrubber with superior cleaning power for kitchens and household use",
    benefits: ["Durable", "High Cleaning Power", "Long Life", "Affordable"],
  },
  {
    name: "Shreyhit Sanitary Pads",
    category: "Personal Care",
    image: "/sanitary-pads-product.jpg",
    description: "Comfortable, reliable protection with premium materials and superior absorption",
    benefits: ["Comfortable", "Reliable", "Highly Absorbent", "Dermatologically Tested"],
  },
]

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 animate-fadeInUp px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Our Products</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl">
              Discover our complete range of premium, ISO 9001 certified products manufactured with excellence and care.
              Each product is crafted to meet the highest quality standards.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 animate-fadeInUp group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  <div className="mb-4">
                    <p className="text-primary text-xs font-semibold mb-2">Key Benefits</p>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8">ISO 9001:2015 Certification</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-background border border-primary/30 rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="/iso-certificate-detailed.png"
                  alt="ISO 9001:2015 Certificate"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">Quality Assurance Commitment</h3>
                <p className="text-muted-foreground mb-6">
                  All our products are manufactured under ISO 9001:2015 quality management standards, ensuring
                  consistent excellence, reliability, and customer satisfaction across every product line.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-1">Certificate Number</p>
                    <p className="text-foreground font-bold">23QTR619</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-1">Certification Date</p>
                    <p className="text-foreground font-bold">25/06/2025</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-1">Valid Until</p>
                    <p className="text-foreground font-bold">25/06/2028</p>
                  </div>
                </div>

                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>International Quality Management Standards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Regular Audits & Compliance Checks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Continuous Process Improvement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Customer Satisfaction Focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Categories Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Daily Essentials</h3>
              <p className="text-muted-foreground mb-4">
                Our range includes essential products for daily hygiene and household cleaning, all manufactured to the
                highest quality standards.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Premium Tea
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Ergonomic Toothbrush
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Detergent Powder
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Personal Care</h3>
              <p className="text-muted-foreground mb-4">
                Specialized personal care products designed with comfort, hygiene, and quality as our top priorities.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Sanitary Pads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Kitchen Scrubber
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Premium Dry Fruits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
