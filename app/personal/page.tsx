"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PersonalPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleUnlock = () => {
    if (password === "shreyhit123") {
      setIsUnlocked(true)
      setError("")
      setPassword("")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUnlock()
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          {!isUnlocked ? (
            // Password Protection Screen
            <div className="max-w-md mx-auto mt-20 animate-fadeInUp">
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🔒</div>
                  <h1 className="text-3xl font-bold text-primary mb-2">Protected Content</h1>
                  <p className="text-muted-foreground">
                    This page contains personal information about our founder. Please enter the access code to continue.
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError("")
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter access code"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    autoFocus
                  />
                  
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center">
                      <p className="text-red-400 text-sm font-semibold">{error}</p>
                    </div>
                  )}

                  <button
                    onClick={handleUnlock}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Unlock Content
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground text-xs">
                    Don't have access? Contact us for the access code.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Unlocked Content
            <>
              {/* Header */}
              <div className="mb-12 sm:mb-16 animate-fadeInUp text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Meet Our Founder</h1>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                  The visionary leader behind Shreyhit Manufacturer (OPC) Pvt. Ltd.
                </p>
              </div>

          {/* Main Profile Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-80 flex-shrink-0">
                <div className="rounded-lg overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-3xl transition-shadow">
                  <Image
                    src="/owner-prince-srivastava.png"
                    alt="Prince Srivastava - Founder, Director & CEO"
                    width={320}
                    height={400}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-4xl font-bold text-foreground mb-2">Prince Srivastava</h2>
                <p className="text-primary font-semibold text-xl mb-6">Founder, Director & CEO</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Prince Srivastava is the visionary entrepreneur behind Shreyhit Manufacturer (OPC) Private Limited. 
                    With a passion for quality and innovation, he founded the company with a mission to deliver premium 
                    consumer products that meet international standards.  
                  </p>
                  
                  <p className="leading-relaxed">
                    Under his leadership, Shreyhit has achieved ISO 9001:2015 certification and established a diverse 
                    product portfolio spanning multiple categories including personal care, household essentials, and 
                    food products. His commitment to excellence and customer satisfaction has positioned the company 
                    as a trusted name in manufacturing.
                  </p>
                  
                  <p className="leading-relaxed">
                    Prince believes in building strong partnerships and empowering entrepreneurs through franchise and 
                    dealership opportunities. His vision extends beyond manufacturing to creating a nationwide network 
                    of business partners who share the same commitment to quality and service.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">📞 Direct Contact</p>
                    <p className="text-foreground font-bold text-lg">+91 63913 91576</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">📍 Location</p>
                    <p className="text-foreground font-semibold">Balrampur, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Life Partner Sections */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">The Inspiration Behind Success</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-64 flex-shrink-0 mx-auto lg:mx-0">
                <div className="rounded-lg overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-3xl transition-shadow">
                  <Image
                    src="/lifepartner.jpg"
                    alt="Shreya Srivastava - Life Partner"
                    width={256}
                    height={320}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">Shreya Srivastava</h3>
                <p className="text-primary font-semibold text-lg mb-6">Life Partner & Motivational Force</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Shreya Srivastava is the driving force and inspiration behind the establishment of Shreyhit Manufacturer. 
                    Her unwavering support, encouragement, and belief in the vision have been instrumental in turning 
                    dreams into reality.
                  </p>
                  
                  <p className="leading-relaxed">
                    As the life partner of Prince Srivastava, Shreya has been the pillar of strength throughout the 
                    entrepreneurial journey. Her motivation and constant encouragement inspired the opening of this company, 
                    making her an integral part of Shreyhit's success story. Her positive outlook and dedication continue 
                    to fuel the company's growth and achievements.
                  </p>

                  <p className="leading-relaxed">
                    Behind every successful venture is a supportive partner, and Shreya embodies this role perfectly. 
                    Her contribution to the company's foundation and ongoing success cannot be overstated.
                  </p>
                </div>

                <div className="bg-background border border-border rounded-lg p-4 mt-8">
                  <p className="text-primary font-semibold text-sm mb-2">💝 Role</p>
                  <p className="text-foreground font-semibold">Motivational Force & Life Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* CA Profile Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Chartered Accountant</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-64 flex-shrink-0 mx-auto lg:mx-0">
                <div className="rounded-lg overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-3xl transition-shadow">
                  <Image
                    src="/ca.jpg"
                    alt="Shiyaram Yadav - Chartered Accountant"
                    width={256}
                    height={320}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">Shiyaram Yadav</h3>
                <p className="text-primary font-semibold text-lg mb-6">Chartered Accountant</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Shiyaram Yadav is our trusted Chartered Accountant, bringing 3 years of professional experience 
                    in financial management, taxation, and compliance. His expertise ensures that Shreyhit Manufacturer 
                    maintains the highest standards of financial integrity and regulatory compliance.
                  </p>
                  
                  <p className="leading-relaxed">
                    With a deep understanding of corporate finance and tax regulations, Shiyaram plays a crucial role 
                    in strategic financial planning and ensuring smooth business operations. His meticulous approach 
                    to accounting and auditing helps the company maintain transparency and accountability.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">💼 Experience</p>
                    <p className="text-foreground font-bold text-lg">3 Years</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">🎓 Qualification</p>
                    <p className="text-foreground font-semibold">Chartered Accountant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distributor Profile Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Trusted Distributor</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-64 flex-shrink-0 mx-auto lg:mx-0">
                <div className="rounded-lg overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-3xl transition-shadow">
                  <Image
                    src="/distributor.jpg"
                    alt="Vinay Sharma - Distributor"
                    width={256}
                    height={320}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">Vinay Sharma</h3>
                <p className="text-primary font-semibold text-lg mb-6">Authorized Distributor</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Vinay Sharma is one of our key distributors, playing a vital role in expanding Shreyhit's reach 
                    across the market. His dedication to delivering quality products and maintaining strong customer 
                    relationships has made him an invaluable partner in our distribution network.
                  </p>
                  
                  <p className="leading-relaxed">
                    With his extensive market knowledge and commitment to excellence, Vinay ensures that Shreyhit 
                    products reach customers efficiently and effectively. His entrepreneurial spirit and business 
                    acumen have contributed significantly to the company's growth and market presence.
                  </p>

                  <p className="leading-relaxed">
                    As a trusted distributor, Vinay exemplifies the kind of partnership that Shreyhit values - 
                    one built on mutual trust, quality service, and shared success.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">🤝 Role</p>
                    <p className="text-foreground font-semibold">Authorized Distributor</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">📞 Contact</p>
                    <p className="text-foreground font-bold">+91 98380 31077</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manager Profile Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Manager</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-64 flex-shrink-0 mx-auto lg:mx-0">
                <div className="rounded-lg overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-3xl transition-shadow">
                  <Image
                    src="/manager.jpg"
                    alt="Ravi Kumar - Manager"
                    width={256}
                    height={320}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">Ravi Kumar</h3>
                <p className="text-primary font-semibold text-lg mb-6">Manager</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Ravi Kumar serves as our dedicated Manager, overseeing daily operations and ensuring smooth 
                    workflow across all departments. His leadership skills and attention to detail have been 
                    instrumental in maintaining our high standards of quality and efficiency.
                  </p>
                  
                  <p className="leading-relaxed">
                    With his strong organizational abilities and commitment to excellence, Ravi coordinates between 
                    different teams to ensure seamless operations. His proactive approach and problem-solving skills 
                    contribute significantly to the company's operational success.
                  </p>

                  <p className="leading-relaxed">
                    As a key member of our management team, Ravi plays a crucial role in implementing company policies 
                    and maintaining the quality standards that Shreyhit is known for.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">💼 Role</p>
                    <p className="text-foreground font-semibold">Manager</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-primary font-semibold text-sm mb-2">📞 Contact</p>
                    <p className="text-foreground font-bold">8808612617</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To establish Shreyhit as India's most trusted manufacturer of premium consumer products, 
                recognized for quality excellence, innovation, and customer satisfaction. We aim to expand 
                our presence across the nation through strategic partnerships and continuous product development.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To manufacture and deliver premium quality products that enhance everyday life while maintaining 
                the highest standards of quality, safety, and sustainability. We are committed to empowering 
                entrepreneurs through franchise opportunities and building lasting relationships with our partners.
              </p>
            </div>
          </div>

          {/* Leadership Qualities */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Leadership Qualities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Visionary Thinking</h4>
                <p className="text-muted-foreground text-sm">
                  Forward-thinking approach to business growth and market expansion, always staying ahead of industry trends.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Quality Focus</h4>
                <p className="text-muted-foreground text-sm">
                  Unwavering commitment to maintaining the highest quality standards in every product and process.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Partnership Builder</h4>
                <p className="text-muted-foreground text-sm">
                  Strong focus on building mutually beneficial relationships with franchisees, dealers, and customers.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Growth Oriented</h4>
                <p className="text-muted-foreground text-sm">
                  Dedicated to continuous improvement and expansion while maintaining core values and quality standards.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Mentor & Guide</h4>
                <p className="text-muted-foreground text-sm">
                  Passionate about mentoring new entrepreneurs and helping them succeed in their business ventures.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Innovation Driver</h4>
                <p className="text-muted-foreground text-sm">
                  Constantly exploring new products, technologies, and business models to stay competitive.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Key Achievements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-background border border-border rounded-lg p-4">
                <span className="text-primary font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">ISO 9001:2015 Certification</h4>
                  <p className="text-muted-foreground text-sm">
                    Successfully achieved international quality management certification for manufacturing excellence
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background border border-border rounded-lg p-4">
                <span className="text-primary font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Diverse Product Portfolio</h4>
                  <p className="text-muted-foreground text-sm">
                    Launched 7+ premium product lines across multiple consumer categories
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background border border-border rounded-lg p-4">
                <span className="text-primary font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Franchise Network Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Established comprehensive franchise and dealership programs for nationwide expansion
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background border border-border rounded-lg p-4">
                <span className="text-primary font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Quality Manufacturing Standards</h4>
                  <p className="text-muted-foreground text-sm">
                    Implemented rigorous quality control processes ensuring consistent product excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 md:p-12 animate-fadeInUp text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Connect with Prince Srivastava</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Interested in franchise opportunities, business partnerships, or have questions about our products? 
                  Get in touch directly with our founder.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:+916391391576"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
                  >
                    📞 Call: +91 63913 91576
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-background transition-all"
                  >
                    Send a Message
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  Office: Goverdhanpur Bazar, Utraula, Balrampur 271604, Uttar Pradesh, India
                </p>
              </div>

              {/* Lock Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsUnlocked(false)}
                  className="px-6 py-2 bg-background border border-border text-muted-foreground rounded-lg font-semibold hover:bg-card transition-all inline-flex items-center gap-2"
                >
                  🔒 Lock Content
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
