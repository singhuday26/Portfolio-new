import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { Trophy, Users, Code } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });
  const highlights = [
    {
      icon: Trophy,
      title: "Top 4% in Amazon HackOn (2025)",
      description: "Built scalable web application among top 2,000 teams"
    },
    {
      icon: Code,
      title: "SIH 2024 Full-Stack Web App",
      description: "Developed consumer-facing platform in 36 hours"
    },
    {
      icon: Users,
      title: "Microsoft Learn Student Ambassador",
      description: "Led technical workshops and cross-functional collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            About Me: Passionate UI Engineer & Problem Solver
          </h2>
          
          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transform-gpu transition-all duration-700 ${
            hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I am a passionate UI Engineer and Computer Science student specializing in building 
                scalable, user-centric web applications. With exceptional problem-solving skills and 
                strong foundation in modern web technologies, I excel at creating efficient, reusable 
                front-end systems that handle massive scale and deliver compelling user experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Proficient in React, JavaScript, HTML/CSS, and modern web development practices, I have 
                successfully built consumer-facing applications serving thousands of users. My experience 
                in cross-functional collaboration, performance optimization, and component-driven architecture 
                makes me well-equipped to contribute to India's leading e-commerce platform and tackle 
                complex engineering challenges at scale.
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <OptimizedCard key={index} className="card-professional hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </OptimizedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;