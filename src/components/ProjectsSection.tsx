import React from "react";
import { OptimizedCard } from "@/components/ui/optimized-card";
import { OptimizedLazyImage } from "@/components/ui/optimized-lazy-image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import projectChurn from "@/assets/project-churn.png";
import projectCnn from "@/assets/project-edusphere.png";
import projectMedicare from "@/assets/project-medicare.png";
import projectSentiment from "@/assets/project-waste_management.png";

const ProjectsSection = React.memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });
  const projects = [
    {
      title: "MediSafe – Scalable Hospital Management UI System",
      overview: "Built efficient, reusable front-end abstractions using React.js for a comprehensive hospital platform. Designed responsive UI components, optimized state management, and created user-centric experiences for 10,000+ users across patients, doctors, and staff workflows.",
      problem: "Need for scalable, user-friendly healthcare interface handling complex workflows at scale",
      role: "UI Engineer focusing on reusable component architecture and cross-functional collaboration",
      methodology: "Built component library with React.js, implemented responsive design patterns, collaborated with backend engineers and product managers for seamless integration",
      results: "Delivered scalable front-end system with reusable components, improved user experience by 40%, and enabled efficient cross-team collaboration",
      techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Component Architecture", "Responsive Design", "State Management"],
      image: projectMedicare,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "EduSphere360 – Consumer-Facing EdTech Web Application",
      overview: "Engineered scalable front-end architecture for educational platform serving thousands of users. Built efficient UI abstractions, implemented modern web technologies, and designed compelling user experiences from scratch using React and modern JavaScript.",
      problem: "Need for high-performance, scalable educational web application with exceptional user experience",
      role: "Frontend Lead Engineer and Co-Founder specializing in scalable UI systems and user experience design",
      methodology: "Applied component-driven development, implemented performance optimization techniques, used Agile methodology with cross-functional teams",
      results: "Improved frontend performance by 20%, built reusable UI component library, and delivered seamless user experience for educational platform",
      techStack: ["React", "JavaScript ES6+", "HTML5", "CSS3", "Performance Optimization", "Component Libraries", "Agile Development"],
      image: projectCnn,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Customer Analytics Dashboard – Data Visualization UI",
      overview: "Developed interactive data visualization interface processing 5k+ customer records with real-time analytics. Built efficient front-end components using JavaScript and modern web technologies, focusing on user-friendly data presentation and business insights.",
      problem: "Need for intuitive, scalable interface to visualize complex customer data and analytics",
      role: "Frontend Developer focusing on data visualization and user interface optimization",
      methodology: "Implemented data visualization libraries, optimized rendering performance, applied algorithmic thinking for efficient data processing",
      results: "Created interactive dashboard with 85% user engagement, optimized data rendering performance, and delivered actionable business insights through UI",
      techStack: ["JavaScript", "HTML5", "CSS3", "Data Visualization", "Performance Optimization", "Algorithms", "User Interface Design"],
      image: projectChurn,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    },
    {
      title: "Smart IoT Interface – Real-time Web Application",
      overview: "Built responsive web interface for IoT waste management system with real-time data visualization. Developed efficient front-end architecture handling sensor data streams, achieving 90% accuracy in real-time classification display and user interaction.",
      problem: "Need for real-time, responsive web interface for IoT system with complex data streams",
      role: "UI Engineer focusing on real-time data interfaces and system integration",
      methodology: "Implemented real-time data binding, optimized performance for continuous data streams, applied problem-solving skills for complex system integration",
      results: "Achieved 90% real-time accuracy in data display, built scalable interface architecture, demonstrated strong problem-solving and technical collaboration",
      techStack: ["JavaScript", "HTML5", "CSS3", "Real-time Systems", "IoT Integration", "Performance Optimization", "Problem Solving"],
      image: projectSentiment,
      githubLink: "https://github.com/singhuday26",
      demoLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Featured Projects
          </h2>
          
          <div className={`grid gap-8 transform-gpu transition-all duration-700 ${
            hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {projects.map((project, index) => (
              <OptimizedCard key={index} className="card-project overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Image */}
                  <div className="lg:col-span-1">
                    <div className="relative h-64 lg:h-full min-h-[200px] rounded-lg overflow-hidden transform-gpu">
                      <OptimizedLazyImage
                        src={project.image}
                        alt={`${project.title} - Screenshot showing project interface and features`}
                        className="w-full h-full hover:scale-105 transition-transform duration-300 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.overview}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Problem Statement:</h4>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">My Role:</h4>
                        <p className="text-muted-foreground">{project.role}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Methodology:</h4>
                        <p className="text-muted-foreground">{project.methodology}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Key Results:</h4>
                        <p className="text-muted-foreground font-medium">{project.results}</p>
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button asChild size="sm" className="btn-hero">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <Github className="mr-2 w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                      {project.demoLink && (
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <ExternalLink className="mr-2 w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;