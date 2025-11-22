"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { NavMenu } from "./nav-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-1 min-w-0 mr-2">
          <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity flex-shrink-0">
            <Image src="/shreyhit-logo.png" alt="Shreyhit Logo" width={48} height={48} className="object-contain" />
          </div>
          <div className="block min-w-0 flex-1">
            <div className="text-[10px] leading-tight sm:text-sm md:text-base lg:text-lg font-bold text-foreground">
              Shreyhit Manufacturer (OPC) Pvt. Ltd.
            </div>
            <div className="text-[8px] sm:text-xs text-muted-foreground leading-tight">ISO 9001:2015 Certified</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <NavMenu variant="desktop" />

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-card/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card/50 backdrop-blur-sm animate-slideDown">
          <div className="px-4 sm:px-6 py-4">
            <NavMenu variant="mobile" onItemClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  )
}
