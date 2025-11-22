"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setContactForm({ name: "", email: "", phone: "", subject: "", message: "" })
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Get in touch with us for any inquiries or support
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 animate-fadeInUp">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">📞</div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+916391391576" className="text-muted-foreground hover:text-primary transition-colors">+91 63913 91576</a>
            </div>
            <div
              className="bg-card border border-border rounded-lg p-6 sm:p-8 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">📍</div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Goverdhanpur Bazar, Utraula, Balrampur 271604, UP, India</p>
            </div>
            <div
              className="bg-card border border-border rounded-lg p-6 sm:p-8 animate-fadeInUp sm:col-span-2 md:col-span-1"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">✉️</div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:contact@shreyhit.com" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">contact@shreyhit.com</a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Have a question or inquiry? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                  <p className="text-green-400 font-semibold">Thank you! Your message has been received.</p>
                  <p className="text-muted-foreground text-sm mt-2">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Business Opportunities CTA */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 mb-16 animate-fadeInUp text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Business Opportunities?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore franchise and dealership opportunities with Shreyhit. Join our growing network of partners across India.
            </p>
            <a
              href="/dealership"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              View Opportunities
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
