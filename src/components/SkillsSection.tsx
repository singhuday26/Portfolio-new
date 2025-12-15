import React from "react";

const SkillsSection = React.memo(() => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      title: "UI Engineering",
      skills: ["Component Architecture", "State Management", "Performance Optimization", "Responsive Design", "Accessibility"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "VS Code", "Chrome DevTools", "Figma", "Jest", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              The tools and technologies I use to bring products to life.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;