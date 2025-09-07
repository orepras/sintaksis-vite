import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Sintaksis (PT Sebagaimana Mestinya Kata). All rights reserved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground font-mono">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground font-mono">
              Terms of Service
            </Link>
          </div>
          <Link to="/contact">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
