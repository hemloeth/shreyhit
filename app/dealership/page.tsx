"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function DealershipPage() {
  const [franchiseForm, setFranchiseForm] = useState({ name: "", email: "", phone: "", state: "", message: "" })
  const [dealershipForm, setDealershipForm] = useState({ name: "", email: "", phone: "", location: "", message: "" })
  const [franchiseSubmitted, setFranchiseSubmitted] = useState(false)
  const [dealershipSubmitted, setDealershipSubmitted] = useState(false)

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFranchiseSubmitted(true)
    setTimeout(() => {
      setFranchiseForm({ name: "", email: "", phone: "", state: "", message: "" })
      setFranchiseSubmitted(false)
    }, 3000)
  }

  const handleDealershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDealershipSubmitted(true)
    setTimeout(() => {
      setDealershipForm({ name: "", email: "", phone: "", location: "", message: "" })
      setDealershipSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 animate-fadeInUp text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Franchise & Dealership Opportunities</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Join the Shreyhit family and be part of India's growing consumer goods brand. Build your business with our proven products and support system.
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Grow Your Business With Shreyhit</h2>
                <p className="text-muted-foreground mb-6">
                  Partner with a trusted ISO 9001:2015 certified manufacturer offering premium quality consumer products across multiple categories.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">7+</div>
                    <div className="text-xs text-muted-foreground">Products</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">ISO</div>
                    <div className="text-xs text-muted-foreground">Certified</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/company-banner.png"
                  alt="Shreyhit Products"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Why Partner Section */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Partner With Shreyhit?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Established Brand</h3>
                <p className="text-muted-foreground text-sm">
                  ISO 9001:2015 certified with a proven track record in manufacturing quality consumer products.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Diverse Product Range</h3>
                <p className="text-muted-foreground text-sm">
                  From premium tea to sanitary pads, detergents, and personal care - multiple revenue streams.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Attractive Margins</h3>
                <p className="text-muted-foreground text-sm">
                  Competitive pricing with excellent profit margins and flexible payment terms.
                </p>
              </div>
            </div>
          </div>

          {/* Franchise vs Dealership Comparison */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Choose Your Partnership Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-primary/30 rounded-lg p-6 bg-primary/5">
                <h3 className="text-2xl font-bold text-foreground mb-4">🏪 Franchise</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Own and operate a Shreyhit branded outlet with complete business setup support.
                </p>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Exclusive brand rights in your territory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Complete store setup assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Comprehensive training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Marketing and promotional support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Ongoing operational guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Inventory management support</span>
                  </li>
                </ul>
              </div>
              <div className="border border-primary/30 rounded-lg p-6 bg-primary/5">
                <h3 className="text-2xl font-bold text-foreground mb-4">🤝 Dealership</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Distribute Shreyhit products through your existing retail network or business.
                </p>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Exclusive territorial distribution rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Attractive wholesale pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Flexible order quantities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Regular product supply guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Sales and marketing materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Forms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Apply Now</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Franchise Form */}
              <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
                <h3 className="text-2xl font-bold text-primary mb-6">Franchise Application</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Fill out the form below to apply for a Shreyhit franchise. Our team will review your application and contact you within 48 hours.
                </p>

                {franchiseSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                    <p className="text-green-400 font-semibold">Thank you! Your franchise inquiry has been received.</p>
                    <p className="text-muted-foreground text-sm mt-2">We will contact you within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFranchiseSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={franchiseForm.name}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={franchiseForm.email}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={franchiseForm.phone}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="State / Region"
                      value={franchiseForm.state}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, state: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <textarea
                      placeholder="Tell us about your business experience and investment capacity"
                      value={franchiseForm.message}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Submit Franchise Application
                    </button>
                  </form>
                )}
              </div>

              {/* Dealership Form */}
              <div
                className="bg-card border border-border rounded-lg p-8 animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Dealership Application</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Apply for dealership rights to distribute Shreyhit products in your area. We'll get back to you within 48 hours.
                </p>

                {dealershipSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                    <p className="text-green-400 font-semibold">Thank you! Your dealership inquiry has been received.</p>
                    <p className="text-muted-foreground text-sm mt-2">We will contact you within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleDealershipSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={dealershipForm.name}
                      onChange={(e) => setDealershipForm({ ...dealershipForm, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={dealershipForm.email}
                      onChange={(e) => setDealershipForm({ ...dealershipForm, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={dealershipForm.phone}
                      onChange={(e) => setDealershipForm({ ...dealershipForm, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Business Location / City"
                      value={dealershipForm.location}
                      onChange={(e) => setDealershipForm({ ...dealershipForm, location: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <textarea
                      placeholder="Tell us about your retail/distribution experience and network"
                      value={dealershipForm.message}
                      onChange={(e) => setDealershipForm({ ...dealershipForm, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Submit Dealership Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Investment & Requirements */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8">Investment & Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Franchise Requirements</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Retail space: 300-500 sq ft in prime location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Investment: ₹5-10 lakhs (including setup)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Business experience in retail preferred</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Commitment to brand standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Valid business registration documents</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Dealership Requirements</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Warehouse/storage facility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Investment: ₹3-7 lakhs (initial stock)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Existing distribution network preferred</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Transportation arrangement capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>GST registration and trade license</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ISO Certificate Display */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">ISO 9001:2015 Certified</h2>
            <p className="text-center text-muted-foreground mb-8">
              Partner with a certified manufacturer committed to quality excellence
            </p>
            <div className="bg-background rounded-lg p-6 border border-primary/30 max-w-2xl mx-auto">
              <Image
                src="/iso-certificate-detailed.png"
                alt="ISO 9001:2015 Certificate"
                width={600}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              Certificate No: 23QTR619 | Valid until: 25/06/2028
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
