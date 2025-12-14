import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Monitor, Layers, Smartphone, Code2, Cpu, TrendingUp } from "lucide-react";
import { OptimizedLazyImage } from "@/components/ui/optimized-lazy-image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
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
    <section ref={elementRef} className="relative min-h-screen flex items-center justify-center overflow-hidden transform-gpu">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transform-gpu">
        <OptimizedLazyImage 
          src={heroBackground}
          alt="Hero background showcasing data science visualization"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center transform-gpu transition-all duration-1000 ${
        hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto">
          {/* Animated Tech Icons Display */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* Central Monitor Icon */}
              <div className="relative z-10 w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg shadow-primary/25 animate-pulse">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              
              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-150">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-450">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Additional floating icons */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
            Uday Singh
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4 animate-fade-in">
            UI Engineer | Building Scalable Consumer-Facing Web Applications
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in">
            Crafting Efficient, Reusable Front-End Systems with React & Modern Web Technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              Explore My UI Engineering Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              asChild
              className="btn-secondary"
            >
              <a 
                href="https://linkedin.com/in/udaysingh2626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center transform-gpu">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;