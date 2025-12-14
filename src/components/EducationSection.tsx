import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, Users, Award } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      institution: "Vellore Institute of Technology (VIT-AP University)",
      degree: "B.Tech in Computer Science & Engineering (Data Analytics)",
      duration: "2023-2027",
      location: "Amaravati, AP",
      cgpa: "9.07 / 10.0",
      highlight: true
    },
    {
      institution: "Saharanpur Public School (ISC Board)",
      degree: "Class XII - Science Stream",
      duration: "2022",
      location: "Saharanpur, UP",
      cgpa: "84.8%",
      highlight: false
    },
    {
      institution: "Saharanpur Public School (ICSE Board)",
      degree: "Class X",
      duration: "2020",
      location: "Saharanpur, UP",
      cgpa: "97% (1st Rank in District)",
      highlight: true
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Amazon HackOn (2025)",
      description: "Secured position in top 4% of teams (top 2,000 out of 50,000+), advancing to Round 3",
      category: "Hackathon"
    },
    {
      icon: Award,
      title: "Smart India Hackathon (SIH 2024)",
      description: "Developed a full-stack web application prototype for Ministry of Education problem statement, delivering working product in 36 hours",
      category: "Hackathon"
    },
    {
      icon: Users,
      title: "Microsoft Learn Student Ambassadors - VIT-AP",
      description: "Technical Mentor & Event Coordinator (Aug 2023-2024) - Conducted Python and Data Science workshops for 100+ students",
      category: "Leadership"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">
            Education, Achievements & Community
          </h2>
          
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Academic Background</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className={`card-professional ${edu.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                      <p className="text-lg text-muted-foreground mb-1">{edu.degree}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{edu.duration}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span className={`font-semibold ${edu.highlight ? 'text-primary' : ''}`}>
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Leadership */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Achievements & Leadership</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-professional hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-lg">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold">{achievement.title}</h4>
                        <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;