export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Shreyhit</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ISO 9001 Certified Manufacturer of premium consumer products since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary transition-colors">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="text-primary font-semibold">Director & CEO:</span> Prince Srivastava
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="text-primary font-semibold">Phone:</span> +91 63913 91576
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Address:</span> Goverdhanpur Bazar, Utraula, Balrampur
              271604, UP, India
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Shreyhit Manufacturer (OPC) Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
