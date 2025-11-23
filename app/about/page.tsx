"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fadeInUp">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">About Shreyhit Manufacturer (OPC) Pvt. Ltd.</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
                Shreyhit Manufacturer (OPC) Private Limited - Your Trusted Partner in Premium Quality Consumer Products
              </p>
            </div>

            {/* Company Overview */}
            <div
              className="bg-card border border-border rounded-lg p-8 mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Company Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Shreyhit Manufacturer (OPC) Private Limited is an ISO 9001:2015 certified manufacturer specializing
                    in premium consumer products. Based in Goverdhanpur Bazar, Utraula, Balrampur, Uttar Pradesh, India,
                    we have established ourselves as a trusted name in manufacturing excellence.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our commitment to quality, innovation, and customer satisfaction drives us to deliver products that
                    exceed international standards. With a diverse product portfolio ranging from personal care to
                    household essentials, we serve customers across multiple categories.
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Founded:</strong> 2025
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Status:</strong> ISO 9001 Certified
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Products:</strong> 7+ Premium Lines
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Headquarters:</strong> Balrampur, UP
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Director Info Card */}
            <div
              className="bg-card border border-border rounded-lg p-8 mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Leadership</h2>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Prince Srivastava</h3>
                    <p className="text-primary font-semibold text-lg mb-4">Founder, Director & CEO</p>
                    <p className="text-muted-foreground mb-6">
                      With a vision to create premium quality consumer products, Prince Srivastava founded Shreyhit
                      Manufacturer (OPC) Private Limited. His leadership and commitment to excellence have shaped the
                      company into a trusted manufacturer of quality products.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-background border border-border rounded-lg p-4">
                      <p className="text-primary font-semibold text-sm mb-1">Contact</p>
                      <p className="text-foreground font-bold">+91 63913 91576</p>
                    </div>
                    <div className="bg-background border border-border rounded-lg p-4">
                      <p className="text-primary font-semibold text-sm mb-1">Address</p>
                      <p className="text-foreground text-sm">
                        Goverdhanpur Bazar, Utraula, Balrampur 271604, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-56 h-64 rounded-lg overflow-hidden flex-shrink-0 border border-primary/30 shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow">
                  <Image
                    src="/owner-prince-srivastava.png"
                    alt="Prince Srivastava - Founder, Director & CEO"
                    width={224}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div
                className="bg-card border border-border p-8 rounded-lg animate-fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">ISO 9001:2015 Certification</h3>
                <div className="mb-6 rounded-lg overflow-hidden border border-primary/20 bg-background">
                  <Image
                    src="/iso-certificate-detailed.png"
                    alt="ISO 9001 Certificate"
                    width={350}
                    height={450}
                    className="w-full h-auto object-contain p-3"
                  />
                </div>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-primary font-semibold mb-1">Certificate Number</p>
                    <p className="text-foreground">23QTR619</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-primary font-semibold mb-1">Issued Date</p>
                    <p className="text-foreground">25/06/2025</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-primary font-semibold mb-1">Valid Until</p>
                    <p className="text-foreground">25/06/2028</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-card border border-border p-8 rounded-lg animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Business Opportunities</h3>
                <div className="space-y-6">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-bold mb-2">Franchise Opportunities Available</p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Expand your business with Shreyhit's established brand and proven product portfolio. We provide
                      comprehensive training, marketing support, and ongoing business guidance to ensure your success.
                    </p>
                    <p className="text-accent font-semibold text-sm">Interested? Contact us for details →</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-bold mb-2">Dealership Opportunities Available</p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Become an authorized dealer and gain exclusive territorial rights to distribute our premium
                      products. We offer competitive margins and dedicated dealer support.
                    </p>
                    <p className="text-accent font-semibold text-sm">Ready to partner? Contact us for details →</p>
                  </div>
                  <a
                    href="/contact"
                    className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Explore Opportunities
                  </a>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div
              className="bg-card border border-border rounded-lg p-8 mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Manufacturing Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background border border-border rounded-lg p-4">
                  <h4 className="text-lg font-bold text-primary mb-2">Products</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Tea</li>
                    <li>• Toothbrush</li>
                    <li>• Dry Fruits</li>
                    <li>• Detergent Powder</li>
                    <li>• Scrubber</li>
                    <li>• Sanitary Pads</li>
                  </ul>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <h4 className="text-lg font-bold text-primary mb-2">Quality Standards</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• ISO 9001:2015</li>
                    <li>• Rigorous Testing</li>
                    <li>• Quality Control</li>
                    <li>• Compliance</li>
                    <li>• Certification</li>
                    <li>• Audits</li>
                  </ul>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <h4 className="text-lg font-bold text-primary mb-2">Our Commitment</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Customer Satisfaction</li>
                    <li>• Quality Excellence</li>
                    <li>• Innovation</li>
                    <li>• Reliability</li>
                    <li>• Integrity</li>
                    <li>• Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
