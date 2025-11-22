"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingContact() {
  const phoneNumber = "6391391576"
  const whatsappNumber = "916391391576" // Include country code for WhatsApp

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Us
        </span>
      </button>

      {/* Phone Call Button */}
      <button
        onClick={handleCall}
        className="group relative bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </button>
    </div>
  )
}
