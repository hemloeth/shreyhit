"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function FranchisePage() {
  const [franchiseForm, setFranchiseForm] = useState({ name: "", email: "", phone: "", state: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFranchiseForm({ name: "", email: "", phone: "", state: "", message: "" })
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Franchise Opportunities</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Own and operate a Shreyhit branded outlet with complete business setup support. Build your entrepreneurial dream with our proven business model.
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Start Your Own Shreyhit Franchise</h2>
                <p className="text-muted-foreground mb-6">
                  Join India's trusted ISO 9001:2015 certified manufacturer and become a successful franchise owner with our comprehensive support system.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">₹5-10L</div>
                    <div className="text-xs text-muted-foreground">Investment</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-primary">6+</div>
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
                  alt="Shreyhit Franchise"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Franchise Benefits */}
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Shreyhit Franchise?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Complete Store Setup</h3>
                <p className="text-muted-foreground text-sm">
                  We provide end-to-end assistance in setting up your franchise outlet including interior design, branding, and product display.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Training & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive training programs for you and your staff covering operations, sales, and customer service.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Marketing Support</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing marketing campaigns, promotional materials, and digital marketing support to drive customers to your store.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Exclusive Territory</h3>
                <p className="text-muted-foreground text-sm">
                  Get exclusive rights to operate in your designated territory with no competition from other Shreyhit franchises.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-foreground mb-3">High Profit Margins</h3>
                <p className="text-muted-foreground text-sm">
                  Attractive profit margins on all products with competitive pricing that ensures healthy returns on investment.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Established Brand</h3>
                <p className="text-muted-foreground text-sm">
                  Leverage the trust and reputation of an ISO 9001:2015 certified brand with proven quality products.
                </p>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">What You Get as a Franchisee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Brand Rights</h4>
                    <p className="text-muted-foreground text-sm">Exclusive rights to use Shreyhit brand name and logo in your territory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Store Design</h4>
                    <p className="text-muted-foreground text-sm">Professional store layout and interior design guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Product Portfolio</h4>
                    <p className="text-muted-foreground text-sm">Access to our complete range of 6+ premium products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Inventory Management</h4>
                    <p className="text-muted-foreground text-sm">Tools and guidance for efficient stock management</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Operations Manual</h4>
                    <p className="text-muted-foreground text-sm">Detailed operations guide covering all aspects of running the franchise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Staff Training</h4>
                    <p className="text-muted-foreground text-sm">Regular training sessions for your team on products and customer service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Marketing Materials</h4>
                    <p className="text-muted-foreground text-sm">Posters, banners, brochures, and digital content for promotions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Ongoing Support</h4>
                    <p className="text-muted-foreground text-sm">Dedicated support team to help you succeed</p>
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
                  <span className="text-muted-foreground">Franchise Fee</span>
                  <span className="font-bold text-foreground">₹2-3 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Store Setup</span>
                  <span className="font-bold text-foreground">₹2-4 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Initial Inventory</span>
                  <span className="font-bold text-foreground">₹1-3 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-foreground font-bold">Total Investment</span>
                  <span className="font-bold text-primary text-xl">₹5-10 Lakhs</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mt-6">
                * Investment may vary based on location and store size
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold text-primary mb-6">Requirements</h2>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Retail space: 300-500 sq ft in prime location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Business experience in retail preferred but not mandatory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Commitment to brand standards and quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Valid business registration and GST</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Passion for entrepreneurship and customer service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Ability to manage day-to-day operations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Apply for Franchise</h2>
              <p className="text-muted-foreground mb-6 text-sm text-center">
                Fill out the form below and our franchise team will contact you within 48 hours to discuss the opportunity.
              </p>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                  <p className="text-green-400 font-semibold">Thank you! Your franchise application has been received.</p>
                  <p className="text-muted-foreground text-sm mt-2">Our team will contact you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Preferred State / City"
                    value={franchiseForm.state}
                    onChange={(e) => setFranchiseForm({ ...franchiseForm, state: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <textarea
                    placeholder="Tell us about your business experience and why you want to become a franchisee"
                    value={franchiseForm.message}
                    onChange={(e) => setFranchiseForm({ ...franchiseForm, message: e.target.value })}
                    required
                    rows={5}
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
