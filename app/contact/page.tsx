"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
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
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-fadeInUp">
            <h1 className="text-5xl font-bold text-primary mb-4">Contact & Opportunities</h1>
            <p className="text-muted-foreground text-lg">
              Join the Shreyhit family as a franchise or dealership partner
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <div className="text-3xl font-bold text-primary mb-4">📞</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 63913 91576</p>
            </div>
            <div
              className="bg-card border border-border rounded-lg p-8 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-primary mb-4">📍</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground text-sm">Goverdhanpur Bazar, Utraula, Balrampur 271604, UP, India</p>
            </div>
            <div
              className="bg-card border border-border rounded-lg p-8 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-primary mb-4">✉️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">contact@shreyhit.com</p>
            </div>
          </div>

          {/* Forms Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Franchise Form */}
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold text-primary mb-6">Franchise Opportunity</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Become a Shreyhit franchise partner and grow your business with our established brand and quality
                products.
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
                    placeholder="Tell us about your business experience"
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
                    Submit Franchise Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Dealership Form */}
            <div
              className="bg-card border border-border rounded-lg p-8 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Dealership Opportunity</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Apply for dealership and gain exclusive rights to distribute Shreyhit products in your area.
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
                    placeholder="Tell us about your retail experience"
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
                    Submit Dealership Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Opportunities Info */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Partner With Shreyhit?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Franchise Benefits</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Established brand with 6+ premium products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>ISO 9001 certified manufacturing process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Comprehensive training and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Competitive margins and pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Ongoing marketing and promotional support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Dealership Benefits</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Exclusive territorial rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Premium quality consumer products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Attractive wholesale discounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Regular product supply and logistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Professional support and guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ISO Certificate Display */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8">ISO 9001:2015 Certification</h2>
            <div className="bg-background rounded-lg p-6 border border-primary/30">
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
