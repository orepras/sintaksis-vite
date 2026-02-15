import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesHovered, setIsResourcesHovered] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between md:justify-center">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/" className="font-mono font-semibold text-2xl mx-6">
            Sintaksis
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesHovered(true)}
            onMouseLeave={() => setIsResourcesHovered(false)}
          >
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-1 cursor-default">
              Resources
              <ChevronDown className="h-3 w-3" />
            </span>
            {isResourcesHovered && (
              <div 
                className="absolute top-full left-0 px-4 py-2 mt-1 bg-muted text-muted-foreground text-sm rounded-md shadow-md z-50 whitespace-nowrap"
                onMouseEnter={() => setIsResourcesHovered(true)}
                onMouseLeave={() => setIsResourcesHovered(false)}
              >
                To be released
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
        </nav>

        {/* Mobile logo */}
        <Link to="/" className="font-mono font-semibold text-xl md:hidden">
          Sintaksis
        </Link>

        {/* Empty div to balance the header on mobile */}
        <div className="w-6 md:hidden"></div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 bg-background space-y-4">
            <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary py-2">
              Services
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary py-2">
              About
            </Link>
            <span className="text-sm font-medium text-muted-foreground py-2 cursor-default">
              Resources (To be released)
            </span>
            <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary py-2">
              Pricing
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary py-2">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
