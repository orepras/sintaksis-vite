import type { Testimonial } from "../types/portfolio";
import { Quote } from "lucide-react";

interface ProjectTestimonialsProps {
  testimonials: Testimonial[];
  visible?: boolean;
}

export function ProjectTestimonials({ testimonials, visible = true }: ProjectTestimonialsProps) {
  if (!visible || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-background p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <blockquote className="text-base font-mono text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      )}
                      
                      <div>
                        <div className="font-semibold text-foreground font-sans text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
