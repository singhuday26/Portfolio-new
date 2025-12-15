import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectChurn from "@/assets/project-churn.png";
import projectEdusphere from "@/assets/project-edusphere.png";
import projectMedicare from "@/assets/project-medicare.png";
import projectWaste from "@/assets/project-waste_management.png";

const ProjectsSection = React.memo(() => {
  const projects = [
    {
      title: "MediSafe",
      description: "Scalable hospital management system with reusable React components serving 10,000+ users across patient, doctor, and staff workflows.",
      impact: "40% improvement in user experience",
      techStack: ["React", "JavaScript", "Component Architecture", "State Management"],
      image: projectMedicare,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "EduSphere360",
      description: "Consumer-facing EdTech platform with scalable front-end architecture, performance optimization, and modern UI component library.",
      impact: "20% performance improvement",
      techStack: ["React", "JavaScript", "Performance Optimization", "Agile"],
      image: projectEdusphere,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization interface processing 5k+ customer records with real-time analytics and business insights.",
      impact: "85% user engagement rate",
      techStack: ["JavaScript", "Data Visualization", "Performance Optimization"],
      image: projectChurn,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Smart IoT Interface",
      description: "Real-time web interface for IoT waste management with sensor data visualization and 90% accuracy in classification display.",
      impact: "90% real-time accuracy",
      techStack: ["JavaScript", "Real-time Systems", "IoT Integration"],
      image: projectWaste,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A selection of projects that showcase my skills and experience.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="project-card grid md:grid-cols-5 gap-6 p-6"
              >
                {/* Image */}
                <div className="md:col-span-2 img-zoom">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact */}
                  <p className="text-sm text-primary font-medium mb-4">
                    {project.impact}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="outline" className="btn-hover-lift">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demoLink && (
                      <Button asChild size="sm" className="btn-hover-lift">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;