import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = React.memo(() => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-background pt-16"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Uday Singh"
              width={120}
              height={120}
              loading="eager"
              className="w-[120px] h-[120px] rounded-full mx-auto object-cover border-2 border-border"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground mb-6">
            Uday Singh
          </h1>

          {/* Headline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            UI Engineer
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Building scalable, consumer-facing web applications with React and modern JavaScript. Focused on clean architecture and exceptional user experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/singhuday26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/udaysingh2626"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:udaysingh2626@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="px-8"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8"
            >
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={scrollToAbout}
            className="p-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;