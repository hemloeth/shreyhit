"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function DealershipPage() {
  const [dealershipForm, setDealershipForm] = useState({ name: "", email: "", phone: "", location: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setDealershipForm({ name: "", email: "", phone: "", location: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 animate-fadeInUp text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Dealership Opportunities</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Become an authorized Shreyhit dealer and distribute premium quality products in your region. Grow your business with our trusted brand.
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Distribute Shreyhit Products</h2>
                <p className="text-muted-foreground mb-6">
                  Partner with an ISO 9001:2015 certified manufacturer and gain exclusive distribution rights for premium consumer products in your territory.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">₹3-7L</div>
                    <div className="text-xs text-muted-foreground">Investment</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">7+</div>
                    <div className="text-xs text-muted-foreground">Products</div>
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
                  alt="Shreyhit Dealership"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Dealership Benefits */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Become a Shreyhit Dealer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Exclusive Territory Rights</h3>
                <p className="text-muted-foreground text-sm">
                  Get exclusive distribution rights in your designated area with no competition from other Shreyhit dealers.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Premium Product Range</h3>
                <p className="text-muted-foreground text-sm">
                  Distribute 7+ high-quality products across multiple categories with consistent demand and market appeal.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Attractive Margins</h3>
                <p className="text-muted-foreground text-sm">
                  Enjoy competitive wholesale pricing with excellent profit margins and flexible payment terms.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Reliable Supply Chain</h3>
                <p className="text-muted-foreground text-sm">
                  Guaranteed regular product supply with efficient logistics and timely delivery to your location.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Marketing Support</h3>
                <p className="text-muted-foreground text-sm">
                  Receive promotional materials, marketing collateral, and brand support to boost your sales.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-foreground mb-3">ISO Certified Brand</h3>
                <p className="text-muted-foreground text-sm">
                  Partner with an ISO 9001:2015 certified manufacturer known for quality and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">What You Get as a Dealer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Exclusive Distribution Rights</h4>
                    <p className="text-muted-foreground text-sm">Sole distribution rights in your designated territory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Wholesale Pricing</h4>
                    <p className="text-muted-foreground text-sm">Competitive dealer pricing with attractive profit margins</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Complete Product Portfolio</h4>
                    <p className="text-muted-foreground text-sm">Access to all 7+ premium product lines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Flexible Order Quantities</h4>
                    <p className="text-muted-foreground text-sm">Order based on your market demand and storage capacity</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Marketing Materials</h4>
                    <p className="text-muted-foreground text-sm">Promotional materials, product catalogs, and display items</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Dedicated Support Team</h4>
                    <p className="text-muted-foreground text-sm">Direct access to our dealer support team for assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Regular Product Updates</h4>
                    <p className="text-muted-foreground text-sm">Stay informed about new products and special offers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Business Growth Support</h4>
                    <p className="text-muted-foreground text-sm">Guidance on market expansion and sales strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold text-primary mb-6">Investment Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Initial Stock Investment</span>
                  <span className="font-bold text-foreground">₹3-5 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Infrastructure Setup</span>
                  <span className="font-bold text-foreground">₹1-2 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Working Capital</span>
                  <span className="font-bold text-foreground">As per need</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-foreground font-bold">Total Investment</span>
                  <span className="font-bold text-primary text-xl">₹3-7 Lakhs</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mt-6">
                * Investment may vary based on territory size and market potential
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold text-primary mb-6">Requirements</h2>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Warehouse or storage facility (minimum 500 sq ft)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Valid GST registration and trade license</span>
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
                  <span>Experience in FMCG/consumer goods distribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Strong local market knowledge and connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Commitment to brand standards and quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Apply for Dealership</h2>
              <p className="text-muted-foreground mb-6 text-sm text-center">
                Fill out the form below and our dealership team will contact you within 48 hours to discuss the opportunity.
              </p>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                  <p className="text-green-400 font-semibold">Thank you! Your dealership application has been received.</p>
                  <p className="text-muted-foreground text-sm mt-2">Our team will contact you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Tell us about your distribution experience and network"
                    value={dealershipForm.message}
                    onChange={(e) => setDealershipForm({ ...dealershipForm, message: e.target.value })}
                    required
                    rows={5}
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

          {/* ISO Certificate */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Partner with a Certified Brand</h2>
            <p className="text-center text-muted-foreground mb-8">
              Shreyhit is ISO 9001:2015 certified, ensuring the highest quality standards in manufacturing
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
