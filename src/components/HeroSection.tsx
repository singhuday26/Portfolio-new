import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Profile image - update this path after adding your image to src/assets/
import profileImage from "@/assets/profile.jpg";

const HeroSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center bg-background"
      aria-label="Introduction"
    >
      {/* Content */}
      <div
        className={`container mx-auto px-4 py-20 transition-all duration-700 ease-out ${
          hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image - Secondary, subtle placement */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Uday Singh - UI Engineer"
              width={112}
              height={112}
              loading="eager"
              decoding="async"
              className="w-28 h-28 rounded-full mx-auto object-cover shadow-sm ring-1 ring-border"
            />
          </div>

          {/* Name - Primary visual element */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Uday Singh
          </h1>

          {/* Headline - Secondary importance */}
          <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6">
            UI Engineer · React & JavaScript Specialist
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building scalable, consumer-facing web applications with clean architecture 
            and exceptional user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="min-w-[200px] font-medium"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="min-w-[200px] font-medium"
            >
              <a
                href="https://linkedin.com/in/udaysingh2626"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-4 h-4" aria-hidden="true" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground/30 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;