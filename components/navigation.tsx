"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity">
            <Image src="/shreyhit-logo.png" alt="Shreyhit Logo" width={48} height={48} className="object-contain" />
          </div>
          <div className="hidden sm:block">
            <div className="text-base sm:text-lg font-bold text-foreground">Shreyhit</div>
            <div className="text-xs text-muted-foreground">Manufacturer</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

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
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
