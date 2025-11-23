"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-10">
        {/* Hero Section with Company Banner */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-card to-background px-4 sm:px-6 relative overflow-hidden py-16 sm:py-12">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative z-10 w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="animate-slideInLeft">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 sm:mb-6 leading-tight">
                  Premium Quality Products
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Experience excellence with Shreyhit Manufacturer (OPC) Private Limited. We deliver ISO 9001 certified
                  products that enhance your daily life with superior quality, reliability, and exceptional performance.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "ISO 9001", value: "Certified" },
                    { label: "Products", value: "7+" },
                    { label: "Quality", value: "Premium" },
                    { label: "Trusted", value: "Since 2025" },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="bg-card/50 border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
                    >
                      <div className="text-primary font-semibold text-sm">{feature.label}</div>
                      <div className="text-accent text-lg font-bold">{feature.value}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/products"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-primary/30 text-center text-sm sm:text-base"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-card border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors text-center text-sm sm:text-base"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="animate-fadeInUp flex justify-center">
                <div className="w-full max-w-xs sm:max-w-sm">
                  <Image
                    src="/company-banner.png"
                    alt="Shreyhit Manufacturer - ISO 9001 Certified Company"
                    width={500}
                    height={700}
                    priority
                    className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/40 border border-primary/30 hover:shadow-primary/60 transition-all transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-20 animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Our Premium Product Range
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-2">
                Discover our carefully crafted products that combine traditional quality with modern manufacturing
                standards
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  name: "Premium Tea",
                  desc: "Aromatic, freshly blended tea leaves with natural flavors",
                  image: "/premium-tea-product.jpg",
                  features: ["100% Natural", "Hand Blended", "Rich Aroma"],
                },
                {
                  name: "Natural Toothbrush",
                  desc: "Eco-friendly toothbrush with soft bristles for gentle cleaning",
                  image: "/toothbrush-product.jpg",
                  features: ["Soft Bristles", "Ergonomic Design", "Eco-Friendly"],
                },
                {
                  name: "Assorted Dry Fruits",
                  desc: "Premium quality dry fruits sourced from finest farms",
                  image: "/dry-fruits-product.jpg",
                  features: ["Nutrient Rich", "Fresh Harvest", "Pure Quality"],
                },
                {
                  name: "Premium Aata",
                  desc: "Pure whole wheat flour for healthy and nutritious rotis",
                  image: "/wheat-flour.jpg",
                  features: ["100% Whole Wheat", "Fresh Ground", "High Fiber"],
                },
                {
                  name: "Detergent Powder",
                  desc: "Powerful cleaning formula for pristine white clothes",
                  image: "/detergent-powder-product.jpg",
                  features: ["Stain Removal", "Gentle on Fabric", "Long-lasting"],
                },
                {
                  name: "Kitchen Scrubber",
                  desc: "Durable scrubber for effective cleaning of cookware",
                  image: "/scrubber-product.jpg",
                  features: ["Non-Scratch", "Durable", "Reusable"],
                },
                {
                  name: "Sanitary Pads",
                  desc: "Premium comfort pads with maximum absorbency",
                  image: "/sanitary-pads-product.jpg",
                  features: ["High Absorbency", "Comfort Fit", "Hygienic"],
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fadeInUp group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image Container */}
                  <div className="relative h-64 overflow-hidden bg-background">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/products"
                      className="inline-block text-primary font-semibold text-sm hover:text-accent transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Certification Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-card/50 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  label: "ISO 9001 Certified",
                  value: "2025-2028",
                  desc: "International Quality Management Standards",
                },
                {
                  label: "Premium Products",
                  value: "7+",
                  desc: "Diverse range of consumer essentials",
                },
                {
                  label: "Expert Leadership",
                  value: "Prince Srivastava",
                  desc: "Founder & Owner - 5+ years experience",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-lg border border-border hover:border-primary/50 transition-all animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="text-accent text-sm font-semibold mb-2">{stat.label}</div>
                  <div className="text-4xl font-bold text-primary mb-3">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
