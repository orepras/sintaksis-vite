import { Button, type ButtonProps } from "./ui/button"
import { Calendar } from "lucide-react"

interface BookCallButtonProps extends ButtonProps {
  showIcon?: boolean
  className?: string
}

export function BookCallButton({
  showIcon = true,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: BookCallButtonProps) {
  return (
    <Button variant={variant} size={size} className={`gap-2 ${className}`} asChild {...props}>
      <a href="https://cal.com/sintaksis/discovery" target="_blank" rel="noopener noreferrer">
        {showIcon && <Calendar className="h-4 w-4" />}
        Book a Discovery Call
      </a>
    </Button>
  )
}
