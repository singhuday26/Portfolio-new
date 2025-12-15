import React from "react";
import { Trophy, Users, Code } from "lucide-react";

const AboutSection = React.memo(() => {
  const highlights = [
    {
      icon: Trophy,
      title: "Amazon HackOn 2025",
      description: "Top 4% among 2,000+ teams"
    },
    {
      icon: Code,
      title: "SIH 2024",
      description: "Full-stack app in 36 hours"
    },
    {
      icon: Users,
      title: "Microsoft MLSA",
      description: "Led technical workshops"
    }
  ];

  return (
    <section id="about" className="section bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about building products that people love to use.
            </p>
          </div>
          
          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-foreground leading-relaxed">
                I'm a UI Engineer and Computer Science student at VIT-AP, specializing in 
                building scalable, user-centric web applications. With strong foundations in 
                React, JavaScript, and modern web technologies, I create efficient, reusable 
                front-end systems that deliver exceptional user experiences.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My experience spans consumer-facing applications serving thousands of users, 
                cross-functional collaboration with product and backend teams, and performance 
                optimization at scale. I'm passionate about component-driven architecture and 
                building products that make a real impact.
              </p>
            </div>
            
            {/* Highlights */}
            <div className="lg:col-span-2 space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border"
                >
                  <div className="p-2 rounded-md bg-primary/10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
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