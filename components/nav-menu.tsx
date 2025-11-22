"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavMenuItem {
  href: string
  label: string
}

export const navMenuItems: NavMenuItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/personal", label: "Personal" },
  { href: "/products", label: "Products" },
  { href: "/franchise", label: "Franchise" },
  { href: "/dealership", label: "Dealership" },
  { href: "/contact", label: "Contact" },
]

interface NavMenuProps {
  onItemClick?: () => void
  variant?: "desktop" | "mobile"
}

export function NavMenu({ onItemClick, variant = "desktop" }: NavMenuProps) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  if (variant === "desktop") {
    return (
      <div className="hidden md:flex items-center gap-8">
        {navMenuItems.map((item) => (
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
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {navMenuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onItemClick}
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
  )
}
