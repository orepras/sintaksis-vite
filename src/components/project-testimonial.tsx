import type { Testimonial } from "../types/portfolio";
import { Quote } from "lucide-react";

interface ProjectTestimonialProps {
  testimonial: Testimonial;
  visible?: boolean;
}

export function ProjectTestimonial({ testimonial, visible = true }: ProjectTestimonialProps) {
  if (!visible) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Quote className="h-8 w-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg font-mono text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                  
                  <div>
                    <div className="font-semibold text-foreground font-sans">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
