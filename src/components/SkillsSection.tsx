import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { Code, Monitor, Layers, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SkillsSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      skills: ["React", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vite"],
      featured: ["React", "JavaScript", "TypeScript"]
    },
    {
      icon: Monitor,
      title: "UI Engineering & Performance",
      skills: ["Component Architecture", "State Management", "Performance Optimization", "Responsive Design", "Web APIs", "Browser Optimization"],
      featured: ["Component Architecture", "Performance Optimization", "Responsive Design"]
    },
    {
      icon: Layers,
      title: "Development Stack & APIs",
      skills: ["Node.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL", "Git", "Docker", "CI/CD"],
      featured: ["REST APIs", "Git", "Node.js"]
    },
    {
      icon: Wrench,
      title: "Tools & Collaboration",
      skills: ["VS Code", "Chrome DevTools", "Figma", "Webpack", "ESLint", "Jest", "Agile/Scrum", "Cross-functional Teams"],
      featured: ["Chrome DevTools", "Agile/Scrum", "Cross-functional Teams"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            My UI Engineering Toolkit
          </h2>
          
          <div className={`grid md:grid-cols-2 gap-8 transform-gpu transition-all duration-700 ${
            hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {skillCategories.map((category, index) => (
              <OptimizedCard key={index} className="card-professional hover-glow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`skill-tag ${
                        category.featured.includes(skill) 
                          ? 'bg-primary text-primary-foreground ring-2 ring-primary/20' 
                          : ''
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </OptimizedCard>
            ))}
          </div>
          
          {/* Special Emphasis Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Frontend Engineering Excellence</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["React", "JavaScript", "TypeScript", "Component Architecture", "Performance Optimization", "Responsive Design"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 will-change-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;